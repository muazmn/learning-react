// this page get the parameter id

import{useEffect, useState} from 'react';
import{useParams} from 'react-router-dom';

function SinglePost(){
    const params = useParams();
    const [post, setPost]  =useState({});
    useEffect(() => {
        // the id is come from the name of this file, the file's name must use underscore coz we can use it to identify that is parameter
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then((response) => response.json()
        .then((json) => setPost(json)))
    },);

    return(
        <>
        {/* use question mark coz useEffect executed after our app rendered, and the question mark means, if the post still empty, just ignore it, is not empty, display the data */}
        <h2>{post?.title}</h2>
        <h2>{post?.body}</h2>
        </>
    )
}

export default SinglePost;
