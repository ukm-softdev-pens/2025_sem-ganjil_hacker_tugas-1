<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function indexProfiles(Request $request)
    {
    // kalau belum ada data di session, isi dulu pakai dummy
    if (!$request->session()->has('profiles')) {
        $request->session()->put('profiles', [
            ['name' => 'Rizal Maulana Airlangga', 'age' => 18, 'hobby' => 'Coding'],
            ['name' => 'Muhammad Irvan Maulana', 'age' => 21, 'hobby' => 'Membaca'],
        ]);
    }

    // ambil dari session (sudah pasti ada di sini)
    $profiles = $request->session()->get('profiles');

    return view('profiles.index', compact('profiles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function storeProfiles(Request $request)
    {
        $request->validate([
            'name'  => 'required|string',
            'age'   => 'required|integer',
            'hobby' => 'required|string',
        ]);

        // ambil profiles lama dari session
        $profiles = $request->session()->get('profiles', []);

        // tambahkan data baru
        $profiles[] = [
            'name'  => $request->name,
            'age'   => $request->age,
            'hobby' => $request->hobby,
        ];

        // simpan kembali ke session
        $request->session()->put('profiles', $profiles);

        return redirect('/profiles');
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
        // if (isset($this->dummyProfiles[$id])) {
        //     unset($this->dummyProfiles[$id]);
        // }

        // // redirect balik ke index
        // return redirect()->route('profiles.index');
    }

    public function clearProfiles(Request $request)
    {
        // Hapus semua data yang disimpan di session
        $request->session()->forget('profiles');

        // Redirect balik ke halaman index
        return redirect()->route('profiles.indexProfiles');
    }

}
