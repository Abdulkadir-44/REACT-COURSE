import { useState } from 'react'
import Text from './components/Text';
const Lesson5Component = () => {

    const [show, setShow] = useState(false);


    return (
        <div className='ml-3'>

            <button
                className='bg-green-600 p-2 mt-2 rounded-md text-white'
                onClick={() => setShow(!show)}
            >
                {show ? "Gizle" : "Göster"}
            </button>

            {
                show && <Text/>
            }
        </div>
    )
}

export default Lesson5Component