/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex.schema.raw('TRUNCATE satellite_data CASCADE');
  // await knex.schema.raw('ALTER SEQUENCE satellite_data_id_seq RESTART WITH 1');
  await knex('satellite').del()
  await knex('satellite').insert([
    { SATCAT: 25544, 
      created_by_id: BigInt(1234567890),
      launch_date: '98', 
      inclination: '51.6335', 
      raan: '344.7760', 
      eccentricity: '0007976', 
      argument_of_perigee: '126.2523', 
      mean_anomaly: '325.9359'},
    { SATCAT: 25533, 
      created_by_id: BigInt(1234567890),
      launch_date: '99', 
      inclination: '52.6335', 
      raan: '344.7760', 
      eccentricity: '0002676', 
      argument_of_perigee: '126.2523', 
      mean_anomaly: '325.9359'},
    { SATCAT: 44713, 
      created_by_id: BigInt(1234567890),
      launch_date: '19', 
      inclination: '53.0551', 
      raan: '187.8567', 
      eccentricity: '0001185', 
      argument_of_perigee: '92.1179', 
      mean_anomaly: '267.9946'},
    { SATCAT: 44914, 
      created_by_id: BigInt(1234567890),
      launch_date: '20', 
      inclination: '53.0555', 
      raan: '345.0522', 
      eccentricity: '0000837', 
      argument_of_perigee: '104.4820', 
      mean_anomaly: '255.6262'},
    { SATCAT: 49141, 
      created_by_id: BigInt(1234567890),
      launch_date: '21', 
      inclination: '69.9991', 
      raan: '200.6601', 
      eccentricity: '0003905', 
      argument_of_perigee: '267.2555', 
      mean_anomaly: '92.8157'},
    { SATCAT: 53087, 
      created_by_id: BigInt(1234567890),
      launch_date: '22', 
      inclination: '97.6592', 
      raan: '22.5035', 
      eccentricity: '0002145', 
      argument_of_perigee: '93.1868', 
      mean_anomaly: '266.9601'},
    { SATCAT: 54869, 
      created_by_id: BigInt(2134567890),
      launch_date: '22', 
      inclination: '43.0046', 
      raan: '309.2904', 
      eccentricity: '0001612', 
      argument_of_perigee: '267.8795', 
      mean_anomaly: '92.1862'},
    { SATCAT: 55269, 
      created_by_id: BigInt(2134567890),
      launch_date: '23', 
      inclination: '70.0015', 
      raan: '312.9780', 
      eccentricity: '0003154', 
      argument_of_perigee: '269.4053', 
      mean_anomaly: '90.6744'},
    { SATCAT: 56358, 
      created_by_id: BigInt(2134567890),
      launch_date: '23', 
      inclination: '97.6550', 
      raan: '203.3313', 
      eccentricity: '0001063', 
      argument_of_perigee: '111.2888', 
      mean_anomaly: '248.8450'},
    { SATCAT: 57300, 
      created_by_id: BigInt(2134567890),
      launch_date: '23', 
      inclination: '42.9995', 
      raan: '58.7676', 
      eccentricity: '0004022', 
      argument_of_perigee: '283.2917', 
      mean_anomaly: '76.7499'},
    { SATCAT: 24907, 
      created_by_id: BigInt(2134567890),
      launch_date: '97', 
      inclination: '86.3962', 
      raan: '108.8164', 
      eccentricity: '0002013', 
      argument_of_perigee: '85.7903', 
      mean_anomaly: '274.3523'},
    { SATCAT: 43013, 
      created_by_id: BigInt(2134567890),
      launch_date: '17', 
      inclination: '98.7126', 
      raan: '140.7281', 
      eccentricity: '0001414', 
      argument_of_perigee: '67.0931', 
      mean_anomaly: '293.0395'},
    { SATCAT: 43226, 
      created_by_id: BigInt(2134567890),
      launch_date: '18', 
      inclination: '0.0096', 
      raan: '285.4052', 
      eccentricity: '0002119', 
      argument_of_perigee: '194.0434', 
      mean_anomaly: '227.4847'},
    { SATCAT: 57166, 
      created_by_id: BigInt(2134567890),
      launch_date: '23', 
      inclination: '98.7619', 
      raan: '254.8256', 
      eccentricity: '0004219', 
      argument_of_perigee: '26.8516', 
      mean_anomaly: '333.2884'},
    { SATCAT: 25555, 
      created_by_id: BigInt(3124567890),
      launch_date: '97', 
      inclination: '51.4435', 
      raan: '334.7760', 
      eccentricity: '0237976', 
      argument_of_perigee: '126.2523', 
      mean_anomaly: '325.9359'},
]);
};