# React'ta Component, Props ve State

React'in temel yapı taşlarından olan **Component, Props ve State** kavramları, uygulamalarımızın modüler, yeniden kullanılabilir ve dinamik olmasını sağlar. Bu yazıda bu üç kavramı detaylıca ele alacağız.

---

## 1. Component (Bileşen) Nedir?

### 📌 Tanım
React'te **Component** (Bileşen), bir arayüzün bağımsız ve tekrar kullanılabilir parçasıdır. Her bileşen, HTML, CSS ve JavaScript kodlarını bir araya getirerek kullanıcıya belirli bir arayüz parçasını sunar.

### 🔹 Component Türleri
React'te iki tür bileşen vardır:

1. **Fonksiyonel Bileşenler (Functional Components)** 🏗️
   - JavaScript fonksiyonlarıdır.
   - `return` ifadesi ile JSX döndürür.
   - React Hook'ları ile state yönetebilir.
   
2. **Sınıf Bileşenleri (Class Components)** 📦
   - ES6 sınıfları ile oluşturulur.
   - `render()` metodunu kullanarak JSX döndürür.
   - State ve lifecycle metotlarını kullanabilir.
   
> **Not:** React'in yeni sürümlerinde fonksiyonel bileşenler önerilmektedir çünkü daha performanslı ve daha okunaklıdır.

### 🔹 Component Kullanımı

Basit bir **Fonksiyonel Component** oluşturma örneği:

```jsx
function Selam() {
  return <h1>Merhaba React!</h1>;
}

export default Selam;
```

Bir bileşeni kullanmak için ise şu şekilde yazabiliriz:

```jsx
import Selam from './Selam';

function App() {
  return (
    <div>
      <Selam />
    </div>
  );
}
```

---

## 2. Props (Özellikler) Nedir?

### 📌 Tanım
**Props** (Properties), bir bileşene dışarıdan veri aktarmak için kullanılan bir mekanizmadır. Bileşenler, props aracılığıyla dinamik hale gelir ve farklı içeriklerle yeniden kullanılabilir.

### 🔹 Props Kullanımı

Bir bileşene **props** ile veri göndermek ve almak oldukça basittir. Örnek olarak bir **Mesaj** bileşeni oluşturalım:

```jsx
function Mesaj(props) {
  return <h1>Merhaba, {props.isim}!</h1>;
}
```

Bu bileşeni **App.js** içinde şu şekilde kullanabiliriz:

```jsx
function App() {
  return (
    <div>
      <Mesaj isim="Ahmet" />
      <Mesaj isim="Zeynep" />
    </div>
  );
}
```

**Çıktı:**
```
Merhaba, Ahmet!
Merhaba, Zeynep!
```

### 🔹 Props'un Önemi
- **Bileşenler arasında veri aktarımı sağlar.**
- **Bileşenleri dinamik hale getirir.**
- **Fonksiyonel bileşenlerde kullanımı çok kolaydır.**

### 🛑 Props'un Sınırlamaları
- Props **salt okunurdur** (immutable). Yani, bir bileşen içerisinde gelen props değerini değiştiremeyiz.
 
Salt Okunurluk (Immutability) Ne Anlama Gelir?
Salt okunurluk, bir değerin oluşturulduktan sonra değiştirilememesi anlamına gelir. React'ta props'lar salt okunurdur, yani bir bileşen kendi props'larını doğrudan değiştiremez. Bu, verinin tek yönlü akışını sağlar ve uygulamanın durumunun daha kolay takip edilmesine yardımcı olur.

### 🛑 Neden Props'lar Salt Okunurdur?

**Öngörülebilirlik:** Props'ların değiştirilememesi, bir bileşenin davranışının ve çıktısının tahmin edilebilir olmasını sağlar. Bileşen, her zaman aynı props değerleriyle aynı sonucu üretir. Bu, hataları ayıklamayı ve uygulamanın davranışını anlamayı kolaylaştırır.

**Performans:** React, props'lardaki değişiklikleri takip ederek gereksiz yeniden render'ları engeller. Props'lar değiştirilemediği için, React bir bileşenin ne zaman yeniden render edilmesi gerektiğini daha kolay belirleyebilir ve performansı optimize edebilir.

**Tek Yönlü Veri Akışı:** React'ta veri akışı tek yönlüdür. Veri, yukarıdan aşağıya doğru (ebeveyn bileşenden alt bileşenlere) akar. Props'ların salt okunur olması, bu tek yönlü akışı korur ve veri değişikliklerinin kaynağını takip etmeyi kolaylaştırır.

### 🛑Props'ları Değiştirmeye Çalışırsak Ne Olur?

React, props'ları doğrudan değiştirmeye çalışırsanız herhangi bir uyarı vermeyebilir.Ancak bu durum uygulamanın davranışını beklenmedik şekillerde etkileyebilir.

---

## 3. State (Durum) Nedir?

### 📌 Tanım
**State**, bir bileşenin anlık verisini saklayan ve bileşenin durum değişikliklerini yönetmesine olanak sağlayan bir nesnedir. **Props'tan farklı olarak, state bileşen içinde değiştirilebilir.**

### 🔹 State Kullanımı
State yönetimi için **useState** hook'unu kullanırız:

```jsx
import { useState } from 'react';

function Sayac() {
  const [sayi, setSayi] = useState(0);
    
    function Increase(){
        setSayi(sayi + 1);    
    }
  return (
    <div>
      <p>Sayac: {sayi}</p>
      <button onClick={Increase}>+1</button>
    </div>
  );
}
```

**Kod Açıklaması:**
1. `useState(0)`, **sayi** adlı state değişkenini oluşturur ve başlangıç değerini `0` yapar.
2. **setSayi()** fonksiyonu state değerini güncellemek için kullanılır.
3. **onClick olayında**, butona tıklanınca **Increase** fonksiyonu tetiklenir ve **`sayi`** değeri bir arttırılır.

**Çıktı:**
```
Sayac: 0
[+1 Butonuna Basınca]
Sayac: 1
```
İsterseniz burda kullandığımız useState hookuna daha detaylı bakalım

# useState Hook'u: React'te Durum Yönetimi

React'te **state (durum)** yönetimi, bir bileşenin zaman içinde değişebilen verileri saklamasını sağlar. React'in temel felsefesine göre, UI (Kullanıcı Arayüzü) veriye bağımlıdır; yani veri değiştikçe UI da güncellenmelidir. **useState Hook'u**, fonksiyon bileşenlerinde durum (state) yönetimi yapmamıza olanak tanır.

---

## useState Nedir?

React'te state yönetimi genellikle **class component** yapılarında `this.state` ile yapılırken, **function component** içinde `useState` kullanılır. **useState, bir bileşenin state'ini oluşturmak ve güncellemek için kullanılan bir Hook'tur.**

**useState'in Kullanımı:**
```jsx
import React, { useState } from 'react';

function Sayac() {
  const [count, setCount] = useState(0); // count başlangıçta 0

  return (
    <div>
      <p>Sayac: {count}</p>
      <button onClick={() => setCount(count + 1)}>Artır</button>
    </div>
  );
}

export default Sayac;
```

---

## useState’in Temel Kullanımı

### 1. **Başlangıç Değeri (Initial State) Belirleme**
useState'e argüman olarak verilen değer, **başlangıç state değeridir**.
```jsx
const [age, setAge] = useState(25); // Başlangıç değeri 25
const [isVisible, setIsVisible] = useState(true); // Boolean başlangıç değeri
```

### 2. **State Güncelleme**
State güncellemek için `setState` fonksiyonunu kullanırız. Bu fonksiyon çağrıldığında bileşen yeniden render edilir.
```jsx
setCount(count + 1); // count değerini 1 artır
setIsVisible(false); // isVisible değerini false yap
```

### 3. **Fonksiyonel Güncellemeler (Functional Updates)**
Eğer yeni state, bir önceki state değerine bağlıysa **callback fonksiyonu** kullanmak en iyi yöntemdir.
```jsx
setCount(prevCount => prevCount + 1);
```
Bu yöntem, **React'in asenkron state güncellemelerini doğru şekilde işleyebilmesini sağlar.**

---

## useState Kullanırken Dikkat Edilmesi Gerekenler

### 1. **State Güncellemeleri Asenkron Çalışır**
React'te `useState` güncellemeleri hemen gerçekleşmez. Örneğin:
```jsx
setCount(count + 1);
setCount(count + 1);
```
Bu kod çalıştığında `count` yalnızca **1 artar**, çünkü React eski state değerini referans alır. Bunun yerine fonksiyonel güncelleme kullanmalısınız:
```jsx
setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1);
```

### 2. **useState ile Nesne ve Dizi Kullanımı**
Eğer state olarak bir **nesne** veya **dizi** kullanıyorsanız, **spread operatörünü** kullanarak değişiklik yapmalısınız. Çünkü **React state’i değiştirmek yerine yenisini oluşturmayı tercih eder.**

#### Nesne İçeren State Kullanımı:
```jsx
const [user, setUser] = useState({ name: "Ali", age: 25 });

setUser(prevUser => ({ ...prevUser, age: 26 })); // Yalnızca age güncellenir, name korunur
```

#### Dizi İçeren State Kullanımı:
```jsx
const [items, setItems] = useState(["Elma", "Armut"]);

setItems(prevItems => [...prevItems, "Muz"]); // Yeni eleman ekleme
```

### 3. **State Değişimleri Bileşeni Yeniden Render Eder**
Bir state değiştiğinde, ilgili bileşen **yeniden render edilir**. Ancak değişiklik aynı değeri içeriyorsa, React **unnecessary render (gereksiz render)** yapmaz.
```jsx
setCount(5); // Eğer count zaten 5 ise, bileşen tekrar render edilmez
```

---

## useState Kullanım Senaryoları

### 1. **Form Input Değerlerini Yönetmek**
```jsx
function Form() {
  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

### 2. **Toggle (Aç/Kapat) Butonu**
```jsx
function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <button onClick={() => setIsVisible(prev => !prev)}>
      {isVisible ? "Gizle" : "Göster"}
    </button>
  );
}
```

### 3. **Sayaç (Counter) Uygulaması**
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Sayac: {count}</p>
      <button onClick={() => setCount(count + 1)}>Artır</button>
      <button onClick={() => setCount(0)}>Sıfırla</button>
    </div>
  );
}
```

---

## useState ile İlgili Sıkça Sorulan Sorular (FAQ)

### **1. useState ile birden fazla state oluşturabilir miyim?**
Evet, bir bileşen içinde birden fazla `useState` kullanılabilir.
```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(25);
```

### **2. useState’i bileşen dışında tanımlayabilir miyim?**
Hayır, `useState` yalnızca **React bileşenleri içinde** kullanılmalıdır. Aksi takdirde hata alırsınız.
```jsx
function App() {
  const [data, setData] = useState(""); // ✔ Geçerli
}

const [data, setData] = useState(""); // ❌ HATA
```

### **3. useState içerisine fonksiyon verebilir miyim?**
Evet, başlangıç değeri bir **fonksiyon** dönebilir.
```jsx
const [value, setValue] = useState(() => hesaplaBaslangicDegeri());
```
Bu, başlangıç değerini yalnızca **ilk render sırasında** hesaplamak için kullanılır.

---

## Sonuç 🎯
- `useState`, React'te bileşen içinde **state yönetimi** yapmamızı sağlar.
- **State değişimleri bileşeni yeniden render eder.**
- **State değişimleri asenkron çalışır.**
- **Fonksiyonel güncelleme**, eski state’e dayalı güncellemelerde daha güvenlidir.
- **Nesne ve dizi kullanırken spread operatörü** ile güncelleme yapılmalıdır.

`useState`, React'in en temel ve en sık kullanılan Hook'larından biridir. **Bu Hook'u etkili bir şekilde kullanmak, React uygulamalarınızı daha verimli ve kolay yönetilebilir hale getirecektir!** 🚀





---

### 🔹 State ve Props Arasındaki Farklar
| Özellik | Props | State |
|---------|-------|-------|
| Tanım | Bir bileşene dışarıdan aktarılan verilerdir. | Bileşenin kendi içindeki değişkenlerdir. |
| Değiştirilebilirlik | Değiştirilemez (immutable). | Değiştirilebilir (mutable). |
| Kullanım Yeri | Bileşenler arası veri iletiminde kullanılır. | Bileşenin iç durumunu yönetmek için kullanılır. |

### 🛠 Props ve State Birlikte Nasıl Kullanılır?
Bazı durumlarda, bir bileşenin state değerini başka bir bileşene props olarak gönderebiliriz. Örnek:

```jsx
function App() {
  const [mesaj, setMesaj] = useState("Merhaba!");

  return <MesajGoster mesaj={mesaj} />;
}

function MesajGoster(props) {
  return <h1>{props.mesaj}</h1>;
}
```

Burada `mesaj` state değişkeni, `MesajGoster` bileşenine **props** olarak aktarılıyor.

---

## Sonuç
- **Component'ler**, React'in yapı taşlarıdır ve UI'yi modüler hale getirir.
- **Props**, bileşenler arasında veri iletmek için kullanılır ve **değiştirilemez**.
- **State**, bileşenin kendi iç verisini saklar ve **değiştirilebilir**.
- **useState** , componentin state değerini yönetmemizi sağlar.
- **Props ve State** birlikte kullanılarak dinamik ve interaktif bileşenler oluşturulabilir.

Bu kavramları anladıktan sonra artık React'te bileşenler arası veri akışı ve durum yönetimi hakkında daha güçlü bir bilgiye sahip olacaksınız! 🚀

