import React, { useState } from "react";
import Data from "./Data";
import JSONDATA from "./info.json"
const API = () => {
    const [users, setusers] = useState([])
    const [searchTerm, setsearchTerm] = useState("")
    const Event = (e) => {
        setsearchTerm(e.target.value)
    }
    return (<>
        <div className="grandparent">
            <div className="navbar">
                <h1 className="heading">TECHNOBYTE</h1>
                <input placeholder="Search Name..." value={searchTerm} onChange={Event} />
            </div>
            <div className="parents">
                {
                    JSONDATA.filter((currele) => {
                        if (searchTerm === "") {
                            return currele
                        }
                        else if (currele.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || currele.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return currele
                        }
                    }).map((currele, index) => {
                        return (
                            <div key={index}>
                                <Data value={currele} />
                            </div>)
                    })
                }
            </div>
        </div>
    </>)
}
export default API