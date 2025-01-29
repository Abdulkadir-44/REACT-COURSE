
# 🚀 Node.js ve React: Temel Kavramlar

## 📌 Giriş: JavaScript'in Çalışma Ortamları
JavaScript, tarayıcı üzerinde çalışan bir programlama dilidir. **Ancak, tarayıcı dışında da çalıştırılabilir mi?** İşte burada **Node.js** devreye girer.

### 💡 JavaScript Tarayıcıda Nasıl Çalışır?
Bir web sayfasını açtığınızda, tarayıcı sayfadaki **HTML, CSS ve JavaScript kodlarını** işler. **JavaScript, tarayıcı içindeki bir motor (örn: Chrome'da V8) sayesinde çalıştırılır.** Bu motor, **JavaScript kodlarını alır ve makinenin anlayacağı dile (makine koduna) çevirir.**

Ancak, tarayıcı dışındaki ortamlarda JavaScript kullanmak istiyorsak, **bir çalışma ortamına ihtiyacımız vardır.** İşte bu noktada **Node.js devreye girer.**

---

## ⚙ React nedir?
React, Facebook tarafından geliştirilen ve açık kaynaklı olarak sunulan bir JavaScript kütüphanesidir. Kullanıcı arayüzleri oluşturmak için kullanılır ve özellikle tek sayfa uygulamaları (single-page applications) geliştirmek için popülerdir.

**React'in Temel Özellikleri:**

**Bileşen Tabanlı Yapı:** React, kullanıcı arayüzlerini küçük, yeniden kullanılabilir parçalar olan bileşenlere ayırır. Bu, uygulamanın daha düzenli ve bakımı kolay hale gelmesini sağlar. Her bileşen, kendi verilerini ve mantığını içerir.

**Bildirimsel Programlama:** React, kullanıcı arayüzünün nasıl görünmesi gerektiğini tanımlamaya odaklanır. Gerekli güncellemeleri otomatik olarak yapar, bu da geliştiricinin daha az kod yazmasını sağlar.

**Sanal DOM:** React, gerçek DOM (Document Object Model) yerine sanal bir DOM kullanır. Bu, performansın artmasına yardımcı olur çünkü değişiklikler önce sanal DOM'da yapılır ve ardından en az sayıda değişiklik gerçek DOM'a yansıtılır.

**Tek Yönlü Veri Akışı:** React'te veri akışı tek yönlüdür, yani veriler yukarıdan aşağıya doğru akar. Bu, uygulamanın durumunu anlamayı ve hataları ayıklamayı kolaylaştırır.

**Geniş Ekosistem:** React, geniş bir geliştirici topluluğuna ve zengin bir ekosisteme sahiptir. Birçok üçüncü taraf kütüphanesi ve aracı mevcuttur.

### React'in Avantajları

**Yüksek Performans:** Sanal DOM sayesinde hızlı ve verimli bir kullanıcı deneyimi sunar.

**Yeniden Kullanılabilirlik:** Bileşen tabanlı yapısı sayesinde kod tekrarını azaltır.

**Kolay Bakım:** Modüler yapısı sayesinde uygulamanın bakımı kolaydır.

**Büyük Topluluk:** Geniş bir topluluğu olduğu için destek ve kaynak bulmak kolaydır.

**SEO Dostu:** Sunucu tarafında render edilebildiği için arama motorları tarafından daha kolay indekslenir.

### React'in Kullanım Alanları

**Tek Sayfa Uygulamaları (SPA):** Karmaşık ve etkileşimli web uygulamaları geliştirmek için idealdir.

**Mobil Uygulamalar:** React Native ile mobil uygulamalar geliştirmek mümkündür.

**Veri Görselleştirme:** Verileri grafikler ve tablolar şeklinde görselleştirmek için kullanılabilir.

**E-ticaret Siteleri:** Ürün katalogları, alışveriş sepetleri ve ödeme sayfaları gibi dinamik içerikler oluşturmak için uygundur.

**Sosyal Medya Platformları:** Kullanıcı etkileşimi ve dinamik içeriklerin yoğun olduğu platformlar için idealdir.
Sonuç olarak, React, modern web uygulamaları geliştirmek için güçlü ve popüler bir araçtır. Bileşen tabanlı yapısı, yüksek performansı ve geniş ekosistemi sayesinde birçok farklı alanda kullanılmaktadır

## ⚙ Node.js Nedir?
Node.js, **tarayıcıdan bağımsız olarak JavaScript çalıştırmamızı sağlayan bir çalışma ortamıdır (runtime environment).**

### 🛠 Node.js Ne İşe Yarar?
- **Web sunucuları oluşturabiliriz.**
- **Dosya sistemine erişebiliriz.** (Tarayıcıda bu mümkün değildir!)
- **API'ler oluşturabiliriz.**
- **Komut satırında çalıştırılabilen araçlar geliştirebiliriz.**

### 🔥 Neden JavaScript Sunucu Tarafında Çalıştırılmak İstenir?
Normalde JavaScript yalnızca tarayıcıda çalıştırılır. Ancak, **Node.js sayesinde JavaScript artık bir sunucu programlama dili olarak da kullanılabilir.** Böylece **hem frontend (kullanıcı arayüzü) hem de backend (sunucu tarafı) için aynı dili kullanabiliriz!**

---

## 🌍 Node.js'in Temel Bileşenleri

### 1️⃣ **V8 Engine (V8 Motoru)**
Google tarafından geliştirilen ve Chrome tarayıcısında kullanılan **JavaScript motorudur.** **Node.js, bu motoru kullanarak tarayıcı olmadan JavaScript çalıştırabilir.**

### 2️⃣ **npm (Node Package Manager)**
- JavaScript kütüphanelerini yönetmek için kullanılan en büyük paket yöneticisidir.
- Açık kaynaklı JavaScript paketlerini indirip projelerimizde kullanabiliriz.

### 3️⃣ **Non-Blocking I/O (Engellenmeyen Giriş/Çıkış İşlemleri)**
Node.js, **işlemleri sırayla bekletmeden** yönetebilir. Böylece **aynı anda birden fazla işlem yapılabilir.** Bu, özellikle **hızlı ve ölçeklenebilir web uygulamaları için çok önemlidir.**

### 4️⃣ **Event Loop (Olay Döngüsü)**
Node.js, tek bir thread (iş parçacığı) kullanarak **birçok işlemi yönetebilir.** Bunu yaparken **event loop (olay döngüsü) sayesinde işlemler arasında geçiş yapar.**

---

## 🔗 React ile Node.js'in Bağlantısı Nedir?
React, **tarayıcı üzerinde çalışan bir kütüphane** olduğu için **doğrudan Node.js’e ihtiyaç duymaz.** Ancak, React projelerinde **bağımlılık yönetimi, derleme ve geliştirme süreçleri için** Node.js kullanılır.

### 🛠 React Projesinde Node.js Neden Kullanılır?
- **npm kullanarak React ve diğer bağımlılıkları yönetiriz.**
- **npx komutuyla React projeleri hızlıca oluşturabiliriz.**
- **Webpack ve Babel gibi araçlarla kodlarımızı optimize ederiz.**

---

## 🚀 Özet:
✅ **JavaScript normalde tarayıcıda çalışır, ancak Node.js sayesinde sunucu tarafında da çalıştırılabilir.**
✅ **Node.js, React projelerinde bağımlılık yönetimi ve geliştirme süreçleri için kullanılır.**
✅ **npm, V8 Engine, Non-Blocking I/O ve Event Loop gibi bileşenler Node.js’i güçlü kılar.**
✅ **React, kullanıcı arayüzü oluşturmak için; Node.js ise altyapıyı yönetmek için kullanılır.**

---
Bu bilgilerle artık **Node.js ve React arasındaki bağlantıyı** daha iyi anladın! 🎯


# 🚀 React Projesi Oluşturma: create-react-app vs Vite

## 📌 Giriş: React Projesi Oluşturmanın Yolları
React projeleri oluşturmanın farklı yöntemleri vardır. En yaygın iki yöntem:

1. **create-react-app (CRA)** kullanmak
2. **Vite** kullanmak

Her iki yöntemin de avantajları ve dezavantajları vardır. Şimdi bu iki yöntemi inceleyelim.

---

## 🔹 1. create-react-app ile React Projesi Oluşturma
**create-react-app (CRA)**, Facebook tarafından geliştirilen ve React projelerini hızlı bir şekilde başlatmamıza olanak tanıyan bir araçtır.

### 🛠 Kurulum Adımları:
```sh
npx create-react-app my-app
cd my-app
npm start
```

### ✅ Avantajları:
- **Kolay kurulum**: React uygulamalarını başlatmanın en basit yollarından biridir.
- **Standart yapı**: React ekosistemine aşina olan herkes için tanıdık bir proje yapısı sunar.
- **Dahili ayarlar**: Webpack, Babel ve ESLint gibi araçlar varsayılan olarak gelir.

### ❌ Dezavantajları:
- **Ağır yapı**: create-react-app projeleri gereksiz bağımlılıklar içerir ve büyük dosya boyutları oluşturabilir.
- **Yavaş başlatma süresi**: Geliştirme sunucusunun (dev server) başlatılması uzun sürebilir.
- **Hot Reloading (Canlı Yenileme) sorunları**: Değişikliklerin anlık olarak uygulanması bazen gecikebilir.

---

## 🔹 2. Vite ile React Projesi Oluşturma
**Vite**, modern frontend projeleri için geliştirilmiş, ultra hızlı bir build (derleme) aracıdır. CRA'ya kıyasla daha hızlıdır ve daha az kaynak tüketir.

### 🛠 Kurulum Adımları:
```sh
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### ✅ Avantajları:
- **Süper hızlı**: Vite, dosyaları önceden derlemez, bunun yerine tarayıcıdan gelen isteklere göre anında işler.
- **Daha hafif yapı**: Gereksiz bağımlılıklardan arındırılmıştır.
- **Daha iyi geliştirme deneyimi**: Anında güncellenen Hot Module Replacement (HMR) sunar.
- **ESM (ECMAScript Modules) desteği**: Daha verimli modül yönetimi sağlar.

### ❌ Dezavantajları:
- **CRA kadar yaygın değil**: create-react-app kadar geniş bir topluluğa sahip değildir.
- **Konfigürasyon gerektirebilir**: Çoğu durumda minimal ayarlarla çalışsa da bazı özel projelerde ekstra yapılandırma gerekebilir.

---

## 📌 Sonuç: Hangisini Kullanmalıyız?
| Özellik          | create-react-app | Vite         |
|----------------|----------------|-------------|
| **Kurulum Hızı** | Yavaş          | 🚀 Çok Hızlı |
| **Geliştirme Hızı** | Orta           | 🚀 Çok Hızlı |
| **Hot Reloading** | Bazen yavaş    | 🚀 Anında    |
| **Dosya Boyutu** | Büyük          | 🚀 Küçük     |
| **Yaygınlık**    | 🚀 Yaygın       | Artıyor     |

Eğer **hızlı ve modern bir geliştirme ortamı** istiyorsan **Vite** kullanmalısın. Ancak, **standart bir React ortamına ihtiyacın varsa** ve yeni araçlarla uğraşmak istemiyorsan **create-react-app** de bir seçenek olabilir.

**Önerim:** **Yeni projelerde Vite kullanmanızdır.** 🚀

**Not:**  **Bundan sonraki anlatımlarda projenin Vite ile ayağa kaldırıldığı varsayılacaktır**


# 🚀 Kurulum Sonrası Dosya Yapısı

```
my-react-course/
 ├── node_modules/
 ├── public/
 ├── src/
 ├── .gitignore
 ├── eslint.config.js
 ├── .index.html
 ├── package.json
 ├── package-lock.json
 ├── README.md 
```
# `node_modules/` Klasörü ve İçeriği 📂

Aslında bu kısımlar bizim bir ilgimiz olmayacak projenin çalışması için gerekli tüm bağımlılıklar bu dosya içeririsinde default olarak gelmektedir **`npm install`** ifadesi bizim bu dosyamızı indirmektedir

# `public/` Klasörü ve İçeriği 📂

Vite ile React projelerinde **`public/`** klasörü, projede **statik dosyaların** depolandığı yerdir. Bu dosyalar, **tarayıcıya işlenmeden doğrudan** sunulur. Yani, HTML dosyaları, resimler, fontlar, videolar vb. burada yer alır ve projede gerektiği zaman kullanılır. Vite, derleme sırasında **bu dosyaları olduğu gibi** alır ve hedef `dist/` klasörüne kopyalar.

# Statik Dosyalar ve Tarayıcıya İşlenmeden Doğrudan Sunulması 🗂️

**statik dosyalar** ve **tarayıcıya işlenmeden doğrudan sunulması** kavramlarını detaylı bir şekilde açıklayacağım.

## Statik Dosyalar Nedir? 🖼️

**Statik dosyalar**, genellikle **değişmeyen**, **sabit içerikler** içeren dosyalardır. Bu dosyalar, tarayıcıya gönderildiğinde herhangi bir değişiklik veya işlem yapılmadan doğrudan kullanıcılara sunulur. Yani bu dosyalar **dinamik içerik üretmezler**, sadece **mevcut durumlarıyla** tarayıcıya gösterilirler.

### Statik Dosyalara Örnekler:
- **Resimler**: `.png`, `.jpg`, `.gif` gibi görsel dosyalar.
- **CSS Dosyaları**: Tasarım için kullanılan stil dosyaları (`style.css`).
- **JavaScript Dosyaları**: Genellikle işlevsellik eklemek için kullanılan `.js` dosyaları.
- **Fontlar**: Özel yazı tipleri gibi dosyalar.
- **HTML Dosyaları**: Web sayfasının temel yapısını belirleyen dosyalar.

Statik dosyalar, hiçbir işlem yapılmadan, **değişmez** ve **dönüştürülmez**. Tarayıcı, bu dosyaları olduğu gibi alır ve gösterir.

## Tarayıcıya İşlenmeden Doğrudan Sunulması Ne Demek? 🌐

Bir **statik dosya** tarayıcıya **işlenmeden** doğrudan sunulduğunda, bu demektir ki:

- **Dosya, değiştirilmeden veya dinamik olarak işlenmeden** olduğu gibi kullanıcının tarayıcısına gönderilir.
- Tarayıcı, bu dosyayı **direkt olarak render** eder, yani dosya üzerinde herhangi bir işlem yapılmaz.
  
Örneğin, bir **resim dosyası** (`image.jpg`), **HTML dosyasının içinde bir `<img>` etiketi ile** tarayıcıya sunulmuşsa, tarayıcı bu resmi hemen görüntüler. Bu sırada, resmin içeriği üzerinde herhangi bir **değişiklik veya hesaplama yapılmaz**.

### Dinamik İçerikten Farkı 🔄

- **Dinamik İçerik**: Kullanıcı etkileşimi, veritabanı sorguları veya API talepleri gibi etkenlerle içerik değişebilir. Dinamik içerik **işlenerek** tarayıcıya gönderilir.
  - Örnek: Kullanıcı giriş yaptıktan sonra kişisel bilgilerini görmek.
  
- **Statik İçerik**: İçerik sabittir ve herhangi bir değişiklik gerektirmez. **Hızlı yükleme** sağlar ve veritabanına veya kullanıcının etkileşimine bağlı değildir.
  - Örnek: Web sayfasında bir logo veya basit bir metin.

### Statik Dosyaların Kullanım Yeri 📍

Statik dosyalar, genellikle şunlar için kullanılır:
- Web sayfalarının görselleri ve stilleri.
- Kullanıcıya doğrudan sunulacak içerikler.
- Tarayıcıda işlem yapılmadan sadece gösterilmesi gereken veriler.

## Statik Dosyaların Avantajları ⚡

- **Hızlı Yükleme**: Statik dosyalar, değişkenlik göstermedikleri için çok hızlı yüklenir.
- **Veritabanı Bağımsızlığı**: Dinamik içerikten farklı olarak, statik dosyalar **veritabanı bağlantısına gerek duymaz**.
- **Kolay Dağıtım**: Statik içerikler, basit bir sunucu aracılığıyla veya bir CDN (Content Delivery Network) üzerinden hızlıca dağıtılabilir.



**Özetle**, statik dosyalar, içeriklerinin önceden belirlenmiş ve sabit olduğu dosyalardır. Bu dosyalar tarayıcıya gönderildiğinde herhangi bir işleme tabi tutulmaz ve kullanıcının tarayıcısında anında görüntülenir.

---

**Tekrardan dosya yapılanmasına gelelim :**


## `public/` Klasörünün İçeriği

`public/` klasörü şu türden dosyalar ve klasörler içerir:

- **`index.html`** 📝
- **Resim ve Medya Dosyaları** 🖼️
- **Diğer Statik Dosyalar** 📄

### 1. `index.html` Dosyası 📝
**`public/`** klasöründeki **`index.html`** dosyası, React uygulamanızın başlangıç noktasıdır. Bu dosya, tarayıcıya yüklenmeden önce React bileşenlerinin yerleştirileceği temel HTML yapısını içerir. Vite, uygulamanın başlangıcı olarak bu dosyayı kullanır. İçerisinde yer alan `<div id="app"></div>` gibi bir element, **React bileşenlerinin** yerleştirileceği yerdir.

#### Örnek `index.html` İçeriği:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```
---

# `src/` Klasörü ve İçeriği 📂

Bizim asıl işimiz bu dosyayla olacaktır herşey bu dosya içinde mevcut olacak,projenin temellerini oluşturan parçacıklar bu dosya içerisinde barınmaktadır daha sonra detaylı anlatılacaktır ama içeriğine biz göz gezdirelim
```
src/
 ├── assets/ -> projede kullanılacak resimler
 ├── App.css -> proje içinde kullanılacak yerel stil kodları
 ├── App.jsx -> React bileşeni olarak oluşturulmuş ilk örnek bileşendir. Uygulamanın ana yapısını tanımlar.
 ├── main.jsx -> React bileşenlerinin DOM’a bağlandığı dosyadır.
 ├── index.css ->  Tüm proje boyunca geçerli olan genel CSS kurallarını içerir.
```
Zamanla bu klasörlerin ne anlama geldiğini öğreneceksiniz konu dışına çıkmamak için detaylarını atlıyorum zaten yeri ve zamanı geldiğinde bahsedeceğiz

---

# `.gitignore` Dosyası 🚫

**`.gitignore`** dosyası, **Git** versiyon kontrol sistemi tarafından kullanılan bir dosyadır ve **projenizdeki takip edilmesini istemediğiniz dosyaları** belirtmek için kullanılır. Bu dosya, **hangi dosya ve dizinlerin Git tarafından izlenmeyeceğini** belirler. Genellikle, geçici dosyalar, bağımlılıklar, derlenmiş dosyalar veya kişisel yapılandırma dosyaları gibi, projede önemli olmayan ya da paylaşılmaması gereken dosyalar `.gitignore` ile dışarıda bırakılır.

#### `.gitignore` Dosyasının Temel Özellikleri:
- **Git'e İstenmeyen Dosyaların Gösterilmesi**: Git, `.gitignore` dosyasındaki kurallara göre belirtilen dosya ve klasörleri takip etmez. Bu sayede gereksiz dosyalar versiyon kontrolüne dahil edilmez.
- **Proje Temizliği**: Çoğu projede, otomatik olarak oluşturulan dosyalar (örneğin, derleme dosyaları veya bağımlılıklar) Git tarafından izlenmek istenmez. Bu dosyalar `.gitignore` dosyasına eklenir.
- **Paylaşılmaması Gereken Dosyaların Dışarıda Bırakılması**: Özellikle kişisel dosyalar veya güvenlik bilgileri içeren dosyalar (örneğin `.env` dosyası) `.gitignore` dosyasına eklenir, böylece bu dosyalar Git ile paylaşılmaz.

#### `.gitignore` Dosyasına Neler Eklenir?
- **Geçici ve Derleme Dosyaları**: Projeye ait derlenmiş dosyalar, geçici dosyalar, test raporları veya hata günlükleri gibi dosyalar genellikle `.gitignore` ile dışarıda bırakılır.
- **Bağımlılıklar**: Genellikle, Node.js gibi projelerde `node_modules/` dizini veya Python projelerinde `venv/` dizini dışarıda bırakılır.
- **Çevresel Ayar Dosyaları**: `.env` gibi çevresel ayar dosyaları genellikle kişisel bilgiler içerdiği için paylaşılmaması gerekir.

#### Örnek `.gitignore` Dosyası:
```gitignore
# Node.js bağımlılıkları
node_modules/

# Derleme ve çıktı dosyaları
dist/
build/

# Çevresel değişkenler
.env

# Editör/IDE dosyaları
.vscode/
.idea/

# OS ve geçici dosyalar
.DS_Store
Thumbs.db
```
---
# `eslint.config.js` Dosyası 📌

**`eslint.config.js`**, ESLint yapılandırma dosyasıdır ve projenizde kod kalitesini ve standartlarını korumak için kullanılır.

### Ne İşe Yarar?
Kod yazım kurallarını belirler (örneğin, tek tırnak mı çift tırnak mı kullanılacak?).

Kod hatalarını ve kötü uygulamaları tespit eder.

Proje içinde tutarlı bir kod stili sağlar.

Editor ve terminalde otomatik uyarılar ve düzeltmeler sunar.

**Örnek bir eslint.config.js dosyası içeriği :**
```
export default [
  {
    ignores: ["node_modules/", "dist/"], // Belirtilen klasörleri analiz etme
  },
  {
    rules: {
      "no-unused-vars": "warn", // Kullanılmayan değişkenler için uyarı ver
      "quotes": ["error", "double"], // Çift tırnak kullanımı zorunlu
      "semi": ["error", "always"], // Satır sonunda noktalı virgül kullanımı zorunlu
    },
  },
];
```

---

# `package.json` Dosyası 📦 

**`package.json`**, Node.js projelerinin yapılandırma dosyasıdır ve projeyle ilgili temel bilgileri içerir.

#### Ne İşe Yarar ? 📌

Projenin bağımlılıklarını (dependencies) listeler.

Proje hakkında bilgiler (ad, sürüm, yazar vb.) içerir.

Çalıştırma komutlarını (scripts) tanımlar.

```
{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "Vite ile oluşturulmuş React projesi",
  "scripts": {
    "dev": "vite", 
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^4.0.0"
  }
}
```

#### Burda scripts kısmına daha ayrıntılı değinelim

**`package.json`** dosyasındaki **"scripts"** bölümü, proje içinde otomatik olarak çalıştırılabilecek komutları tanımlar


**🔥 1. dev Komutu**


Geliştirme ortamını başlatır.

Vite'in yerleşik geliştirme sunucusunu çalıştırır.

Hızlı yenileme (HMR - Hot Module Replacement) desteği sağlar, yani kod değiştirildiğinde sayfayı yenilemeye gerek kalmaz.

**Kullanımı :** `npm run dev`

**🔥 2. build Komutu**


React uygulamasını üretime hazır (production-ready) hale getirir.

Kodları optimize eder ve küçültür (minify eder).

Çıkış dizini olarak dist/ klasörünü oluşturur.

**Kullanımı :** `npm run build`

**🔥 3. preview Komutu**

Üretime alınmış (build edilmiş) dosyaları önizlemenizi sağlar.

npm run build sonrası oluşturulan dosyaları gerçek sunucu ortamında test edebilirsiniz.

**Kullanımı :** `npm run preview`

---

Artık bir react projesindeki dosya hiyerarşisine hakimiz en azından yabancı gelmeyecektir bu açıklamalardan sonra

Şimdi artık src klasörü içindeki belgelerimize daha detaylı bakalım [Tıkla](./lesson1_1.md)