const data = [
  {
    event_type: "Stand Of Comedy",
    image: "./image/comedy/main.jpg",
    id: 'E01',
    events: [
      {
        id: 1,
        event_name: "Comic Carnival",
        location: "Mumbai",
        date: "2024-04-15",
        description: "A night of laughter and humor with top comedians, promising a carnival of jokes and entertainment.",
        performer: "Rohan Joshi",
        price: 490,
        img: "./image/comedy/1.jpg"
      },
      {
        id: 2,
        event_name: "Ha-Ha Hyderabad",
        location: "Hyderabad",
        date: "2024-05-20",
        description: "Hyderabad welcomes hilarious stand-up acts featuring local and national comedians, ensuring a night of non-stop laughter.",
        performer: "Aditi Mittal",
        price: 500,
        img: "./image/comedy/2.jpg"
      },
      {
        id: 3,
        event_name: "Bangalore Chuckles",
        location: "Bangalore",
        date: "2024-06-10",
        description: "An evening of witty banter and amusing anecdotes by renowned comedians, making it a laughter-filled night in Bangalore.",
        performer: "Kanan Gill",
        price: 567,
        img: "./image/comedy/3.jpg"
      },
      {
        id: 4,
        event_name: "Delhi Comedy Fiesta",
        location: "Delhi",
        date: "2024-07-05",
        description: "Delhi hosts a comedy fiesta featuring a lineup of talented comedians, promising a night of laughter and good times.",
        performer: "Kenny Sebastian",
        price: 300,
        img: "./image/comedy/4.jpg"
      },
      {
        id: 5,
        event_name: "Chennai Chuckle Club",
        location: "Chennai",
        date: "2024-08-12",
        description: "Chennai's comedy club presents a hilarious night with stand-up performances that will leave the audience in splits.",
        performer: "Neeti Palta",
        price: 600,
        img: "./image/comedy/5.jpg"
      },
      {
        id: 6,
        event_name: "Pune Punchlines",
        location: "Pune",
        date: "2024-09-18",
        description: "Get ready for a punchy evening with top-notch comedians delivering rib-tickling performances in the cultural city of Pune.",
        performer: "Varun Thakur",
        price: 550,
        img: "./image/comedy/6.jpg"
      },
      {
        id: 7,
        event_name: "Kolkata Comedy Carnival",
        location: "Kolkata",
        date: "2024-10-02",
        description: "Kolkata's comedy carnival features stand-up acts that blend humor with the city's rich cultural backdrop, promising a unique experience.",
        performer: "Biswa Kalyan Rath",
        price: 450,
        img: "./image/comedy/7.jpg"
      },
      {
        id: 8,
        event_name: "Chandigarh Chuckles",
        location: "Chandigarh",
        date: "2024-11-08",
        description: "Chandigarh invites you to an evening of laughter with stand-up comedians delivering hilarious punchlines and anecdotes.",
        performer: "Atul Khatri",
        price: 560,
        img: "./image/comedy/8.jpg"
      },
      {
        id: 9,
        event_name: "Jaipur Jokes Junction",
        location: "Jaipur",
        date: "2024-12-15",
        description: "Experience the lighter side of life with a laughter-filled night in Jaipur, featuring stand-up performances by talented comedians.",
        performer: "Sumukhi Suresh",
        price: 340,
        img: "./image/comedy/9.jpg"
      },
      {
        id: 10,
        event_name: "Mysuru Comedy Madness",
        location: "Mysuru",
        date: "2024-01-20",
        description: "Mysuru hosts a comedy madness night, bringing together comedians for an evening of hilarity and entertainment.",
        performer: "Sapan Verma",
        price: 360,
        img: "./image/comedy/10.jpg"
      },
      {
        id: 11,
        event_name: "Ahmedabad Amusement",
        location: "Ahmedabad",
        date: "2024-02-10",
        description: "An amusing night awaits in Ahmedabad, with stand-up comedians delivering laughter-packed performances for the audience.",
        performer: "Naveen Richard",
        price: 650,
        img: "./image/comedy/11.jpg"
      },
      {

        id: 12,
        event_name: "Goa Giggles Gala",
        location: "Goa",
        date: "2024-03-05",
        description: "Enjoy a gala of giggles in the vibrant atmosphere of Goa, featuring top comedians with their rib-tickling acts.",
        performer: "Amit Tandon",
        price: 590,
        img: "./image/comedy/12.jpg"
      },
      {
        id: 13,
        event_name: "Lucknow Laughter Fest",
        location: "Lucknow",
        date: "2024-04-18",
        description: "Lucknow presents a laughter fest with stand-up comedians delivering jokes that resonate with the local flavor.",
        performer: "Anirban Dasgupta",
        price: 230,
        img: "./image/comedy/13.jpg"
      },
      {
        id: 14,
        event_name: "Nashik Chuckle Challenge",
        location: "Nashik",
        date: "2024-05-10",
        description: "Nashik's comedy challenge features stand-up comedians competing for the title of the funniest act, ensuring a night of laughter.",
        performer: "Neha Kakkar",
        price: 440,
        img: "./image/comedy/14.jpg"
      },
      {
        id: 15,
        event_name: "Bhopal Belly Laughs",
        location: "Bhopal",
        date: "2024-06-22",
        description: "Get ready for belly laughs in Bhopal, as stand-up comedians take the stage to tickle your funny bone.",
        performer: "Zakir Khan",
        price: 550,
        img: "./image/comedy/15.jpg"
      },
      {
        id: 16,
        event_name: "Agra Comedy Extravaganza",
        location: "Agra",
        date: "2024-07-15",
        description: "Agra hosts a comedy extravaganza with top comedians delivering a night of humor against the backdrop of the city's historical charm.",
        performer: "Kunal Kamra",
        price: 660,
        img: "./image/comedy/16.jpg"
      },
      {
        id: 17,
        event_name: "Kochi Chuckle Carnival",
        location: "Kochi",
        date: "2024-08-08",
        description: "Kochi's chuckle carnival promises an evening of laughter and amusement with stand-up comedians delivering their best jokes.",
        performer: "Rahul Subramanian",
        price: 740,
        img: "./image/comedy/17.jpg"
      },
      {
        id: 18,
        event_name: "Trivandrum Comedy Jam",
        location: "Trivandrum",
        date: "2024-09-20",
        description: "Trivandrum invites you to a comedy jam featuring stand-up comedians delivering an ensemble of jokes and laughter.",
        performer: "Azeem Banatwalla",
        price: 560,
        img: "./image/comedy/18.jpg"
      },
      {
        id: 19,
        event_name: "Shillong Stand-Up Special",
        location: "Shillong",
        date: "2024-10-12",
        description: "Shillong's stand-up special night features comedians with their unique styles, promising an unforgettable laughter experience.",
        performer: "Sahil Shah",
        price: 590,
        img: "./image/comedy/19.jpg"
      }
    ]
  },
  {
    event_type: "Music Concert",
    image: "./image/music/main.jpg",
    id: 'E02',
    events: [
      {
        id: 20,
        event_name: "Bollywood Beats Live",
        location: "Delhi",
        date: "2024-05-20",
        description: "A live concert showcasing popular Bollywood musicians and singers, celebrating the diversity of Indian music.",
        performer: "Arijit Singh",
        price: 400,
        img: "./image/music/1.jpg"
      },
      {
        id: 21,
        event_name: "Melody Magic in Mumbai",
        location: "Mumbai",
        date: "2024-06-10",
        description: "An enchanting evening of melody featuring renowned playback singers and instrumentalists, creating magical musical moments.",
        performer: "Shreya Ghoshal",
        price: 500,
        img: "./image/music/2.jpg"
      },
      {
        id: 22,
        event_name: "Rhythms of Rajasthan",
        location: "Jaipur",
        date: "2024-07-05",
        description: "Experience the vibrant rhythms of Rajasthan with a music concert featuring traditional folk and classical performers.",
        performer: "Mame Khan",
        price: 600,
        img: "./image/music/3.jpg"
      },
      {
        id: 23,
        event_name: "Soulful Sufi Night",
        location: "Lucknow",
        date: "2024-08-12",
        description: "An evening of soulful Sufi music, featuring acclaimed Sufi singers and musicians, creating an atmosphere of spiritual bliss.",
        performer: "Kailash Kher",
        price: 700,
        img: "./image/music/4.jpg"
      },
      {
        id: 24,
        event_name: "Jazz Jamboree in Kolkata",
        location: "Kolkata",
        date: "2024-09-18",
        description: "Kolkata hosts a jazz extravaganza with renowned jazz artists, promising a night of improvisation and musical brilliance.",
        performer: "Louiz Banks",
        price: 450,
        img: "./image/music/5.jpg"
      },
      {
        id: 25,
        event_name: "Classical Symphony in Chennai",
        location: "Chennai",
        date: "2024-10-02",
        description: "An evening of classical music featuring maestros and virtuosos, presenting a symphony that transcends time and tradition.",
        performer: "L. Subramaniam",
        price: 540,
        img: "./image/music/6.jpg"
      },
      {

        id: 26,
        event_name: "Electronic Dance Fusion",
        location: "Goa",
        date: "2024-11-08",
        description: "Goa turns into a dance floor with an electronic dance fusion concert, featuring top DJs and EDM artists from India and beyond.",
        performer: "Nucleya",
        price: 550,
        img: "./image/music/7.jpg"
      },
      {
        id: 27,
        event_name: "Folk Fusion Fiesta",
        location: "Pune",
        date: "2024-12-15",
        description: "Pune hosts a folk fusion concert, blending traditional folk music with contemporary sounds, featuring diverse regional artists.",
        performer: "Raghu Dixit",
        price: 650,
        img: "./image/music/8.jpg"
      },
      {
        id: 28,
        event_name: "Rock Revolution in Bangalore",
        location: "Bangalore",
        date: "2024-01-20",
        description: "Bangalore rocks with a concert featuring top rock bands and artists, creating a revolution of sound and energy.",
        performer: "Indian Ocean",
        price: 750,
        img: "./image/music/9.jpg"
      },
      {
        id: 29,
        event_name: "Pop Extravaganza",
        location: "Mysuru",
        date: "2024-02-10",
        description: "Mysuru hosts a pop music extravaganza with chart-topping pop artists, promising a night of catchy tunes and lively performances.",
        performer: "Armaan Malik",
        price: 440,
        img: "./image/music/10.jpg"
      },
      {
        id: 30,
        event_name: "Bengali Baul Ballad",
        location: "Kolkata",
        date: "2024-03-05",
        description: "Kolkata celebrates the soulful Baul tradition with a music concert featuring Baul singers and mystic melodies.",
        performer: "Parvathy Baul",
        price: 550,
        img: "./image/music/11.jpg"
      },
      {
        id: 31,
        event_name: "Carnatic Maestros in Chennai",
        location: "Chennai",
        date: "2024-04-18",
        description: "Chennai presents a concert by Carnatic music maestros, showcasing the intricate rhythms and melodies of South Indian classical music.",
        performer: "Sudha Ragunathan",
        price: 660,
        img: "./image/music/12.jpg"
      },
      {
        id: 32,
        event_name: "Indie Music Showcase",
        location: "Delhi",
        date: "2024-05-10",
        description: "Delhi showcases the indie music scene with a concert featuring independent and emerging artists, bringing a fresh and diverse sound.",
        performer: "Prateek Kuhad",
        price: 570,
        img: "./image/music/13.jpg"
      },
      {
        id: 33,
        event_name: "Ghazal Ghautsav",
        location: "Agra",
        date: "2024-06-22",
        description: "Agra hosts a Ghazal festival, featuring renowned ghazal singers, creating an evening of poetic and soul-stirring melodies.",
        performer: "Jagjit Singh Tribute by Talat Aziz",
        price: 770,
        img: "./image/music/14.jpg"
      },
      {
        id: 34,
        event_name: "Fusion Rhythms",
        location: "Mumbai",
        date: "2024-07-15",
        description: "Mumbai blends diverse musical genres with a fusion concert, featuring artists who push the boundaries of traditional and contemporary sounds.",
        performer: "Tabla maestro Zakir Hussain",
        price: 800,
        img: "./image/music/15.jpg"
      },
      {

        id: 35,
        event_name: "Reggae Rendezvous in Goa",
        location: "Goa",
        date: "2024-08-08",
        description: "Goa hosts a reggae music extravaganza, featuring international and Indian reggae artists, creating a chilled-out and groovy atmosphere.",
        performer: "Reggae Rajahs",
        price: 200,
        img: "./image/music/16.jpg"
      },
      {
        id: 36,
        event_name: "Bollywood Symphony",
        location: "Mumbai",
        date: "2024-09-20",
        description: "Mumbai presents a symphony orchestra performing Bollywood hits, combining the magic of cinema with the grandeur of live orchestral music.",
        performer: "Symphony Orchestra conducted by Zubin Mehta",
        price: 540,
        img: "./image/music/17.jpg"
      },
      {
        id: 37,
        event_name: "Qawwali Night in Delhi",
        location: "Delhi",
        date: "2024-10-12",
        description: "Delhi hosts a mesmerizing Qawwali night, featuring renowned Qawwals and their soul-stirring performances.",
        performer: "Nizami Brothers",
        price: 590,
        img: "./image/music/18.jpg"
      },
      {
        id: 38,
        event_name: "Rajasthani Folk Fusion",
        location: "Jaipur",
        date: "2024-11-05",
        description: "Jaipur celebrates its rich folk heritage with a concert featuring Rajasthani folk artists, presenting a fusion of traditional and contemporary sounds.",
        performer: "Kutle Khan",
        price: 610,
        img: "./image/music/19.jpg"
      }
    ]
  },
  {
    event_type: "New Year Party",
    image: "./image/party/main.jpg",
    id: 'E03',
    events: [
      {
        id: 39,
        event_name: "Grand Gala Extravaganza",
        location: "Mumbai",
        date: "2023-12-31",
        description: "Celebrate the New Year with a grand gala featuring live performances, DJs, and a spectacular fireworks display.",
        performer: "DJ Aqueel",
        price: 220,
        img: "./image/party/1.jpg"
      },
      {
        id: 40,
        event_name: "New Year Bash in Bangalore",
        location: "Bangalore",
        date: "2023-12-31",
        description: "Bangalore welcomes the New Year with a high-energy bash, featuring top DJs, dance floors, and a midnight countdown.",
        performer: "DJ Nikhil Chinapa",
        price: 330,
        img: "./image/party/2.jpg"
      },
      {
        id: 41,
        event_name: "Delhi NYE Carnival",
        location: "Delhi",
        date: "2023-12-31",
        description: "Join the New Year's Eve carnival in Delhi with live bands, food stalls, and a festive atmosphere to welcome the new year.",
        performer: "Euphoria",
        price: 440,
        img: "./image/party/3.jpg"
      },
      {

        id: 42,
        event_name: "Goa Beach Party",
        location: "Goa",
        date: "2023-12-31",
        description: "Welcome the New Year on the beaches of Goa with a vibrant beach party, featuring live music, bonfires, and fireworks.",
        performer: "DJ Ankytrixx",
        price: 550,
        img: "./image/party/4.jpg"
      },
      {
        id: 43,
        event_name: "Pune Midnight Fiesta",
        location: "Pune",
        date: "2023-12-31",
        description: "Pune hosts a midnight fiesta with multiple stages, live bands, and DJs, creating a festive atmosphere for New Year's Eve.",
        performer: "Lost Stories",
        price: 560,
        img: "./image/party/5.jpeg"
      },
      {
        id: 44,
        event_name: "Chennai Countdown Carnival",
        location: "Chennai",
        date: "2023-12-31",
        description: "Countdown to the New Year in Chennai with a carnival featuring live performances, dance floors, and a midnight countdown.",
        performer: "DJ Shilpi Sharma",
        price: 660,
        img: "./image/party/6.jpg"
      },
      {
        id: 45,
        event_name: "Hyderabad Night Spectacle",
        location: "Hyderabad",
        date: "2023-12-31",
        description: "Hyderabad hosts a night spectacle with dazzling lights, live music, and a grand celebration to ring in the New Year.",
        performer: "DJ Hussain",
        price: 570,
        img: "./image/party/7.jpg"
      },
      {
        id: 46,
        event_name: "Kolkata New Year Bash",
        location: "Kolkata",
        date: "2023-12-31",
        description: "Kolkata welcomes the New Year with a lively bash, featuring top bands, cultural performances, and a grand countdown.",
        performer: "The Cactus",
        price: 770,
        img: "./image/party/8.jpg"
      },
      {
        id: 47,
        event_name: "Jaipur Masquerade Ball",
        location: "Jaipur",
        date: "2023-12-31",
        description: "Attend a masquerade ball in Jaipur for New Year's Eve, featuring live music, dance floors, and a glamorous celebration.",
        performer: "DJ Suketu",
        price: 450,
        img: "./image/party/9.jpg"
      },
      {
        id: 48,
        event_name: "Mysuru Midnight Soiree",
        location: "Mysuru",
        date: "2023-12-31",
        description: "Join a midnight soiree in Mysuru with live performances, themed parties, and a festive ambiance for New Year's Eve.",
        performer: "DJ Jasmeet",
        price: 555,
        img: "./image/party/10.jpg"
      },
      {
        id: 49,
        event_name: "Ahmedabad Fireworks Fiesta",
        location: "Ahmedabad",
        date: "2023-12-31",
        description: "Ahmedabad hosts a fireworks fiesta to welcome the New Year, featuring live music, food stalls, and a dazzling display.",
        performer: "DJ Lemon",
        price: 599,
        img: "./image/party/11.jpg"
      },
      {
        id: 50,
        event_name: "Lucknow Glamorous Gala",
        location: "Lucknow",
        date: "2023-12-31",
        description: "Celebrate New Year's Eve in Lucknow with a glamorous gala, featuring live bands, DJs, and a grand midnight celebration.",
        performer: "DJ Barkha Kaul",
        price: 699,
        img: "./image/party/12.jpg"
      },
      {
        id: 51,
        event_name: "Bengaluru Rooftop Rendezvous",
        location: "Bengaluru",
        date: "2023-12-31",
        description: "Experience a rooftop rendezvous in Bengaluru with live music, a DJ lineup, and panoramic views for New Year's Eve.",
        performer: "DJ Ivan",
        price: 799,
        img: "./image/party/13.jpg"
      },
      {
        id: 52,
        event_name: "Chandigarh Countdown Carnival",
        location: "Chandigarh",
        date: "2023-12-31",
        description: "Chandigarh hosts a countdown carnival for New Year's Eve, featuring multiple stages, dance floors, and a festive atmosphere.",
        performer: "DJ NYK",
        price: 499,
        img: "./image/party/14.jpg"
      },
      {
        id: 53,
        event_name: "Kochi Grand Celebration",
        location: "Kochi",
        date: "2024-12-31",
        description: "Celebrate the grand arrival of the New Year in Kochi with live performances, DJ sets, and a midnight extravaganza.",
        performer: "DJ Pearl",
        price: 399,
        img: "./image/party/1.jpg"
      },
      {
        id: 54,
        event_name: "Raipur New Year Bash",
        location: "Raipur",
        date: "2024-12-31",
        description: "Raipur welcomes the New Year with a lively bash, featuring top bands, DJs, and a grand countdown to midnight.",
        performer: "DJ Akhtar",
        price: 299,
        img: "./image/party/2.jpg"
      },
      {
        id: 55,
        event_name: "Trivandrum Beach Party",
        location: "Trivandrum",
        date: "2024-12-31",
        description: "Join a beach party in Trivandrum for New Year's Eve, featuring live music, bonfires, and a festive beachside celebration.",
        performer: "DJ Anish Sood",
        price: 430,
        img: "./image/party/3.jpg"
      },
      {
        id: 56,
        event_name: "Bhopal Starry Night",
        location: "Bhopal",
        date: "2024-12-31",
        description: "Celebrate New Year's Eve under the starry night in Bhopal, featuring live performances, dance floors, and a grand celebration.",
        performer: "DJ Chetas",
        price: 340,
        img: "./image/party/4.jpg"
      },
      {
        id: 57,
        event_name: "Indore New Year Extravaganza",
        location: "Indore",
        date: "2024-12-31",
        description: "Indore hosts a New Year extravaganza, featuring live music, cultural performances, and a grand midnight celebration.",
        performer: "DJ Rink",
        price: 520,
        img: "./image/party/5.jpeg"
      }
    ]
  },
  {
    event_type: "Circus",
    image: "./image/circus/main.jpg",
    id: 'E04',
    events: [
      {
        id: 58,
        event_name: "Royal Circus Spectacle",
        location: "Mumbai",
        date: "2024-03-15",
        description: "Experience the magic of the circus with a royal spectacle featuring acrobats, clowns, and daring performances.",
        performer: "The Great Raju - Ringmaster Extraordinaire",
        price: 500,
        img:"./image/circus/1.jpg"
      },
      {
        id: 59,
        event_name: "Big Top Extravaganza in Bangalore",
        location: "Bangalore",
        date: "2024-04-20",
        description: "Bangalore hosts a big top extravaganza with a variety of circus acts, including jugglers, trapeze artists, and more.",
        performer: "The Dazzling Daredevils",
        price: 400,
        img:"./image/circus/2.jpg"
      },
      {
        id: 60,
        event_name: "Circus Carnival in Delhi",
        location: "Delhi",
        date: "2024-05-10",
        description: "Delhi invites you to a circus carnival with fun-filled performances, animal acts, and entertaining clown antics.",
        performer: "The Laughing Jester",
        price: 300,
        img:"./image/circus/3.jpeg"
      },
      {
        id: 61,
        event_name: "Jaipur Jamboree",
        location: "Jaipur",
        date: "2024-06-05",
        description: "Jaipur presents a jamboree of circus acts, featuring awe-inspiring feats and breathtaking performances.",
        performer: "The Fearless Flyers",
        price: 200,
        img:"./image/circus/4.jpg"
      },
      {

        id: 62,
        event_name: "Goa Circus Magic",
        location: "Goa",
        date: "2024-07-15",
        description: "Experience the magic of the circus in Goa, with spellbinding illusions, enchanting performers, and captivating acts.",
        performer: "The Mystical Magician",
        price: 600,
        img:"./image/circus/5.jpg"
      },
      {
        id: 63,
        event_name: "Pune Pantomime Circus",
        location: "Pune",
        date: "2024-08-20",
        description: "Pune presents a pantomime circus with silent comedy, mime acts, and a unique blend of visual storytelling.",
        performer: "The Silent Marvels",
        price: 700,
        img:"./image/circus/6.jpg"
      },
      {
        id: 64,
        event_name: "Kolkata Kaleidoscope",
        location: "Kolkata",
        date: "2024-09-10",
        description: "Kolkata's circus kaleidoscope features a colorful array of acts, from jugglers and contortionists to fire performers.",
        performer: "The Juggling Dynamo",
        price: 800,
        img:"./image/circus/7.jpg"
      },
      {
        id: 65,
        event_name: "Chandigarh Circus Carnival",
        location: "Chandigarh",
        date: "2024-10-05",
        description: "Chandigarh hosts a circus carnival with a mix of traditional and modern acts, promising entertainment for all ages.",
        performer: "The Marvelous Marionettes",
        price: 900,
        img:"./image/circus/8.jpg"
      },
      {
        id: 66,
        event_name: "Lucknow Luminary Circus",
        location: "Lucknow",
        date: "2024-11-15",
        description: "Lucknow's luminary circus showcases brilliant performers, dazzling lights, and a magical atmosphere under the big top.",
        performer: "The Luminous Acrobats",
        price: 520,
        img:"./image/circus/9.jpg"
      },
      {
        id: 67,
        event_name: "Mysuru Magic Extravaganza",
        location: "Mysuru",
        date: "2024-12-10",
        description: "Mysuru presents a magic extravaganza with illusionists, escape artists, and mind-bending performances.",
        performer: "The Master Illusionist",
        price: 540,
        img:"./image/circus/10.jpeg"
      },
      {
        id: 68,
        event_name: "Ahmedabad Aerial Adventure",
        location: "Ahmedabad",
        date: "2024-01-20",
        description: "Ahmedabad's circus features an aerial adventure with breathtaking trapeze acts, daring high-wire walks, and more.",
        performer: "The Aerial Daredevils",
        price: 560,
        img:"./image/circus/11.jpg"
      },
      {
        id: 69,
        event_name: "Hyderabad Hilarity Circus",
        location: "Hyderabad",
        date: "2024-02-15",
        description: "Hyderabad's circus brings laughter and joy with hilarious clown routines, comedy skits, and amusing antics.",
        performer: "The Hilarious Harlequin",
        price: 250,
        img:"./image/circus/12.jpg"
      },
      {
        id: 70,
        event_name: "Kochi Kinetic Circus",
        location: "Kochi",
        date: "2024-03-10",
        description: "Kochi hosts a kinetic circus with high-energy performances, dynamic acts, and a lively atmosphere under the big tent.",
        performer: "The Kinetic Juggernauts",
        price: 450,
        img:"./image/circus/13.jpg"
      },
      {
        id: 71,
        event_name: "Chennai Circus Charm",
        location: "Chennai",
        date: "2024-04-05",
        description: "Chennai's circus charm captivates audiences with charming acts, graceful performers, and a delightful experience for all.",
        performer: "The Charming Contortionists",
        price: 650,
        img:"./image/circus/14.jpg"
      },
      {
        id: 72,
        event_name: "Bengaluru Big Top Bonanza",
        location: "Bengaluru",
        date: "2024-05-15",
        description: "Bengaluru's big top bonanza features a variety of circus acts, from acrobatics to animal performances, creating a magical experience.",
        performer: "The Big Top Ringmaster",
        price: 750,
        img:"./image/circus/15.jpg"
      },
      {
        id: 73,
        event_name: "Raipur Retro Circus",
        location: "Raipur",
        date: "2024-06-10",
        description: "Raipur's retro circus takes you back in time with nostalgic acts, classic performances, and a vintage circus atmosphere.",
        performer: "The Retro Ringmaster",
        price: 590,
        img:"./image/circus/16.jpg"
      },
      {
        id: 74,
        event_name: "Indore Incredible Circus",
        location: "Indore",
        date: "2024-07-05",
        description: "Indore hosts an incredible circus with mind-boggling acts, unbelievable stunts, and a showcase of extraordinary talent.",
        performer: "The Incredible Enchanters",
        price: 599,
        img:"./image/circus/1.jpg"
      },
      {
        id: 74,
        event_name: "Trivandrum Twirling Troupe",
        location: "Trivandrum",
        date: "2024-08-15",
        description: "Trivandrum's twirling troupe showcases mesmerizing acts with twirlers, jugglers, and dynamic performances.",
        performer: "The Twirling Dynamo",
        price: 577,
        img:"./image/circus/2.jpg"
      },
      {
        id: 75,
        event_name: "Bhopal Breathtaking Circus",
        location: "Bhopal",
        date: "2024-09-10",
        description: "Bhopal's breathtaking circus features awe-inspiring acts, breathtaking performances, and a showcase of exceptional skills.",
        performer: "The Breathtaking Balancers",
        price: 533,
        img:"./image/circus/3.jpeg"
      },
      {
        id: 76,
        event_name: "Ahmednagar Amazing Acts",
        location: "Ahmednagar",
        date: "2024-10-05",
        description: "Ahmednagar presents a circus with amazing acts, showcasing the talents of performers in a dazzling display of skill and artistry.",
        performer: "The Amazing Acrobat",
        price: 523,
        img:"./image/circus/4.jpg"
      }
    ]
  },
  {
    event_type: "Magic",
    image: "./image/magic/main.jpg",
    id: 'E05',
    events: [
      {
        id: 77,
        event_name: "Enchanting Evening in Mumbai",
        location: "Mumbai",
        date: "2024-03-15",
        description: "An enchanting evening of magic and illusion in the heart of Mumbai, featuring mind-bending tricks and mesmerizing performances.",
        performer: "The Illustrious Illusionist - Arjun Magic",
        price: 501,
        img:"./image/magic/1.jpg"
      },
      {
        id: 78,
        event_name: "Bangalore Mystique",
        location: "Bangalore",
        date: "2024-04-20",
        description: "Experience the mystique of magic in Bangalore, with magicians showcasing their extraordinary skills and captivating the audience.",
        performer: "The Master Magician - Rajesh Kumar",
        price: 402,
        img:"./image/magic/2.jpg"
      },
      {
        id: 79,
        event_name: "Delhi Wonders",
        location: "Delhi",
        date: "2024-05-10",
        description: "Delhi becomes a hub of magical wonders, featuring illusionists, escape artists, and spellbinding performances that defy explanation.",
        performer: "The Marvelous Manipulator - Natasha Magic",
        price: 301,
        img:"./image/magic/3.jpg"
      },
      {
        id: 80,
        event_name: "Jaipur Conjuring Carnival",
        location: "Jaipur",
        date: "2024-06-05",
        description: "Jaipur hosts a magical conjuring carnival, where magicians showcase their skills in sleight of hand, levitation, and more.",
        performer: "The Charismatic Conjurer - Vikram the Enchanter",
        price: 234,
        img:"./image/magic/4.jpg"
      },
      {

        id: 81,
        event_name: "Goa Grand Illusions",
        location: "Goa",
        date: "2024-07-15",
        description: "Goa presents an evening of grand illusions, featuring magicians who push the boundaries of reality with their mind-boggling tricks.",
        performer: "The Grand Illusionist - Maya Magic",
        price: 566,
        img:"./image/magic/5.jpg"
      },
      {
        id: 82,
        event_name: "Pune Prestidigitation",
        location: "Pune",
        date: "2024-08-20",
        description: "Pune hosts a night of prestidigitation, with magicians performing seamless and astonishing sleight of hand and close-up magic.",
        performer: "The Prestigious Prestidigitator - Rahul Wizard",
        price: 890,
        img:"./image/magic/6.jpeg"
      },
      {
        id: 83,
        event_name: "Kolkata Enigma",
        location: "Kolkata",
        date: "2024-09-10",
        description: "Kolkata becomes an enigma of magic, featuring magicians who create a sense of mystery and wonder with their captivating performances.",
        performer: "The Enigmatic Enchanter - Ananya Sorcerer",
        price: 567,
        img:"./image/magic/7.jpg"
      },
      {
        id: 84,
        event_name: "Hyderabad Hocus Pocus",
        location: "Hyderabad",
        date: "2024-10-05",
        description: "Hyderabad experiences a night of hocus pocus, with magicians casting spells and weaving magic through their fantastical acts.",
        performer: "The Hocus Pocus Sorceress - Karthik Magic",
        price: 590,
        img:"./image/magic/8.jpg"
      },
      {
        id: 85,
        event_name: "Lucknow Illusionary Extravaganza",
        location: "Lucknow",
        date: "2024-11-15",
        description: "Lucknow's illusionary extravaganza features magicians who transport the audience to a world of fantasy with their mind-bending illusions.",
        performer: "The Illusionary Enchanter - Sneha Magic",
        price: 450,
        img:"./image/magic/9.jpg"
      },
      {
        id: 86,
        event_name: "Mysuru Magical Odyssey",
        location: "Mysuru",
        date: "2024-12-10",
        description: "Embark on a magical odyssey in Mysuru, with magicians taking the audience on a journey through spellbinding illusions and tricks.",
        performer: "The Magical Odyssey Conjurer - Arvind Enigma",
        price: 350,
        img:"./image/magic/10.jpg"
      },
      {
        id: 87,
        event_name: "Ahmedabad Astonishment",
        location: "Ahmedabad",
        date: "2024-01-20",
        description: "Ahmedabad witnesses moments of astonishment, with magicians performing feats that leave the audience in awe and wonder.",
        performer: "The Astonishing Magus - Neha Sorcery",
        price: 250,
        img:"./image/magic/11.jpeg"
      },
      {
        id: 88,
        event_name: "Jaipur Jugglery",
        location: "Jaipur",
        date: "2024-02-15",
        description: "Jaipur's magical jugglery features magicians who skillfully juggle illusions, creating a mesmerizing and visually stunning spectacle.",
        performer: "The Jugglery Maestro - Aditya Magic",
        price: 520,
        img:"./image/magic/12.jpeg"
      },
      {
        id: 89,
        event_name: "Kochi Kaleidoscope of Magic",
        location: "Kochi",
        date: "2024-03-10",
        description: "Kochi presents a kaleidoscope of magic, with magicians showcasing a diverse range of magical acts, from card tricks to grand illusions.",
        performer: "The Magical Kaleidoscope - Priya Enchantress",
        price: 510,
        img:"./image/magic/13.jpg"
      },
      {
        id: 90,
        event_name: "Chennai Charmers",
        location: "Chennai",
        date: "2024-04-05",
        description: "Chennai's magical charmers cast a spell on the audience with their charming performances and enchanting display of magical prowess.",
        performer: "The Charming Charmer - Rohit Magic",
        price: 456,
        img:"./image/magic/14.jpg"
      },
      {
        id: 91,
        event_name: "Bengaluru Bewitchment",
        location: "Bengaluru",
        date: "2024-05-15",
        description: "Bengaluru experiences an evening of bewitchment, with magicians conjuring up magical spells and enthralling the audience.",
        performer: "The Bewitching Magician - Aishwarya Enigma",
        price: 987,
        img:"./image/magic/1.jpg"
      },
      {
        id: 92,
        event_name: "Raipur Magical Marvels",
        location: "Raipur",
        date: "2024-06-10",
        description: "Raipur's magical marvels showcase extraordinary feats and illusions, creating a spectacle of wonder and amazement.",
        performer: "The Magical Marvel - Suresh Sorcerer",
        price: 876,
        img:"./image/magic/2.jpg"
      },
      {
        id: 93,
        event_name: "Indore Illustrious Enchantment",
        location: "Indore",
        date: "2024-07-05",
        description: "Indore's illustrious enchantment features magicians who weave a tapestry of magical wonders, leaving the audience in awe.",
        performer: "The Illustrious Enchanter - Ritu Magic",
        price: 765,
        img:"./image/magic/3.jpg"
      },
      {
        id: 94,
        event_name: "Trivandrum Trickster's Tale",
        location: "Trivandrum",
        date: "2024-08-15",
        description: "Trivandrum's trickster's tale unfolds with magicians presenting a captivating narrative through their spellbinding tricks and illusions.",
        performer: "The Trickster's Tale Magus - Sanjay Sorcery",
        price: 654,
        img:"./image/magic/4.jpg"
      },
      {
        id: 95,
        event_name: "Bhopal Bewildering Magic",
        location: "Bhopal",
        date: "2024-09-10",
        description: "Bhopal's bewildering magic captivates the audience with a series of bewildering and mind-boggling magical performances.",
        performer: "The Bewildering Magician - Anand Enigma",
        price: 543,
        img:"./image/magic/5.jpg"
      },
      {
        id: 96,
        event_name: "Aurangabad Awe-inspiring Acts",
        location: "Aurangabad",
        date: "2024-10-05",
        description: "Aurangabad witnesses awe-inspiring magical acts, with magicians pushing the boundaries of reality and creating a truly magical experience.",
        performer: "The Awe-inspiring Magus - Shreya Sorcery",
        price: 521,
        img:"./image/magic/6.jpeg"
      }
    ]
  }
]

let url=window.location.href.split("/");
let filename=url.slice(-1).toString();
url.pop();
url=url.join("/");
console.log(filename);


let user = localStorage.getItem("userData");
let nav = document.getElementById("nav-ul");
if(nav!=null)
{
  let add = nav.innerHTML;
  if (user == null)
    add += "<li><a href='./signin.html'>LOGIN</a></li>"
  else {
    add += "<li><a href='./cart.html'>CART</a></li>";
    add += `<li><a href='./profile.html'>${JSON.parse(localStorage.getItem(localStorage.getItem("userData"))).name}</a></li>`;
    add += `<li style='cursor: pointer;' onclick="localStorage.removeItem('userData'); window.location = '${url}/index.html';">LOGOUT</li>`;
  }
  nav.innerHTML = add;
}

function gotoEvent()
{
  localStorage.setItem('showeventid', 'all');
   window.location = `${url}/events.html`
}




if (filename=="index.html" || filename=="") {



  // ------------carousel-----------------------------

  try {
    let currentIndex = 0;

    function showSlide(index) {
      const carouselInner = document.querySelector('.carousel-inner');
      const totalSlides = document.querySelectorAll('.carousel-item').length;
      index = (index + totalSlides) % totalSlides; // Ensure the index wraps around

      const translateValue = -index * 100 + '%';
      carouselInner.style.transform = 'translateX(' + translateValue + ')';
      currentIndex = index;
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    // Auto slide every 3 seconds (adjust as needed)
    setInterval(nextSlide, 3000);
  }
  catch (err) {
    console.log(err);
  }


  // -------------------------------------------------------------------------

  let cards = "";

  const events = document.getElementById("events");
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    cards += ` <div class="card" id='${data[i].id}'>
  <img src='${data[i].image}' alt="img"/>
  <div class="card-content">
    <h2>${data[i].event_type}</h2>
  </div>
</div>`;
  }

  events.innerHTML = cards;
  let event_type_Array = document.getElementsByClassName("card");
  function eventPage(e) {
    localStorage.setItem("showeventid", e.currentTarget.id);
    window.location = `${url}/events.html`
  }

  for (let i = 0; i < event_type_Array.length; i++) {
    event_type_Array[i].addEventListener("click", eventPage, true);
  }


}

//eventpage

if (filename== "events.html" ) {

  let eventsCards = "", eventsData, showeventid;

  showeventid = localStorage.getItem("showeventid");

  if (showeventid == "all")
    eventsData = data;
  else
    eventsData = data.filter(e => e.id == showeventid);

  for (let i = 0; i < eventsData.length; i++) {
    for (let j = 0; j < eventsData[i].events.length; j++) {
      eventsCards += ` <div class="collectionitemmain">
      <div class="collectionitem">
        <div class="collectionitem-background" style="background-image: url('${eventsData[i].events[j].img}')"></div>
        <form action="" method="post" class="collectionitem-form">
          <button type='button' class="collectionitem-button" onclick='bookEvents(${eventsData[i].events[j].id})' id="${eventsData[i].events[j].id}"}">Book Now</button>
        </form>
      </div>
      <div class="collectionitem-discription">
        <h3 style="color: black">${eventsData[i].events[j].event_name}</h3>
        <p style="color: black">${eventsData[i].events[j].date}</p>
        <p style="color: grey">${eventsData[i].events[j].location}</p>
        <p style="color: grey">${eventsData[i].events[j].price} &#8377;</p>
      </div>
    </div>`
    }
  }
  document.getElementById("events-main").innerHTML = eventsCards;

  function bookEvents(id) {
    if (localStorage.getItem("userData") == null) {
      window.location = `${url}/signin.html`;
      return;
    }

    for (let i = 0; i < eventsData.length; i++) {
      for (let j = 0; j < eventsData[i].events.length; j++) {
        if (id == eventsData[i].events[j].id) {
          console.log(eventsData[i].events[j]);
          let user = JSON.parse(localStorage.getItem(localStorage.getItem("userData")));
          for (let p = 0; p < user.cart.length; p++) {
            if (user.cart[p].id == id) {
              user.cart[p]={ ...eventsData[i].events[j], seat: user.cart[p].seat+1 };
              console.log(user);
              localStorage.setItem(localStorage.getItem("userData"), JSON.stringify(user));
              alert("Successfully added into cart again");
              return;
            }
          }
          user.cart.push({ ...eventsData[i].events[j], seat: 1 });
          console.log(user);
          localStorage.setItem(localStorage.getItem("userData"), JSON.stringify(user));
          alert("Successfully added into cart")
          // window.location=`${url}/cart.html`
        }
      }
    }

  }
}

//signup
if (filename=="signup.html") {

  let user = localStorage.getItem("userData");
  if(user!=null)
  {
    window.location=`${url}/index.html`;
  }

  document.getElementById("signup").addEventListener("click", signup);

  function signup() {
   
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value.toLowerCase();
    let password = document.getElementById("password").value.toLowerCase();

    if(name.length==0 || email.length==0|| password.length==0 || mobile.length==0 )
    {
      alert("please enter all the data..");
      return;
    }
    let mobileexp=/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/
    let emailexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!mobileexp.test(mobile))
    {
      alert("Please enter valid mobile number");
      return;
    }
    if(!emailexp.test(email))
    {
      alert("Please enter valid email address");
      return;
    }
    if(password.length<8)
    {
      alert("Please enter minimum 8 character on password");
      return;
    }
    if (JSON.parse(localStorage.getItem(email)) == null) {
      localStorage.setItem(email, JSON.stringify({
        "name": name, "mobile": mobile, "email": email, "password": password, "cart": [], "order": []
      }));
      localStorage.setItem("userData", email);
      window.location = `${url}/index.html`
    }
    else {
      alert("User already Exist");
    }

  }
}

//signin
if (filename=="signin.html") {
  let user = localStorage.getItem("userData");
  if(user!=null)
  {
    window.location=`${url}/index.html`;
  }

  document.getElementById("signin").addEventListener("click", signin)
  function signin() {
    let email = document.getElementById("email").value.toLowerCase();
    let password = document.getElementById("password").value.toLowerCase();
    if( email.length==0|| password.length==0  )
    {
      alert("Please enter all the data..");
      return;
    }

    let emailexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!emailexp.test(email))
    {
      alert("Please enter valid email address");
      return;
    }
    if(password.length<8)
    {
      alert("Please enter minimum 8 character on password");
      return;
    }
    console.log(JSON.parse(localStorage.getItem(email)));
    if (JSON.parse(localStorage.getItem(email)) != null && JSON.parse(localStorage.getItem(email)).email == email && JSON.parse(localStorage.getItem(email)).password == password) {
      localStorage.setItem("userData", email);
      window.location = `${url}/index.html`
    }
    else {
      alert("invalid username and password");
    }
  }
}


//cart

if (filename=="cart.html")
{
  
let url=window.location.href.split("/");
url.pop();
url=url.join("/");

let userD = localStorage.getItem("userData");
  if(userD==null)
  {
    window.location=`${url}/index.html`;
  }
      let allTotal = 0;

      let cart = document.getElementById("cart");
      let user = JSON.parse(
        localStorage.getItem(localStorage.getItem("userData"))
      );
      let cartItem = user.cart;
      console.log(user);

      function increaseSeat(id) {
        for (let i = 0; i < user.cart.length; i++) {
          if (user.cart[i].id == id) {
            user.cart[i].seat = user.cart[i].seat + 1;
            break;
          }
        }

        console.log(user);

        localStorage.setItem(
          localStorage.getItem("userData"),
          JSON.stringify(user)
        );
        window.location = `${url}/cart.html`;
      }

      function decreaseSeat(id) {
        for (let i = 0; i < user.cart.length; i++) {
          if (user.cart[i].id == id) {
            user.cart[i].seat = user.cart[i].seat - 1;
            if (user.cart[i].seat == 0) {
              user.cart = user.cart.filter((item) => item.id != id);
            }
            break;
          }
        }
        localStorage.setItem(
          localStorage.getItem("userData"),
          JSON.stringify(user)
        );
        window.location = `${url}/cart.html`;
      }

      function removeAll() {
        if(confirm("Are you sure ?"))
        {
        user.cart = [];
        localStorage.setItem(
          localStorage.getItem("userData"),
          JSON.stringify(user)
        );
        window.location = `${url}/cart.html`;
        }
      }

      function checkOut() {
        user.order = [...user.order, ...user.cart];
        user.cart = [];
        localStorage.setItem(
          localStorage.getItem("userData"),
          JSON.stringify(user)
        );
        alert("Successfully booked event ticket..")
        window.location = `${url}/profile.html`;
      }

      let str = `
      
      <div class="Header">
        <h3 class="Heading">Booking Cart</h3>
        <h5 class="Action" onclick="removeAll()">Remove all</h5>
      </div>`;

      for (let i = 0; i < cartItem.length; i++) {
        let total = cartItem[i].price * cartItem[i].seat;
        allTotal += total;
        str += `
        <div class="Cart-Items">
        <div class="image-box">
          <img src="${cartItem[i].img}" style="height: 120px" />
        </div>
        <div class="about">
          <h1 class="title">${cartItem[i].event_name}</h1>
          <h3 class="subtitle">${cartItem[i].price} &#8377;</h3>
          <h3>${cartItem[i].location}</h3>
        </div>
        <div class="counter">
        <div class="btn dec" onclick="decreaseSeat(${cartItem[i].id})">-</div>
        <div class="count">${cartItem[i].seat}</div>
        <div class="btn inc" onclick="increaseSeat(${cartItem[i].id})">+</div>
        </div>
        <div class="prices">
          <div class="amount">${total} &#8377;</div>
        </div>
      </div>
      <hr/>
        `;
      }

      str += `
      <div class="checkout">
        <div class="total">
          <div>
            <div class="Subtotal">Total</div>
          </div>
          <div class="total-amount">${allTotal} &#8377;</div>
        </div>
        <button class="button" type="button" onclick="checkOut()">Checkout</button>
      </div>
    </div>`;

      cart.innerHTML = str;

}

//contactUs page

if (filename=="contact.html")
{
     document.getElementById("btn").addEventListener("click",feedback);
     function feedback()
     {

      let name = document.getElementById("name").value;
      let mobile = document.getElementById("mobile").value;
      let email = document.getElementById("email").value.toLowerCase();
      let message = document.getElementById("message").value.toLowerCase();
  
      if(name.length==0 || email.length==0|| message.length==0 || mobile.length==0 )
      {
        alert("please enter all the data..");
        return;
      }
      let mobileexp=/^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/
      let emailexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
      if(!mobileexp.test(mobile))
      {
        alert("Please enter valid mobile number");
        return;
      }
      if(!emailexp.test(email))
      {
        alert("Please enter valid email address");
        return;
      }
      if(message.length<20)
      {
        alert("Please enter minimum 20 character on message field");
        return;
      }
      alert("Thank you for sending feedback..");
      window.location = `${url}/contact.html`

     }
}
