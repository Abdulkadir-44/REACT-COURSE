## useReducer Hook'u Nedir?

React'in `useReducer` hook'u, özellikle karmaşık state yönetimi gereken durumlarda kullanılan güçlü bir alternatiftir. **Redux** gibi state yönetim kütüphanelerine benzer bir mantıkla çalışır ve `useState` hook'una göre daha organize bir yapı sunar.

`useReducer`, bir state değişikliğini **aksiyonlar** (actions) aracılığıyla yöneten bir **reducer fonksiyonu** kullanır. Bu, özellikle çok fazla state değişikliği yapılan bileşenlerde daha okunabilir ve sürdürülebilir bir yapı sağlar.

### useReducer vs. useState

- Eğer **basit bir state** yönetiyorsanız `useState` genellikle yeterlidir.
- Eğer state **birden fazla değer içeriyor ve karmaşık mantıklarla güncelleniyorsa**, `useReducer` daha iyi bir seçenektir.
- `useReducer`, özellikle bir **olaya bağlı olarak farklı state değişikliklerini** yönetmek gerektiğinde avantaj sağlar.

---

## useReducer Sentaksı

`useReducer` şu şekilde çalışır:

```jsx
const [state, dispatch] = useReducer(reducerFunction, initialState);
```

### **1. Reducer Fonksiyonu**
Reducer fonksiyonu, mevcut state ve bir action alır, yeni state'i döndürür.

```jsx
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}
```

### **2. Başlangıç State'i (Initial State)**
Bu, bileşen yüklendiğinde kullanılacak başlangıç değeridir:

```jsx
const initialState = { count: 0 };
```

### **3. Dispatch Kullanımı**
State'i değiştirmek için `dispatch` fonksiyonunu çağırırız:

```jsx
dispatch({ type: "increment" });
dispatch({ type: "decrement" });
```

### **Tam Örnek: useReducer ile Sayaç Uygulaması**

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
}

export default Counter;
```

Bu örnekte, **butonlara tıkladıkça** state güncellenir ve ekrana yansır.

---

## useReducer Nerelerde Kullanılabilir?

### **1. Karmaşık State Yönetimi Gerektiren Bileşenler**
Eğer bir bileşenin state'i **çok fazla alt state içeriyorsa** ve **bunların belirli kurallara göre değişmesi gerekiyorsa**, `useReducer` en iyi çözümdür.

**Örnek:** Bir formdaki input değerlerini ve validasyon hatalarını yönetmek.

```jsx
const formReducer = (state, action) => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "SET_EMAIL":
            return { ...state, email: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
```

### **2. API İsteklerinde State Yönetimi**
`useReducer`, **loading, success ve error state'lerini** yönetmek için harika bir seçenektir.

```jsx
const apiReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
            return { ...state, loading: true, error: null };
        case "FETCH_SUCCESS":
            return { ...state, loading: false, data: action.payload };
        case "FETCH_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
```

### **3. Küçük Ölçekli Global State Yönetimi**
Eğer **Redux gibi büyük bir state yönetim kütüphanesi kullanmak istemiyorsanız**, `useReducer` **Context API** ile birlikte kullanılabilir.

**Örnek:** Kullanıcı oturum yönetimi.

```jsx
const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload, isAuthenticated: true };
        case "LOGOUT":
            return { ...state, user: null, isAuthenticated: false };
        default:
            return state;
    }
};
```

Bunu **Context API** ile birleştirerek küçük ölçekli bir global state yönetimi oluşturabilirsiniz.

---

## Sonuç

`useReducer`, özellikle **karmaşık state yönetimi gerektiren bileşenlerde**, **API işlemlerinde** ve **küçük ölçekli global state yönetiminde** çok kullanışlıdır. Redux gibi büyük bir state yönetim kütüphanesi gerektirmeyen uygulamalarda, daha düzenli ve sürdürülebilir kod yazmayı sağlar.

`useState`'e göre daha organize bir yapı sunduğundan dolayı, **çok fazla state değişimi olan uygulamalarda** kullanımı önerilir.

Bir sonraki ders içeriği [React Memoization](../lesson-8/lesson8.md)