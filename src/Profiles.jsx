import Profile from "./component/Profile.jsx";

export default function Profiles() {
    return (
        <>
            <div className="flex flex-row justify-center items-center min-h-screen bg-purple-200 gap-5">
                <Profile Props={{
                    image: '/shinobu.jpeg',
                    name: 'Dechiviel',
                    title: 'Mister Donut Enthusiast',
                    age: 19,
                    bio: 'An ordinary person who lives in an ordinary country and likes ordinary stuff.'
                }} />

                <Profile Props={{
                    image: '/ononoki.jpeg',
                    name: 'Aiz',
                    title: 'Master of Deadpan',
                    age: "17 - 2 + 8 + 2 - 6",
                    bio: 'Another ordinary person who lives in an ordinary country and likes ordinary stuff.'
                }} />
            </div>
        </>
    );
}
