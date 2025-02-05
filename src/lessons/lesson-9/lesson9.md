# React Context Kullanımı

## 1. Context Nedir?
React Context, bileşenler arasında veri paylaşımını sağlayan bir yapıdır. Context, özellikle prop drilling (özelliklerin bileşenden bileşene taşınması) problemini çözmek için geliştirilmiştir. Uygulamanın farklı noktalarındaki bileşenler arasında doğrudan veri aktarımı yapmayı mümkün kılar.

## 2. Neden Context'e İhtiyaç Duyulur?
React'te genellikle veriler üst bileşenlerden alt bileşenlere **props** ile iletilir. Ancak, büyük ve karmaşık bileşen yapılarında her seviyede **props** geçirmek zorlayıcı olabilir. Context API, bu tür durumlarda daha temiz ve verimli bir yöntem sunar. **Genellikle şu durumlarda tercih edilir:**

- Kullanıcı oturum bilgileri (auth state)
- Tema yönetimi (dark/light mode)
- Dil (i18n) yönetimi
- Global olarak kullanılan veriler (örneğin, bir alışveriş sepeti durumu)

## 3. Context'in Kullanıldığı ve Kullanılmadığı Durumlara Bir Kod Örneği

**Context Kullanılmadan:**

```jsx
function Parent() {
  const [theme, setTheme] = React.useState("light");
  return <Child theme={theme} />;
}

function Child({ theme }) {
  return <GrandChild theme={theme} />;
}

function GrandChild({ theme }) {
  return <div>Theme: {theme}</div>;
}
```

Bu yapıda, `theme` prop'u her bileşenden geçerek en içteki bileşene kadar ulaştırılıyor. **Prop drilling** problemi burada ortaya çıkıyor.

**Context Kullanarak:**

```jsx
const ThemeContext = React.createContext();

function Parent() {
  const [theme, setTheme] = React.useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const theme = React.useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
}
```

Bu örnekte `useContext` hook'u sayesinde `theme` prop'unu her bileşenden geçirmeye gerek kalmadan doğrudan ilgili bileşende kullanabiliyoruz.

## 4. Gerçek Senaryoda Kullanımı
Gerçek bir uygulama senaryosunda, kullanıcı oturum yönetimi için Context kullanılabilir:

```jsx
const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function Navbar() {
  const { user, logout } = React.useContext(AuthContext);
  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Please log in</span>
      )}
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <Navbar />
    </AuthProvider>
  );
}
```

Bu örnekte, kullanıcı giriş yapıp çıkış yaptığında **AuthContext** sayesinde tüm bileşenler güncelleniyor. Kullanıcı bilgilerini her bileşene prop olarak geçirmek yerine, tüm bileşenler `useContext(AuthContext)` ile verilere ulaşabiliyor.

# Kişisel kullanımım
Ben state değerlerimi tek bir dosyadan yönetmek istediğim için daha farklı bir yöntem tercih ediyorum,context klasörü altında bir context dosyası tanımlıyorum ve içinde state değerlerimi ve provider elementimi tanımlıyorum 

### Kod örneği : 
Mevcut dersin içeriğini oluşturan kodlarda kendi kullanımım mevcuttur,bu kursun(lesson-9) klasörü altında dosya yapılanması ve kodlar bulunmaktadır
## Sonuç
React Context, özellikle global state yönetimi gereken durumlarda prop drilling'i önleyerek kodu daha düzenli hale getirir. Ancak büyük ölçekli uygulamalarda **Redux veya Zustand gibi state yönetim kütüphaneleri** daha iyi bir çözüm olabilir. Küçük ve orta ölçekli projelerde Context, basit ve etkili bir yöntemdir.

Bir sonraki ders içeriği [React fetch/api ? ](../lesson-10/lesson10.md)