exports.up = async function(knex) {
  await knex.schema.createTable("events", table => {
    table.increments("id");
    table.string("title").notNullable();
    table.datetime("date").notNullable();
    table.string("location");
    table.text("details");
    table.timestamps(false, true);
  });

  await knex("events").insert([
    {
      title: "Challenge Session",
      details: "Please bring beer!",
      date: "04/07/2020 20:00",
      location: "https://zoom.us/j/861156*454"
    },
    {
      title: "Study Group",
      details: "Please bring your laptop!",
      date: "06/19/2020 16:00",
      location: "Albertina"
    },
    {
      title: "Pair Programming Session",
      details: "Please bring pizza!",
      date: "05/06/2020 15:15",
      location: "https://zoom.us/j/861156*454"
    },
    {
      title: "Code & Cook",
      details: "Please bring creative recips",
      date: "12/07/2020 18:00",
      location: "Basislager Coworking, Peterssteinweg 14, Leipzig"
    },
    {
      title: "Revising Sessions",
      details: "Please bring loads of questions",
      date: "06/02/2020 17:00",
      location: "Unter den Linden 6"
    },
    {
      title: "Pair Programming Session",
      details: "We'll be programming together in pairs!!",
      date: "02/04/2020 16:00",
      location: "Seeburgstraße 11, 04103 Leipzig"
    },
    {
      title: "Refactoring 101",
      details:
        "At this event you will learn from an experienced coder the basics of making your code look cleaner, shorter, and DRY-er! Lecture taking place on the Zoom platform",
      date: "07/09/2020 14:00",
      location: "https://zoom.us/j/861156*454"
    },
    {
      title: "Pizza Pizza Pizza again and again",
      details: "Please bring pizza!",
      date: "07/12/2020 22:22",
      location: "Leipzig"
    },
    {
      title: "Code & Cook edition #1",
      details: "Please bring Softeis!",
      date: "05/25/2020 19:00",
      location: "Gabe's personal Zoom room"
    },
    {
      title: "Code & Cook edition #2",
      details: "Please bring Frikassee!",
      date: "05/26/2020 19:00",
      location: "Basislager Coworking, Peterssteinweg 14, Leipzig"
    },
    {
      title: "Code & Cook edition #3",
      details: "Please bring halbes Schwein auf Toast!",
      date: "05/28/2020 19:00",
      location: "At Taylor's place"
    },
    {
      title: "git practise",
      details: "Please bring donughts!",
      date: "01/08/2019 20:00",
      location: "Luetznerstr. 4"
    },
    {
      title: "regex",
      details: "Please bring cake!",
      date: "02/07/2022 19:00",
      location: "Am Markt 1"
    },
    {
      title: "Pair Programming Session (Event title)",
      details: "Please bring pizza!",
      date: "04/20/2020 18:00",
      location: "Zoom"
    },
    {
      title: "Code and Cook",
      details: "Bring your favourite ingredient and drinks",
      date: "05/30/2020 17:00",
      location: "Your place"
    },
    {
      title: "App building",
      details: "Working on your current prijects together",
      date: "05/25/2020 18:00",
      location: "Zoom"
    },
    {
      title: "Pair Programming- Python #1",
      details: "Learn AI and Machine learning",
      date: "05/03/2020 17:30",
      location: "Coronastr. 15, Leipzig"
    },
    {
      title: "Pair Programming- c++ #1",
      details: "Learn to make music Plugins",
      date: "06/08/2020 17:30",
      location: "Coronastr. 15, Leipzig"
    },
    {
      title: "Pair Programming- Rust #1",
      details: "Learn corrosion control",
      date: "06/09/2020 17:30",
      location: "Coronastr. 15, Leipzig"
    },
    {
      title: "Pair Programming Session",
      details: "Please bring pizza!",
      date: "05/17/2020 19:30",
      location: "Leipzig, Kuhturmstr. 5"
    },
    {
      title: "Code and Cook Session",
      details: "Please bring beer!",
      date: "05/15/2020 19:30",
      location: "Leipzig, Karli 15"
    },
    {
      title: "Javascript Session",
      details: "It´s for totally beginner.",
      date: "05/22/2020 09:00",
      location: "Leipzig, Hohe Str.4"
    },
    {
      title: "Vue.js Session",
      details: "Please bring pizza and beer!",
      date: "05/17/2020 18:45",
      location: "Dresden, Fetscherstraße 1"
    },
    {
      title: "Only Vegetables",
      details: "Please don't bring pizza!",
      date: "12/12/2019 19:19",
      location: "Halle/Saale"
    },
    {
      title: "Carnaval",
      details: "Please Sweets and good mood",
      date: "11/11/2021 11:11",
      location: "Cologne"
    },
    {
      title: "Kayaking",
      details: "From Leipzig to Halle",
      date: "05/31/2020 11:00",
      location: "Stadthafen Leipzig"
    },
    {
      title: "Create your own space shooter",
      details: "Please bring your laptop",
      date: "06/12/2020 17:00",
      location: "Petersteinweg 14"
    },
    {
      title: "movie night",
      details: "bring drinks & snacks",
      date: "05/09/2020 19:00",
      location: "Wurznerstraße 1"
    },
    {
      title: "Pair Programming Session",
      details: "Please bring good mood!",
      date: "03/03/2021 12:00",
      location: "zoom.com/133544"
    },
    {
      title: "Code and stay sane",
      details: "Free beer!",
      date: "05/06/2020 20:00",
      location: "BeerStreet 1, 09956, Leipzig "
    },
    {
      title: "Code & Cook edition #4",
      details: "Potluck!",
      date: "06/28/2020 12:46",
      location: "https://what3words.com/gr%C3%BCn.nahm.studenten"
    }
  ]);
};

exports.down = async function(knex) {
  await knex.schema.dropTable("events");
};
