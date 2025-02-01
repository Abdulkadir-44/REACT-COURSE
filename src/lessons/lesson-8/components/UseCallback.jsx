import { useState, useCallback, memo } from 'react';


const ExpensiveComponent = memo(({ handleClick }) => {
    console.log("ExpensiveComponent render edildi!");
    return <button onClick={handleClick}>Tıkla</button>;
});


const UseCallback = () => {
    const [text, setText] = useState("");

    //fonksiyonlar non-primitive bir tür olduklarından component her render olduğunda yeniden farklı  bellek adreslerinde oluşturulur,bellek 
    //adresleri farklı olduğundan sanki fonksiyon değişmiş gibi algılar react,eğer ben prop olarak fonksiyon geçersem o zaman hep component
    //re-render olur
    
    const handleClick = useCallback(() => {
        console.log("Butona tıklandı!");
    }, []); // Bağımlılık dizisi boş olduğundan referans hep aynı kalır

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Bir şeyler yaz..."
            />
            <ExpensiveComponent handleClick={handleClick} />
        </div>
    );
};

export default UseCallback