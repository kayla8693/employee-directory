import React from "react";

function SearchBar(props) {
    return (
        <>
            <form>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="searchBox"
                    placeHolder="Search for an employee"
                    id="search"        

                />
            </form>
        </>
    )
}

export default SearchBar;