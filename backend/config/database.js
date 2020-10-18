module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "pg-deepthought"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "blog"),
        username: env("DATABASE_USERNAME", "strapi-to"),
        password: env("DATABASE_PASSWORD", "secret"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
