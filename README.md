# React Kursuna Hoş Geldiniz! 🎉

## 🎯 Kursun Amacı

Bu kurs, modern web geliştirme dünyasında yaygın olarak kullanılan **React** ve **Node.js** ekosistemlerini öğrenmek isteyen herkese yöneliktir. Kurs boyunca, baştan sona React ile etkileşimli arayüzler geliştirmeyi, Node.js ile backend oluşturmayı ve bu iki teknolojiyi bir arada kullanmayı öğreneceksiniz.

Kurs kapsamında şu konuları ele alacağız:

- React'in temelleri,
- JSX ve Component yapıları,
- State ve Props yönetimi,
- React Router ile sayfa yönlendirmeleri,
- API entegrasyonları,
- ve daha fazlası!

Kurs sonunda, **React tabanlı bir frontend uygulaması** geliştirip, **Node.js ile bir backend oluşturabileceksiniz.**

---

## 👋 Kendimi Tanıtayım

Merhaba! Ben **[Abdulkadir Özenç]**, bu kursun eğitmeni ve web geliştirme tutkunu bir yazılım geliştiricisiyim. Uzun süredir **React** ve **Node.js** ekosistemleriyle projeler geliştiriyor ve bu alanlarda eğitimler veriyorum.

Bu kursu aslında **kendi kullanımım için** oluşturdum. Elimin altında düzenli bir doküman olmasını istedim. Ancak, aynı zamanda başkalarının da faydalanabileceği bir kaynak olmasını hedefledim. Bu nedenle kursun amacı **yalnızca teori anlatmak değil, uygulamalı olarak öğretmek!**

---

## 📚 Kurs İçeriği

Aşağıda kursun ders başlıkları ve ilgili içeriklere erişim bağlantıları bulunmaktadır:

### 🔍 [1- Node.js ve React: Temel Kavramlar](./src/lessons/lesson-1/lesson1.md#nodejs-ve-react-temel-kavramlar)

### 🌐 [2- Ortam Değişkenleri ve Build Nedir?](./src/lessons/lesson-2/lesson2.md#ortam-degiskenleri-ve-build-nedir)

---

## 🚀 Kurulum ve Dosya Yapısı

Bu kursu **tek bir proje** üzerinden anlatacağım. Bu nedenle, projenin dosya yapısı aşağıdaki gibi düzenlenmiştir:

```
REACT-COURSE/
 ├── node_modules/
 ├── public/
 ├── src/
    ├── lessons
      ├── lesson-1
         ├── lesson1.md
         ├── lesson1_2.md
         ├── Lesson1Component.jsx
      ├── lesson-2
         ├── lesson2.md
         ├── Lesson2Component.jsx
 ├── .env
 ├── .env.development
 ├── .env.production
```

Bu yapıya göre her ders, **`src/lessons`** klasörü altında **ayrı bir klasör** olarak bulunmaktadır.

Eğer bir dersin kodlarına erişmek istiyorsanız, **App.jsx** dosyasına gidip ilgili dersi import etmeniz yeterlidir.

### 📝 App.jsx Dosyası

```jsx
import Lesson1 from './lessons/lesson-1/Lesson1Component';
import Lesson2 from './lessons/lesson-2/Lesson2Component';
import Lesson3 from './lessons/lesson-3/Lesson3Component';
import Lesson4 from './lessons/lesson-4/Lesson4Component';
import Lesson5 from './lessons/lesson-5/Lesson5Component';

function App() {
  return (
    <>
      <Lesson1 /> {/* lesson-1'deki kodların çıktısını göreceksiniz */}
    </>
  );
}

export default App;
```
Bu yapı sayesinden herhangi bir dersi incelemek için **o dersin bileşenini import etmek** yeterlidir.

**Önemli Not :** 
Import nedir,bu dosya yapısı nedir gibi sorular aklınızda oluştuysa merak etmeyin ilk derste dosya yapısından bahsediyorum,bu bilgiyi verme amacım eğer kurs içeriğinde yazılan kodları indirmek istiyorsanız bu projenin dosya yapısına hakim olmalısınız onun haricinde zaten kendi projenizi oluşturacağınız için bu projenin dosya yapısını bilmenize gerek yoktur !

---

## 🎉 Hadi Başlayalım!

React dünyasına adım atmaya hazır mısın?

Eğer herhangi bir sorunuz olursa benimle iletişime geçebilirsiniz. Bu kurs boyunca **uygulamalı ve akıcı bir öğrenme deneyimi** yaşayacağz!

Haydi, başlayalım! 🚀

