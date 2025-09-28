export default function Profile({ Props }) {
    return (
        <div className="w-xs rounded-3xl overflow-hidden shadow-lg bg-white">
            <div className="flex justify-center items-center">
                <img className="aspect-square object-cover w-3xs h-auto rounded-full p-3" src={Props.image} alt="Profile Image" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{Props.name}</div>
                <p className="text-gray-700 text-base">{Props.title}</p>
                <p className="text-gray-700 text-base">Age: {Props.age}</p>
                <p className="text-gray-700 text-base mt-5">{Props.bio}</p>
            </div>
        </div>
    );
}