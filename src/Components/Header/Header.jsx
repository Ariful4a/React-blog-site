import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className="flex justify-between items-center p-2 mx-4 border-b-2">
            <h1 className="text-3xl font-black text-red-500">Konwlaedge Cafe</h1>
            <img className="w-12 h-12 rounded-full" src={profile} alt="" />
        </header>
    );
};

export default Header;