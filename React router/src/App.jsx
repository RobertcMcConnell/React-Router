import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import {Link, useLocation,Routes,Route} from 'react-router-dom'
import SingleUser from './singleUser'
import SinglePost from './SinglePost'

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  
  const location = useLocation()
  const {pathname} = location
  const HomePage = () => {
    return(
      <div>
        <h1>Welcome!</h1>
      </div>
    )
  }
  const Users = ({user}) => {
    return(
      <div>
        <h1>Users</h1>
        <ul>
          {
            users.map((user) => {
              return (
                <li key={user.id}>
                  <Link to={`/users/${user.id}`}>
                  {user.name}
                  </Link>
                  </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
  const Posts = ({post}) => {
    return(
      <div>
        <h1>Posts</h1>
        <ul>
          {
            posts.map((post) => {
              return (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>
                  {post.title}
                  </Link>
                  
                  </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const {data} = await axios.get ('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      
      setUsers(data)
      }
    fetchUsers()
    },[])
  useEffect(() => {
    const fetchPosts = async () => {
      const {data} = await axios.get ('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts')
      setPosts(data)

      }
      fetchPosts()
    },[])

  return (
   <div>
    <nav>
      <Link to='/'className={pathname === '/' ? 'selected': ""}>Home</Link>
      <Link to ='/users'className={pathname === '/users' ? 'selected': ""}>Users -{users.length}</Link>
      <Link to='/posts'className={pathname === '/posts' ? 'selected': ""}>Posts -{posts.length}</Link>
    </nav>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/users' element={<Users users={users}/>}/>
      <Route path='/users/:id' element={<SingleUser users={users}/>}/>
      <Route path='/posts' element={<Posts posts={posts}/>}/>
      <Route path='/posts/:id' element={<SinglePost posts={posts}/>}/>
    </Routes>
   </div>
  )
  





}

    

export default App
