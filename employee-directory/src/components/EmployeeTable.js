import React from "react";
import Moment from "react-moment";

function EmployeeTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
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
                        <td>{employee.name.first + " " + employee.name.last}</td>
                        <td>{employee.phone}</td>
                        <td>{employee.email}</td>
                        <td><Moment format="MM/DD/YYYY">{employee.dob.date}</Moment></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

// function ResultList(props) {
//     return (
//       <ul className="list-group">
//         {props.results.map(result => (
//           <li className="list-group-item" key={result.id}>
//             <img alt={result.title} className="img-fluid" src={result.images.original.url} />
//           </li>
//         ))}
//       </ul>
//     );
//   }


export default EmployeeTable;