import  { useState } from 'react'
import { useEffect } from 'react'

const Text = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Parametresiz useEffect");

        return () => {
            console.log("Parametresiz useEffect : Text componenti öldü");

        }
    })

    useEffect(() => {
        console.log("Boş bir diziye sahip bir useEffect");

        return () => {
            console.log("Boş bir diziye sahip bir useEffect : Text componenti öldü");

        }
    }, [])

    useEffect(() => {
        console.log("count parametresine sahip bir useEffect");

        return () => {
            console.log("count parametresine sahip bir useEffect : Text componenti öldü");

        }
    }, [count])

    return (
        <>
            <p>count : {count}</p>

            <button
                className='bg-red-600 mt-2 text-white px-2 py-1 rounded-md'
                onClick={() => setCount(count + 1)}
            >
                Arttır
            </button>
        </>
    )
}

export default Text