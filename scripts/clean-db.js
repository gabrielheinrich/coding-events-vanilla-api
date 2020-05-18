const knex = require("knex")(require("../knexfile.js").development);

(async function() {
  try {
    await knex.schema.dropTableIfExists("attendees");
    await knex.schema.dropTableIfExists("events");
    await knex.schema.dropTableIfExists("users");
    await knex.schema.dropTableIfExists("knex_migrations");
    await knex.schema.dropTableIfExists("knex_migrations_lock");
    console.log("Your database is clean, run yarn seed:db to rebuild it");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
