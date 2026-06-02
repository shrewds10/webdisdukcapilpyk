import "./new.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import React, { useState } from 'react';
import { BiHide, BiShow  } from "react-icons/bi";
// import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

const New = ({inputs,title}) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    return(
        <div className="adminNew">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1 className="title">{title}</h1>
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
                            {inputs.map((input)=> (
                                <div className="formInput">
                                    <label></label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <div className="formInput passwordInput">
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Enter password"
                                />
                                <span
                                    className=""
                                    type="button"
                                    onClick={handleTogglePassword}
                                >
                                    {showPassword ? <BiHide/> : <BiShow/>}
                                </span>
                            </div>
                            <div className="formInput confirmPassword">
                                <input type="password" placeholder="Konfirmasi Password"/>
                            </div>
                            <div className="buttonContainer">
                                <button>Kirim</button>                      
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New