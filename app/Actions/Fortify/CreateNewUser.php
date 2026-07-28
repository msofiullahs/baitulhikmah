<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    public function create(array $input): User
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:50', 'unique:users'], // <-- Ganti email jadi username
            'email' => ['nullable', 'string', 'email', 'max:255', 'unique:users'], // <-- Email jadi opsional
            'password' => $this->passwordRules(),
        ])->validate();

        return User::create([
            'name' => $input['name'],
            'username' => $input['username'], // <-- Simpan username
            'email' => $input['email'] ?? null, // <-- Simpan email jika ada
            'password' => Hash::make($input['password']),
        ]);
    }
}