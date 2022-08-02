
## Description

Teste micro-service processamento de imagem.

Tecnologias :  nodejs(nestjs) , angular , redis , bull , rabquee,mongodb


existem  4 aplicacoes

 1-  api que recebe e processa a requisicao
 2 -  rabq - mensageiro
 3 - bull processamento mensagem
 4 -  site aplicacao

## Installation  cd front/

```bash
$ npm install
```

site usado para teste : https://www.bridgeport.edu

## Installation  cd backend/

```bash
$ npm install
```


## Running the docker backend

```bash
# development
$ docker-compose up

wss port:3000
api port :3000

```

## Running  site-image-process/
frontend port : localhost:4200
```bash
$ npx nx serve site-process 


```

## Mongo acess replica/
uri mongo para acessar os dados processados
```bash
$  mongodb+srv://57OYrfAxCPHHNAXd:57OYrfAxCPHHNAXd@cluster0.7hhfjmh.mongodb.net/?retryWrites=true&w=majority 


```

 

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Pedro costa]((https://github.com/devpedrocosta))


## License

Nest is [MIT licensed](LICENSE).
