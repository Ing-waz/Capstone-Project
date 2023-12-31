/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {
      SATCAT_id: '25544', 
      post_text: 'The International Space Station, it was launched on November 19th, 1998 from Tyuratam, Kazakhstan.', 
      post_author: '1234567890',
      up_votes: 0,
      down_votes: 0,
      contested: true,
      contested_comment: 'It was launched on November 20th, 1998',
      contested_by: 'Tom Riddle'
    },
    {
      SATCAT_id: '25533', 
      post_text: 'Called Sputnik 41, it is an amateur radio satellite launched on October 25th, 1998 to commemorate the 41st aniversary of Sputnik 1.',
      post_author: '1234567890',
      up_votes: 3,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '44713', 
      post_text: 'Starlink-1007, it is part of the Starlink constellation operated by SpaceX. It was launched on November 11th, 2019 from Cape Canaveral, USA.',
      post_author: '1234567890',
      up_votes: 4,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '44914', 
      post_text: 'Starlink-1008, it is part of the Starlink constellation operated by SpaceX. It was launched on November 11th, 2019 from Cape Canaveral, USA.', 
      post_author: '1234567890',
      up_votes: 1,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '49141', 
      post_text: 'Starlink-3093, it is part of the Starlink constellation operated by SpaceX. It was launched on September 14th, 2021 from Vandenberg, USA.',
      post_author: '1234567890',
      up_votes: 44,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '53087', 
      post_text: 'Starlink-4329, it is part of the Starlink constellation operated by SpaceX. It was launched on July 11th, 2022 from Vandenberg, USA.',
      post_author: '1234567890',
      up_votes: 1,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '54869', 
      post_text: 'Starlink-5409, it is part of the Starlink constellation operated by SpaceX. It was launched on December 28th, 2022 from Cape Canaveral, USA.', 
      post_author: '2134567890',
      up_votes: 1,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '55269', 
      post_text: 'Starlink-5277, it is part of the Starlink constellation operated by SpaceX. It was launched on January 19th, 2023 from Vandenberg, USA.',
      post_author: '2134567890',
      up_votes: 5,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '56358', 
      post_text: 'Starlink-5482, it is part of the Starlink constellation operated by SpaceX. It was launched on April 27th, 2023 from Vandenberg, USA.', 
      post_author: '2134567890',
      up_votes: 2,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '57300', 
      post_text: 'Starlink-30235, it is part of the Starlink constellation operated by SpaceX. It was launched on July 10th, 2023 from Cape Canaveral, USA.', 
      post_author: '2134567890',
      up_votes: 7,
      down_votes: 0,
      contested: true,
      contested_comment: 'This is actually Starlink-30236.',
      contested_by: 'Voldemort Badguy'
    },
    {
      SATCAT_id: '24907', 
      post_text: 'IRIDIUM 22, it is part of the Iridium communications satellite constellation. It was launched on August 21st, 1997 from Vandenberg, USA.',
      post_author: '2134567890',
      up_votes: 1,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '43013', 
      post_text: 'It is a weather satellite managed by the US NOAA. It was launched on November 18th, 2017 from Vandenberg, USA.', 
      post_author: '2134567890',
      up_votes: 3,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '43226', 
      post_text: 'It is an environmental satellite managed by the US NOAA. It was launched on March 1st, 2018 from Cape Canaveral, USA.',
      post_author: '2134567890',
      up_votes: 22,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '57166', 
      post_text: 'It is a weather imaging satellite managed by Russia. It was launched on June 27th, 2023 from Vostochny, Russia.',
      post_author: '2134567890',
      up_votes: 1,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '48859', 
      post_text: 'It is part of the US Global Positioning System. It was launched on June 17th, 2021. It was launched from Vandenberg, USA.' , 
      post_author: '3124567890',
      up_votes: 2,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '43567', 
      post_text: 'It is a GALILEO 24 satellite that is part of the Galileo satellite navigation system operated by the European Union. It was launched on July 25th, 2018 from Kourou in French Guiana.',
      post_author: '3124567890',
      up_votes: 0,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '42939', 
      post_text: 'A GLONASS-M satellite, it is a part of the GLONASS satellite navigation system operated by Russia. It was launched on September 22nd, 2017 from Plesetsk, Russia.',
      post_author: '3124567890',
      up_votes: 33,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    },
    {
      SATCAT_id: '56564', 
      post_text: 'It is a part of the Beidou satellite navigation system operated by China. It was launched on May 17th, 2023 from Xichang, China.', 
      post_author: '3124567890',
      up_votes: 0,
      down_votes: 0,
      contested: false,
      contested_comment: '',
      contested_by: ''
    }
    ]);
};
