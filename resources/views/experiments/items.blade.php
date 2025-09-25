<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Percobaan Items</title>

    {{-- Tailwind (CDN) --}}
    <script src="https://cdn.tailwindcss.com"></script>
    {{-- Alpine.js (untuk reactive state - kontrol variabel count) --}}
    <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
    {{-- Font Google (CDN) --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Poppins', sans-serif; }
    </style>

</head>
<body class="bg-gray-100 p-8">

    <div class="max-w-4xl mx-auto">

        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Percobaan — Items</h1>

            {{-- Tombol navigasi antar percobaan --}}
            <div class="flex gap-2">
                <a href="{{ url('/profiles') }}" class="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Profiles</a>
                <a href="{{ url('/counter') }}" class="px-3 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">Counter</a>
                <a href="{{ url('/items') }}" class="px-3 py-2 bg-green-400 text-white rounded-md hover:bg-green-500">Items</a>
            </div>
        </div>

        <div class="max-w-lg mx-auto bg-white p-6 rounded shadow">
    
            <!-- Form tambah item -->
            <form action="{{ route('items.storeItems') }}" method="POST" class="mb-6 flex flex-wrap gap-3">
                @csrf
                <input type="text" name="name" placeholder="Nama Barang" required class="border p-2 rounded">
                <input type="number" name="stok" placeholder="Stok" required class="border p-2 rounded w-24">
                <input type="number" name="harga" placeholder="Harga" required class="border p-2 rounded w-32">
                <button type="submit" class="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Tambah Barang
                </button>
            </form>    
            
            <!-- Daftar items -->
            <ul class="space-y-2 mb-7">
            @foreach ($items as $item)
                <x-item :name="$item['name']" :stok="$item['stok']" :harga="$item['harga']" />
            @endforeach
            </ul>

            <a href="{{ route('items.clear') }}" 
                class="px-3 py-2 mt-4 bg-red-500 text-white rounded-md hover:bg-red-600">
            Hapus Semua Item
            </a>
        </div>
    </div>

</body>
</html>
