import { useState } from "react";
import { Link } from "react-router";

export default function Counter()
{
    const [count, setCount] = useState(0);
    return (
        <div className="">
            <div style={{ padding: "20px" }}>
                <h1>{count}</h1>
            </div>
            <button style={{ margin: "20px" }} onClick={() => setCount(count + 1)}>
                    Tambah +
            </button>
            <button onClick={() => setCount((count) => 0)}>
                Reset
            </button>
        </div>
    );
}