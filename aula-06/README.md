# Aula 6 - Gerenciando Bearer Token

### Bearer Token no Postman

Uma ferramenta útil no Postman são os `Tests` que permite a execução de scripts usando como parâmentos ambos `requests` quanto `respones` da nossa API. 

No Exemplo onde usamos o endpoint de `login`, temos a seguinte resposta do servidor:

```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmY2E1M2YzYi1hOTUxLTQ1NGMtYmI4YS1jMTEyMDU1OGZkZTkiLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwibmFtZSI6ImFkbWluIiwicm9sZXMiOlsiVVNFUiJdLCJpYXQiOjE2NzMwMDczNjcsImV4cCI6MTY3MzA5Mzc2N30.di9nf9Oc6NV9EkVNNSqAzNMGlrlC5CQK7ZeGd-VM_E4"
}
```

Podemos salvar esse token de acesso localmente em nossa coleção e usar em outras chamadas futuras criando o seguinte script:

```js
const auth = pm.response.json().accessToken
// Salvando accessToken em `auth`

pm.collectionVariables.set("authToken", auth)
// Criando uma variavel local `authToken` e atribuindo a ela `auth`

const template = '{{result}}';
pm.visualizer.set(template, {result:auth});
```

