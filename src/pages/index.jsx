/* eslint-disable react/jsx-key */
import Article from '../components/Article';
import posts from '../posts.json'
import { useState } from 'react';
function HomePage() {
    // the first is the variable, the second is the mutator, means used to change the first variable, to change the search value, we can use setSearch
    // the zero string in the useState is the initial value of search, then we can use setSearch to change the value of search next time
    const [search, setSearch] = useState("")

    // event.target.value is the value in that input, if a user inserts any keywords, so the value is the keywods, if not, the default is just zero string
    const changeSearch = (event) => {
        setSearch(event.target.value);
    };
    return ( 
        <>
        <h1>Simple Blog</h1>
        <div>
            {/* onChange used to inform to react if there's something changes in that element(input) and execute the given function*/}
            Cari Artikel: <input onChange={changeSearch}></input>
            <small>0 data found with keyword {search}</small>
        </div>
        {posts.map(({title, tags, date}, index) => (
                <Article {...{title, tags,date}} key={index} />
            ))}
        {/* {posts.map((blog) => (
                <Article title={blog.title} tags={blog.tags} date={blog.date} />
            ))} */}
        </>
     );
}

export default HomePage;