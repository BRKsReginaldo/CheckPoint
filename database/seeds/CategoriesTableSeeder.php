<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = resolve(\App\Category::class);
        $category->get()->each->delete();
        $categories = collect([
            [
                'name' => 'Visita aos familiares',
                'icon' => 'family'
            ],
            [
                'name' => 'Trabalho',
                'icon' => 'work'
            ],
            [
                'name' => 'Escola',
                'icon' => 'school'
            ],
            [
                'name' => 'Praia',
                'icon' => 'beach'
            ],
        ]);

        $categories->each(function($newCategory) use ($category) {
            $category->create($newCategory);
        });
    }
}
