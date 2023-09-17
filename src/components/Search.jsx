import { useState } from "react";

function Search(props) {
     // the first is the variable, the second is the mutator, means used to change the first variable, to change the search value, we can use setSearch
    // the zero string in the useState is the initial value of search, then we can use setSearch to change the value of search next time
    const [search, setSearch] = useState("")

    // event.target.value is the value in that input, if a user inserts any keywords, so the value is the keywods, if not, the default is just zero string
    const onSearchChange = (event) => {
        setSearch(event.target.value);
        // the name below is not related to other, it can be different, it used when we wanna the input changes of the value exposed to it parent, and the parent need to listed this function 
        props.onSearchChange(event.target.value)
    };
    return ( 
        <>
        <div>
            {/* onChange used to inform to react if there's something changes in that element(input) and execute the given function*/}
            Cari Artikel: <input onChange={onSearchChange}></input>
        </div>
            <small>0 data found with keyword {search}</small>
        </> 
    );
}

export default Search;