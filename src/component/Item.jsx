import { useState } from 'react';

export default function Item({ image, name, description, discount, rating, reviewCount, price, cartItemHandler }) {
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        setIsAdded((prev) => !prev);
        cartItemHandler({ image, name, description, discount, rating, reviewCount, price });
    };

    function formatNumber(num) {
        return num.toLocaleString("id-ID");
    }


    return (
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden w-80 shadow-2xl  border border-white/20">
            {/* Product Image */}
            <div className="relative h-60 overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/15 rounded-full"></div>
                    <div className="absolute top-1/2 right-6 w-8 h-8 bg-white/10 rounded-full"></div>
                </div>

                <img className="w-full h-full object-cover object-center" src={image} alt={name} />

                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {discount}% OFF
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {description}
                </p>

                <div className="flex items-center gap-2 mb-5">
                    <div className="flex items-center">
                        <span className="text-yellow-400">⭐</span>
                        <span className="ml-1 text-gray-800 font-semibold">{rating}</span>
                    </div>
                    <span className="text-gray-500 text-sm">({reviewCount} reviews)</span>
                </div>

                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">Rp{formatNumber(price * (1 - discount / 100))}</span>
                        <span className="text-gray-400 line-through">Rp{formatNumber(price)}</span>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleAddToCart}
                        className={`flex-1 py-3 px-4 rounded-2xl font-semibold text-white duration-300 flex items-center justify-center gap-2 shadow-lg ${isAdded
                            ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                            : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
                            }`}
                    >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
}