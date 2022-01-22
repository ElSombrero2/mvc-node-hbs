import { Users } from "../../models/users/users.model.js"

export class Index{

    home = async (req, res) => {
        const users = await Users.find()
        return {
            view: 'index.hbs',
            data: {users}
        }
    }

}