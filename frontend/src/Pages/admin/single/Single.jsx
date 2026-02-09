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
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Informasi</h1>
                        <div className="item">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png" alt="" className="itemImg" />
                            <div className="itemDetails">details</div>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="buttom"></div>
            </div>
        </div>
    )
}

export default Single