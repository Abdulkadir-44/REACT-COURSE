import { useMyContext } from "../../context/MyContext"

const SwitchTheme = () => {
    const { theme, setTheme } = useMyContext()
    return (
        <>
            <button className="bg-green-700 px-2 py-1 my-2 text-white rounded-md" onClick={() => setTheme(theme == "dark" ? "ligth" : "dark")}>Temayı değiştir</button>
            <p>Mevcut Tema : {theme}</p>
        </>
    )
}

export default SwitchTheme