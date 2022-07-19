<p align="center">
  <a href="https://github.com/VictorFrancix/DrivenPass-API">
    <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f512.svg" alt="readme-logo" width="80" height="80">
  </a>

  <h3 align="center">
    DrivenPass-API
    
    
  </h3>
</p>

<div align="center">
  <h3 align="center">Built with:</h3>

  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/JWT-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" height="30px"/>
</div>

## Description

Drivenpass simulates a password manager. You can create an account and save your website passwords, card data etc.

## Usage

```bash
$ git clone https://github.com/VictorFrancix/DrivenPass-API
$ cd DrivenPass-API
$ npm install
$ npx prisma migrate reset
$ npm run start
```

## :flying_saucer: Routes

### Auth Routes:

```yml
- POST /signup
    - User register route (Password of at least 10 characters, Email model required
"@anyDomain.com")
    - headers: {}
    - body: {
        "email": "lorem@ipsum.com",
        "password": "loremipsum"
    }
```
```yml
- POST /signin
    - User login route
    - headers: {}
    - body: {
        "email": "lorem@ipsum.com",
        "password": "loremipsum"
    }
```
    
### Credentials Routes:

```yml
- POST /credentials
    - Route to register a new credential
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "lorem ipsum",
        "url": "https://lorem.ipsum.com",
        "username": "lorem",
        "password": "loremipsum"
    }
```
```yml
- GET /credentials
    - Route to get all user credentials
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
- GET /credentials/:id
    - Route to get a user credential by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
- DELETE /credentials/:id
    - Route to delete a user credential by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
    
### Secure Notes Routes:

``` yml
- POST /notes
    - Route to register a new secure note ("title" max 50 char. 
    and "body" max 1000 char.)
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "Lorem ipsum",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Sed iaculis mauris a lectus euismod interdum. Interdum et
             malesuada fames ac ante ipsum primis in faucibus."
    }
```
```yml
- GET /notes
    - Route to get all user secure notes
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
- GET /notes/:id
    - Route to get a user secure note by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
- DELETE /notes/:id
    - Route to delete a user secure note by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
    
### Cards Route:

```yml
- POST /cards
    - Route to register a card
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "lorem ipsum",
        "number": "5555 5555 5555 5555",
        "holder": "LOREM I DOLOR",
        "expiry": "MM/YY"
        "cvv": "CVV",
        "password": "PASS",
        "isVirtual": true | false
        "type": "credit" | "debit" | "both",
    }
```
```yml
- GET /cards
    - Route to get all user cards
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
- GET /cards/:id
    - Route to get a user card by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
- DELETE /card/delete/:cardId
    - Route to delete a user card by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
    
### Wifi Routes:

```yml
- POST /wifis
    - Route to register a new wifi
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "title": "lorem Ipsum",
        "name": "lorem",
        "password": "loremipsum"
    }
```
```yml
- GET /wifis
    - Route to get all user wifis
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
- GET /wifis/:id
    - Route to get a user wifi by id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
```yml
- DELETE /wifis/:id
    - Route to delete a user wifi by id 
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
