# FitApp

## Bem vindos ao FitApp, cadastros online

Esse é um app para cadastro de clientes para pequenas academias, nele é possível cadastrar: nome, email, telefone, endereço, plano e objetivo do cliente.

## Como rodar a aplicação??

Primeiro é necessário baixar as dependencias tanto no front quanto no backend, após basta iniciar o server backend com npm run debug e a seguir iniciar o frontend com npm start

### Backend

  "dependencies": {
    "camelize": "^1.0.1",
    "cors": "^2.8.5",
    "express": "^5.1.0",
    "mysql2": "^3.14.1",
    "snakeize": "^0.1.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }

  ### Frontend

   "dependencies": {
    "axios": "^1.9.0",
    "react-icons": "^5.5.0",
    "react-toastify": "^11.0.5",
    "styled-components": "^6.1.17",
  },

Para instalar as dependencias use yarn ou npm, exemplo:
  npm install express cors mysql2
