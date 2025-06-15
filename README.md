# 🧠 MindFlow

MindFlow é uma aplicação para organização de estudos baseada em quadros (boards) e cartões (cards) no estilo Kanban, com autenticação JWT, controle de usuários e integração com MongoDB.

---

## 📚 Visão Geral

O projeto é composto por dois módulos principais:

- **Backend:** API robusta construída em NestJS, responsável por toda a lógica, autenticação, autorização (incluindo roles), persistência de dados e documentação via Swagger.
- **Frontend:** Interface experimental em React, criada apenas como exemplo de integração com a API. **Não contempla todos os fluxos do backend** e não era obrigatória na atividade.

> **Recomendação:**  
> Para testar todos os requisitos e funcionalidades, utilize preferencialmente a API backend, que está completa e documentada.

---

## 🚀 Tecnologias Utilizadas

- **Backend:** NestJS, MongoDB, JWT, Bcrypt, Swagger
- **Frontend:** React, TypeScript, Axios, React Router DOM

---

## 📦 Instalação

Clone o repositório e instale as dependências de cada módulo:

```bash
git clone <repo-url>
cd mindflow/backend
npm install

cd ../frontend
npm install
```

---

## ▶️ Execução

### Backend

```bash
cd backend
npm run start:dev
```
Acesse a documentação da API em: [http://localhost:3000/api](http://localhost:3000/api)

### Frontend (opcional)

```bash
cd frontend
npm start
```
Acesse a interface em: [http://localhost:3001](http://localhost:3001)

---

## 🧱 Estrutura e Funcionalidades

### Backend

- **Usuários:** Cadastro, login, autenticação JWT, controle de roles (`user` e `admin`)
- **Boards:** CRUD completo de quadros de estudo
- **Cards:** CRUD completo de tarefas/tópicos vinculados a boards
- **Autorização:** Validação de token em todas as rotas protegidas e controle de acesso por perfil (roles)
- **Documentação:** Swagger disponível em `/api`

#### Exemplo de JSON de Card

```json
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

### Frontend

- Cadastro e login de usuários
- Autenticação JWT integrada ao backend
- Listagem e criação de quadros de estudo (boards)
- Proteção de rotas com autenticação

> **Atenção:**  
> O frontend **não está finalizado** e serve apenas como exemplo de integração com a API.  
> Alguns fluxos e funcionalidades do backend podem não estar disponíveis na interface.

---

## ⚠️ Observações Importantes

- O **backend** contempla todos os requisitos da atividade, incluindo autenticação JWT, CRUD completo, roles, validação de token e documentação.
- O **frontend** é opcional, experimental e não obrigatório. Use-o apenas como referência de integração.
- Para explorar todos os recursos, utilize ferramentas como [Postman](https://www.postman.com/) ou [Swagger UI](http://localhost:3000/api) para consumir a API.

---

## 📘 Documentação

- [README do Backend](backend/README.md): detalhes técnicos, exemplos de uso e endpoints.
- [README do Frontend](frontend/README.md): instruções de instalação e limitações da interface.

---

## 👨‍💻 Contribuição

Sinta-se à vontade para abrir issues ou pull requests para melhorias, correções ou sugestões!

---

## 📝 Licença

Este projeto é apenas para fins acadêmicos e de demonstração.