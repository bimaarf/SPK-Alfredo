<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserAssignSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $administrator = Role::where('name', 'administrator')->first();
        $decisionMaker = Role::where('name', 'decision-maker')->first();
        $assistant = Role::where('name', 'assistant')->first();


        //assign theauthor user to author role
        $_admin = User::where('email', 'admin@gmail.com')->first();
        $_admin->attachRole($administrator);
        $_decisionMaker = User::where('email', 'decisionmaker@gmail.com')->first();
        $_decisionMaker->attachRole($decisionMaker);
        $_assistant = User::where('email', 'assistant@gmail.com')->first();
        $_assistant->attachRole($assistant);
    }
}
