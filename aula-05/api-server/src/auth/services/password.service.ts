import { Injectable } from "@nestjs/common";
import { genSalt, hash, compare } from "bcrypt";

@Injectable()
export class PasswordService {
    // É a função que vai criptografar a senha
    async hashPassword(password: string): Promise<string> {
        const salt = await genSalt(10);
        const hashedPassword = hash(password, salt)

        return hashedPassword // A resposta vai ser OU uma promessa que resolveu como String, OU uma promessa falha
    }

    // É a função que vai verificar se a senha que o usuário passa é a mesma senha criptografada no servidor
    // A string 'password' que o usuário submeteu
    // A string 'hash' que está salva no nosso servidor

    async comparePassword(password: string, hash: string): Promise<string> {
        return compare(password, hash) // Se o hash é password criptografado, retorna TRUE, se não FALSE
    }
}