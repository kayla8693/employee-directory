import React from "react";
import Moment from "react-moment";

function EmployeeTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th onClick={props.sortByFirstName}><button>First Name</button></th>
                    <th onClick={props.sortByLastName}><button>Last Name</button></th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => (
                    <tr className="tableRow" key={employee.login.uuid}>
                        <td>
                            <img alt={employee.name.first + " " + employee.name.last} className="employeePic" src={employee.picture.medium} />
                        </td>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td><Moment format="MM/DD/YYYY">{employee.dob.date}</Moment></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default EmployeeTable;
