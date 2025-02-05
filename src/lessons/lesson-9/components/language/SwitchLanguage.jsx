import { useMyContext } from "../../context/MyContext"

const SwitchLanguage = () => {
    const { setLanguage, language } = useMyContext()
    return (
        <>
            <button className="bg-red-700 px-2 py-1 my-3 rounded-md text-white" onClick={() => setLanguage(language == "TR" ? "US" : "TR")}>Dili değiştir</button>
            <p>Mevcut Dil : {language}</p>
        </>
    )
}

export default SwitchLanguage