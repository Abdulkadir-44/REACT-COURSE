import { useReducer } from 'react'


//eğerki başlangıç değerimiz bir tamsayı veya primitive bir tür olursa bu şekilde return ederiz
const reducer = (state, action) => {
    /* aslında buraya state değerinin kendisi ve action kısmına ise dispatch içinden gönderilen parametre geliyor bu örneğimde dispatch içinden
    type adında bir nesne gönderiyorum dolayısıyla ben burda action kısmında destructing yapabilirim*/
    switch (action.type) {
        case "increment":
            return state += 1
        case "decrement":
            return state -= 1
        default:
            return state;
    }

}

const initalState = { count: 0 };

const objReducer = ({ count }, { type }) => {
    switch (type) {
        case "increment":
            return { count: count + 1 };

        case "decrement":
            return { count: count - 1 };

        default:
            return count
    }
}


const BasicInformation = () => {

    const [state, dispatch] = useReducer(reducer, 0)
    const [obj, setObj] = useReducer(objReducer, initalState)
    
    return (
        <div className="m-5">
            <p>normal state : {state}</p>
            <button className="bg-red-600 mx-2 px-2 py-1 rounded-md text-white" onClick={() => dispatch({ type: "increment" })}>Arttır</button>
            <button className="bg-red-600 mx-2 px-2 py-1 rounded-md text-white" onClick={() => dispatch({ type: "decrement" })}>Azalt</button>

            <p>obje state : {obj.count}</p>
            <button className="bg-green-600 mx-2 px-2 py-1 rounded-md text-white" onClick={() => setObj({ type: "increment" })}>Arttır</button>
            <button className="bg-green-600 mx-2 px-2 py-1 rounded-md text-white" onClick={() => setObj({ type: "decrement" })}>Azalt</button>
        </div>
    )
}

export default BasicInformation