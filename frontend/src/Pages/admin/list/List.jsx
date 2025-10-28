import * as React from "react";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import Datatable from "../../../components/admin/datatable/Datatable";
import "./list.css"



const List = () => {
    return(
       <div className="adminList">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>               
                <Datatable/>
            </div>
        </div>
    )
}

export default List