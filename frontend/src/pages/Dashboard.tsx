import { useEffect, useState } from 'react';
import api from '../api/api';
import { useAuth } from '../auth/AuthContext';

type Board = {
    _id: string;
    title: string;
    description?: string;
};

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [boards, setBoards] = useState<Board[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const fetchBoards = async () => {
        try {
            const res = await api.get('/boards');
            setBoards(res.data);
        } catch (err) {
            console.error('Erro ao carregar quadros', err);
        }
    };

    const handleCreateBoard = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.post('/boards', { title, description });
            setBoards((prev) => [...prev, res.data]);
            setTitle('');
            setDescription('');
        } catch (err) {
            console.error('Erro ao criar quadro', err);
        }
    };

    useEffect(() => {
        fetchBoards();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Olá, {user?.email}</h2>
            <button onClick={logout}>Sair</button>

            <h3>Seus quadros de estudo</h3>
            <ul>
                {boards.map((board) => (
                    <li key={board._id}>
                        <strong>{board.title}</strong>
                        <p>{board.description}</p>
                    </li>
                ))}
            </ul>

            <h3>Criar novo quadro</h3>
            <form onSubmit={handleCreateBoard}>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição (opcional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Criar</button>
            </form>
        </div>
    );
};

export default Dashboard;
