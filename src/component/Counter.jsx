import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="text-center mt-4">
            <span className="text-xl mx-4">Count: {count}</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl ml-2" onClick={() => setCount(count + 1)}>
                Increase
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl ml-2" onClick={() => setCount(count - 1 >= 0 ? count - 1 : 0)}>
                Decrease
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl ml-2" onClick={() => setCount(0)}>
                Give up?
            </button>
        </div>
    );
}