class Controller {

    // Handshake
    // Se o corpo da requisição Handshake tem um elemento 'greeting' = 'hello'
    // Então handshake deve retornar uma resposta 'Hello World! 🌎'

    async handshake(req, res) {
        const { greeting } = req.body
    
        // Que nossas respostas tem um elemento 'status' e um elemento 'data'

        if(greeting === 'hello') {
            return res.status(200).json({
                response: 'Hello World! 🌎'
            })
        }

        return res.status(400).json({
            error: 'Invalid Input!'
        })
    }
}

module.exports = new Controller();