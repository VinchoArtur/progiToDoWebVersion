import React, {useEffect, useState} from "react";
import {Box, Button, Modal, TextField} from "@mui/material";
import './styles.css'

interface AuthModalProps {
    open: boolean;
    onClose: () => void;
    onApply: (name: string, password: string) => void;
}

const AuthModalComponent: React.FC<AuthModalProps> = ({ open, onClose, onApply }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(!!name && !!password)
    }, [name, password]);

    useEffect(() => {
        if (open) {
            setName("");
            setPassword("");
            setIsFormValid(false);
        }
    }, [open]);

    const handleApply = () => {
        onApply(name, password);
        onClose();
    }
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
        >
            <Box className='container'>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    defaultValue="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='bottom_button'>
                    <Button onClick={handleApply} variant="contained" disabled={!isFormValid}>Apply</Button>
                    <Button onClick={onClose} variant="outlined">Close</Button>
                </div>
            </Box>
        </Modal>
    );
}

export default AuthModalComponent;
