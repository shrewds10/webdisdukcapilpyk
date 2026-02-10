import React from "react";
import "./home.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import Widget from "../../../components/admin/widget/Widget";
import Chart from "../../../components/admin/chart/Chart";
import Featured from "../../../components/admin/featured/Featured";
import TableUser from "../../../components/admin/table/Table_User"

const HomeAdmin = () => {
    return(
        <div className="adminHome">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="users"/>
                    <Widget type="news"/>
                    <Widget type="documents"/>
                    <Widget type="staff"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart height={350} width={650}/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Berita Terbaru</div>
                    <TableUser/>
                </div>
            </div>
        </div>
    )
}

export default HomeAdmin