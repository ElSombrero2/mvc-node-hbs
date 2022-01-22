import { register } from "./hbs.module"

describe('Test HBS Module', () => {
    test('test function hbs', (done) => {
        try {
            register()
            done()
        }catch(e){ throw e }
    })
})