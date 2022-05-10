import mongoose from 'mongoose'

class MongoDB {
    #user
    #pass
    #connectionString

    constructor(
        user = '',
        pass = '',
        host = 'localhost',
        port = '27017',
        schema = 'comentarios'
    ) {
        this.#user = user
        this.#pass = pass
        this.#connectionString = `mongodb://${host}:${port}/${schema}?appName=comentariosAPI`
    }

    connect() {
        const options = {
            keepAlive: true,
            keepAliveInitialDelay: 300000,
            user: this.#user,
            pass: this.#pass
        }

        console.info('Conectando ao MongoDB em:', this.#connectionString)
        console.info('  - options =', options)

        return mongoose.connect(this.#connectionString, options)
            .then(
                () => {
                    mongoose.connection.on('error', err => {
                        console.error('Erro de comunicação com MongoDB:', err)
                    })

                    console.info('Conectado ao MongoDB!')
                }, err => {
                    console.error('Falha ao conectar ao MongoDB. Finalizando servidor com código 10.', err)
                    process.exit(10)
                })
    }

    disconnect() {
        return mongoose.disconnect()
    }
}

export default MongoDB
