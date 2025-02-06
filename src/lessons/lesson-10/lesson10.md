# Fetch API ile Veri Çekme Eğitimi

## 1. Giriş
Web uygulamalarında istemcinin sunucudan veri alması en temel işlemlerden biridir. **Fetch API**, modern JavaScript ile birlikte gelen ve HTTP istekleri yapmak için kullanılan yerleşik bir API'dir. Fetch API, eski XMLHttpRequest yöntemine kıyasla daha basit, okunabilir ve esnek bir yapı sunar.

Bu yazıda Fetch API'nin nasıl çalıştığını öğrenecek, farklı kullanım senaryolarını ele alacak ve örnek kodlarla pratik yapacağız.

---

## 2. Fetch API'nin Temelleri

Fetch API'nin temel kullanımı aşağıdaki gibidir:

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Hata:", error));
```

### Açıklamalar:
- `fetch(url)`: Belirtilen URL'ye bir HTTP isteği yapar.
- `.then(response => response.json())`: Dönen yanıtı JSON formatına çevirir.
- `.then(data => console.log(data))`: JSON verisini işler.
- `.catch(error => console.error(...))`: Hata yakalayıp konsola yazdırır.

---

## 3. GET ve POST İstekleri
### 3.1. GET İsteği
Bir API'den veri çekmek için en yaygın kullanılan yöntemdir.

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("Veri çekme başarısız!");
    }
    return response.json();
  })
  .then(users => console.log(users))
  .catch(error => console.error("Hata:", error));
```

### 3.2. POST İsteği
Bir API'ye veri göndermek için **POST** isteği kullanılır.

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Yeni Gönderi",
    body: "Bu bir test gönderisidir.",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log("Başarıyla eklendi:", data))
  .catch(error => console.error("Hata:", error));
```

### Açıklamalar:
- `method: "POST"`: HTTP isteğinin türü POST olarak belirtilir.
- `headers`: Gönderilen verinin JSON formatında olduğunu belirtir.
- `body`: JSON formatına çevrilmiş veri gönderilir.

---

## 4. Async/Await ile Fetch Kullanımı
`async/await` ile fetch işlemleri daha okunabilir hale gelir.

```js
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Veri alınamadı");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Hata:", error);
  }
}

fetchData();
```

### Neden `async/await`?
- Daha okunaklı ve yönetilebilir kod yazmamızı sağlar.
- `.then()` zincirini azaltarak hata yönetimini kolaylaştırır.

---

## 5. Hata Yönetimi
API isteklerinde hata yönetimi önemlidir. Fetch işlemlerinde aşağıdaki durumlar için hata yönetimi yapılmalıdır:

1. **İnternet bağlantısı hatası**: `fetch` başarısız olursa `catch` bloğunda yakalanmalıdır.
2. **HTTP Yanıt Hataları**: HTTP yanıt kodları (404, 500 gibi) manuel olarak kontrol edilmelidir.

Örnek:

```js
async function fetchWithErrorHandling() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
    if (!response.ok) {
      throw new Error(`HTTP Hatası: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Hata oluştu:", error.message);
  }
}

fetchWithErrorHandling();
```

---

## 6. Gerçek Senaryolar
### 6.1. Kullanıcı Girişi
Gerçek bir projede bir login formu şu şekilde olabilir:

```js
async function loginUser(email, password) {
  try {
    const response = await fetch("https://api.example.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    
    if (!response.ok) {
      throw new Error("Giriş başarısız");
    }

    const data = await response.json();
    console.log("Giriş başarılı:", data);
  } catch (error) {
    console.error("Hata:", error.message);
  }
}

loginUser("test@example.com", "123456");
```

---

### Kendi kullanım şeklim

Ben klasörleme yapısı ile fetch isteklerini servislere bölüyorum,yazdığım kodlar ilgili dersin(lesson-10) klasörünün altında bulunuyor

## 7. Sonuç
- Fetch API, modern JavaScript'te veri çekme işlemleri için en yaygın kullanılan yöntemdir.
- `GET`, `POST`, `PUT`, `DELETE` gibi farklı HTTP metodlarını destekler.
- `async/await` kullanımı kodu daha okunaklı hale getirir.
- Hata yönetimi, sağlam ve güvenilir uygulamalar geliştirmek için kritik bir adımdır.

Bu eğitimde Fetch API’nin temel ve ileri düzey kullanımını ele aldık. Artık Fetch API'yi kullanarak API'lerden veri çekebilir, sunucuya veri gönderebilir ve hata yönetimi yapabilirsiniz! 🎯

Bir sonraki ders içeriği [React router dom(V6)](../lesson-11/lesson11.md)