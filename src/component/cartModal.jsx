import { useState, useEffect } from 'react';

export default function CartModal({ cartItems, onRemoveItem }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [quantities, setQuantities] = useState({});

    const openModal = () => {
        setIsModalOpen(true);
        setIsClosing(false);
    };

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setIsClosing(false);
        }, 300);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    // Initialize quantities for each item
    useEffect(() => {
        const initialQuantities = {};
        cartItems.forEach(item => {
            if (!quantities[item.name]) {
                initialQuantities[item.name] = 1;
            }
        });
        setQuantities(prev => ({ ...prev, ...initialQuantities }));
    }, [cartItems]);

    const updateQuantity = (itemName, newQuantity) => {
        if (newQuantity > 0) {
            setQuantities(prev => ({
                ...prev,
                [itemName]: newQuantity
            }));
        }
    };

    const removeItem = (itemName) => {
        setQuantities(prev => {
            const newQuantities = { ...prev };
            delete newQuantities[itemName];
            return newQuantities;
        });
        
        if (onRemoveItem) {
            onRemoveItem(itemName);
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const quantity = quantities[item.name] || 1;
            const discountedPrice = item.price * (1 - item.discount / 100);
            return total + (discountedPrice * quantity);
        }, 0);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isModalOpen]);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
            {/* Floating Cart Button */}
            <button
                className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center gap-2 hover:scale-105"
                onClick={openModal}
            >
                My Cart ({cartItems.length})
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
                    onClick={handleBackdropClick}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Modal Content */}
                    <div className={`relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] transform transition-all duration-300 ${isClosing ? 'animate-scale-out' : 'animate-scale-in'}`}>
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                Shopping Cart
                            </h2>
                            <button
                                onClick={closeModal}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-110"
                            >
                                X
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 overflow-y-auto max-h-96">
                            {cartItems.length === 0 ? (
                                <div className="text-center py-12">
                                    <h3 className="text-xl font-semibold text-gray-500 mb-2">Cart is Empty</h3>
                                    <p className="text-gray-400">No items in your shopping cart</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {cartItems.map((item, index) => {
                                        const quantity = quantities[item.name] || 1;
                                        const discountedPrice = item.price * (1 - item.discount / 100);
                                        const itemTotal = discountedPrice * quantity;

                                        return (
                                            <div key={index} className="bg-gray-50 rounded-2xl p-4 flex gap-4">
                                                {/* Product Image */}
                                                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex-shrink-0 overflow-hidden">
                                                    {item.image ? (
                                                        <img 
                                                            src={item.image} 
                                                            alt={item.name}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-white text-xs font-semibold">
                                                            No Image
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Product Info */}
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-gray-800 text-sm mb-1 truncate">
                                                        {item.name}
                                                    </h4>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-lg font-bold text-gray-900">
                                                            {formatPrice(discountedPrice)}
                                                        </span>
                                                        {item.discount > 0 && (
                                                            <>
                                                                <span className="text-sm text-gray-400 line-through">
                                                                    {formatPrice(item.price)}
                                                                </span>
                                                                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs font-semibold">
                                                                    -{item.discount}%
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>

                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <button
                                                                onClick={() => updateQuantity(item.name, quantity - 1)}
                                                                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                                disabled={quantity <= 1}
                                                            >
                                                                -
                                                            </button>
                                                            <span className="w-8 text-center font-semibold">
                                                                {quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(item.name, quantity + 1)}
                                                                className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                            >
                                                                +
                                                            </button>
                                                        </div>

                                                        <div className="flex items-center gap-2">
                                                            <span className="font-bold text-purple-600">
                                                                {formatPrice(itemTotal)}
                                                            </span>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-lg font-semibold text-gray-700">Total:</span>
                                    <span className="text-2xl font-bold text-purple-600">
                                        {formatPrice(calculateTotal())}
                                    </span>
                                </div>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={closeModal}
                                        className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-2xl font-semibold hover:bg-gray-300 transition-all duration-300"
                                    >
                                        Continue Shopping
                                    </button>
                                    <button onClick={() => alert("What kind of diabolical checkout system do you expect from a student project?")}  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105" >
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

           
        </div>
    );
}