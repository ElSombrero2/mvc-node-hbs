import { registeDatabase } from './modules/database/database.module.js'
import { register } from './modules/hbs/hbs.module.js'
import { IndexRouter } from './modules/routers/index/index.router.js'
import { server } from './modules/server/server.module.js'

export async function main() {
    register()
    await registeDatabase()
    await server.start()
    IndexRouter('/')
}