import { Link, useParams } from "react-router-dom"

const singleUser = ({users}) => {
    const params = useParams()
    const id = params.id*1
    const user = users.find((user) => {
        return user.id === id
    })
    if(!user){
        return null
    }
    console.log(params)
    return(
        <div>
            <h1>{user.name}</h1>
            <h2>{user.phone}</h2>
            
            <Link to='/users'>
                Back to Users
            </Link>
            <hr />
            <Link to='/'>
                Back to Homepage
            </Link>
        </div>
    )
    
}
export default singleUser