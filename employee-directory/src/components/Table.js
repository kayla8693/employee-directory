import React, { Component } from "react";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";
import SearchBar from "./SearchBar";

class Table extends Component {
    state = {
        employees: [],
        selectedEmployees: [],
        search: ""
    };

    componentDidMount() {
        API.getUsers()
            .then(res => this.setState({
                employees: res.data.results,
                selectedEmployees: res.data.results
            }))
            .catch(err => console.log(err));
    };


    // handleInputChange = event => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({
    //       [name]: value
    //     });
    //   };

    // handleInputChange = event => {
    //     const value = event.target.value
    // }


    // render() {
    //     return (
    //         <div className="bor">
    //             <p className="some">Click Count: {[this.state.employees]}</p>


    //         </div>
    //     );
    // }







    render() {
        return (
            <>
                <h2>Employee Directory</h2>
                <SearchBar />
                <EmployeeTable
                    // employees={this.state.employees}
                />
                <div>sjkfskfja</div>
                
            </>
        );
    }
}

export default Table;