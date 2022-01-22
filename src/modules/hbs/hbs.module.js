import hbs from 'hbs'

export function register() {
    try {
        hbs.registerPartials('./src/app/views/layouts')
    }catch(e){ throw e }
}