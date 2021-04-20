module.exports = {
    client: 'sqlite3',
    connection: {
        filename: './src/database/database.sqlite'
    },
    migrations: {
        directory: __dirname + '/src/database/migrations'
    },
    seeds: {
        directory: __dirname + '/src/database/seeds'
    }
}