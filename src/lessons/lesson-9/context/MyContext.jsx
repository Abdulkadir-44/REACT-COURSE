import { createContext, useContext, useState } from "react"

const Context = createContext();

const Provider = ({ children }) => {

    const [theme, setTheme] = useState("dark")
    const [language, setLanguage] = useState("TR")

    const data = {
        theme, setTheme,
        language, setLanguage
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useMyContext = () => useContext(Context)

export default Provider