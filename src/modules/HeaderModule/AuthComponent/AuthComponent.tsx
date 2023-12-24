import React, {useState} from "react";
import {Button} from "@mui/material";
import "./styles.css";
import AuthModalComponent from "@modules/HeaderModule/AuthModalComponent/AuthModalComponent";

const AuthComponent: React.FC = () => {
    const [modalState, setModalState] = useState(false);

    const handleAuthModal = () => {
        setModalState(true);
    };

    const handleCloseAuthModal = () => {
        setModalState(false);
    };
    const handleApply = (name: string, password: string) => {
        console.log("Name: ", name);
        console.log("Password: ", password);
    }

    return (
        <div className='auth'>
            <Button variant="outlined" onClick={handleAuthModal}>SignIn</Button>
            <Button variant="contained" onClick={handleAuthModal}>LogIn</Button>
            <AuthModalComponent onApply={handleApply} open={modalState} onClose={handleCloseAuthModal} />
        </div>
    )
}

export default AuthComponent;
