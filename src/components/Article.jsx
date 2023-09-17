/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

// when we wanna passing data from other file to this component, we can use props
function Article(props){
    // return with square bracket and fragment used when we wanna return html elem more than one
    return (
        <>
        <h3>{props.title}</h3>
        <small>Date: {props.date}, tags: {props.tags.join(", ")}</small>
        </>
    )

    // syntax below just allows us return one html element
    // return <div>this is component</div>
}

// need to export to enable us to use this component on other file
export default Article