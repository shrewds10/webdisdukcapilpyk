import React from "react";
import "./home.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";

const HomeAdmin = () => {
    return(
        <div className="adminHome">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                container
            </div>
        </div>
    )
}

export default HomeAdmin