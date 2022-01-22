import express from "express"

class Server{
    
    constructor() {
        this.sets = [
            { key: 'view engine', value: 'hbs' },
            { key: 'views', value: 'src/app/views'}
        ]
        this.middlewares = []
        this.app = express()
        this.port = process.env.PORT
    }

    listen() {
        return new Promise((resolve, reject) => {
            this.app.listen(this.port, (err) => {
                if (err) reject(err)
                else {
                    console.log('Server Started on ' + this.port)
                    resolve(null)
                }
            })
        }) 
    }

    async start() {
        try {
            this.middlewares.map(m => this.app.use(m.route, m.callback))
            this.sets.map(s => this.app.set(s.key, s.value))
            await this.listen()
        }catch(e){ throw e }
    }

}

export const server = new Server()