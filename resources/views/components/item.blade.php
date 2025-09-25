@props(['name', 'stok', 'harga'])

<div class="p-4 mb-4 border rounded shadow-sm flex justify-between items-center bg-white">
    <p><strong>Name:</strong> {{ $name }}</p>
    <p><strong>Stok:</strong> {{ $stok }}</p>
    <p><strong>Harga:</strong> Rp {{ number_format($harga, 0, ',', '.') }}</p>
</div>