<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Counter</title>

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
<body class="bg-gray-100 min-h-screen p-8">

    <div class="max-w-4xl mx-auto">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Percobaan — Counter</h1>

            {{-- Tombol navigasi antar percobaan --}}
            <div class="flex gap-2">
                <a href="{{ url('/profiles') }}" class="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Profiles</a>
                <a href="{{ url('/counter') }}" class="px-3 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500">Counter</a>
                <a href="{{ url('/items') }}" class="px-3 py-2 bg-green-400 text-white rounded-md hover:bg-green-500">Items</a>
            </div>
        </div>

        {{-- Komponen Counter --}}
        <div class="mt-6">
            <x-counter />
        </div>
    </div>

</body>
</html>
