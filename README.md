
## Description

Teste micro-service processamento de imagem.

Tecnologias :  nodejs(nestjs) , angular , redis , bull , rabquee,mongodb


existem  4 aplicacoes

 1-  api que recebe e processa a requisicao
 2 -  rabq - mensageiro
 3 - bull processamento mensagem
 4 -  site aplicacao

## Installation  cd site-image-process/

```bash
$ npm install
```

## Installation  cd backend/

```bash
$ npm install
```


## Running the docker backend

```bash
# development
$ docker-compose up


```

## Running  site-image-process/

```bash
$ npx nx serve site-process 


```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
