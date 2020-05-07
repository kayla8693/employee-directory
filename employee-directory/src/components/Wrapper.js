import React from "react";

function Wrapper(props) {
    <>
        <div className="wrapper">{props.children}</div>;
    </>
}

export default Wrapper;