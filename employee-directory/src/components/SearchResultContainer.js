import React, { Component } from "react";
import API from "../utils/API";
import EmployeeTable from "./EmployeeTable";
import SearchBar from "./SearchBar";

class SearchResultContainer extends Component {
    state = {
        employees: [],
        selectedEmployees: [],
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
        let value = event.target.value;
        const employees = this.state.employees;

        let selectedEmployees = employees.filter(employee => employee.name.last.toLowerCase().includes(value.toLowerCase()));

        this.setState({
            ...this.state,
            selectedEmployees
        }, console.log("state", this.state));
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
                    employees={this.state.selectedEmployees}
                    sortByLastName={this.sortByLastName}
                    sortByFirstName={this.sortByFirstName}
                />

            </>
        );
    }
}

export default SearchResultContainer;
