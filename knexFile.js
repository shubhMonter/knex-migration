module.exports = {
    development: {
        client: "mysql",
        connection: {
            // host: 'ticketak.chaky770vxt6.ap-southeast-1.rds.amazonaws.com',
            // user: 'ticketak',
            // password: 'Ng8mugRxKn8KMtC2',
            // // database: 'copy_cinematic_160919',
            // // database: 'testcinematic',
            // database: 'cinematic',
            // port: 3306,
            // multipleStatements: true,
            host:'127.0.0.1',
            user:"root",
            password:"password",
            database:"knex",
            port:3306,
            multipleStatements: true,
        },
        migrations: {
            directory: __dirname + "/db/migrations"
        },
        seeds: {
            directory: __dirname + "/db/seeds"
        },
        searchPath: ['knex', 'public'],
    }
};