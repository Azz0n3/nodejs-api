const connection = require('../database/connection');

module.exports = {
    async createUser(username, password, email) {
        await connection('user_data')
        .insert({
            username, password, email
        });

        const user = await connection('user_data')
        .select('id')
        .where({
            username
        });

        return user;
    },

    async getUsers() {
        const users = await connection('user_data')
        .select('id', 'username', 'email');
        return users;
    },

    async updateUser( id, username, password, email) {
        await connection('user_data')
        .update({
            username, 
            password, 
            email
        }).where({
            id
        });
    },

    async deleteUser(id) {
        return await connection('user_data')
        .where({id})
        .delete();
    }
}