// this page get the parameter id

import { useLoaderData } from "react-router-dom";


function SinglePost(){
    const post = useLoaderData()

    return(
        <>
        {/* use question mark coz useEffect executed after our app rendered, and the question mark means, if the post still empty, just ignore it, is not empty, display the data */}
        <h2>{post?.title}</h2>
        <h2>{post?.body}</h2>
        </>
    )
}

export default SinglePost;
