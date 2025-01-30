# 1-useRef nedir ?

📌 **Tanım:**

**`useRef`**, React’te değişkenleri oluşturmak ve saklamak için kullanılan bir hook'tur.   

**`useState`** gibi değeri korur, ancak bileşen yeniden render edildiğinde değişkenini sıfırlamaz.

📌 **Öne çıkan özellikleri:**

✅ Bir bileşenin yeniden render edilmesini tetiklemez (state’in aksine)

✅ DOM elemanlarına doğrudan erişim sağlar

✅ Component içinde değişken saklamak için kullanılabilir

🎯 **Örnek 1: useRef ile DOM Manipülasyonu**

En yaygın kullanım senaryosu, bir **`input alanına`** doğrudan erişim sağlamak ve odağı (focus) yönetmektir.

```
import { useRef } from "react";

const InputFocus = () => {
    const inputRef = useRef(null); // input elemanını saklamak için referans oluşturduk

    const handleFocus = () => {
        inputRef.current.focus(); // inputRef üzerinden input'a doğrudan erişip focus ekliyoruz
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Adınızı girin" />
            <button onClick={handleFocus}>Input'a Odaklan</button>
        </div>
    );
};

export default InputFocus;

```

### 📌 Ne oldu?

- **`useRef`** ile inputRef değişkenini oluşturduk.

- **`ref prop`**’u ile bu referansı doğrudan input elementine bağladık.

Butona basınca **`inputRef.current.focus()`** diyerek doğrudan input alanına odaklanmasını sağladık.

---

# 2. useRef Kullanım Alanları Nelerdir?

#### 1️⃣ DOM Elemanlarına Doğrudan Erişim (Manipülasyon)

**`focus`**, **`scroll`**, **`value`** değişimi gibi işlemler için **`useRef`** kullanılır.

**Örnek:** Kullanıcının yanlış giriş yapması durumunda input'un border'ını kırmızı yapmak.

```
const InputValidation = () => {
    const inputRef = useRef(null);

    const handleValidation = () => {
        if (inputRef.current.value.length < 5) {
            inputRef.current.style.border = "2px solid red";
        } else {
            inputRef.current.style.border = "2px solid green";
        }
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="En az 5 karakter girin" />
            <button onClick={handleValidation}>Kontrol Et</button>
        </div>
    );
};

```

#### 2️⃣ Değişken Saklamak (Render'ı Tetiklemeden State Gibi Kullanmak)

Component içinde bir değişkeni saklamak için kullanılır, ancak state gibi render tetiklemez.

Örnek: Bir bileşenin kaç defa render olduğunu takip edelim.

```
import { useEffect, useRef, useState } from "react";

const RenderCount = () => {
    const countRef = useRef(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        countRef.current += 1;
        console.log(`Component ${countRef.current} kez render oldu`);
    });

    return (
        <div>
            <p>State: {value}</p>
            <button onClick={() => setValue(value + 1)}>Arttır</button>
        </div>
    );
};

export default RenderCount;

```

**📌 Ne oldu?**

- **`countRef`** değişkeni her render’da değişti, ancak bileşeni yeniden render etmedi.

- Böylece, kaç defa render olduğunu sayabiliriz.
 
---

# 3-forwardRef Nedir?

📌 **Tanım:**

Normalde bir bileşene ref prop’u gönderdiğimizde, bu prop alt bileşene doğrudan aktarılmaz. İşte bu sorunu çözmek için forwardRef kullanılır ve bir bileşenin içindeki DOM elemanlarına doğrudan erişim sağlar.

📌 **Öne çıkan özellikleri:**

✅ Bir bileşene dışarıdan ref atama imkanı sağlar.

✅ Özel bileşenler içinde DOM manipülasyonu yapmak için kullanılır.

#### 🎯 Örnek 2:
**`forwardRef`** Kullanarak Ref'i Aktarma

```
import { forwardRef, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
    return <input ref={ref} type="text" placeholder={props.placeholder} />;
});

const App = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <CustomInput ref={inputRef} placeholder="Adınızı girin" />
            <button onClick={handleFocus}>Odaklan</button>
        </div>
    );
};

export default App;

```

📌 **Ne oldu?**

- **`forwardRef`** sayesinde ref artık **`CustomInput`** bileşenine aktarılabilir hale geldi.
- Böylece **ref**, input elemanına bağlanabildi ve butona tıklayınca input’a odaklanabildik.

# SONUÇ

✅ useRef, bir state gibi değer saklar ancak render tetiklemez.

✅ useRef, DOM elemanlarına erişmek ve bileşen içinde değişken saklamak için kullanılır.

✅ forwardRef, ref’i özel bileşenler içinde yönlendirmek için kullanılır.

✅ forwardRef, bileşenlerin içindeki DOM elemanlarını dışarıdan yönetmek için kullanılır.

🚀 Artık useRef ve forwardRef konularına tam anlamıyla hakimsin! Bir sonraki adıma geçebiliriz. 👏🔥

Sonraki ders içeriği [React useReducer](../lesson-7/lesson7.md)