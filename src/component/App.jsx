import { useState } from "react";
import Item from "./Item.jsx";
import CartModal from "./cartModal.jsx";

export default function App() {
    const [cartItems, setCartItems] = useState([]);

    const cartItemHandler = (item) => {
        setCartItems((cartItems) => {
            // cek apakah item sudah ada di cart
            const exists = cartItems.some((cartItem) => cartItem.name === item.name);

            if (exists) {
                // kalau ada, hapus item tsb
                return cartItems.filter((cartItem) => cartItem.name !== item.name);
            } else {
                // kalau belum ada, tambahkan
                return [...cartItems, item];
            }
        });
    };



    return (
        <div className="flex flex-row flex-wrap items-center justify-center min-h-screen bg-gradient-to-b from-purple-300 via-pink-300 to-red-300 gap-10 py-5">
            <CartModal cartItems={cartItems} onRemoveItem={cartItemHandler} />

            <Item
                image='/bor.jpg'
                name='ISKU Mesin Bor Lithium Mulitifungsi 12V 1500mAh Battery/Lithium - 12v'
                price={229000}
                discount={3}
                rating={4.8}
                reviewCount={108}
                description='Mesin bor lithium multifungsi dengan baterai 1500mAh.'
                cartItemHandler={cartItemHandler}
            />
            <Item
                image='/iphone.jpeg'
                name='Iphone 100 Pro Max Ultra'
                price={40000000}
                discount={1}
                rating={4.8}
                reviewCount={108}
                description='Iphone 100 Pro Max Ultra dengan chipset bionic A67 Beast Mode, Layar Dynamic Super Amoled X8, dan kamera terbaik (kameranya ada 9 jir).'
                cartItemHandler={cartItemHandler}
            />
            <Item
                image='/sempak.jpeg'
                name='Obral 6 pcs cd celana dalam pria'
                price={50000}
                discount={40}
                rating={4.5}
                reviewCount={12}
                description='Celana dalam pria bahan katun adem dan nyaman dipakai sehari-hari. Tersedia dalam berbagai ukuran dan warna.'
                cartItemHandler={cartItemHandler}
            />
            <Item
                image='/sapi.jpg'
                name='Jual Sapi Betina Super'
                price={30000000}
                discount={8}
                rating={5}
                reviewCount={2}
                description='Sapi betina super siap kawin, sehat, dan produktif. Bekas pemakaian. Minusnya kalau malam kadang berubah jadi cewek anime.'
                cartItemHandler={cartItemHandler}
            />
            <Item 
                image='/rtx5080.jpeg'
                name='NVIDIA GeForce RTX 5080'
                price={25490000}
                discount={10}
                rating={4.9}
                reviewCount={43}
                description='VGA NVIDIA GeForce RTX 5080 dengan performa tertinggi untuk gaming dan desain grafis. Kalau beli ini nanti jadi sigma banget.'
                cartItemHandler={cartItemHandler}
            />
        </div>
    );
}