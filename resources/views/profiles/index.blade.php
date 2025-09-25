<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Profiles</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Poppins', sans-serif; }
    </style>
</head>
<body class="bg-gray-100 min-h-screen p-8">

    {{-- Component Profile --}}
    <div class="max-w-4xl mx-auto">

        <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Percobaan — Profile</h1>

            {{-- Tombol navigasi antar percobaan --}}
            <div class="flex gap-2">
                <a href="{{ url('/profiles') }}" class="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Profiles</a>
                <a href="{{ url('/counter') }}" class="px-3 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">Counter</a>
                <a href="{{ url('/items') }}" class="px-3 py-2 bg-green-400 text-white rounded-md hover:bg-green-500">Items</a>
            </div>
        </div>

        {{-- Form input data baru --}}
        <div class="bg-white shadow-md rounded-lg p-6 mb-8">
            <form action="{{ route('profiles.storeProfiles') }}" method="POST" class="grid grid-cols-1 md:grid-cols-4 gap-4">
                @csrf
                <input type="text" name="name" placeholder="Name" required
                       class="p-2 border rounded-md focus:ring focus:ring-blue-300">

                <input type="number" name="age" placeholder="Age" required
                       class="p-2 border rounded-md focus:ring focus:ring-blue-300">

                <input type="text" name="hobby" placeholder="Hobby" required
                       class="p-2 border rounded-md focus:ring focus:ring-blue-300">

                <button type="submit"
                        class="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Tambah Profile
                </button>
            </form>
        </div>

        {{-- Tampilkan cards --}}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @foreach ($profiles as $p)
                <x-profile :name="$p['name']" :age="$p['age']" :hobby="$p['hobby']" />
            @endforeach
        </div>

        <a href="{{ route('profiles.clear') }}" 
            class="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
        Hapus Semua Profile
        </a>

    </div>

</body>
</html>
