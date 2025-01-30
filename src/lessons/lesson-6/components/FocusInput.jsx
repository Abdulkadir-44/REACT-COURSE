import {useRef} from 'react'

const FocusInput = () => {
    //değişken oluşturduk
    const inputRef = useRef(null);

    //butona tıklayınca tetiklenecek fonksiyon
    const handleClick = ()=>{
        //atanın DOM elemanına focus işlemi yaptık
        inputRef.current.focus();
    }
  return (
    <div className='m-10'>
        {/* mevcut inputRef değişkenimize bir dom elemanı atadık */}
        <input className='border border-1 border-green-600 mr-3 p-1' ref={inputRef} type="text"/>
        <button className='bg-red-500 px-2 py-1 rounded-md text-white' onClick={handleClick}>Focusla</button>
    </div>
  )
}

export default FocusInput