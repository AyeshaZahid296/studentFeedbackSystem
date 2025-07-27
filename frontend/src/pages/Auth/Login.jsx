import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/layout/AuthLayout';
import Input from '../../components/inputs/Inputs';
import { UserContext } from '../../context/userContext';

const Login = () => {
    const { updateUser } = useContext(UserContext);
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (form.username === 'admin123' && form.password === 'admin@123') {
            const dummyUser = {
                username: 'admin123',
                role: 'admin',
                token: 'dummy-token',
            };
            updateUser(dummyUser);
            navigate('/admin/dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <AuthLayout>
            <div className="max-w-sm mx-auto mt-10">
                <h2 className="text-xl font-bold mb-4">Admin Login</h2>
                {error && <p className="text-red-500 mb-2">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Username"
                        name="username"
                        placeholder="Enter your username"
                        value={form.username}
                        onChange={handleChange}
                        type="text"
                    />
                    <Input
                        label="Password"
                        name="password"
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={handleChange}
                        type="password"
                    />
                    <button type="submit" className="btn-primary w-full mt-2">Login</button>
                </form>
            </div>
        </AuthLayout>
    );
};

export default Login;
