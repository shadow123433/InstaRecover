# ExcluiPraMim

Aplicação web desenvolvida para auxiliar usuários na recuperação de contas do Instagram, utilizando um fluxo inteligente de perguntas e integração entre frontend e backend para gerar um plano de recuperação com acesso direto aos links oficiais do suporte.

## Demonstração em vídeo
https://youtu.be/5EFZt93s7KQ

## Sistema online
https://instarecover.onrender.com

## Tecnologias utilizadas

JavaScript  
Node.js  
Express  
HTML  
CSS  

## Funcionalidades

Fluxo inteligente de recuperação de conta  
Identificação do problema do usuário  
Geração de plano de recuperação personalizado  
Redirecionamento para páginas oficiais do Instagram  
Integração entre frontend e backend  
API REST para comunicação entre cliente e servidor  

## Estrutura do projeto

/frontend   → Interface da aplicação  
/backend    → Servidor e API  

Dentro do backend:

src/  
routes        → Rotas da API  
controllers   → Controle das requisições  
services      → Lógica do sistema  

## Como executar o projeto

Clone o repositório:

```bash
https://github.com/shadow123433/InstaRecover.git
```

Entre na pasta do projeto:

```bash
cd InstaRecover
code .
```



Instale as dependências:

```bash
npm install  
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e insira a seguinte variavel:

```bash
PORT=3000 
``` 

## Iniciar o servidor

```bash
node server.js  
```

O servidor irá iniciar em:

http://localhost:3000  

Depois disso, abra o arquivo usando a extensão live server ou do jeito que vc preferir:

index.html  

## Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de criar uma aplicação web que simula um assistente de recuperação de contas, aplicando conceitos de desenvolvimento full stack, organização de código em camadas e comunicação entre frontend e backend através de API REST.