# 📚 MindFlow API

API backend para um organizador de estudos com estrutura de quadros (boards) e cards (tarefas/tópicos) estilo Kanban.

## 🚀 Tecnologias

- NestJS
- MongoDB
- JWT & Bcrypt
- Swagger

## 🧱 Estrutura

- **Users:** Autenticação com JWT
- **Boards:** Cada quadro representa um tema de estudo
- **Cards:** Cards vinculados aos quadros com status, prioridade, categoria e prazo

## 📦 Instalação

```bash
git clone <repo-url>
cd backend
npm install
```

## ▶️ Execução

```bash
npm run start:dev
```

## 📘 Documentação da API

- **Acesse em:** http://localhost:3000/api

## 🗂️ Exemplo de JSON de Card

```bash
{
  "title": "Geometria Analítica Plana",
  "description": "Estudar equações de retas",
  "category": "Matemática",
  "priority": "high",
  "status": "to_study",
  "deadline": "2025-05-30T00:00:00.000Z",
  "boardId": "ID_DO_BOARD"
}
```