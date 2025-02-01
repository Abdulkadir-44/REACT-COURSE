import { useState, useMemo } from "react";

const UseMemo = () => {
    const [query, setQuery] = useState("");
    const items = ["Elma", "Armut", "Muz", "Çilek", "Karpuz"];


    /*
    Eğer useMemo kullanmazsam items'ın her bir değeri için filtreleme işlemi yapılacak ve her defasında filteredItems tetiklenecek,eğer kullanırsam
    bu problemin önüne geçmiş oluyorum
    */
    const filteredItems = useMemo(() => {
        console.log("Filtreleme işlemi çalıştı!");
        return items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
    }, [query]);


    /* const filteredItems = items.filter((item) => {
         console.log("Filtreleme işlemi çalıştı!");
         return item.toLowerCase().includes(query.toLowerCase());
     });*/

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ara..."
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default UseMemo;