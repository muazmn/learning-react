/* eslint-disable react/jsx-key */
import { useState } from 'react';
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