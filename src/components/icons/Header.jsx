import { useEffect, useState } from "react";
import Luna from "./Luna";
import IconSun from "./iconSun";

const inicialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {

    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        /* Para manipular cualquier elementos fuera de la parte de donde vive react 
        O sea el div root se puede interactuar dentro del Dome del verdadero DOM 6y no el 
        virtual dom de react se puede interactuar de esta manera */ 

    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">

            <div className="flex justify-between">
                <h1 className="uppercase text-white text-2xl font-semibold tracking-[0.3em]">ToD0</h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {
                        darkMode ? <IconSun /> : <Luna />
                    }
                </button>
            </div>

        </header>
    )
}

export default Header;


// para manipular el dom de react donde vive react se una UseRef 

// este para ser especifico se manipula dentro con el Current y luego normal Classlist ADD o lo que sea