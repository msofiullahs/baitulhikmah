<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'username' => 'adminmbh',
            'email' => 'superadmin@baitulhikmahkebonsari.com',
            'password' => bcrypt('T3knologi@123'),
        ]);
    }
}
