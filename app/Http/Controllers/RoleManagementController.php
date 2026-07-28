<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RoleManagementController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:manage-roles');
    }

    public function roles()
    {
        return Inertia::render('Settings/Roles', [
            'roles' => Role::with('permissions')->get()->map(fn($role) => [
                'id' => $role->id,
                'name' => $role->name,
                'permissions_count' => $role->permissions->count(),
                'permissions' => $role->permissions->pluck('name'),
                'users_count' => $role->users()->count(),
            ]),
        ]);
    }

    public function storeRole(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:roles,name',
            'permissions' => 'required|array',
            'permissions.*' => 'exists:permissions,name',
        ]);

        $role = Role::create(['name' => $validated['name']]);
        $role->syncPermissions($validated['permissions']);

        return back()->with('success', 'Role berhasil ditambahkan.');
    }

    public function updateRole(Request $request, Role $role)
    {
        // Prevent editing Super Admin role
        if ($role->name === 'Super Admin') {
            return back()->with('error', 'Tidak dapat mengedit role Super Admin.');
        }

        $validated = $request->validate([
            'name' => 'required|string|unique:roles,name,' . $role->id,
            'permissions' => 'required|array',
            'permissions.*' => 'exists:permissions,name',
        ]);

        $role->update(['name' => $validated['name']]);
        $role->syncPermissions($validated['permissions']);

        return back()->with('success', 'Role berhasil diperbarui.');
    }

    public function destroyRole(Role $role)
    {
        if (in_array($role->name, ['Super Admin', 'Ketua'])) {
            return back()->with('error', 'Tidak dapat menghapus role sistem.');
        }

        if ($role->users()->count() > 0) {
            return back()->with('error', 'Tidak dapat menghapus role yang masih digunakan.');
        }

        $role->delete();
        return back()->with('success', 'Role berhasil dihapus.');
    }

    public function permissions()
    {
        return Inertia::render('Settings/Permissions', [
            'permissions' => Permission::all()->groupBy(function($permission) {
                return explode('-', $permission->name)[0] ?? 'general';
            })->map(fn($perms) => $perms->pluck('name')),
        ]);
    }
}