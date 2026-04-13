const WORDS = [
  // --- Games ---
  { category: "Games", word: "Call of Duty", decoy: "Battlefield" },
  { category: "Games", word: "Valorant", decoy: "CS:GO" },
  { category: "Games", word: "Fortnite", decoy: "PUBG" },
  { category: "Games", word: "Apex Legends", decoy: "Warzone" },
  { category: "Games", word: "GTA V", decoy: "Red Dead Redemption 2" },
  { category: "Games", word: "Minecraft", decoy: "Roblox" },
  { category: "Games", word: "FIFA", decoy: "eFootball" },
  { category: "Games", word: "Need for Speed", decoy: "Forza Horizon" },
  { category: "Games", word: "Clash of Clans", decoy: "Clash Royale" },
  { category: "Games", word: "Subway Surfers", decoy: "Temple Run" },
  { category: "Games", word: "Among Us", decoy: "Fall Guys" },
  { category: "Games", word: "Pokemon", decoy: "Digimon" },
  { category: "Games", word: "Mario", decoy: "Sonic" },

  // --- Music / Artists ---
  { category: "Music", word: "Drake", decoy: "Travis Scott" },
  { category: "Music", word: "Taylor Swift", decoy: "Olivia Rodrigo" },
  { category: "Music", word: "Arijit Singh", decoy: "Atif Aslam" },
  { category: "Music", word: "Spotify", decoy: "Apple Music" },
  { category: "Music", word: "Rap", decoy: "Hip-Hop" },
  { category: "Music", word: "Concert", decoy: "Festival" },

  // --- Food ---
  { category: "Food", word: "Biryani", decoy: "Pulao" },
  { category: "Food", word: "Shawarma", decoy: "Roll" },
  { category: "Food", word: "Maggi", decoy: "Top Ramen" },
  { category: "Food", word: "Cold Coffee", decoy: "Milkshake" },
  { category: "Food", word: "Pizza", decoy: "Burger" },
  { category: "Food", word: "Paneer", decoy: "Tofu" },
  { category: "Food", word: "Sushi", decoy: "Sashimi" },
  { category: "Food", word: "Pancake", decoy: "Waffle" },
  { category: "Food", word: "Spaghetti", decoy: "Noodles" },
  { category: "Food", word: "Ice Cream", decoy: "Gelato" },
  { category: "Food", word: "Taco", decoy: "Burrito" },

  // --- Religion / Mythology ---
  { category: "Religion", word: "Krishna", decoy: "Rama" },
  { category: "Religion", word: "Shiva", decoy: "Vishnu" },
  { category: "Religion", word: "Heaven", decoy: "Rebirth" },
  { category: "Religion", word: "Temple", decoy: "Church" },
  { category: "Religion", word: "Karma", decoy: "Fate" },

  // --- Places / Lifestyle ---
  { category: "Places", word: "Goa", decoy: "Bali" },
  { category: "Places", word: "Dubai", decoy: "Singapore" },
  { category: "Places", word: "New York", decoy: "London" },
  { category: "Places", word: "Hostel", decoy: "Hotel" },
  { category: "Places", word: "Cafe", decoy: "Bar" },
  { category: "Places", word: "Hospital", decoy: "Clinic" },
  { category: "Places", word: "Beach", decoy: "Lake" },
  { category: "Places", word: "Museum", decoy: "Art Gallery" },
  { category: "Places", word: "Library", decoy: "Bookstore" },
  { category: "Places", word: "Airport", decoy: "Train Station" },

  // --- Chaos ---
  { category: "Chaos", word: "Red Flag", decoy: "Deal Breaker" },
  { category: "Chaos", word: "Situationship", decoy: "Relationship" },
  { category: "Chaos", word: "Overthinking", decoy: "Anxiety" },
  { category: "Chaos", word: "Gym", decoy: "Home Workout" },
  { category: "Chaos", word: "All-nighter", decoy: "Early Morning" },

  // --- Animals ---
  { category: "Animals", word: "Elephant", decoy: "Hippo" },
  { category: "Animals", word: "Leopard", decoy: "Cheetah" },
  { category: "Animals", word: "Dolphin", decoy: "Whale" },
  { category: "Animals", word: "Crocodile", decoy: "Alligator" },
  { category: "Animals", word: "Frog", decoy: "Toad" },
  { category: "Animals", word: "Penguin", decoy: "Puffin" },

  // --- Sports ---
  { category: "Sports", word: "Tennis", decoy: "Badminton" },
  { category: "Sports", word: "Soccer", decoy: "Rugby" },
  { category: "Sports", word: "Baseball", decoy: "Cricket" },
  { category: "Sports", word: "Snowboarding", decoy: "Skiing" },
  { category: "Sports", word: "Boxing", decoy: "Wrestling" },
  { category: "Sports", word: "Swimming", decoy: "Diving" },

  // --- Jobs ---
  { category: "Jobs", word: "Surgeon", decoy: "Dentist" },
  { category: "Jobs", word: "Pilot", decoy: "Flight Attendant" },
  { category: "Jobs", word: "Teacher", decoy: "Professor" },
  { category: "Jobs", word: "Plumber", decoy: "Electrician" },
  { category: "Jobs", word: "Chef", decoy: "Baker" },
  { category: "Jobs", word: "Police Officer", decoy: "Security Guard" },

  // --- Objects ---
  { category: "Objects", word: "Smartphone", decoy: "Tablet" },
  { category: "Objects", word: "Guitar", decoy: "Violin" },
  { category: "Objects", word: "Spoon", decoy: "Fork" },
  { category: "Objects", word: "Blanket", decoy: "Towel" },
  { category: "Objects", word: "Bicycle", decoy: "Motorcycle" },
  { category: "Objects", word: "Clock", decoy: "Watch" },

  // --- Nature ---
  { category: "Nature", word: "Tornado", decoy: "Hurricane" },
  { category: "Nature", word: "Volcano", decoy: "Earthquake" },
  { category: "Nature", word: "Forest", decoy: "Jungle" },
  { category: "Nature", word: "River", decoy: "Stream" },
  { category: "Nature", word: "Mountain", decoy: "Hill" },
  { category: "Nature", word: "Desert", decoy: "Canyon" },

  // --- Movies/TV ---
  { category: "Movies/TV", word: "Harry Potter", decoy: "Lord of the Rings" },
  { category: "Movies/TV", word: "Star Wars", decoy: "Star Trek" },
  { category: "Movies/TV", word: "Friends", decoy: "The Office" },
  { category: "Movies/TV", word: "Batman", decoy: "Spider-Man" },
  { category: "Movies/TV", word: "The Matrix", decoy: "Inception" },
  { category: "Movies/TV", word: "Stranger Things", decoy: "Dark" }
];

const QUESTIONS = [
  // --- Original Generic Questions ---
  { question: "Where do you want to take your dream vacation?", imposterQuestion: "Name a state or country." },
  { question: "What is your least favorite fast food restaurant?", imposterQuestion: "Name a restaurant in your area." },
  { question: "Who is your biggest celebrity crush?", imposterQuestion: "Name the last celebrity you saw in a movie." },
  { question: "How many days is it okay to go without showering?", imposterQuestion: "Write a number 1–30." },
  { question: "What actor could you beat in a fight?", imposterQuestion: "Who is your favorite actor?" },
  { question: "What is the best food to order on a first date?", imposterQuestion: "What appetizer do you like to eat?" },
  { question: "Which person here is most likely to commit a crime?", imposterQuestion: "Write down the name of someone in the group." },
  { question: "If you could go back in time to meet one person, who would it be?", imposterQuestion: "What historical figure is the most influential?" },
  { question: "How many people would show up to your birthday party?", imposterQuestion: "Write down any number below 100." },
  { question: "How old should someone be when they get married?", imposterQuestion: "Choose a number between 18 and 100." },
  { question: "What household item would you bring to a desert island?", imposterQuestion: "What's the last household item you used?" },
  { question: "If you could turn into one animal, what would it be?", imposterQuestion: "What is the ugliest animal?" },
  { question: "Who is the first person you'd call in an emergency?", imposterQuestion: "Write down a contact from your phone." },
  { question: "How many times do you go to the bathroom during the day?", imposterQuestion: "Write a number between 1 and 10." },
  { question: "What athlete do you think you could beat at their own sport?", imposterQuestion: "What athlete is your favorite?" },

  // --- Survival / Chaos ---
  { question: "Who is most likely to survive a zombie apocalypse?", imposterQuestion: "Who would die first in a zombie apocalypse?" },
  { question: "What’s the first thing you’d grab during a fire?", imposterQuestion: "What’s something you use daily?" },
  { question: "Who would panic the fastest in an emergency?", imposterQuestion: "Who stays calm under pressure?" },
  { question: "What’s the worst place to get stuck in?", imposterQuestion: "Where would you like to spend time?" },

  // --- Behavior / Personality traps ---
  { question: "Who is most likely to get scammed?", imposterQuestion: "Who is the smartest here?" },
  { question: "Who would accidentally leak a secret?", imposterQuestion: "Who is the most trustworthy?" },
  { question: "Who would get banned from a place first?", imposterQuestion: "Who follows rules the most?" },
  { question: "Who is most likely to ghost people?", imposterQuestion: "Who replies the fastest?" },
  { question: "Who would make the worst decisions under pressure?", imposterQuestion: "Who makes good decisions?" },

  // --- Opinion-based traps ---
  { question: "What’s something people pretend to enjoy?", imposterQuestion: "What do people genuinely enjoy?" },
  { question: "What’s the most overrated thing ever?", imposterQuestion: "What’s something popular?" },
  { question: "What’s a terrible way to spend money?", imposterQuestion: "What’s a good investment?" },
  { question: "What’s something that looks cool but isn’t useful?", imposterQuestion: "What’s something useful?" },
  { question: "What’s a trend that should die?", imposterQuestion: "What’s a popular trend?" },

  // --- Daily life chaos ---
  { question: "What’s the worst thing to forget before leaving home?", imposterQuestion: "What do people usually carry?" },
  { question: "What’s the most annoying habit someone can have?", imposterQuestion: "What’s a common habit?" },
  { question: "What’s something that instantly ruins your mood?", imposterQuestion: "What improves your mood?" },
  { question: "What’s the worst thing to hear in the morning?", imposterQuestion: "What do you usually hear in the morning?" },
  { question: "What’s the most suspicious thing to do at night?", imposterQuestion: "What do people do at night?" },

  // --- College / relatable ---
  { question: "What’s the worst excuse for missing class?", imposterQuestion: "Why do people miss class?" },
  { question: "Who is most likely to sleep through an exam?", imposterQuestion: "Who studies the most?" },
  { question: "What’s the worst group project role to have?", imposterQuestion: "What role do people usually take in group projects?" },
  { question: "What’s something everyone lies about in college?", imposterQuestion: "What do people talk about in college?" },

  // --- Awkward but safe ---
  { question: "What’s the worst thing to say on a first impression?", imposterQuestion: "What makes a good first impression?" },
  { question: "What’s the most awkward situation to be in?", imposterQuestion: "What’s a normal situation?" },
  { question: "What’s something you should never do in public?", imposterQuestion: "What do people do in public?" },

  // --- Pop culture style thinking ---
  { question: "Who would betray the group in a movie first?", imposterQuestion: "Who would be the hero in a movie?" },
  { question: "What role would you NOT want in a horror movie?", imposterQuestion: "What role would you want in a movie?" },
  { question: "What’s the dumbest decision characters make in movies?", imposterQuestion: "What decisions do characters make in movies?" },

  // --- Risk / consequences ---
  { question: "What’s the worst thing to get caught doing?", imposterQuestion: "What do people usually do?" },
  { question: "What’s something that could ruin your entire day?", imposterQuestion: "What makes your day better?" },
  { question: "What’s a bad idea that sounds fun at first?", imposterQuestion: "What’s something fun to do?" },

  // --- Random chaos (these are GOOD) ---
  { question: "What’s the worst place to lose your phone?", imposterQuestion: "Where do people use their phone?" },
  { question: "What’s something you’d never trust technology with?", imposterQuestion: "What do people use technology for?" },
  { question: "What’s something that should be illegal but isn’t?", imposterQuestion: "What is legal?" },
  { question: "What’s something people overreact to?", imposterQuestion: "What’s something normal?" },

  // --- Thought traps ---
  { question: "What’s harder than it looks?", imposterQuestion: "What’s easy to do?" },
  { question: "What’s something simple that people mess up?", imposterQuestion: "What’s something simple?" },
  { question: "What’s something you’d never try again?", imposterQuestion: "What’s something you want to try?" },

  // --- Social chaos ---
  { question: "Who is most likely to start drama accidentally?", imposterQuestion: "Who avoids drama?" },
  { question: "Who would make the worst leader?", imposterQuestion: "Who would be the best leader?" },
  { question: "Who is most likely to overreact?", imposterQuestion: "Who stays calm?" },

  // --- Final strong ones ---
  { question: "What’s the worst advice someone can give?", imposterQuestion: "What’s good advice?" },
  { question: "What’s something that sounds smart but isn’t?", imposterQuestion: "What sounds smart?" },
  { question: "What’s something people fake all the time?", imposterQuestion: "What do people do honestly?" },
  { question: "What’s something you should NEVER do twice?", imposterQuestion: "What do people do often?" }
];
