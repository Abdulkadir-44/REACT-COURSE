import React, { forwardRef, useRef } from 'react'

//ben bir component reflemek istersem
function Input(props, ref) {
    return <input className='border border-1 border-blue mr-2' ref={ref} type="text" {...props} />
}

//ForwardRef ile sarmaladığım componentimi bir değişken içerisine atıyorum ve daha sonra bu değişkeni çağırıyorum ilgili kod satırında
const ForwardedInput = forwardRef(Input)


const ForwardRefComponent = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    }
    return (
        <div className='m-10'>
            <ForwardedInput ref={inputRef} />
            <button onClick={handleClick} className='bg-red-600 px-2 py-1 rounded-md text-white'>Input componentine Focusla</button>
        </div>
    )
}

export default ForwardRefComponent