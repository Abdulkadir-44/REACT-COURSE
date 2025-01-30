import  { useRef } from 'react'

const InputValidation = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        if(inputRef.current.value.length < 5){
            inputRef.current.style.border = "2px solid red"
        }else{
            inputRef.current.style.border = "2px solid green"
        }
    }
    return (
        <div className='m-10'>
            <input ref={inputRef} type="text" className='outline-none' placeholder='En az 5 karakter' />
            <button onClick={handleClick} className='bg-green-500 px-2 py-1 ml-2 rounded-md text-white'>Kontrol et</button>
        </div>
    )
}

export default InputValidation