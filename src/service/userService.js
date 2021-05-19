const userRepository = require('../repository/userRepository');

module.exports = {
    async createUser(username, password, email) {
        const user =  await userRepository.createUser(username, password, email); 
        return user;
    },

    async readUsers() {
        const users =  await userRepository.getUsers();
        return users;
    },

    async updateUser( id, username, password, email) {
        await userRepository.updateUser( id, username, password, email);
    },

    async deleteUser(id) {
       return await userRepository.deleteUser(id);
    }
}