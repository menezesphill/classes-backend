# Aula 4 - Continuação: Criando uma API usando NestJS

### Instalando o Prisma no NestJS

Para instalar o prisma no seu projeto em NestJS, é necessário começar com o comando:

```sh
npm install prisma @prisma/client
```

Inicializar o prisma:

```sh
npx prisma init
```

Gerar modulo e serviço prisma:

```
nest g module prisma --no-spec
nest g service prisma --no-spec
```

E no arquivo `prisma.service.ts`, colar o seguinte código:

```ts
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
```

### Criando um Modelo no banco de dados com prisma

Vamos criar o seguinte modelo no arquivo `./prisma/schema.prisma`:

```ts
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime? @updatedAt
}
```

Para migrar o novo modelo `User` para a base de dados, podemos executar o comando:

```sh
npx prisma migrate dev
```

### Coleção das requisições criadas nessa aula no Postman

Você pode importar no POSTMAN a lista das requisições criadas durante essa aula no Link:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c05b5d6bd13467eea858?action=collection%2Fimport)