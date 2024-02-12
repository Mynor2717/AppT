import Luna from "./Luna";

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">

            <div className="flex justify-between">
                <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">ToD0</h1>
                <button>
                    <Luna className="fill-red-400" />
                </button>
            </div>

        </header>
    )
}

export default Header;