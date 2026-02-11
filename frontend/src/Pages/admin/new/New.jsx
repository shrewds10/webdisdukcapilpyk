import React from "react";
import "./new.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";

const New = () => {
    return(
        <div className="adminNew">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1 className="title">Add New User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://static.vecteezy.com/system/resources/previews/004/581/264/non_2x/camera-icon-photography-symbol-illustration-free-vector.jpg" alt="avatar" className="leftImg" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <input type="file" style={{display:"none"}}/>
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="text" />
                            </div>
                            <div className="formInput">
                                <label>Nama</label>
                                <input type="text" />
                            </div>
                            <div className="formInput">
                                <label>Alamat</label>
                                <input type="text" />
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="text" />
                            </div>
                            <div className="formInput">
                                <label>Konfirmasi Password</label>
                                <input type="text" />
                            </div>
                            <button>Kirim</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New