// we don't need to parse the data to JSON cause all of those have been handle by loader

// to use the loader, we need to implement to related route
export const posts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts");
}
export const postById = ({params}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
}