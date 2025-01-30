# **`src/`** klasörü ve detayları

```
src/
 ├── assets/         # Projede kullanılan resimler, SVG'ler veya statik dosyalar burada tutulur.İstersek public/ klasöründe de tutabiliriz
 ├── components/     # Uygulamadaki tekrar kullanılabilir React bileşenleri burada yer alır.
 ├── pages/          # Sayfa bazlı bileşenler (örneğin Home.jsx, About.jsx gibi) burada olur.
 ├── styles/         # CSS veya Tailwind gibi stiller burada yer alır.
 ├── main.jsx        # React uygulamasının giriş noktası, burada `ReactDOM.createRoot()` kullanılır.
 ├── App.jsx         # Ana bileşen, genellikle `<Routes>` veya temel bileşenler burada olur.
 ```
 
 # `main.jsx` Dosyası 🚫
 
 **`main.jsx`** dosyası, React uygulamasının giriş noktasıdır. Bu dosya, uygulamanın kök bileşenini (**`App.jsx`**) alır ve **`index.html`** içindeki **`#root`** elementine bağlar.
 
### main.jsx Dosyasının Temel Görevi 📌 
**1-** React ve ReactDOM'u içe aktarma

**2-** Ana bileşeni (**`App.jsx`**) render etme

**3-** Global CSS dosyasını yükleme

**4-** React uygulamasını **React.StrictMode** içinde çalıştırma (Geliştirme sırasında ek kontroller sağlar)

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Ana bileşeni içe aktarıyoruz
import "./index.css"; // Global CSS dosyasını dahil ediyoruz

// React uygulamasını root elementine bağlama
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

# 📌 Kod Açıklamaları

### 📌 1. React ve ReactDOM'u İçeri Aktarma
```
import React from "react";
import ReactDOM from "react-dom/client";
```
Vite, React 18 ile birlikte gelir, bu yüzden **`ReactDOM.createRoot()`** kullanılır. (Önceki sürümlerde **`ReactDOM.render()`** kullanılıyordu.)

### 📌 2. Ana Bileşeni (App.jsx) Dahil Etme
```
import App from "./App.jsx";
```
**`App.jsx`**, tüm bileşenlerin bağlandığı ana dosyadır.
Uygulamanın içeriğini ve sayfa yönlendirmelerini yönetir.

### 📌 3. Global CSS Dosyasını Dahil Etme
```
import "./index.css";
```
**`Global CSS`** dosyası, tüm uygulamanın stilini içerir.

---

# 📌 4. React Uygulamasını `#root` Elementine Bağlama
```
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

**`document.getElementById("root")`** ,**`index.html`** içindeki **`<div id="root></>`** elementini seçer.

**`ReactDOM.createRoot()`**, React bileşenlerini oluşturur ve render işlemini başlatır.

**`<React.StrictMode>`**, hata yakalama ve geliştirme sürecinde ek kontroller sağlar.Opsiyoneldir

---

# `App.jsx` Dosyası 🚫

**`App.jsx`** dosyası, React uygulamasının ana bileşenidir. Uygulamanın içeriğini ve yapısını belirler. Bu dosya, tüm alt bileşenleri ve sayfa yönlendirmelerini yönetir. Yani, uygulamanın her şeyi burada başlar ve genellikle diğer bileşenler **`App.jsx`**'te çağrılır.

Bu kısmı daha detaylandırmadan önce **`bileşen(component)`** kavramına parantez açmak istiyorum

### Bileşen(component) nedir ?

React’te component (bileşen), kullanıcı arayüzünü (UI) parçalara ayırmamızı sağlayan bağımsız, tekrar kullanılabilir bir yapı bloğudur. Her bir component, belirli bir UI parçasını temsil eder. Örneğin, bir kullanıcı kartı, bir buton, bir form alanı ya da bir liste öğesi bir component olabilir.

Yani mantık ben kodlarımı parçalara bölebilirim ve bu parçaları istediğim noktadan tekrar tekrar çağırabilirim,Mesela iki tane sayfam olsun login ve register adında ben bu sayfalarımda bir tane buton kullanmak istiyorum her iki sayfada da buton kodları yazmaktansa bir tane buton kodu yazarım ve bunun ismine **`Buton`** derim daha sonra ilgili sayfalarda bu **`Buton`** kod parçşasını çağırırım bu şekilde kod tekrarı önlenmiş olur,işte burdaki **`Buton`** kod parçacığına **`Buton`** komponenti denir.

React, component tabanlı bir kütüphanedir, yani uygulama, bir dizi component'ten oluşur.Ve bütün componentlerimin main'i veya annesi **`App.jsx`** componentimdir,diğer bütün componentler bu sayfada çağrılır.

**İçeriği :** 

```
function App() {

  return (
    <>
    <div>Abdulkadir Özenç , App componenti</div>
    </>
  )
}

export default App

```
---

# `components/` Klasörü 🚫
Bu klasör bütün componentlerimizi barındırdığımız klasördür,Projemizde kullanacağımız tüm componentlerimizi bu klasör altında tanımlarız.

React projelerinde, genellikle tüm reusable UI (yeniden kullanılabilir kullanıcı arayüzü) bileşenleri ve yardımcı bileşenler `components` adlı bu klasörde toplanır. Bu klasör, uygulamanın UI parçalarını düzenli bir şekilde yönetmek, yeniden kullanılabilir bileşenler oluşturmak ve projenin bakımını kolaylaştırmak amacıyla kullanılır.

### 🧩 components Klasörünün İçeriği

Bu klasör genellikle, tek bir UI bileşeni, her bir bileşenin kendi bağımsız işlevselliğini ve stillerini tutan dosyalarla birlikte içerir. Örnek olarak:

Buton Bileşeni (**`Button.jsx`**)

Header Bileşeni (**`Header.jsx`**)

Form Bileşeni (**`Form.jsx`**)

Modal Bileşeni (**`Modal.jsx`**)

Sidebar Bileşeni (**`Sidebar.jsx`**)

Geliştiriciler, bu bileşenleri ihtiyaç duydukları her yerde projelerinde tekrar tekrar kullanabilirler. Bu, projedeki kodun tekrarı önler ve bakım işlerini kolaylaştırır.

Mesela Buton bileşeni örneği : 

```
import React from "react";

function Button() {
  return <button> Bu bir butondur... </button>;
}

export default Button;
```

Bu componenti **`App.jsx`**'de kullanmak istersem,

```
import Button from "./componets/Button.jsx"

function App() {

  return (
    <>
    <div>Abdulkadir Özenç , App componenti</div>
    </>
  )
}

export default App
```

# ✨ Kapanış

Bugün, React ve Node.js ekosistemine dair temel bilgilere odaklandık. İlk derste, React'in ne olduğunu, nasıl çalıştığını, Node.js'in sunduğu olanakları ve bu iki teknolojinin neden birlikte kullanıldığını detaylı bir şekilde inceledik. Bu iki güçlü aracın nasıl birbirini tamamladığını ve modern web geliştirme süreçlerinde nasıl güçlü bir işbirliği sunduklarını öğrendik. Ayrıca, React projelerinin temel dosya yapısına göz attık ve bu yapının projeyi nasıl daha düzenli ve sürdürülebilir kıldığını keşfettik.

Bu ilk adımlar, ilerleyen derslerde sizi daha derinlemesine konulara taşıyacak ve bu ekosistemle profesyonel projeler geliştirmenize yardımcı olacak. Şimdi, öğrendiklerinizle bir sonraki aşamalara doğru ilerlemeye hazırsınız!

Sonraki derslerde görüşmek üzere! 🚀 
Bir sonraki ders içeriği [Ortam değişkenleri ve build nedir ?](../lesson-2/lesson2.md)