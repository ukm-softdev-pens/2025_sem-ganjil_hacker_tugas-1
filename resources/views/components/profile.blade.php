@props(['name', 'age', 'hobby'])

<div class="p-4 mb-4 border rounded shadow-sm bg-white">
    <p><strong>Name:</strong> {{ $name }}</p>
    <p><strong>Age:</strong> {{ $age }} tahun</p>
    <p><strong>Hobby:</strong> {{ $hobby }}</p>
</div>
