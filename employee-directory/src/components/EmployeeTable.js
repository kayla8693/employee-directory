import React from "react";

function EmployeeTable(props) {
    return <div value={props.employees} id="result" className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default EmployeeTable;