import React from "react";
import "./single.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";

const Single = () => {
    return(
        <div className="adminSingle">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    
                </div>
                <div className="buttom"></div>
            </div>
        </div>
    )
}

export default Single