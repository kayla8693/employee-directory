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
                    className="searchBox"
                    placeholder="Search for an employee"
                    id="search"        

                />
                <input type="submit" value="submit" />
            </form>
        </>
    )
}

export default SearchBar;