<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ItemsController extends Controller
{
    /**
     * Display a listing of the items.
     */
    
    public function indexItems(Request $request)
    {
    // cek apakah session sudah ada
    if (!$request->session()->has('items')) {
        $request->session()->put('items', [
            ['name' => 'Buku', 'stok' => 10, 'harga' => 15000],
            ['name' => 'Pensil', 'stok' => 25, 'harga' => 2000],
            ['name' => 'Tas', 'stok' => 5, 'harga' => 120000],
        ]);
    }

    // ambil data dari session
    $items = $request->session()->get('items');

    return view('experiments.items', compact('items'));
    }

    /**
     * Store a newly created item in session.
     */
    public function storeItems(Request $request)
    {
        // Validasi input
        $request->validate([
            'name'  => 'required|string',
            'stok'  => 'required|integer|min:0',
            'harga' => 'required|integer|min:0',
        ]);

        // ambil items lama dari session
        $items = $request->session()->get('items', []);

        // tambahkan item baru
        $items[] = [
            'name'  => $request->name,
            'stok'  => $request->stok,
            'harga' => $request->harga,
        ];

        // simpan kembali ke session
        $request->session()->put('items', $items);

        return redirect('/items');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // // hapus profil berdasarkan index
        // if (isset($this->dummyItems[$id])) {
        //     unset($this->dummyItems[$id]);
        // }

        // // redirect balik ke index
        // return redirect()->route('experiments.items');
    }

    public function clearItems(Request $request)
    {
        // Hapus semua data yang disimpan di session
        $request->session()->forget('items');

        // Redirect balik ke halaman index
        return redirect()->route('items.indexItems');
    }

}
