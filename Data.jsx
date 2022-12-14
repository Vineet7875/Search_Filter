import React from "react";
const Data = (props) => {
    return (<>
        <div className="cards">
            <img src={props.value.avatar} />
            <h3>UserID:{props.value.id}</h3>
            <span>Name:{props.value.first_name}  {props.value.last_name}</span>
            <span>Email:{props.value.email}</span>
        </div>
    </>)
}
export default Data