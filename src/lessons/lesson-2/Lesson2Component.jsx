
const Lesson2Component = () => {
  
  
  return (
    <>
    <div>import.meta.env.MODE : {import.meta.env.MODE}</div>
    <div>import.meta.env.BASE_URL : {import.meta.env.BASE_URL}</div>
    <div>
    import.meta.env.PROD : {import.meta.env.PROD ? "production" : "development"}
    </div>
    <div>
    import.meta.env.DEV : {import.meta.env.DEV ? "development" : "production"}
    </div>
    <div>
      {import.meta.env.VITE_API_URL}
    </div>
    </>
  )
}

export default Lesson2Component