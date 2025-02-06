import { useEffect, useState } from "react"

const ClassicFetch = () => {

    const [users, setUsers] = useState([])

    //POST METHOD
    const addPost = data => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(resData => console.log(resData))
            .catch(err => console.log(err))
    }
    //headers bu şekilde de eklenebilir 
    const headers = new Headers()
    headers.append('Content-type', 'application/json')


    //JSON gönderebildiğim gibi formData'da gönderebilirim ,dosya gönderimi için kullanılır
    const formData = new FormData()
    formData.append('title', "deneme")
    formData.append("body", "test-trail")


    //GET METHOD
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (res.ok) return res.json()
            })
            .then(data => setUsers(data))
            .catch(err => console.log(err))

        addPost({
            userId: 1,
            title: "Deneme",
            body: "yer fıstığı"
        })
    }, [])



    return (
        <>
            {
                users && (
                    users.map(user => (
                        <li key={user.id}>{user.name}</li>
                    ))
                )
            }
        </>
    )
}

export default ClassicFetch