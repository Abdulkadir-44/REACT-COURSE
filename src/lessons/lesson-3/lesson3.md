# React'in Temel Konseptleri

React, modern web uygulamaları geliştirmek için kullanılan bir JavaScript kütüphanesidir. Sayfa içeriğini hızlı ve verimli bir şekilde güncellemek için sanal DOM (Virtual DOM) kullanır. React'in temelini anlamak, daha karmaşık yapıları öğrenmeden önce oldukça önemlidir. Bu bölümde React'in temel konseptlerini ele alacağız ve her birini detaylıca açıklayacağız.

1. **Declarative (Bildirime dayalı) Yapı**

2. **Component (Bileşen) Yapısı**

3. **JSX (Javascript XML) Yapısı**

4. **Virtual DOM (Sanal DOM)**

5. **Props (Özellikler)**

6. **State (Durum) Yönetimi**

7. **Event Handling (Olay Yönetimi)**


## 1. Declarative (Bildirime Dayalı) Yapı
React, "nasıl" yapılacağını söylemek yerine "ne" yapılacağını belirtmemizi sağlayan bir bildirime dayalı (declarative) yapıya sahiptir. Geleneksel JavaScript ile bir butonun rengini değiştirmek için adım adım DOM elementine erişmemiz gerekirken, React'te sadece **durumu** değiştiririz ve React gerisini halleder.

### Geleneksel JavaScript ile DOM Manipülasyonu:
```js
const button = document.getElementById('myButton');
button.addEventListener('click', function () {
    button.style.backgroundColor = 'blue';
});
```

### React ile Declarative Yaklaşım:
```jsx
function MyButton() {
    return <button style={{ backgroundColor: 'blue' }}>Tıkla</button>;
}
```
Gördüğünüz gibi, React ile doğrudan ne görmek istediğimizi tanımlıyoruz. Bu yaklaşım, daha okunaklı ve yönetilebilir kod yazmamıza yardımcı olur.

## 2. Component (Bileşen) Yapısı
React uygulamaları, **bileşenler (components)** adı verilen küçük, tekrar kullanılabilir yapı taşlarından oluşur. Her bileşen, bir HTML parçasını temsil eder ve kendi içindeki **durumu (state)** veya **gelen verileri (props)** yönetebilir.

### Bir Bileşenin Önemi:
Bileşenler, büyük ve karmaşık yapıları küçük parçalara ayırarak kodun daha kolay yönetilmesini sağlar. Örneğin, bir web sitesindeki "Buton", "Başlık" ve "Kart" bölümleri ayrı ayrı bileşenler olarak yazılabilir.

### Basit Bir React Bileşeni:
```jsx
function Greeting() {
    return <h1>Merhaba, React!</h1>;
}
```

Bu bileşeni kullanmak için **root bileşenin** içine eklememiz yeterlidir:
```jsx
function App() {
    return (
        <div>
            <Greeting />
        </div>
    );
}
```

### Bileşenler Olmasaydı Ne Olurdu?
Eğer bileşenler olmasaydı, her bir buton, başlık veya kartı **HTML'in içinde manuel olarak tekrar tekrar yazmamız gerekirdi**. Bu da kodun tekrar etmesine, okunmasının zorlaşmasına ve bakımın zor olmasına sebep olurdu.

## 3. JSX (JavaScript XML)
JSX, React içinde HTML benzeri bir sözdizimi ile bileşenler oluşturmayı sağlar. JSX sayesinde JavaScript içinde doğrudan HTML yazabiliriz.

### JSX Olmadan React Kullanımı:
```js
const element = React.createElement('h1', {}, 'Merhaba, React!');
```

### JSX ile React Kullanımı:
```jsx
const element = <h1>Merhaba, React!</h1>;
```

Görüldüğü gibi JSX kullanımı, kodun okunabilirliğini ve yazım kolaylığını artırır.

JSX kullanımında html etiketlerinin bazı özellikleri değişir

**`class`** => **`className`**

**`for`** => **`htmlFor`**

**`tabindex`** => **`tabIndex`**

**`style = "color : red ; " `** => **`style = {{color : 'red'}}`**

**`onclick = "metotAdi()" `** => **`onClick = {metotAdi()}`**

## 4. Virtual DOM (Sanal DOM) ve Performans Avantajı
React, gerçek DOM'u doğrudan değiştirmek yerine **sanal bir DOM (Virtual DOM)** kullanır. Bu sayede performansı artırır ve gereksiz işlemleri en aza indirir.

### Sanal DOM Nasıl Çalışır?
- React, bir değişiklik olduğunda önce sanal DOM üzerinde güncelleme yapar.
- Sanal DOM, önceki ve yeni sürümü karşılaştırarak **yalnızca değişen kısımları gerçek DOM'a uygular**.
- Böylece gereksiz yeniden çizimler engellenir ve sayfa daha hızlı çalışır.

### Örnek:
Eğer bir kullanıcı bir butona tıkladığında sayfanın tamamını yeniden oluşturmak yerine sadece değişen kısmı güncelleyebiliriz.

## 5. Props (Özellikler) ve Dinamik İçerikler
**Props (Properties)**, bileşenlere dışarıdan veri göndermemizi sağlayan mekanizmadır. Bileşenler arasında veri paylaşımı için props kullanılır.

### Props Kullanımı:
```jsx
function Welcome(props) {
    return <h1>Merhaba, {props.name}!</h1>;
}
```
```jsx
function App() {
    return <Welcome name="Ahmet" />;
}
```

Burada `name` özelliği sayesinde **Welcome** bileşeni içerisine dinamik bir değer gönderilmiş olur.

Eğer **props olmasaydı**, her bileşenin içinde veriyi manuel olarak değiştirmemiz gerekirdi, bu da kod tekrarına sebep olurdu.

## 6. State (Durum) Yönetimi
**State**, bileşenin zaman içinde değişebilen verilerini sakladığı yapıdır. Bir butona tıklandığında sayının artması gibi durumları yönetmek için **state** kullanılır.

### State Kullanımı:
```jsx
function Counter() {
    const [count, setCount] = React.useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            Tıklama Sayısı: {count}
        </button>
    );
}
```

### State Olmadan Ne Olurdu?
Eğer **state olmasaydı**, butona her tıkladığımızda sayıyı artırmak için manuel olarak DOM'a müdahale etmek zorunda kalırdık. Bu da hatalara ve performans sorunlarına yol açardı.

## 7. Event Handling (Olay Yönetimi)
React'te buton tıklamaları, klavye girişleri gibi olayları yönetmek için **event handling** mekanizması kullanılır.

### Geleneksel JavaScript ile Olay Yönetimi:
```js
document.getElementById('btn').addEventListener('click', function() {
    alert('Butona tıklandı!');
});
```

### React ile Olay Yönetimi:
```jsx
function ClickMe() {
    function handleClick() {
        alert('Butona tıklandı!');
    }
    return <button onClick={handleClick}>Tıkla</button>;
}
```

React, olayları doğrudan bileşenin içine gömerek yönetmeyi kolaylaştırır.

---

## Sonuç
Bu bölümde React'in temel konseptlerini ele aldık:
1. **Declarative (Bildirime Dayalı) Yapı** sayesinde daha okunabilir kodlar yazıyoruz.
2. **Component (Bileşen) Yapısı** ile tekrar kullanılabilir parçalar oluşturuyoruz.
3. **JSX** sayesinde daha temiz ve okunabilir kod yazıyoruz.
4. **Virtual DOM** ile performansı artırıyoruz.
5. **Props** ile bileşenler arasında veri iletişimi sağlıyoruz.
6. **State Yönetimi** ile bileşenlerin içindeki değişken verileri yönetiyoruz.
7. **Event Handling** ile kullanıcı etkileşimlerini yönetiyoruz.

Bu temel konular, React'i öğrenmek için sağlam bir temel oluşturur. Bir sonraki adımda daha derinlemesine konulara giriş yapacağız! 🚀

Bir sonraki ders içeriği [React useState](../lesson-4/lesson4.md)