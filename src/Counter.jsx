import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function CounterInterface({ num, modifier }) {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-[400px] h-[200px] border-1 border-black">
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-1/2 text-[50px] flex justify-center items-center">
              {num}
            </div>
            <div className="w-full h-1/2 flex justify-center items-center gap-2">
              <div className="w-full h-full flex justify-center items-center">
                <button
                  onClick={() => modifier(0)}
                  className="outline-2 outline-black"
                >
                  Reset
                </button>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <button
                  onClick={() => modifier(num + 1)}
                  className="outline-2 outline-black"
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return <CounterInterface num={count} modifier={setCount} />;
}
export default Counter;
