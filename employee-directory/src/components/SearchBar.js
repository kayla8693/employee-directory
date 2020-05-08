import React from "react";

function SearchBar(props) {
    return (
        <>
            <form>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="searchBox form-control"
                    placeholder="Search by last name"
                    id="search"        

                />
            </form>
        </>
    )
}

export default SearchBar;