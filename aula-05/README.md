# Aula 5 - Usando bcrypt para criação de senhas criptografadas

### Instalando o bcrypt

Para instalar o bcrypt no seu projeto em NestJS, é necessário começar com o comando:

```sh
npm install bcrypt
```

Vamos atualizar o nosso Schema no prisma:

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
  password  String
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime? @updatedAt
}
```

E atualizar o esquema na base de dados

```sh
npx prisma migrate dev
```

Caso ocorra algum erro durante esse processo, delete os usuários existentes na base de dados usando o Adminer (http://localhost:8080/).

### Criando um Password Service

Crie um arquivo `password.service.ts` em `./auth/services/password.service.ts`, colar o seguinte código:

```ts
import { Injectable } from "@nestjs/common";
import { genSalt, hash, compare } from "bcrypt";

@Injectable()
export class PasswordService {
    async hashPassword(password: string): Promise<string> {
        const salt = await genSalt(10);
        const hashedPassword = hash(password, salt)
        return hashedPassword
    }

    async comparePassword(password: string, hash: string): Promise<string> {
        return compare(password, hash) 
    }
}
```

Gerar o modulo auth:

```
nest g module auth --no-spec
```

E atualizar com os novo serviço `password.service.ts`:

```js
import { Module } from '@nestjs/common';
import { PasswordService } from './services/password.service';

@Module({
    providers: [PasswordService],
    exports: [PasswordService]
})
export class AuthModule {}
```

### Coleção das requisições criadas nessa aula no Postman

Você pode importar no POSTMAN a lista das requisições criadas durante essa aula no Link:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c05b5d6bd13467eea858?action=collection%2Fimport)