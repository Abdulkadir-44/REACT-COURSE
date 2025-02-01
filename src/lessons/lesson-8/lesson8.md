## Memoization Nedir?

Memoization, hesaplanmış sonuçları saklayarak tekrar eden hesaplamaları önleyen bir optimizasyon tekniğidir. Bilgisayar bilimi ve yazılım mühendisliğinde, özellikle performans kritik uygulamalarda sıkça kullanılan bir tekniktir.

### Memoization’ın Amacı
Memoization’ın temel amacı, **hesaplama süresini azaltmak ve performansı artırmaktır**. Özellikle, bir fonksiyonun aynı girdilerle tekrar tekrar çağrıldığı durumlarda, önceki hesaplamaların sonucunu saklamak büyük bir avantaj sağlar.

Bu teknik, genellikle **dynamic programming (dinamik programlama)** ve **rekürsif algoritmalar** ile birlikte kullanılır. Aynı hesaplama tekrar yapılmak yerine, önceki sonuç bellekte tutulur ve gerektiğinde doğrudan geri döndürülür.

---

## Memoization Mantığı
Memoization’ın temel çalışma prensibi şu şekildedir:
1. **Girdi kontrol edilir:** Fonksiyon çağrıldığında, verilen girdinin daha önce hesaplanıp hesaplanmadığı kontrol edilir.
2. **Önceden hesaplanmışsa sonuç döndürülür:** Eğer aynı giriş için bir sonuç daha önce hesaplanmışsa, doğrudan saklanan değer döndürülür.
3. **Hesaplanmamışsa işlem yapılır ve saklanır:** Eğer bu giriş için hesaplama yapılmamışsa, gerekli işlem yapılır ve sonuç, ileride kullanılmak üzere saklanır.

Bu yaklaşım özellikle **hesaplaması yoğun işlemlerde** büyük avantaj sağlar çünkü gereksiz işlem yükünü azaltır.

---

## Memoization’ın Avantajları
- **Performansı artırır:** Aynı işlemin tekrar hesaplanmasını önleyerek zaman tasarrufu sağlar.
- **Gereksiz hesaplamaları önler:** Daha az CPU kullanımı ile daha verimli çalışır.
- **Özellikle büyük veri setleri ile çalışırken avantajlıdır:** Büyük boyutlu hesaplamalarda, gereksiz tekrarları önleyerek sistemin daha hızlı yanıt vermesine yardımcı olur.

### Memoization’ın Dezavantajları
- **Bellek kullanımı artabilir:** Hesaplanan değerler saklandığından, fazla bellek tüketebilir.
- **Tüm fonksiyonlar için uygun değildir:** Eğer fonksiyon her çağrıldığında farklı sonuç döndürüyorsa (örneğin, rastgele sayı üretimi veya dış etkilere bağlı işlemler), memoization işe yaramaz.
- **Yan etkili (side effect) fonksiyonlar için uygun değildir:** Eğer bir fonksiyon, dışarıdan bir değişkeni değiştiriyorsa veya bir API çağrısı yapıyorsa, memoization doğru çalışmayabilir.

---

## Memoization Kullanım Alanları
Memoization, çeşitli alanlarda kullanılır:
- **Fibonacci, Faktöriyel gibi rekürsif hesaplamalarda**: Aynı ara sonuçlar tekrar tekrar hesaplanmak yerine saklanır.
- **Web uygulamalarında ve API çağrılarında**: Sık kullanılan veriler cache (önbellek) içinde tutulabilir.
- **Veritabanı sorgularında**: Aynı sorgular tekrar çalıştırılmak yerine cache’ten alınabilir.
- **React gibi frontend kütüphanelerinde**: Özellikle `useMemo` ve `React.memo` gibi tekniklerle gereksiz render işlemleri önlenebilir.

---
## `memo` Fonksiyonu Nedir?

`React.memo` fonksiyonu, bir bileşeni gereksiz render işlemlerinden koruyarak performansı artıran bir yüksek düzenleme (higher-order) bileşenidir. Bir bileşen, aldığı **prop’lar değişmediği sürece yeniden render edilmez**. Böylece, gereksiz tekrar hesaplamalar ve render işlemleri önlenir.

React’te bir state değiştiğinde, o state’i içeren bileşen ve onun alt bileşenleri yeniden render edilir. Ancak her zaman bu gerekli değildir. İşte bu noktada `React.memo` devreye girer.

---

## `memo` Kullanımı Örneği

Aşağıdaki örnekte, `App` bileşeni bir **input** içeren bir state yönetiyor. Kullanıcı inputa her yazı girdiğinde state güncelleniyor ve normalde tüm bileşenler yeniden render ediliyor. Eğer `memo` kullanılmazsa `ExpensiveComponent` de her render işleminde yeniden çalıştırılır. **Ancak memo kullanırsak, `ExpensiveComponent` yalnızca ilk kez render edilir ve prop değişmediği sürece tekrar render olmaz.**

### Kod Örneği: `memo` Kullanılmadan
```jsx
import React, { useState } from 'react';

const ExpensiveComponent = () => {
  console.log('ExpensiveComponent render edildi!');
  return <div></div>;
};

const App = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Bir şeyler yaz..."
      />
      <ExpensiveComponent />
    </div>
  );
};

export default App;
```

### Çıktılar
```
ExpensiveComponent render edildi!
```
**Şimdi inputa her harf yazıldığında bileşen tekrar render edilir:**
```
ExpensiveComponent render edildi!
ExpensiveComponent render edildi!
ExpensiveComponent render edildi!
```

---

## `memo` Kullanarak Performans Optimizasyonu
Şimdi `ExpensiveComponent` bileşenini `React.memo` ile sarmalayalım.

```jsx
import React, { useState } from 'react';

const ExpensiveComponent = React.memo(() => {
  console.log('ExpensiveComponent render edildi!');
  return <div> </div>;
});

const App = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Bir şeyler yaz..."
      />
      <ExpensiveComponent />
    </div>
  );
};

export default App;
```

### Çıktılar
```
ExpensiveComponent render edildi!
```
Şimdi inputa her harf yazıldığında `ExpensiveComponent` tekrar render olmaz:
```
(Yeni giriş yapılmasına rağmen ExpensiveComponent render edilmedi.)
```

---

## `memo` hooku'nun `prop` ile kullanımı

**`memo`**, bir bileşeni sarmalayarak (wrap), bileşenin prop'ları değişmediği sürece yeniden render edilmesini engeller. Ancak, bu optimizasyonun etkili olabilmesi için prop'ların değişiminin doğru bir şekilde kontrol edilmesi gerekir.

Bir bileşen **`memo`** ile sarmalandığında, bu bileşene geçirilen prop'ların değerleri önceki render ile karşılaştırılır. Eğer prop'lar değişmişse, bileşen yeniden render edilir; değişmemişse, render işlemi atlanır.

Eğer özetleyecek olursak,**`memo`** kullanan bir somponentin **`prop`**'u değişirse o component re-render olur.

Kodlarla örnekleyelim : 

```
import React, { memo, useState } from 'react';

const ChildComponent = memo(({ value }) => {
  console.log('ChildComponent rendered');
  return <div>{value}</div>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent value={count} />
    </div>
  );
}
```
Bu örnekte, **`ChildComponent`** **`memo`** ile sarmalanmıştır. Ancak, **`ParentComponent`**'teki **`count`** state'i her değiştiğinde, ChildComponent'e geçirilen **`value`** prop'u da değişir. Bu nedenle, ChildComponent her count değiştiğinde yeniden render edilir. Bu durum, memo kullanılsa bile önlenemez, çünkü prop'un değeri değişmiştir ve bileşen bu prop'u kullanmaktadır.

## Sonuç
- Eğer `React.memo` kullanılmazsa, **her state değişikliğinde bileşen yeniden render edilir**.
- `React.memo` kullanıldığında, **bileşen yalnızca ilk sefer render edilir ve prop’lar değişmedikçe tekrar render olmaz**.
- Özellikle **statik içerikler, liste bileşenleri ve hesaplama maliyeti yüksek olan bileşenler için** `React.memo` kullanmak büyük performans kazancı sağlar.

---

## `useCallback` Nedir?

`useCallback` React Hook'udur ve **bir fonksiyonun referansını koruyarak gereksiz yeniden oluşturulmasını önler**. Eğer bir bileşen her render edildiğinde fonksiyonlar yeniden oluşturuluyorsa, bu performans açısından maliyetli olabilir. İşte bu noktada `useCallback`, belirli bağımlılıklar değişmediği sürece aynı fonksiyon referansını döndürerek optimizasyon sağlar.

### `useCallback` Kullanım Senaryoları
- **`React.memo` ile kullanılarak gereksiz render’ları önlemek**
- **Fonksiyonları bağımlılık olarak kullanan bileşenlere prop olarak geçirmek**
- **Performans kritik bileşenlerde gereksiz hesaplamaları önlemek**

---

## `useCallback` ve `memo` Kullanımı Birlikte

Aşağıdaki örnekte bir input alanı ve bir buton var. Kullanıcı input alanına her harf yazdığında state güncelleniyor. Eğer `useCallback` ve `memo` kullanmazsak, **ExpensiveComponent her input değişiminde yeniden render olur**. `useCallback` kullanarak bu sorunu çözüyoruz.

### `useCallback` Olmadan (Gereksiz Render Ediliyor)

```jsx
import React, { useState } from 'react';

const ExpensiveComponent = ({ handleClick }) => {
  console.log("ExpensiveComponent render edildi!");
  return <button onClick={handleClick}>Tıkla</button>;
};

const App = () => {
  const [text, setText] = useState("");

  const handleClick = () => {
    console.log("Butona tıklandı!");
  };

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

export default App;
```

### Çıktılar
```
ExpensiveComponent render edildi!
ExpensiveComponent render edildi!
ExpensiveComponent render edildi!
```
**Her input değişiminde `ExpensiveComponent` tekrar render oluyor!**

---

### `useCallback` ile Optimize Edilmiş Hali

Şimdi `handleClick` fonksiyonunu `useCallback` ile sarmalayarak, bileşenin gereksiz render edilmesini önlüyoruz.

```jsx
import React, { useState, useCallback } from 'react';

const ExpensiveComponent = React.memo(({ handleClick }) => {
  console.log("ExpensiveComponent render edildi!");
  return <button onClick={handleClick}>Tıkla</button>;
});

const App = () => {
  const [text, setText] = useState("");

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

export default App;
```

### Çıktılar
```
ExpensiveComponent render edildi!
```
Şimdi inputa her harf yazıldığında `ExpensiveComponent` tekrar render **OLMAZ**.

---

## Sonuç
- Eğer `useCallback` kullanılmazsa, **fonksiyon her render'da yeniden oluşturulur** ve prop olarak geçtiğimiz `ExpensiveComponent` **her seferinde yeniden render edilir**.
- `useCallback` kullanarak fonksiyon referansını koruruz, **bu sayede `React.memo` fonksiyonun değişmediğini algılar ve bileşeni gereksiz yere yeniden render etmez**.
- **Performansı artırmak için `useCallback` ve `React.memo` birlikte kullanılmalıdır**.

Bu yapı özellikle **liste elemanları, event handler'lar ve sıkça render olan bileşenlerde** çok işe yarar. 🚀

---


## `useMemo` Nedir?

`useMemo`, **hesaplama maliyeti yüksek olan değerleri saklamak** ve gereksiz hesaplamaların önüne geçmek için kullanılan bir React Hook'udur. Eğer bir bileşen her render olduğunda aynı değeri tekrar hesaplıyorsa, `useMemo` kullanarak bu hesaplamayı önleyebiliriz.

### `useMemo` Kullanım Senaryoları
- **Büyük veri işlemleri** (örneğin, bir listeyi filtrelemek veya sıralamak)
- **Performans kritik hesaplamalar** (örneğin, matematiksel işlemler)
- **Memoization ile gereksiz hesaplamaları önlemek**

---

### `useMemo` Kullanımı Örneği

Aşağıdaki örnekte, bir dizi eleman filtrelenerek yeni bir dizi oluşturuluyor. Eğer `useMemo` kullanılmazsa, **her input değişiminde filtreleme işlemi tekrar yapılır**. `useMemo` ile bu hesaplamayı sadece bağımlılık değiştiğinde yapıyoruz.

#### `useMemo` Olmadan (Gereksiz Hesaplama)
```jsx
import React, { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const items = ["Elma", "Armut", "Muz", "Çilek", "Karpuz"];

  const filteredItems = items.filter((item) => {
    console.log("Filtreleme işlemi çalıştı!");
    return item.toLowerCase().includes(query.toLowerCase());
  });

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

export default App;
```

#### `useMemo` ile Optimize Edilmiş Hali

```jsx
import React, { useState, useMemo } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const items = ["Elma", "Armut", "Muz", "Çilek", "Karpuz"];

  const filteredItems = useMemo(() => {
    console.log("Filtreleme işlemi çalıştı!");
    return items.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

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

export default App;
```

### Çıktılar
```
Filtreleme işlemi çalıştı!
```
Şimdi input değişmedikçe **filtreleme işlemi tekrar çalışmaz** ve performans kazanırız. 🚀

---

## Sonuç
- `useMemo`, **hesaplama gerektiren değerleri optimize etmek** için kullanılır.
- `useCallback`, **fonksiyonların gereksiz referans değişimlerini önlemek** için kullanılır.
- **İkisi de performans optimizasyonları için kullanışlıdır ve doğru senaryolarda kullanılması önemlidir.**

Bir sonraki ders içeriği []()