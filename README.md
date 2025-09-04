# 🌐 Projeto Web – Sistema com Front-end e Back-end

Este repositório contém um sistema web simples que utiliza **front-end**, **back-end** e **banco de dados**, integrados através do **Docker Compose**.  
O objetivo é ter um ambiente funcional para rodar localmente sem complicação.  

---

## 📂 Estrutura do Projeto - visão geral

### 📌 backend/
Aplicação responsável pelo servidor (Node.js).  
- **server.js** → código principal do servidor.  
- **package.json** → dependências e scripts do Node.js.  
- **Dockerfile** → instruções para criar a imagem Docker do back-end.  

### 📌 db/
Pasta destinada ao banco de dados.  
- **init.sql** → script de inicialização (criação de tabelas e dados).  

### 📌 frontend/
Parte visual e interativa do sistema.  
- **index.html** → página exibida no navegador.  
- **app.js** → lógica em JavaScript (formulário de contato e troca de tema claro/escuro).  
- **Dockerfile** → configuração para rodar o front-end em container.  

### 📌 Arquivos na raiz
- **.env** → armazena variáveis de ambiente usadas pelos serviços.  
- **docker-compose.yml** → orquestra todos os serviços (back-end, banco de dados e front-end).  

---

## ✨ Novas Funcionalidades no Front-end

O front-end foi atualizado com duas melhorias principais:  

1. **📩 Formulário de Contato**  
   - Usuário pode inserir **nome, email e mensagem**.  
   - O `app.js` valida os campos e fornece feedback ao usuário.  

2. **🌙 Alternância de Tema (Dark/Light Mode)**  
   - Um botão permite trocar entre **tema claro** e **tema escuro**.  
   - O `app.js` manipula classes CSS para aplicar o estilo escolhido.  

---
eu-repositorio
