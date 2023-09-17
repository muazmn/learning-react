/* eslint-disable react/jsx-key */
function Article(){
const name = "muaz"
const titles = ['ahmad', 'muaz', 'aiman'];
    // return with square bracket and fragment used when we wanna return html elem more than one
    return (
        <>
        <div>{name}</div>
        <div>{titles.map((title) => {
            return (
                <div>{title}</div>
            )
        })}</div>
        </>
    )

    // syntax below just allows us return one html element
    // return <div>this is component</div>
}

// need to export to enable us to use this component on other file
export default Article