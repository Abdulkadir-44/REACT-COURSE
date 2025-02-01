import  { useState, memo } from 'react'

//eğer prop geçilirse ExpensiveComponent'e o zaman işler değişir,prop her değiştiğinde memo kullanmana rağmen component re-render olur.
const ExpensiveComponent = memo(() => {
    console.log("ExpensiveComponent render oldu !");
    return (
        <>

        </>
    )
})


const Memo = () => {

    const [text, setText] = useState('');

    return (
        <>
            <ExpensiveComponent />
            <input
                placeholder='Birşeyler yazınız...'
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
            />
        </>
    )
}

export default Memo