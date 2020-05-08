import React, { Component } from "react";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";
import SearchBar from "./SearchBar";



class SearchResultContainer extends Component {
    state = {
        employees: [],
        selectedEmployees: [],
        search: "",
        sortOrder: ""
    };

    componentDidMount() {
        API.getUsers()
            .then(res => this.setState({
                employees: res.data.results,
                selectedEmployees: res.data.results
            }))
            .catch(err => console.log(err));
    };


    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        }, console.log("state", this.state));

        let selectedEmployees = this.state.selectedEmployees;

        let filteredEmployees = selectedEmployees.filter(employees => employees.name.last.toLowerCase().indexOf(value) > -1);
        return filteredEmployees;
    };






    // handleFilter = event => {
    //     const 
    // }


    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        API.getDogsOfBreed(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };




    sortByLastName = () => {
        const selected = this.state.selectedEmployees;

        if (this.state.sortOrder === "asc") {
            const sorted = selected.sort((a, b) =>

                (a.name.last.toLowerCase() > b.name.last.toLowerCase()) ? 1 : -1)

            this.setState({
                selectedEmployees: sorted,
                sortOrder: "desc"
            })
        }

        else {
            const sorted = selected.sort((a, b) => (a.name.last.toLowerCase() < b.name.last.toLowerCase()) ? 1 : -1)

            this.setState({
                selectedEmployees: sorted,
                sortOrder: "asc"
            })
        }

    };



    sortByFirstName = () => {
        const selected = this.state.selectedEmployees;

        if (this.state.sortOrder === "asc") {
            const sorted = selected.sort((a, b) =>

                (a.name.first.toLowerCase() > b.name.first.toLowerCase()) ? 1 : -1)

            this.setState({
                selectedEmployees: sorted,
                sortOrder: "desc"
            })
        }

        else {
            const sorted = selected.sort((a, b) => (a.name.first.toLowerCase() < b.name.first.toLowerCase()) ? 1 : -1)

            this.setState({
                selectedEmployees: sorted,
                sortOrder: "asc"
            })
        }

    };






    render() {
        return (
            <>
                <h2>Employee Directory</h2>
                <SearchBar
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeTable
                    hello={this.state}
                    employees={this.state.selectedEmployees}
                    sortByLastName={this.sortByLastName}
                    sortByFirstName={this.sortByFirstName}
                />

            </>
        );
    }
}

export default SearchResultContainer;