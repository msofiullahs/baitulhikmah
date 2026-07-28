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
    public function roles()
    {
        // Check permission inline
        if (!auth()->user()->can('manage-roles')) {
            abort(403);
        }
        
        return Inertia::render('Settings/Roles', [
            'roles' => Role::with('permissions')->get()->map(fn($role) => [
                'id' => $role->id,
                'name' => $role->name,
                'display_name' => $role->display_name ?? $role->name,
                'description' => $role->description ?? null,
                'permissions_count' => $role->permissions->count(),
                'permissions' => $role->permissions->map(fn($p) => [
                    'id' => $p->id,
                    'name' => $p->name,
                    'display_name' => $p->display_name ?? $p->name,
                ]),
                'users_count' => $role->users()->count(),
            ]),
            'permissions' => Permission::all()->map(fn($p) => [
                'id' => $p->id,
                'name' => $p->name,
                'display_name' => $p->display_name ?? $p->name,
                'description' => $p->description ?? null,
            ]),
        ]);
    }

    public function storeRole(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:roles,name',
            'display_name' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $role = Role::create(['name' => $validated['name']]);
        
        // Update display_name and description if provided
        if (isset($validated['display_name'])) {
            $role->display_name = $validated['display_name'];
        }
        if (isset($validated['description'])) {
            $role->description = $validated['description'];
        }
        $role->save();

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
            'display_name' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $role->update(['name' => $validated['name']]);
        
        if (isset($validated['display_name'])) {
            $role->display_name = $validated['display_name'];
        }
        if (isset($validated['description'])) {
            $role->description = $validated['description'];
        }
        $role->save();

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

    public function cloneRole(Role $role)
    {
        $newRole = Role::create(['name' => $role->name . ' (Copy)']);
        $newRole->syncPermissions($role->permissions);
        
        return back()->with('success', 'Role berhasil di-clone.');
    }

    public function addPermission(Request $request, Role $role)
    {
        $validated = $request->validate([
            'permission_id' => 'required|exists:permissions,id',
        ]);

        $permission = Permission::findOrFail($validated['permission_id']);
        $role->givePermissionTo($permission);

        return back()->with('success', 'Permission berhasil ditambahkan.');
    }

    public function removePermission(Role $role, Permission $permission)
    {
        $role->revokePermissionTo($permission);

        return back()->with('success', 'Permission berhasil dihapus.');
    }

    public function permissions()
    {
        return Inertia::render('Settings/Permissions', [
            'permissions' => Permission::all()->map(fn($p) => [
                'id' => $p->id,
                'name' => $p->name,
                'display_name' => $p->display_name ?? $p->name,
                'description' => $p->description ?? null,
            ]),
        ]);
    }

    public function storePermission(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:permissions,name',
            'display_name' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $permission = Permission::create(['name' => $validated['name']]);
        
        if (isset($validated['display_name'])) {
            $permission->display_name = $validated['display_name'];
        }
        if (isset($validated['description'])) {
            $permission->description = $validated['description'];
        }
        $permission->save();

        return back()->with('success', 'Permission berhasil ditambahkan.');
    }

    public function updatePermission(Request $request, Permission $permission)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:permissions,name,' . $permission->id,
            'display_name' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        $permission->update(['name' => $validated['name']]);
        
        if (isset($validated['display_name'])) {
            $permission->display_name = $validated['display_name'];
        }
        if (isset($validated['description'])) {
            $permission->description = $validated['description'];
        }

        return back()->with('success', 'Permission berhasil diperbarui.');
    }

    public function destroyPermission(Permission $permission)
    {
        $permission->delete();
        return back()->with('success', 'Permission berhasil dihapus.');
    }
}