import React from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export const Login = () => {
    return (
        <div>
            <Typography variant='h1'> hi Heading </Typography>
            <Button variant="contained" endIcon={<LoginIcon />}>
                Login
            </Button>
        </div>
    )
}
