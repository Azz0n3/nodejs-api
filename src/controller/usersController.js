const userService = require('../service/userService');

module.exports = {
    async create(request, response) {
        const { username, password, email } =  request.body;
        const user = await userService.createUser(username, password, email);
        response.status(200).json(user);
    },

    async read(request, response) {
        const users = await userService.readUsers();
        response.status(200).json(users);
    },

    async update(request, response) {
        const { id, username, password, email } =  request.body;
        await userService.updateUser( id, username, password, email);
        response.status(200).json({
            username, 
            email
        });
    },

    async delete(request, response) {
        const {id} = request.params;
        await userService.deleteUser(id);
        return response.sendStatus(200);
    }
}