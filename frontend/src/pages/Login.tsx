import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import { useAuth } from '../auth/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await api.post('/auth/login', { email, password: senha });
            const token = response.data.access_token;
            login(token);
            navigate('/dashboard');
        } catch (err) {
            setError('Credenciais inválidas.');
        }
    };

    return (
        <div className="login-page">
            <h2>Entrar</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Entrar</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <p>
                Não tem conta? <Link to="/register">Cadastre-se</Link>
            </p>
        </div>
    );
};

export default Login;
