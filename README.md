
<h1>Back-end Challenge 🏅 2021 - Space Flight News</h1> 



> This is a challenge by <a href="https://coodesh.com/" rel="nofollow noreferrer noopener" target="_blank">Coodesh</a>
> Apresentação: https://www.loom.com/share/dd97a44beb5341bd91116696d75f24fa

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Tecnologias utilizadas](#tecnologias-utilizadas)

:small_blue_diamond: [Como instalar e usar o projeto (instruções)](#como-instalar-e-usar-o-projeto)

:small_blue_diamond: [Como rodar os testes](#como-rodar-os-testes)

## Descrição do projeto 

<p align="justify">
  Este projeto é a realização de um desafio da <a href="https://coodesh.com/" rel="nofollow noreferrer noopener" target="_blank">Coodesh</a> e nele, eu desenvolvo uma API baseada na <a href="https://api.spaceflightnewsapi.net/v3/documentation" rel="nofollow noreferrer noopener" target="_blank">Space Flight News</a>. Portanto, a API é capaz de cadastrar, modificar, listar e deletar artigos. Existe também, um artigo programado para ser salvo no banco de dados em um horário programado através do node-cron. Ademais, esses artigos são armazenas em um banco não relacional MongoDB pelo Atlas. Projeto foi desenvolvido com NodeJS, usando o framework ExpressJs. Os testes foram feitos utilizando Cypress API. Além disso, existe uma configuração para ser realizado deploy pelo Docker. 
</p>

## Tecnologias Utilizadas

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"/>
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"/>

### Outras dependências
- cors
- dotenv
- mongoose
- node-cron
- nodemon
- sucrase

## Como instalar e usar o projeto

No terminal, clone o projeto: 

```
git clone https://github.com/JoanWilson/space-flight-news
```

:small_blue_diamond: Após clonar o repositório, vá até a pasta raiz do projeto e execute

```
yarn install
```

:small_blue_diamond: A Api possui um arquivo chamado .env.example onde você poderá configurar o usuário e a senha do AltasDB. Você tanto poderá subir a aplicação diretamente ao Atlas, como poderá fazer pelo Docker. Não coloquei o meu usuário e senha por fins de segurança, mas será visivel no vídeo que enviarei ao review do desafio

```
//Connection by Docker
MONGODB_URI_CONNECTION=mongodb://usuario:senha@localhost:27017/develop?authSource=XXXXX'

//Connection directly by Atlas
MONGODB_URI_CONNECTIONmongodb+srv://usuario:senha@cluster0.9mz6x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

:small_blue_diamond: Estes são os scripts salvos para execução do projeto. Sendo "dev" para subir o servidor, "test open" abrirá a interface de testes do Cypress, "test" executará os testes e exibirá o logs no terminal.

```
"scripts": {
    "dev": "nodemon ./src/server.js",
    "test:open": "./node_modules/.bin/cypress open",
    "test": "./node_modules/.bin/cypress run"
  }
```

:small_blue_diamond: Após tudo configurado, é possível acessar os seguintes End-Points na API

- [GET]/:  Retornará um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News"

- [GET]/articles/:   Irá listar todos os artigos da base de dados, com sistema de paginação, onde page será a página desejada e limit será a quantidade de artigos que serão exibidos nessa página.

Exemplo:
```
localhost:5000/articles?page =1&limit=20
```

- [GET]/articles/{id}: Obterá a informação somente de um artigo

- [POST]/articles/: Adicionará um novo artigo

- [PUT]/articles/{id}: Atualizará um artigo baseado no _id


- [DELETE]/articles/{id}: Removerá um artigo baseado no _id

:small_blue_diamond: Existe um artigo programado para ser enviado ao banco de dados as 9h. Ele possui o title: "Article das 9 am"



## Como rodar os testes
:small_blue_diamond: SUBA O SERVIDOR EM OUTRO TERMINAL ANTES DE REALIZAR OS TESTES

:small_blue_diamond: Inicialmente, foram realizados testes através do Postman e foi organizado na seguinte suite:
- ![image](https://user-images.githubusercontent.com/48629647/150666368-8b42103e-9fb2-4778-889f-b734255e4336.png)

:small_blue_diamond: Foi criado uma suite de testes automatizados com o Cypress API para ajudar em futuras melhorias. Para executar os testes com Cypress existem duas opções:

- Executa sem abrir a interface do Cypress e exibe logs no terminal (recomendado)
```
$ yarn test
```

- Inicializa a interface do Cypress para execução de testes onde é possível executar um teste de cada vez, pois os testes SÃO INDEPENDENTES

```
$ yarn test:open
```
![image](https://user-images.githubusercontent.com/48629647/150666487-b7bc4edf-6ad8-48ac-957c-50bdc90d2519.png)

- Resultado dos testes:
- ![image](https://user-images.githubusercontent.com/48629647/150666512-27b5257c-a7c4-4382-9187-3c2653fbe719.png)








## Desenvolvedor :octocat:


| [<img src="https://avatars.githubusercontent.com/u/48629647?v=4" width=115><br><sub>Joan Wilson</sub>](https://github.com/JoanWilson) |  
| :---: |
