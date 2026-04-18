# InstaRecover

Aplicação web que guia usuários no processo de recuperação de contas do Instagram, identificando o tipo de problema e direcionando para o fluxo correto dentro do suporte oficial, reduzindo erros comuns e perda de tempo.

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

Identificação do tipo de problema (senha, conta hackeada, acesso ao email, etc.)
Fluxo de decisão baseado em respostas do usuário
Geração de plano de recuperação personalizado
Redirecionamento para páginas oficiais do suporte do Instagram
Integração entre frontend e backend via API REST

## Estrutura do projeto

/public   → Interface da aplicação  
/src    → Servidor e API  

Dentro do backend:

/public → Interface da aplicação  
/src  
  ├── controllers → Controle das requisições  
  ├── routes → Rotas da API  
  ├── services → Lógica do sistema  
  └── app.js → Configuração da aplicação  

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


## Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de criar uma aplicação web que simula um assistente de recuperação de contas, aplicando conceitos de desenvolvimento full stack, organização de código em camadas e comunicação entre frontend e backend através de API REST.
