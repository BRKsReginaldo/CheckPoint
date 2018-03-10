<?php

use Illuminate\Database\Seeder;

class ItensTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $item = resolve(\App\Item::class);
        $item->get()->each->delete();

        $itens = collect([
            [
                'name' => 'Carregador de celular',
                'general' => true
            ],
            [
                'name' => 'Escova de dentes',
                'general' => true
            ],
            [
                'name' => 'Desodorante',
                'general' => true
            ],
            [
                'name' => 'Roupa íntima',
                'general' => true
            ],
        ]);

        $itens->each(function($newItem) use ($item) {
           $item->create($newItem);
        });
    }
}
