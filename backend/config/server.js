module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  production: true,
  url: "http://0.0.0.0:1337",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
