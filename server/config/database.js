import pg from 'pg';

// to connect to postgres db, we use a connection pool
// a connection pool is a collection of connections to the database

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false,
    }
}

export const pool = new pg.Pool(config); 