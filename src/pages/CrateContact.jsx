import React from "react";
import LayoutContact from "../components/LayoutContact";
import { NavLink } from "react-router-dom";

function CreateContacts() {
    return(
        <div className="w-75 mx-auto">
        <h1 className="text-center ">Add a new contact</h1>
        <LayoutContact/>
        <NavLink to="/">Back to Contact List</NavLink>
        </div>
        
    )
}

export default CreateContacts