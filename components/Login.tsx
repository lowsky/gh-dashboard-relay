'use client';

import { deleteAuthCookie } from '../app/actions/deleteAuthCookie';
import { Button } from './ui/button';

const handleLogin = () => {
    window.location.href = `/api/auth/login?original_url=${window.location.href}`;
};

const handleLogout = async () => {
    await deleteAuthCookie();
    window.location.reload();
};

export function Logout() {
    return <Button onClick={handleLogout}>Logout & Delete Auth cookies.</Button>;
}

export function Login() {
    return <Button onClick={handleLogin}>Login</Button>;
}
