import React from "react";
import "./new.css"
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
// import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

const New = ({inputs,title}) => {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: event.target.value,
        });
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
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                                
                            ))}
                            <button>Kirim</button>

                            <div
                                style={{
                                    marginLeft: "30%",
                                }}
                            >
                                <h4>
                                    How to show and hide password in ReactJS?
                                </h4>
                                <InputLabel htmlFor="standard-adornment-password">
                                    Enter your Password
                                </InputLabel>
                                <Input
                                    type={
                                        values.showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    onChange={handlePasswordChange("password")}
                                    value={values.password}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                            >
                                                {values.showPassword ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New