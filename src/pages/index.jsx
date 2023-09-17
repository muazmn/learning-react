/* eslint-disable react/jsx-key */
import Article from '../components/Article';
import posts from '../posts.json'

function HomePage() {
    return ( 
        <>
        <h1>Simple Blog</h1>
        {posts.map((blog) => (
                <Article title={blog.title} tags={blog.tags} date={blog.date} />
            ))}
        </>
     );
}

export default HomePage;