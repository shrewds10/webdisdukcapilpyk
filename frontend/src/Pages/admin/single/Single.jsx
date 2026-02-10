import React from "react";
import "./single.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import Chart from "../../../components/admin/chart/Chart";
import TableUser from "../../../components/admin/table/Table_User"

const Single = () => {
    return(
        <div className="adminSingle">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Informasi</h1>
                        <div className="item">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Test Admin</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">test@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">081213141516</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Alamat:</span>
                                    <span className="itemValue">Jl. Jambu Kel. Koto Kociak</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart height={250} width={650}/>
                    </div>
                </div>
                <div className="buttom">
                    <TableUser/>
                </div>
            </div>
        </div>
    )
}

export default Single