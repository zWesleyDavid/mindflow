import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import { useAuth } from '../auth/AuthContext';

const Register = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            await api.post('/users/register', { name, email, password: senha });
            const res = await api.post('/auth/login', { email, password: senha });
            const token = res.data.access_token;
            login(token);
            navigate('/dashboard');
        } catch (err: any) {
            console.log(err);
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('Erro ao registrar. Tente outro e-mail.');
            }
        }
    };

    return (
        <div className="register-page">
            <h2>Criar conta</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <p>
                Já tem conta? <Link to="/login">Entrar</Link>
            </p>
        </div>
    );
};

export default Register;
