/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { GlobalContext } from "../context"
// we're can make component in component like below, the name must be 'pascal case'
// first method
const ArticleStatus = ({isNew}) => {
    // return isNew ?  <span>-- Baru</span> : ''
    // below is the shorter version of syntax above
    return isNew && <span>-- Baru</span>
}

// second method
// const ArticleStatus2 = () => {
//     return <span>-- Baru</span>
// }

// when we wanna use or pass data from other file to this component, we can use props
function Article(props){
    const user = useContext(GlobalContext);
    // return with square bracket and fragment used when we wanna return html elem more than one
    return (
        <>
        <h3>{props.title}</h3>
        <small>
            Date: {props.date}, tags: {props.tags.join(", ")}
            <ArticleStatus isNew={props.isNew}/>
            {/* {props.isNew && <ArticleStatus2/>} */}
        </small>
        <div>
            <small>Writen by {user.username}</small>
        </div>
        </>
    )

    // syntax below just allows us return one html element
    // return <div>this is component</div>
}

// need to export to enable us to use this component on other file
export default Article