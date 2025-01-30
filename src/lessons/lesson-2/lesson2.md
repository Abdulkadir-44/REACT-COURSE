# Ortam değişkenleri ve Build nedir ?

Öncelikle bir sitenin **`build`** edilmesi nedir ve neden build edilir,neden birden çok ortam vardır gibi soruları cevaplayalım 

### 🚀 Site Build Edilmesi: Neden ve Nasıl?

Web geliştirme sürecinde genellikle development (geliştirme) ve production (üretim) gibi farklı ortamlar kullanılır. Bu ortamlar, projenin farklı aşamalarında daha verimli çalışmayı ve uygulamanın sorunsuz bir şekilde hedeflenen ortamda çalışmasını sağlamaya yardımcı olur. Ancak, bu ortamlar arasında geçiş yapabilmek ve projeyi üretim ortamında düzgün bir şekilde çalıştırabilmek için bazı ön hazırlıklar ve adımlar gereklidir. İşte bunlardan ilki **`build`** (derleme) işlemidir.

### 1. Sitenin Build Edilmesi Nedir?

Bir siteyi build etmek, yani build işlemi, geliştirilen web sitesinin son haline gelmeden önce bir takım işlemlerden geçirilmesidir. Bu işlem, uygulamanın geliştirilmiş olan kodunun optimize edilmesini, hataların düzeltilmesini ve sonunda sadece tarayıcıda çalışan minik dosyaların (JavaScript, CSS, vb.) elde edilmesini sağlar.

Build işlemi sırasında aşağıdaki adımlar genellikle gerçekleştirilir:

**Kodun optimize edilmesi:** Geliştirme sırasında yazılan kodlar genellikle daha fazla okunabilir olması amacıyla detaylıdır. Ancak üretim ortamında, bu kodların daha verimli ve hızlı çalışması gerekmektedir. Build işlemi, gereksiz dosyaları kaldırarak ve kodu minimize ederek daha küçük dosyalar oluşturur.

**Bağımlılıkların paketlenmesi:** Uygulamanın çalışması için gerekli olan kütüphaneler, araçlar ve diğer bağımlılıklar build sırasında proje ile birlikte paketlenir.

**Kaynak dosyaların derlenmesi:** CSS ve JavaScript gibi kaynak dosyalar, derlenerek daha verimli bir hale getirilir.
Bu işlem sonucunda, uygulamanın son sürümü (production build) elde edilir.

### 2. Neden Build Edilir?

Siteyi build etmek, özellikle büyük projelerde önemli bir yer tutar. Bunun bazı sebepleri şunlardır:

**Performans iyileştirmeleri:** Build sırasında gereksiz dosyalar ve fazla yer kaplayan kodlar temizlenir, sadece gerekli olan dosyalar son sürümde bulunur.

**Daha hızlı yükleme:** Minify (küçültme) işlemleri sayesinde, tarayıcıda daha az veri yüklenir ve web sayfası daha hızlı yüklenir.

**Kodu gizleme:** Kaynak kodunun doğrudan erişilebilir olmasını engeller. Geliştirme sırasında yazılan fazla detaylı yorumlar ve kod, üretim ortamında görünür olmaz.

**Üretim ortamına uygun hale getirme:** Development ortamında bazı işlemler (örneğin canlı veri kullanma, ekstra hata ayıklama araçları) aktif olabilirken, build işlemi ile bu özellikler devre dışı bırakılır ve yalnızca üretim ortamına uygun hale getirilmiş dosyalar kalır.

### 3. Ortamlar: Neden Gereklidir?

Projelerde farklı development ve production ortamları kullanmanın çok sayıda avantajı vardır. Bu ortamlar, geliştiriciye ve üretime daha sağlıklı bir geçiş süreci sağlar.

##### Development Ortamı:
**Geliştiriciye hız ve esneklik sunar:** Kodu hızlıca test etmesine ve hata ayıklamasına olanak tanır.

**Canlı hatalar ve loglar:** Bu ortamda hata mesajları ve loglar sıklıkla gösterilir, böylece geliştirici her hata hakkında anında bilgi alabilir.

**Kaynak kodu görünür:** Bu ortamda genellikle kaynak kodları doğrudan erişilebilir, yani geliştirici yazdığı kodu tarayıcıda doğrudan görebilir.

##### Production Ortamı:

**Canlı kullanıcılar için optimizasyon:** Bu ortamda, kullanıcılar sitenize gerçek zamanlı olarak erişir. Bu yüzden site çok hızlı çalışmalı ve doğru şekilde sunulmalıdır.

**Performans ön planda:** Development ortamındaki fazla detaylı loglar, hata mesajları, veya gereksiz dosyalar bu ortamda gösterilmez. Sadece minimum düzeyde dosyalar ve veriler bulunur.

**Güvenlik:** Üretim ortamında yazılımın yalnızca son kullanıcı tarafından görülecek kısmı bulunur. Kodu görmek veya değiştirmek zorlaşır. Ayrıca, güvenlik açısından önemli önlemler alınır.

### 4. Ortam Değişkenleri: Ne İşe Yarar?

Her ortam için farklı yapılandırmalara sahip olmanız gerekebilir. İşte burada ortam değişkenleri devreye girer. Ortam değişkenleri, bir uygulamanın hangi ortamda çalıştığını belirlemenize ve o ortam için uygun yapılandırmaları kullanmanıza yardımcı olur. Örneğin:

**Development ortamı için:** API anahtarları, veritabanı bağlantıları gibi bilgiler genellikle gelişmiş test süreçlerine yönlendirilmiş olabilir.

**Production ortamı için:** Gerçek kullanıcı verilerini işlerken farklı veritabanları ve API'ler kullanılabilir. Bu sayede verilerinizi güvende tutar ve hataların önüne geçersiniz.

# Ortam Değişkenlerine Erişim

Vite ile oluşturulmuş bir React projesinde, hangi ortamda çalıştığımızı belirten varsayılan (**default**) ortam değişkenleri bulunur. Bu değişkenlerin değerleri genellikle **"production"** veya **"development"** olarak ayarlanır.

## Ortam Değişkenlerine Erişim

Aşağıda Vite projelerinde ortam değişkenlerine erişmek için kullanılabilecek bazı önemli ifadeler ve bunların anlamları yer almaktadır:

### 1. `import.meta.env.MODE`

Bu değişken, uygulamanın hangi ortamda çalıştığını belirten bir string değer döndürür. 

**Örnek Kullanım:**

```javascript
console.log(import.meta.env.MODE); // "development" veya "production"
```

### 2. `import.meta.env.PROD`

Eğer ortam **production** ise `true`, diğer tüm durumlarda `false` değerini döndürür.

**Örnek Kullanım:**

```javascript
if (import.meta.env.PROD) {
    console.log("Bu uygulama production ortamında çalışıyor.");
}
```

### 3. `import.meta.env.DEV`

Eğer ortam **development** ise `true`, diğer tüm durumlarda `false` değerini döndürür.

**Örnek Kullanım:**

```javascript
if (import.meta.env.DEV) {
    console.log("Bu uygulama development ortamında çalışıyor.");
}
```

### 4. `import.meta.env.BASE_URL`

Bu değişken, projenin **base URL** bilgisini döndürür. Genellikle **public URL** olarak kullanılır.

**Örnek Kullanım:**

```javascript
console.log(import.meta.env.BASE_URL); // "/" veya belirlenen base URL
```

---
## Ortam Değişkenleri Hangi Dosyada Saklanır?

Ortam değişkenleri genellikle **.env** dosyalarında saklanır. Vite projelerinde **.env** dosyaları projenin kök dizininde bulunur ve aşağıdaki gibi farklı dosyalar olabilir

```
my-react-course/
 ├── node_modules/
 ├── public/
 ├── src/
 ├── .env
 ├── .env.development
 ├── .env.production
 .
 .
 .
```

- **.env** → Tüm ortamlar için geçerli olan genel değişkenler.
- **.env.development** → Yalnızca geliştirme ortamında (development) geçerli olan değişkenler.
- **.env.production** → Yalnızca üretim ortamında (production) geçerli olan değişkenler.

Bu dosyalar, uygulamanın çalıştığı ortama göre değişkenlerin nasıl yükleneceğini belirler.

---
## Kendi Ortam Değişkenimizi Nasıl Oluştururuz?

Özel ortam değişkenleri tanımlamak için `.env` dosyalarına aşağıdaki gibi değişkenler ekleyebiliriz:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Not Defteri
```

Bu değişkenlere uygulama içinden şu şekilde erişebiliriz:

```javascript
console.log(import.meta.env.VITE_API_URL); // "https://api.example.com"
```

**Önemli Not:**
- Vite projelerinde tüm özel ortam değişkenlerinin **`VITE_`** önekiyle başlaması gerekir. Aksi halde değişkenler istemci tarafında kullanılamaz.

---
## Ortam Seçimini Nasıl Yaparız?

Farklı ortamlar için farklı değişkenler kullanmak istediğimizde, `.env` yerine **.env.development** ve **.env.production** dosyalarını kullanabiliriz.

**Örnek:**

`.env.development` dosyası:
```env
VITE_API_URL=http://localhost:3000/api
```

`.env.production` dosyası:
```env
VITE_API_URL=https://api.example.com
```

Bu sayede, **development** ortamında API URL’si **`http://localhost:3000/api`**, **production** ortamında ise **`https://api.example.com`** olarak ayarlanacaktır.

**Uygulamanın Çalıştırıldığı Ortamı Belirleme:**

Vite projesini belirli bir ortamda çalıştırmak için aşağıdaki komutları kullanabilirsiniz:

```sh
# Development ortamında çalıştırma
npm run dev

# Production ortamında build alma
npm run build
```

Bu komutlar, ilgili `.env` dosyasında tanımlanan değişkenleri yükleyerek uygulamanın doğru ortamda çalışmasını sağlar.

**`npm run dev`** komutu ile çalıştırıldığında terminalde şu görüntü olur : 
```
 VITE v6.0.11  ready in 746 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
burada **http** yazan url kısmına **`ctrl + sol_tık`** yaptığınızda artık projenizin development ortamındaki halini göreceksiniz

**`npm run build`** komutundan sonra ise build alınır ve bu işlemden sonra 
projenin ana dizininde  statik dosyalarını tutan bir  **`dist/`** klasörü oluşturulur. Biz sunucularımıza bu dist/ klasörü altındaki kodları yükleriz şimdi de sanki bir sunucuya yüklemiş gibi bu kodlarımızı çalıştıracağız : 

```
# Production ortamında projeyi çalıştırma
serve -s dist
``` 
bu komutu çalıştırdıktan sonra göreceğiniz görüntü  :
```
   │                                            │
   │   Serving!                                 │
   │                                            │
   │   - Local:    http://localhost:3000        │
   │   - Network:  http://192.168.10.144:3000   │
   │                                            │
   │   Copied local address to clipboard!       │
   │                                            │
```
bu görüntüde de aynı şekil local kısmındaki url'e tıkladığınızda projenizin production ortamında ayağa kalktığını göeceksiniz

Eğer projenizde iki ayrı **`.env`** dosyası(**`.env.development , .env.production`**) varsa,production ortamında ve development ortamında farklı değişkenleri göreceksiniz

Bu ortam değişkenleri sayesinde, uygulamanızın hangi ortamda çalıştığını kolayca kontrol edebilir ve farklı ortamlara özel yapılandırmalar yapabilirsiniz.

Artık bir sonraki dersimize geçebilliriz [React ile stil işlemleri](../lesson-3/lesson3.md)