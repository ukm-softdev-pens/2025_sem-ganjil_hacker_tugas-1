import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className="counter-card">
            <p className="count-display">Angka hitungan ke-({count})</p>
            <div className="button-group">
                <div className="counting-btn">
                    <button className="btn increment" onClick={() => setCount(count + 1)}>( + )</button>
                    <button className="btn decrement" onClick={() => setCount(count - 1)}>( - )</button>                        
                    <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
        </div>
    )
}

function App() {
    const [items, setItems] = useState(["Item pertama"]);
    const [newItems, setNewItems] = useState("");

    const handleAddItem = () => {
        if (newItems.trim() === "") {
            return;
        }
        setItems([...items, newItems]);
        setNewItems("");
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddItem();
        }
    };

    const handleRemoveItem = (indexToRemove) => {
        setItems(items.filter((_, index) => index !== indexToRemove));
    };

    const handleRemoveAll = () => {
        setItems([]);
    };

    var hobby = "Tidak ada hobi, hanya ingin jam tidur diperbaiki";

    return (
        <div className="page">
            <div className="left-column">
                <div className="profile-card">
                    <Profile name="Rafi" age="19" hobby={hobby} />
                    <Profile name="Yoga" age="19" hobby="Bermain game" /> 
                </div>
                <Counter />
            </div>
            <div className="item-card">
                <h1>Item List</h1>
                <div className="input-group">
                    <input className="item-input"
                        type="text"
                        value={newItems}
                        onChange={(e) => setNewItems(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Tambah item baru"  />
                    <button className="add-btn" onClick={handleAddItem}>Tambah</button>
                    <button className="remove-all-btn" onClick={handleRemoveAll}>Hapus Semua</button>
                </div>
                <ul>
                    {items.map((item, index) => (
                        <Items 
                            key={index} 
                            text={item} 
                            onRemove={() => handleRemoveItem(index)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );

    function Profile(props) {
        return (
            <div>
                <h1>Halo, {props.name} disini</h1>
                <p><strong>Umur:</strong> {props.age}</p>
                <p><strong>Hobi:</strong> {props.hobby}</p>
            </div>
        );
    }

    function Items(props) {
        return <li>
            {props.text}
            <button className="remove-btn" onClick={props.onRemove}>Hapus</button>
        </li>;
    }
}

export default App