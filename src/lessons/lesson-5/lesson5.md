# Component Lifecycle Nedir ? 🚀

📌 Giriş

React'te her bileşenin bir yaşam döngüsü vardır. Bir bileşen oluşturulur (mounting), güncellenir (updating) ve en sonunda kaldırılır (unmounting). React, bu aşamaları yönetmek için belirli metotlar ve hook'lar sağlar.

Bunu bir insan hayatına benzetebiliriz:

**Doğum (Mounting):** Bileşen oluşturulur ve ekrana ilk kez render edilir.

**Yaşam (Updating):** Kullanıcı etkileşimleri veya veri değişiklikleri bileşeni günceller.

**Ölüm (Unmounting):** Bileşen artık gerekli değilse kaldırılır.

Şimdi, bu aşamaları daha detaylı inceleyelim ama bu konuyu anlamak için öncelikle **`useEffect`** hookunu öğrenmemiz gerekli 


## 📌  useEffect nedir ?

**`useEffect`**, React fonksiyonel bileşenlerinde yan etkileri (side effects) yönetmek için kullanılan bir hook'tur. Yan etkiler, bileşenin render'ı ile doğrudan ilişkili olmayan ancak dış sistemlerle etkileşime giren işlemleri ifade eder. Örneğin, **veri çekme**, **DOM manipülasyonu**, **event listener ekleme** veya **zamanlayıcıları yönetme** gibi işlemler useEffect ile yapılabilir.

Bu hook, bileşenin render edilmesinden sonra çalışır ve bileşenin yaşam döngüsüyle ilgili çeşitli işlemleri gerçekleştirmenize olanak tanır. useEffect sayesinde, side-effectler bileşenlerin render'ı sırasında veya sonrasında güvenli bir şekilde işlenebilir.

**`useEffect`** şu şekilde tanımlanır :

```
useEffect(() => {
  // Side effect code here
}, [dependencyArray]);

```

**Parametreler:**

**1- Callback Fonksiyonu (First Parameter):** Bu, side-effect işlemlerini gerçekleştirdiğiniz fonksiyondur. Bu fonksiyon render sonrasında çalıştırılacaktır.

**2- Dependency Array (Second Parameter):** Bu, hangi verilerin değişmesi durumunda useEffect'in yeniden çalışması gerektiğini belirtir. Eğer boş bir array ([]) sağlanırsa, useEffect sadece bileşen ilk render'ında çalışır.

**Çalışma Mantığı:**

**1- Render Sonrası Çalışma:** **`useEffect`** her render'dan sonra çalışır. React, bileşeni render ettikten sonra side-effect işlemlerini gerçekleştirir.

**Bağımlılık Array'inin Kullanımı:** Eğer bağımlılık array'i boş bırakılırsa ([]), **`useEffect`** sadece bileşen ilk render'ında çalışır. Eğer array'e değerler eklenirse, useEffect yalnızca bu değerlerin değiştiği durumlarda yeniden çalışır.

**Temizlik (Cleanup):** **`useEffect`** içinde döndürülen bir fonksiyon, bileşen unmount olduğunda veya bağımlılıklar değiştiğinde çağrılır. Bu, side-effectlerinizi temizlemenize olanak tanır.

Temizlik kısmını detaylandıralım

### Temizlik (Cleanup)

**`useEffect`** içinde temizlik yapmak, bir yan etki tamamlandığında veya bileşen unmount olduğunda yapılması gereken temizleme işlemlerini gerçekleştirmek için kullanılır. Örneğin, bir event listener eklediyseniz, bileşen unmount olduğunda bu listener'ı kaldırmanız gerekir. Temizlik fonksiyonu, useEffect'in içinde geri döndürülür.

```
useEffect(() => {
  // Side effect
  const timer = setInterval(() => {
    console.log('Timer running');
  }, 1000);

  // Cleanup
  return () => {
    clearInterval(timer); // Temizlik işlemi
  };
}, []); // Bu effect yalnızca bileşen mount olduğunda ve unmount olduğunda çalışır.

```
**`useEffect`** ne zaman kaldırılırsa, cleanup fonksiyonu o zaman çalışır. Yani, **`useEffect`**'in yeniden tetiklenmesi, mevcut **`useEffect`**'in önce temizlenip ardından tekrar çalıştırılması anlamına gelir. Bu durumda, önceki **`useEffect`** kaldırıldığı için cleanup fonksiyonu devreye girer ve gerekli temizleme işlemlerini gerçekleştirir.

### 📌  `useEffect Parametreleri (Dependency Array)` 

**`useEffect`**, ikinci parametre olarak bir bağımlılık dizisi (**`dependency array`**) alabilir. Bu parametre, useEffect'in ne zaman çalışacağını kontrol eder. Kullanımına bağlı olarak farklı davranışlar gösterir.Biz dört farklı senaryo için incleyelim : 

#### 1. Boş Parametre (useEffect(() => {...}))

Hiçbir bağımlılık verilmezse, **`useEffect`** , her render (yeniden render) sonrası çalışır.

🔹 **Özellikler:**

- Bileşen her render edildiğinde (örneğin, state değiştiğinde) çalışır.

- Sayfanın performansını düşürebilir çünkü sürekli tetiklenir.

📌 **Örnek:**

```
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect çalıştı!'); // Her render sonrası çalışır
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
}

```
🔹 **Sonuç :**

- Sayfa her render edildiğinde (count değiştiğinde bile) **`useEffect`** çalışır.

- Çok sık çalışacağı için gereksiz tekrarlar oluşabilir.


### 📌 2. Boş Bir Dizi (useEffect(() => {...}, []))

Bağımlılık dizisi boş ([]) bırakılırsa, **`useEffect`** yalnızca bileşen ilk kez render edildiğinde (mount olduğunda) çalışır ve bir daha çalışmaz.

🔹 **Özellikler:**

- Bileşen ekranda ilk kez göründüğünde çalışır.

- State veya prop değişikliklerinden etkilenmez.

📌 **Örnek:**

```
useEffect(() => {
  console.log('Bileşen yüklendi!');
}, []); // Sadece ilk render'da çalışır
```

### 3. Bir Değişken Bağımlılık Olarak Verildi (useEffect(() => {...}, [state]))

Bağımlılık dizisine bir değişken (state veya prop) eklenirse, yalnızca bu değişken değiştiğinde **`useEffect`** tekrar çalışır.

🔹 **Özellikler:**

- İlk render’da çalışır.

- **Sadece bağımlılık** olarak verilen değişken değiştiğinde yeniden çalışır.

📌 **Örnek:**

```
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count değeri değişti: ${count}`);
  }, [count]); // Sadece count değiştiğinde çalışır

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
}
```

🔹 **Sonuç:**

- İlk render’da çalışır.

- **`count`** değiştiğinde **`useEffect`** tekrar çalışır.

- **`count`** dışındaki değişiklikler **`useEffect'i`** tetiklemez.


### 4. Birden Fazla Değişken Bağımlılık Olarak Verildi (useEffect(() => {...}, [var1, var2]))

Bağımlılık dizisine birden fazla değişken eklenirse, herhangi biri değiştiğinde **`useEffect`** tekrar çalışır.

🔹 **Özellikler:**

Tüm bağımlılıklar izlendiği için içlerinden biri değişirse useEffect tetiklenir.

📌 **Örnek:**

```
import { useState, useEffect } from 'react';

function UserInfo() {
  const [name, setName] = useState('Ali');
  const [age, setAge] = useState(25);

  useEffect(() => {
    console.log(`İsim veya yaş değişti: ${name}, ${age}`);
  }, [name, age]); // name veya age değişirse çalışır

  return (
    <div>
      <p>İsim: {name}</p>
      <p>Yaş: {age}</p>
      <button onClick={() => setName('Mehmet')}>İsmi Değiştir</button>
      <button onClick={() => setAge(age + 1)}>Yaşı Arttır</button>
    </div>
  );
}

```
🔹 **Sonuç:**

- İlk render’da çalışır.

- **`name`** veya **`age`** değiştiğinde useEffect tekrar çalışır.
 

# Kapanış 🎯

Sonuç olarak, **`useEffect`** hook'unun çalışma mantığını derinlemesine inceledik ve özellikle cleanup fonksiyonlarının nasıl ve ne zaman devreye girdiğini öğrendik.

React bileşenlerinin yaşam döngüsünü anlamak, veri çekme, DOM manipülasyonu ve yan etkileri yönetme gibi konularda daha bilinçli kod yazmamızı sağlar. Cleanup fonksiyonları sayesinde bellek sızıntılarını önleyebilir, gereksiz işlemleri temizleyebilir ve uygulamamızı daha verimli hale getirebiliriz.

Artık useEffect'i profesyonel şekilde kullanabilir, hangi bağımlılık dizisinin nasıl bir etkisi olacağını öngörebilir ve kodunuzu daha optimize hale getirebilirsiniz. 🎯 🚀

Böylece, eğitimin bu bölümünü tamamladık! Bir sonraki adımda daha ileri seviyede React konularına dalmaya hazırız. Harika iş çıkardın! 👏🔥

Sonraki ders içeriği [React userRef ve forwardRef](../lesson-6/lesson6.md)