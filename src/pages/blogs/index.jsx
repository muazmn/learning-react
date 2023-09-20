import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function Blog(){
    const[posts,setPosts] = useState([]);
    // the zero array will make sure console.log() just executed once(componentDidMount) and the zero array will monitor the state, if there's no state, it wouldn't execute process in the useEffect and just executed it once 
    // the way we wanna execute it process when there's state changed, just put the posts in the array as an example(componentDidUpdate)
    // the return concept is like componentDidUnmount, used when we wanna remove listener or other to make our app lighter
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
    },[]);

    return (
        <>
        <h2>My Blog Posts</h2>
        {posts.map((item, index) => (
                <div key={index}><Link to={`${item.id}`}>- {item.title}</Link></div>
            ))}
        </>
    )

}

export default Blog;