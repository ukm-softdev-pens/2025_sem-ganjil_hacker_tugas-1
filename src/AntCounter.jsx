import Counter from "./component/Counter.jsx";

export default function AntCounter() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-center text-2xl mb-5 font-thin">Let's count how many ants were captured in this picture!</p>
            <img src="/ant.webp" alt="Ant" className=""/>
            <Counter />
        </div>
    );
}