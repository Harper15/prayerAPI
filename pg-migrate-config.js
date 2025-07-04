module.exports = {
  databaseUrl: process.env.DATABASE_URL,

  // Directory where your migration files will be stored
  migrationsDir: "./src/migrations", // Example: if your migrations are in src/migrations

  // Table where node-pg-migrate tracks applied migrations
  migrationsTable: "pgmigrations",

  // Schema where your migrations table will reside
  migrationsSchema: "public",

  // Whether to run migrations in a single transaction (default: true)
  singleTransaction: true,

  // Sets the language for migration files
  migrationFileLanguage: "ts",

  // Specify the schema(s) on which migration will be run (sets search_path)
  // schema: ['public'],
};
