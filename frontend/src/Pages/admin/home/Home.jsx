import React from "react";
import "./home.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import Widget from "../../../components/admin/widget/Widget";

const HomeAdmin = () => {
    return(
        <div className="adminHome">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget/>
                    <Widget/>
                    <Widget/>
                    <Widget/>
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin