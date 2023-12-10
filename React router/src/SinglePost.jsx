import { Link, useParams } from "react-router-dom"

const singlePost = ({posts}) => {
    const params = useParams()
    const id = params.id*1
    console.log(params)
    const post = posts.find((post) => {
        return post.id === id
    })
    if(!post){
        return null
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <Link to='/posts'>
                Back to posts
            </Link>
            <hr />
            <Link to='/'>
                To Homepage
            </Link>
        </div>
    )
}
export default singlePost