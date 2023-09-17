/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import Article from '../components/Article';
import Search from '../components/Search';
import postsData from '../posts.json'
// import { useState } from 'react';


function HomePage() {
    const[posts,setPosts] = useState(postsData);
    const[totalPosts, setTotalPosts] = useState(0);

    
    // the value is come from event.target.value in Search component
    const onSearchChange = (value) => {
      const filterPosts = postsData.filter((item) =>  item.title.includes(value))
      setPosts(filterPosts)
      setTotalPosts(filterPosts.length)
    };

    // the zero array will make sure console.log() just executed once(componentDidMount) and the zero array will monitor the state, if there's no state, it wouldn't execute process in the useEffect and just executed it once 
    // the way we wanna execute it process when there's state changed, just put the posts in the array as an example(componentDidUpdate)
    // the return concept is like componentDidUnmount, used when we wanna remove listener or other to make our app lighter
    useEffect(() => {
        console.log("render")

        return() => {
            console.log('cleanUp')
        }
    },[posts]);
    return ( 
        <>
        <h1>Simple Blog</h1>
        {/* the first onSearchChange was came from props.onSearchChange in search component */}
        <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
        
        {posts.map((props, index) => (
                <Article {...props} key={index} />
            ))}
        {/* {posts.map(({title, tags, date}, index) => (
                <Article {...{title, tags,date}} key={index} />
            ))} */}
        {/* {posts.map((blog) => (
                <Article title={blog.title} tags={blog.tags} date={blog.date} />
            ))} */}
        </>
     );
}

export default HomePage;