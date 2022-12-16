# Aula 3 - Criando uma API usando NestJS

### Revisão de Typescript

Podemos usar o comando `tsc` para transpilar código em `typescript` para seu equivalente em `javascript`, para isso, o `typescript` deve estar instalado localmente ou globalmente. Para instalar globalmente execute:

```
npm install -g typescript
```
### Iniciando o NestJS

Para criar uma nova API usando o NestJS, podemos executar o comando:

```
nest new api-server
```

E também iremos usar nessa API o `PostgreSQL` a o `Adminer` para visualizar dados no postgre. Para isso, vamos usar o docker compose para executar esses dois containers sem precisar de nenhuma instalação prévia. Para isso, na pasta `./api-server` execute:

```
sudo docker-compose up
```

⚠️ É necessário ter o Docker Desktop instalado caso use Windows ou WSL. Caso esteja usando Linux, veja como instalar o Docker e o Docker Compose em sua distribuição.