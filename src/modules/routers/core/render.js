export async function renderAsync(req, res, callback) {
    try {
        const obj = await callback(req, res)
        res.render(obj.view, obj.data)
    }catch(e){ throw e }
}

export function render(req, res, callback) {
    try {
        const obj = callback(req, res)
        res.render(obj.view, obj.data)
    }catch(e){ throw e }
}