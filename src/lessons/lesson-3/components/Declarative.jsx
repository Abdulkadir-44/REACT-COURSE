import React from 'react'

//Reactın bir konsepti olan declarative tanım sayesinde,biz bir butona stil uygulamak istediğimizde onu seçmiyoruz sadece ne yapacağımız yazıyoruz 
//react arka planda kendisi onu seçiyor zaten 
const Declarative = () => {
    return (
        <button style={{ background: "red" , padding:10 , marginTop : 4 }}>Declarative</button>
    )
}

export default Declarative