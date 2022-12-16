/// Ele permite você definir tipos
/// Quando se trabalha com um time diverso, é muito fácil ocorrer o mal uso
/// das funções legado.

/// async / await
/// Promise<string>

export type Body = {
    value: number;
    type: "SUM" | "SUB";
    checkForNegative?: boolean;
}

export const executeMath = (input : Body) : string => {
    let res;

    if(input.type === "SUB") {
        res = input.value - 1;
    } else if(input.type === "SUM") {
        res = input.value + 1;
    }

    if(input.checkForNegative && res < 0) {
        throw new Error("Negative value detected!")
    }
    
    return res.toString()
}


const body : Body = {
    value: 0,
    type: "SUB",
    checkForNegative: true,
}

console.log(executeMath(body))



/// o Typescript ele sempre é "transpilado" para Javascript