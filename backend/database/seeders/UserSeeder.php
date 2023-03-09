<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::insert([
            [
                'name' => 'Administrator',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Decision Maker',
                'email' => 'decisionmaker@gmail.com',
                'password' => Hash::make('password'),
            ],
            [
                'name' => 'Assistant',
                'email' => 'assistant@gmail.com',
                'password' => Hash::make('password'),
            ]
        ]);
    }
}
