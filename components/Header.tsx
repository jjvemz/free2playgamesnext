import Image from "next/image";

/*interface HeaderProps{
    isDarkTheme: boolean
    setIsDarkTheme: (value: boolean) => void
}*/

export function Header (){

    
//export function Header ({isDarkTheme, setIsDarkTheme}: HeaderProps)
    {/*const handleChangeTheme =() =>{
        setIsDarkTheme(!isDarkTheme);
    }*/}

    return(
        <>
        <nav>
            <div className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
                <h1>F2P Games project</h1>
            </div>
        </nav>
        </>
    )
}