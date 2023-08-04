const bcrypt = require('bcrypt');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex.schema.raw('TRUNCATE user_accounts CASCADE');
  // await knex.schema.raw('ALTER SEQUENCE user_accounts_id_seq RESTART WITH 1');
  await knex('user_accounts').del()
  await knex('user_accounts').insert([
    {
      DoD_id: '1234567890',
      firstname: 'Jon',
      lastname: 'Arbuckle',
      email: 'jon.arbuckle@spaceforce.mil',
      organization: 'SPACECOM',
      password: bcrypt.hashSync('authorized', 10),
      moderator: true,
      isBanned: false,
    },
    {
      DoD_id: '2134567890',
      firstname: 'Charlie',
      lastname: 'Brown',
      email: 'charlie.brown@spaceforce.mil',
      organization: 'NRO',
      password: bcrypt.hashSync('operations', 10),
      moderator: false,
      isBanned: false,
    },
    {
      DoD_id: '3124567890',
      firstname: 'Christopher',
      lastname: 'Robin',
      email: 'christoper.robin@spaceforce.mil',
      organization: 'NGA',
      password: bcrypt.hashSync('collection', 10),
      moderator: false,
      isBanned: false,
    },
    {
      DoD_id: '9876543210',
      firstname: 'Samantha',
      lastname: 'Stark',
      email: 'samantha.stark@spaceforce.mil',
      organization: 'SSC',
      password: bcrypt.hashSync('stargazer', 10),
      moderator: true,
      isBanned: false,
    },
    {
      DoD_id: '8765432109',
      firstname: 'Maverick',
      lastname: 'Morgan',
      email: 'maverick.morgan@spaceforce.mil',
      organization: 'USSPACECOM',
      password: bcrypt.hashSync('astronaut', 10),
      moderator: false,
      isBanned: false,
    },
    {
      DoD_id: '7654321098',
      firstname: 'Luna',
      lastname: 'Skywalker',
      email: 'luna.skywalker@spaceforce.mil',
      organization: 'ASTROCORP',
      password: bcrypt.hashSync('moonwalker', 10),
      moderator: false,
      isBanned: false,
    },
    {
      DoD_id: '6543210987',
      firstname: 'Athena',
      lastname: 'Stellaris',
      email: 'athena.stellaris@spaceforce.mil',
      organization: 'GALAXIA',
      password: bcrypt.hashSync('cosmicpower', 10),
      moderator: false,
      isBanned: false,
    },
    {
      DoD_id: '5432109876',
      firstname: 'Orion',
      lastname: 'Nebula',
      email: 'orion.nebula@spaceforce.mil',
      organization: 'STELLARFORGE',
      password: bcrypt.hashSync('starship', 10),
      moderator: true,
      isBanned: false,
    },
    {
      DoD_id: '4321098765',
      firstname: 'Nova',
      lastname: 'Celestia',
      email: 'nova.celestia@spaceforce.mil',
      organization: 'COSMICALLIANCE',
      password: bcrypt.hashSync('supernova', 10),
      moderator: false,
      isBanned: false,
    },
    {
      DoD_id: '3210987654',
      firstname: 'Galileo',
      lastname: 'Astrophil',
      email: 'galileo.astrophil@spaceforce.mil',
      organization: 'ASTRODISCOVERY',
      password: bcrypt.hashSync('telescope', 10),
      moderator: false,
      isBanned: false,
    },
    {
      DoD_id: '2109876543',
      firstname: 'Nebula',
      lastname: 'Voyager',
      email: 'nebula.voyager@spaceforce.mil',
      organization: 'EXPLORIUM',
      password: bcrypt.hashSync('interstellar', 10),
      moderator: true,
      isBanned: false,
    },
    {
      DoD_id: '1098765432',
      firstname: 'Stella',
      lastname: 'Starshine',
      email: 'stella.starshine@spaceforce.mil',
      organization: 'ASTROGALAXY',
      password: bcrypt.hashSync('comets', 10),
      moderator: false,
      isBanned: false,
    },
    {
      DoD_id: '9876543211',
      firstname: 'Cosmo',
      lastname: 'Astralis',
      email: 'cosmo.astralis@spaceforce.mil',
      organization: 'COSMICEXPLORERS',
      password: bcrypt.hashSync('spacewanderer', 10),
      moderator: false,
      isBanned: false,
    },
    {
      DoD_id: '8765432111',
      firstname: 'Aurora',
      lastname: 'Luminara',
      email: 'aurora.luminara@spaceforce.mil',
      organization: 'NORTHERNLIGHTS',
      password: bcrypt.hashSync('polaris', 10),
      moderator: true,
      isBanned: false,
    },
    {
      DoD_id: '7654322111',
      firstname: 'Zephyr',
      lastname: 'Skyrunner',
      email: 'zephyr.skyrunner@spaceforce.mil',
      organization: 'WINDWALKERS',
      password: bcrypt.hashSync('aeroace', 10),
      moderator: false,
      isBanned: false,
    },
    {
      DoD_id: '6543222111',
      firstname: 'Phoenix',
      lastname: 'Flameheart',
      email: 'phoenix.flameheart@spaceforce.mil',
      organization: 'FIREBIRDS',
      password: bcrypt.hashSync('rebirth', 10),
      moderator: false,
      isBanned: false,
    },
  ]);
};
