<div x-data="{ count: 0 }" class="bg-white shadow rounded-lg p-6 w-full max-w-sm mx-auto">
    <h2 class="text-xl font-semibold mb-4 text-gray-800">Counter</h2>

    <div class="flex items-center justify-center mb-4">
        <div class="text-4xl font-bold text-gray-900" x-text="count">0</div>
    </div>

    <div class="flex gap-3 justify-center">
        <!-- tambah -->
        <button
            @click="count++"
            class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
            + Tambah
        </button>

        <!-- reset -->
        <button
            @click="count = 0"
            class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
            Reset (0)
        </button>
    </div>
</div>
