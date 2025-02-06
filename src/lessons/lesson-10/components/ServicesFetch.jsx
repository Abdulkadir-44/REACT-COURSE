import { useEffect, useState } from "react"
import { getPosts } from "../services"

const ServicesFetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts('https://jsonplaceholder.typicode.com/posts')
            .then((data) => setPosts(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {
                posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </>
    )
}

export default ServicesFetch