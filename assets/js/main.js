// Enhanced Bible Data with Professional Cover Art URLs
const BIBLE_BOOKS = {
  OT: [
    ["Genesis", 50, "creation", "In the beginning..."],
    ["Exodus", 40, "deliverance", "Let my people go"],
    ["Leviticus", 27, "holiness", "Be holy as I am holy"],
    ["Numbers", 36, "wandering", "In the wilderness"],
    ["Deuteronomy", 34, "law", "Hear, O Israel"],
    ["Joshua", 24, "conquest", "Be strong and courageous"],
    ["Judges", 21, "cycles", "No king in Israel"],
    ["Ruth", 4, "loyalty", "Where you go I will go"],
    ["1 Samuel", 31, "kingdom", "The Lord has sought a man"],
    ["2 Samuel", 24, "kingdom", "David the King"],
    ["1 Kings", 22, "wisdom", "Solomon's temple"],
    ["2 Kings", 25, "fall", "Israel scattered"],
    ["1 Chronicles", 29, "genealogy", "The line of David"],
    ["2 Chronicles", 36, "history", "Kingdom divided"],
    ["Ezra", 10, "return", "Rebuild the temple"],
    ["Nehemiah", 13, "walls", "Rise up and build"],
    ["Esther", 10, "providence", "For such a time"],
    ["Job", 42, "suffering", "Though He slay me"],
    ["Psalms", 150, "worship", "Praise the Lord"],
    ["Proverbs", 31, "wisdom", "The fear of the Lord"],
    ["Ecclesiastes", 12, "meaning", "Vanity of vanities"],
    ["Song of Solomon", 8, "love", "Love is strong"],
    ["Isaiah", 66, "salvation", "Comfort my people"],
    ["Jeremiah", 52, "lament", "Tears for the people"],
    ["Lamentations", 5, "grief", "Great is thy faithfulness"],
    ["Ezekiel", 48, "glory", "The glory of the Lord"],
    ["Daniel", 12, "sovereignty", "He rules forever"],
    ["Hosea", 14, "love", "Love the unloved"],
    ["Joel", 3, "judgment", "Day of the Lord"],
    ["Amos", 9, "justice", "Let justice roll"],
    ["Obadiah", 1, "edom", "Pride goes before fall"],
    ["Jonah", 4, "mercy", "Nineveh repents"],
    ["Micah", 7, "justice", "Act justly, love mercy"],
    ["Nahum", 3, "nineveh", "The burden of Nineveh"],
    ["Habakkuk", 3, "faith", "The just shall live"],
    ["Zephaniah", 3, "joy", "Sing, O daughter"],
    ["Haggai", 2, "temple", "Consider your ways"],
    ["Zechariah", 14, "messiah", "Behold your King"],
    ["Malachi", 4, "elijah", "The day is coming"],
  ],
  NT: [
    ["Matthew", 28, "king", "The Kingdom of Heaven"],
    ["Mark", 16, "servant", "The Son of Man"],
    ["Luke", 24, "man", "The Son of Man"],
    ["John", 21, "god", "The Word was God"],
    ["Acts", 28, "church", "You shall be witnesses"],
    ["Romans", 16, "gospel", "The righteousness of God"],
    ["1 Corinthians", 16, "church", "Christ the foundation"],
    ["2 Corinthians", 13, "ministry", "New creation in Christ"],
    ["Galatians", 6, "freedom", "Freedom in Christ"],
    ["Ephesians", 6, "unity", "One body in Christ"],
    ["Philippians", 4, "joy", "Rejoice in the Lord"],
    ["Colossians", 4, "supremacy", "Christ is all"],
    ["1 Thessalonians", 5, "hope", "The coming of the Lord"],
    ["2 Thessalonians", 3, "endurance", "Stand fast"],
    ["1 Timothy", 6, "church", "Fight the good fight"],
    ["2 Timothy", 4, "perseverance", "Finish the race"],
    ["Titus", 3, "good works", "Sound doctrine"],
    ["Philemon", 1, "forgiveness", "Receive him as brother"],
    ["Hebrews", 13, "better", "Better covenant"],
    ["James", 5, "works", "Faith without works"],
    ["1 Peter", 5, "suffering", "Living hope"],
    ["2 Peter", 3, "knowledge", "Grow in grace"],
    ["1 John", 5, "love", "God is love"],
    ["2 John", 1, "truth", "Walk in truth"],
    ["3 John", 1, "hospitality", "Support the brethren"],
    ["Jude", 1, "contend", "Contend for the faith"],
    ["Revelation", 22, "victory", "Behold I come quickly"],
  ],
};

// FIXED: Using picsum.photos with unique seeds for each book
const BOOK_COVERS = {
  Genesis: "https://picsum.photos/seed/genesis_bible_creation/400/600",
  Exodus: "https://picsum.photos/seed/exodus_red_sea_moses/400/600",
  Leviticus: "https://picsum.photos/seed/leviticus_altar_fire/400/600",
  Numbers: "https://picsum.photos/seed/numbers_wilderness_desert/400/600",
  Deuteronomy: "https://picsum.photos/seed/deuteronomy_law_moses/400/600",
  Joshua: "https://picsum.photos/seed/joshua_jericho_walls/400/600",
  Judges: "https://picsum.photos/seed/judges_deborah_gideon/400/600",
  Ruth: "https://picsum.photos/seed/ruth_harvest_fields/400/600",
  "1 Samuel": "https://picsum.photos/seed/samuel1_david_shepherd/400/600",
  "2 Samuel": "https://picsum.photos/seed/samuel2_king_david/400/600",
  "1 Kings": "https://picsum.photos/seed/kings1_solomon_temple/400/600",
  "2 Kings": "https://picsum.photos/seed/kings2_elijah_prophet/400/600",
  "1 Chronicles": "https://picsum.photos/seed/chronicles1_genealogy/400/600",
  "2 Chronicles": "https://picsum.photos/seed/chronicles2_worship/400/600",
  Ezra: "https://picsum.photos/seed/ezra_return_exile/400/600",
  Nehemiah: "https://picsum.photos/seed/nehemiah_walls_build/400/600",
  Esther: "https://picsum.photos/seed/esther_queen_persian/400/600",
  Job: "https://picsum.photos/seed/job_suffering_storm/400/600",
  Psalms: "https://picsum.photos/seed/psalms_worship_music/400/600",
  Proverbs: "https://picsum.photos/seed/proverbs_wisdom_solomon/400/600",
  Ecclesiastes: "https://picsum.photos/seed/ecclesiastes_time_meaning/400/600",
  "Song of Solomon": "https://picsum.photos/seed/songs_love_garden/400/600",
  Isaiah: "https://picsum.photos/seed/isaiah_prophecy_salvation/400/600",
  Jeremiah: "https://picsum.photos/seed/jeremiah_weeping_prophet/400/600",
  Lamentations: "https://picsum.photos/seed/lamentations_grief_ruins/400/600",
  Ezekiel: "https://picsum.photos/seed/ezekiel_visions_glory/400/600",
  Daniel: "https://picsum.photos/seed/daniel_lions_den/400/600",
  Hosea: "https://picsum.photos/seed/hosea_love_marriage/400/600",
  Joel: "https://picsum.photos/seed/joel_locusts_judgment/400/600",
  Amos: "https://picsum.photos/seed/amos_justice_shepherd/400/600",
  Obadiah: "https://picsum.photos/seed/obadiah_edom_mountain/400/600",
  Jonah: "https://picsum.photos/seed/jonah_whale_sea/400/600",
  Micah: "https://picsum.photos/seed/micah_bethlehem_prophecy/400/600",
  Nahum: "https://picsum.photos/seed/nahum_nineveh_fall/400/600",
  Habakkuk: "https://picsum.photos/seed/habakkuk_faith_watch/400/600",
  Zephaniah: "https://picsum.photos/seed/zephaniah_joy_singing/400/600",
  Haggai: "https://picsum.photos/seed/haggai_temple_rebuild/400/600",
  Zechariah: "https://picsum.photos/seed/zechariah_messiah_coming/400/600",
  Malachi: "https://picsum.photos/seed/malachi_elijah_coming/400/600",
  Matthew: "https://picsum.photos/seed/matthew_jesus_king/400/600",
  Mark: "https://picsum.photos/seed/mark_jesus_servant/400/600",
  Luke: "https://picsum.photos/seed/luke_jesus_compassion/400/600",
  John: "https://picsum.photos/seed/john_jesus_light/400/600",
  Acts: "https://picsum.photos/seed/acts_church_pentecost/400/600",
  Romans: "https://picsum.photos/seed/romans_gospel_paul/400/600",
  "1 Corinthians":
    "https://picsum.photos/seed/corinthians1_church_body/400/600",
  "2 Corinthians": "https://picsum.photos/seed/corinthians2_ministry/400/600",
  Galatians: "https://picsum.photos/seed/galatians_cross_freedom/400/600",
  Ephesians: "https://picsum.photos/seed/ephesians_unity_church/400/600",
  Philippians: "https://picsum.photos/seed/philippians_joy_paul/400/600",
  Colossians: "https://picsum.photos/seed/colossians_christ_supreme/400/600",
  "1 Thessalonians":
    "https://picsum.photos/seed/thessalonians1_hope_coming/400/600",
  "2 Thessalonians":
    "https://picsum.photos/seed/thessalonians2_endurance/400/600",
  "1 Timothy": "https://picsum.photos/seed/timothy1_leadership/400/600",
  "2 Timothy": "https://picsum.photos/seed/timothy2_perseverance/400/600",
  Titus: "https://picsum.photos/seed/titus_good_works/400/600",
  Philemon: "https://picsum.photos/seed/philemon_forgiveness/400/600",
  Hebrews: "https://picsum.photos/seed/hebrews_better_covenant/400/600",
  James: "https://picsum.photos/seed/james_faith_works/400/600",
  "1 Peter": "https://picsum.photos/seed/peter1_suffering_hope/400/600",
  "2 Peter": "https://picsum.photos/seed/peter2_knowledge_growth/400/600",
  "1 John": "https://picsum.photos/seed/john1_love_god/400/600",
  "2 John": "https://picsum.photos/seed/john2_truth_walk/400/600",
  "3 John": "https://picsum.photos/seed/john3_hospitality/400/600",
  Jude: "https://picsum.photos/seed/jude_contend_faith/400/600",
  Revelation: "https://picsum.photos/seed/revelation_victory_jesus/400/600",
};

const ALL_BOOKS = [...BIBLE_BOOKS.OT, ...BIBLE_BOOKS.NT];

// Superbook Episodes Data (All 68 Episodes)
const SUPERBOOK_EPISODES = [
  // Season 1 (2011-2013) - 13 Episodes
  {
    episode: 1,
    season: 1,
    title: "In The Beginning",
    bible: "Genesis 1-3",
    description:
      "Chris, Joy and Gizmo see Lucifer rebel in heaven, then tempt Eve in Eden.",
  },
  {
    episode: 2,
    season: 1,
    title: "The Test!",
    bible: "Genesis 22",
    description:
      "Chris is stumped about how to pray for a sick friend. Superbook takes the kids to meet Abraham and Isaac.",
  },
  {
    episode: 3,
    season: 1,
    title: "Jacob and Esau",
    bible: "Genesis 25-27",
    description:
      "Chris must choose between playing soccer or attending his father's important awards dinner.",
  },
  {
    episode: 4,
    season: 1,
    title: "Let My People Go!",
    bible: "Exodus 3-12",
    description:
      "Chris and Joy are whiners! So Superbook takes them back to meet Moses.",
  },
  {
    episode: 5,
    season: 1,
    title: "The Ten Commandments",
    bible: "Exodus 19-20",
    description:
      "Chris is tempted to play a violent video game that his parents forbid.",
  },
  {
    episode: 6,
    season: 1,
    title: "A Giant Adventure!",
    bible: "1 Samuel 17",
    description:
      "Chris is too small to play basketball. Superbook takes him to meet David.",
  },
  {
    episode: 7,
    season: 1,
    title: "Roar!",
    bible: "Daniel 6",
    description:
      "Chris is afraid to tell a boy that his 'magic' tricks are lame.",
  },
  {
    episode: 8,
    season: 1,
    title: "The First Christmas",
    bible: "Luke 1-2",
    description:
      "Chris has lost the Christmas joy. Superbook takes him back to the first Christmas.",
  },
  {
    episode: 9,
    season: 1,
    title: "Miracles of Jesus",
    bible: "Matthew 8-9",
    description:
      "Chris is desperate to be 'the best.' Superbook takes him to see Jesus perform miracles.",
  },
  {
    episode: 10,
    season: 1,
    title: "The Last Supper",
    bible: "Matthew 26",
    description:
      "Chris is too busy to help a homeless man. Superbook takes him to the Last Supper.",
  },
  {
    episode: 11,
    season: 1,
    title: "He Is Risen!",
    bible: "Matthew 27-28",
    description:
      "Chris has lost his dog. Superbook takes him to see the greatest sacrifice ever made.",
  },
  {
    episode: 12,
    season: 1,
    title: "The Road to Damascus",
    bible: "Acts 9",
    description:
      "Chris is persecuted for being a Christian. Superbook takes him to meet Saul.",
  },
  {
    episode: 13,
    season: 1,
    title: "Revelation: The Final Battle!",
    bible: "Revelation 19-22",
    description:
      "Chris is afraid of the end times. Superbook takes him to see the final battle.",
  },

  // Season 2 (2013-2014) - 13 Episodes
  {
    episode: 14,
    season: 2,
    title: "Job",
    bible: "Job 1-42",
    description:
      "Chris is devastated when his family's home is destroyed by a fire.",
  },
  {
    episode: 15,
    season: 2,
    title: "John the Baptist",
    bible: "Luke 1, 3",
    description: "Chris is confused about who Jesus really is.",
  },
  {
    episode: 16,
    season: 2,
    title: "Paul and the Shipwreck",
    bible: "Acts 27-28",
    description:
      "Chris is afraid to share his faith. Superbook takes him to meet Paul.",
  },
  {
    episode: 17,
    season: 2,
    title: "Joseph and Pharaoh's Dream",
    bible: "Genesis 37, 39-45",
    description:
      "Chris is betrayed by his best friend. Superbook takes him to meet Joseph.",
  },
  {
    episode: 18,
    season: 2,
    title: "The Fiery Furnace!",
    bible: "Daniel 3",
    description:
      "Chris is pressured to compromise his faith. Superbook takes him to meet Shadrach, Meshach and Abednego.",
  },
  {
    episode: 19,
    season: 2,
    title: "Rahab and the Walls of Jericho",
    bible: "Joshua 2, 6",
    description:
      "Chris is afraid to stand up for what's right. Superbook takes him to meet Rahab.",
  },
  {
    episode: 20,
    season: 2,
    title: "Esther—For Such a Time as This",
    bible: "Esther 1-10",
    description: "Chris is afraid to speak up for a girl being bullied.",
  },
  {
    episode: 21,
    season: 2,
    title: "John the Baptist (Part 2)",
    bible: "Matthew 3, 14",
    description: "Chris is confused about his purpose in life.",
  },
  {
    episode: 22,
    season: 2,
    title: "Paul and Silas",
    bible: "Acts 16",
    description:
      "Chris is angry about being treated unfairly. Superbook takes him to meet Paul and Silas in prison.",
  },
  {
    episode: 23,
    season: 2,
    title: "Nehemiah",
    bible: "Nehemiah 1-6",
    description:
      "Chris is overwhelmed by a big project. Superbook takes him to meet Nehemiah.",
  },
  {
    episode: 24,
    season: 2,
    title: "Elijah and the Prophets of Baal",
    bible: "1 Kings 17-18",
    description:
      "Chris is afraid to stand alone for God. Superbook takes him to meet Elijah.",
  },
  {
    episode: 25,
    season: 2,
    title: "King Solomon",
    bible: "1 Kings 3-10",
    description:
      "Chris must make a difficult decision. Superbook takes him to meet Solomon.",
  },
  {
    episode: 26,
    season: 2,
    title: "Samuel and the Call of God",
    bible: "1 Samuel 1-3",
    description: "Chris is unsure about God's calling on his life.",
  },

  // Season 3 (2014-2015) - 13 Episodes
  {
    episode: 27,
    season: 3,
    title: "Jonah",
    bible: "Jonah 1-4",
    description:
      "Chris is angry when a boy who bullied him becomes a Christian.",
  },
  {
    episode: 28,
    season: 3,
    title: "Joseph and His Brothers",
    bible: "Genesis 37, 45",
    description:
      "Chris struggles with forgiving his brother who broke his toy.",
  },
  {
    episode: 29,
    season: 3,
    title: "The Good Samaritan",
    bible: "Luke 10",
    description:
      "Chris is annoyed by a persistent neighbor. Superbook takes him to meet the Good Samaritan.",
  },
  {
    episode: 30,
    season: 3,
    title: "Baptized!",
    bible: "Matthew 3, 28",
    description:
      "Chris is nervous about getting baptized. Superbook takes him to see Jesus' baptism.",
  },
  {
    episode: 31,
    season: 3,
    title: "Zacchaeus",
    bible: "Luke 19",
    description:
      "Chris looks down on a new kid at school. Superbook takes him to meet Zacchaeus.",
  },
  {
    episode: 32,
    season: 3,
    title: "The Prodigal Son",
    bible: "Luke 15",
    description:
      "Chris is angry when his father welcomes back his rebellious brother.",
  },
  {
    episode: 33,
    season: 3,
    title: "Noah and the Ark",
    bible: "Genesis 6-9",
    description:
      "Chris is mocked for his faith. Superbook takes him to meet Noah.",
  },
  {
    episode: 34,
    season: 3,
    title: "Gideon",
    bible: "Judges 6-8",
    description:
      "Chris feels inadequate for a big task. Superbook takes him to meet Gideon.",
  },
  {
    episode: 35,
    season: 3,
    title: "Lazarus",
    bible: "John 11",
    description: "Chris is devastated when his grandfather dies.",
  },
  {
    episode: 36,
    season: 3,
    title: "The Good Shepherd",
    bible: "John 10, Psalm 23",
    description:
      "Chris loses his way spiritually. Superbook takes him to meet the Good Shepherd.",
  },
  {
    episode: 37,
    season: 3,
    title: "Sermon on the Mount",
    bible: "Matthew 5-7",
    description:
      "Chris is tempted to take revenge. Superbook takes him to hear the Sermon on the Mount.",
  },
  {
    episode: 38,
    season: 3,
    title: "Isaiah",
    bible: "Isaiah 6, 53",
    description:
      "Chris is afraid to share his faith. Superbook takes him to meet Isaiah.",
  },
  {
    episode: 39,
    season: 3,
    title: "Peter's Denial",
    bible: "Matthew 26, John 21",
    description:
      "Chris fails a test and feels like a failure. Superbook takes him to meet Peter.",
  },

  // Season 4 (2016-2017) - 13 Episodes
  {
    episode: 40,
    season: 4,
    title: "Tower of Babel and the Day of Pentecost",
    bible: "Genesis 11, Acts 2",
    description:
      "Chris is confused by different languages. Superbook takes him to see the Tower of Babel and Pentecost.",
  },
  {
    episode: 41,
    season: 4,
    title: "The Birth of John the Baptist",
    bible: "Luke 1",
    description:
      "Chris doubts God's promises. Superbook takes him to see the birth of John the Baptist.",
  },
  {
    episode: 42,
    season: 4,
    title: "Isaac and Rebekah",
    bible: "Genesis 24",
    description:
      "Chris is impatient for God's plan. Superbook takes him to meet Isaac and Rebekah.",
  },
  {
    episode: 43,
    season: 4,
    title: "Naaman and Elisha",
    bible: "2 Kings 5",
    description:
      "Chris is too proud to accept help. Superbook takes him to meet Naaman.",
  },
  {
    episode: 44,
    season: 4,
    title: "Samson and Delilah",
    bible: "Judges 13-16",
    description: "Chris is tempted to compromise his values for popularity.",
  },
  {
    episode: 45,
    season: 4,
    title: "Elisha and the Syrians",
    bible: "2 Kings 6",
    description:
      "Chris is afraid of his enemies. Superbook takes him to see Elisha and the Syrian army.",
  },
  {
    episode: 46,
    season: 4,
    title: "The Blind Beggar",
    bible: "Luke 18",
    description:
      "Chris ignores a homeless person. Superbook takes him to meet a blind beggar.",
  },
  {
    episode: 47,
    season: 4,
    title: "Stephen",
    bible: "Acts 6-7",
    description:
      "Chris is afraid to speak the truth. Superbook takes him to meet Stephen.",
  },
  {
    episode: 48,
    season: 4,
    title: "Jesus Feeds the Hungry",
    bible: "Matthew 14, John 6",
    description:
      "Chris thinks his small contribution won't matter. Superbook shows him Jesus feeding the 5,000.",
  },
  {
    episode: 49,
    season: 4,
    title: "The Woman at the Well",
    bible: "John 4",
    description:
      "Chris judges someone by their past. Superbook takes him to meet the woman at the well.",
  },
  {
    episode: 50,
    season: 4,
    title: "Lazarus",
    bible: "John 11",
    description:
      "Chris is devastated when his grandfather dies. Superbook shows him Jesus raising Lazarus.",
  },
  {
    episode: 51,
    season: 4,
    title: "Elijah and the Widow",
    bible: "1 Kings 17",
    description:
      "Chris thinks he has nothing to give. Superbook takes him to meet Elijah and the widow.",
  },
  {
    episode: 52,
    season: 4,
    title: "Teach Us to Pray",
    bible: "Luke 11",
    description:
      "Chris doesn't know how to pray. Superbook takes him to learn from Jesus.",
  },

  // Season 5 (2019-2021) - 16 Episodes
  {
    episode: 53,
    season: 5,
    title: "Jesus Heals the Blind",
    bible: "John 9",
    description:
      "Chris is spiritually blind to his own faults. Superbook takes him to see Jesus heal a blind man.",
  },
  {
    episode: 54,
    season: 5,
    title: "Pilate's Decision",
    bible: "Matthew 27, John 18-19",
    description:
      "Chris faces a difficult moral choice. Superbook takes him to see Pilate's decision about Jesus.",
  },
  {
    episode: 55,
    season: 5,
    title: "The Promise of a Child",
    bible: "Genesis 12-21",
    description:
      "Chris doubts God's timing. Superbook takes him to meet Abraham and Sarah.",
  },
  {
    episode: 56,
    season: 5,
    title: "The Road to Damascus",
    bible: "Acts 9",
    description:
      "Chris persecutes a fellow Christian. Superbook takes him to meet Saul on the road to Damascus.",
  },
  {
    episode: 57,
    season: 5,
    title: "Jesus and Zacchaeus",
    bible: "Luke 19",
    description:
      "Chris looks down on someone different. Superbook takes him to meet Zacchaeus.",
  },
  {
    episode: 58,
    season: 5,
    title: "The Lord's Prayer",
    bible: "Matthew 6, Luke 11",
    description: "Chris learns the meaning behind the Lord's Prayer.",
  },
  {
    episode: 59,
    season: 5,
    title: "The Birth of Moses",
    bible: "Exodus 1-2",
    description:
      "Chris feels insignificant. Superbook takes him to see the birth of Moses.",
  },
  {
    episode: 60,
    season: 5,
    title: "The Burning Bush",
    bible: "Exodus 3-4",
    description:
      "Chris is afraid to answer God's call. Superbook takes him to see Moses at the burning bush.",
  },
  {
    episode: 61,
    season: 5,
    title: "Elijah on Mount Carmel",
    bible: "1 Kings 18",
    description:
      "Chris is afraid to stand alone for God. Superbook takes him to see Elijah on Mount Carmel.",
  },
  {
    episode: 62,
    season: 5,
    title: "Nehemiah and the Walls",
    bible: "Nehemiah 1-6",
    description:
      "Chris is overwhelmed by opposition. Superbook takes him to meet Nehemiah rebuilding the walls.",
  },
  {
    episode: 63,
    season: 5,
    title: "The Good Shepherd",
    bible: "John 10",
    description:
      "Chris feels lost and alone. Superbook takes him to meet the Good Shepherd.",
  },
  {
    episode: 64,
    season: 5,
    title: "Jesus and the Children",
    bible: "Matthew 19, Mark 10",
    description:
      "Chris thinks he's too young to serve God. Superbook shows him Jesus blessing the children.",
  },
  {
    episode: 65,
    season: 5,
    title: "Paul and the Unknown God",
    bible: "Acts 17",
    description:
      "Chris is afraid to share his faith with intellectuals. Superbook takes him to see Paul in Athens.",
  },
  {
    episode: 66,
    season: 5,
    title: "The Sermon on the Mount",
    bible: "Matthew 5-7",
    description: "Chris learns what it means to be a true follower of Jesus.",
  },
  {
    episode: 67,
    season: 5,
    title: "The Transfiguration",
    bible: "Matthew 17, Mark 9",
    description:
      "Chris wants to stay on the mountain top. Superbook shows him the Transfiguration.",
  },
  {
    episode: 68,
    season: 5,
    title: "Paul's Final Journey",
    bible: "Acts 20-28",
    description:
      "Chris faces trials and persecution. Superbook takes him on Paul's final journey to Rome.",
  },
];

// Superbook YouTube Links (Episode-specific)
const SUPERBOOK_YOUTUBE_LINKS = {
  // Season 1 (Episodes 1-13)
  1: "https://www.youtube.com/watch?v=4dzjD5FxJPg",
  2: "https://www.youtube.com/watch?v=xAFMg09bido",
  3: "https://www.youtube.com/watch?v=WVjgJhk6yAw",
  4: "https://www.youtube.com/watch?v=Nt4kCgt_Kj4",
  5: "https://www.youtube.com/watch?v=V6QYoWEmXLI",
  6: "https://www.youtube.com/watch?v=CD_qBFYyWK8",
  7: "https://www.youtube.com/watch?v=LDtncPpQ61w",
  8: "https://www.youtube.com/watch?v=Ty3vrOoWtNM",
  9: "https://www.youtube.com/watch?v=EQXyhM592RU",
  10: "https://www.youtube.com/watch?v=0o8NQBuneJM",
  11: "https://www.youtube.com/watch?v=ABF-jqfX6ek&list=PL0zvCDP_0LjCpNejEZmCRhf5sG8heMtS2&index=11",
  12: "https://www.youtube.com/watch?v=xxnRRtn2-Bg",
  13: "https://www.youtube.com/watch?v=vKiOtqqp-OY",

  // Season 2 (Episodes 14-26)
  14: "https://www.youtube.com/watch?v=81Akp9gxKEA&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7",
  15: "https://www.youtube.com/watch?v=rwNz81tgnl4&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7&index=2",
  16: "https://www.youtube.com/watch?v=EmWHcDUHFXw&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7&index=3",
  17: "https://www.youtube.com/watch?v=bEqz34vLcgY&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7&index=4",
  18: "https://www.youtube.com/watch?v=dX3Et-GZr_Q&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7&index=5",
  19: "https://www.youtube.com/watch?v=9R0FQgGei4c&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7&index=6",
  20: "https://www.youtube.com/watch?v=voCbE9r5Ms4&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7&index=7",
  21: "https://www.youtube.com/watch?v=fB-8SIEv1yI&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7&index=8",
  22: "https://www.youtube.com/watch?v=83-JGTJAXCI&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7&index=9",
  23: "https://www.youtube.com/watch?v=wTglXGJ0xxo&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7&index=10",
  24: "https://www.youtube.com/watch?v=9H6j-HsV8jk&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7&index=11",
  25: "https://www.youtube.com/watch?v=kZkrWQqfDw4&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7&index=12",
  26: "https://www.youtube.com/watch?v=kF9h7hFngYM&list=PLxU_EVvBhRmxoPrce-K6TVv8mYwcligT7&index=13",

  // Season 3 (Episodes 27-39)
  27: "https://www.youtube.com/watch?v=jLhVTd-6oE4&list=PLxU_EVvBhRmwwY8pMyNpsw7d23oBvG7gL",
  28: "https://www.youtube.com/watch?v=zYzkDbZcpwM&list=PLxU_EVvBhRmwwY8pMyNpsw7d23oBvG7gL&index=2",
  29: "https://www.youtube.com/watch?v=uIJIDLe5VAg&list=PLxU_EVvBhRmwwY8pMyNpsw7d23oBvG7gL&index=3",
  30: "https://www.youtube.com/watch?v=KVI2FeJ2JuI&list=PLxU_EVvBhRmwwY8pMyNpsw7d23oBvG7gL&index=4",
  31: "https://www.youtube.com/watch?v=6OiPGISJtDE&list=PLxU_EVvBhRmwwY8pMyNpsw7d23oBvG7gL&index=5",
  32: "https://www.youtube.com/watch?v=dMoekXiJw_A&list=PLxU_EVvBhRmwwY8pMyNpsw7d23oBvG7gL&index=6",
  33: "https://www.youtube.com/watch?v=Jp0bSkNQhJ0&list=PLxU_EVvBhRmwwY8pMyNpsw7d23oBvG7gL&index=7",
  34: "https://www.youtube.com/watch?v=S5Y0P6Mpbqo&list=PLxU_EVvBhRmwwY8pMyNpsw7d23oBvG7gL&index=8",
  35: "https://www.youtube.com/watch?v=53Gd-5x6xFM&list=PLxU_EVvBhRmwwY8pMyNpsw7d23oBvG7gL&index=9",
  36: "https://www.youtube.com/watch?v=0BWP8bzC4-M",
  37: "https://www.youtube.com/watch?v=HMmKkaBswos",
  38: "https://www.youtube.com/watch?v=uxI5oiKk1Qk",
  39: "https://www.youtube.com/watch?v=DxClIss5Wao",

  // Season 4 (Episodes 40-52)
  40: "https://www.youtube.com/playlist?list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN",
  41: "https://www.youtube.com/watch?v=NDpBETcU1Ck&list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN&index=2",
  42: "https://www.youtube.com/watch?v=xWqcpe2Uy3w&list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN&index=3",
  43: "https://www.youtube.com/watch?v=gQn78JbU7iE&list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN&index=4",
  44: "https://www.youtube.com/watch?v=4Z3Y3-LEwa4&list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN&index=5",
  45: "https://www.youtube.com/watch?v=3QcMBobshjw&list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN&index=6",
  46: "https://www.youtube.com/watch?v=hiDusMcbS_Q&list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN&index=7",
  47: "https://www.youtube.com/watch?v=CO57CwpRhi4&list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN&index=8",
  48: "https://www.youtube.com/watch?v=-43SQ3vyd2g&list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN&index=9",
  49: "https://www.youtube.com/watch?v=AC6xVsa8Hx4&list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN&index=10",
  50: "https://www.youtube.com/watch?v=xn24_31x0Ik&list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN&index=11",
  51: "https://www.youtube.com/watch?v=Is2HgdiZeD4&list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN&index=12",
  52: "https://www.youtube.com/watch?v=PC6Ns47LCGw&list=PLUe_J434VSm8Ccb3kDnF2AKZrdSPGfFNN&index=13",

  // Season 5 (Episodes 53-68)
  53: "https://www.youtube.com/watch?v=ftUuAQzoCaw&list=PLYjRMdykfk83ZaLdar3xVRwXVUQ9Y0ydy",
  54: "https://www.youtube.com/watch?v=cOu2I2X0JBA&list=PLYjRMdykfk83ZaLdar3xVRwXVUQ9Y0ydy&index=2",
  55: "https://www.youtube.com/watch?v=Tp4uR0EDad0&list=PLYjRMdykfk83ZaLdar3xVRwXVUQ9Y0ydy&index=3",
  56: "https://www.youtube.com/watch?v=XViHRh8gJHc&list=PLYjRMdykfk83ZaLdar3xVRwXVUQ9Y0ydy&index=4",
  57: "Not Found",
  58: "https://www.youtube.com/watch?v=imeBglxa0b8&list=PLYjRMdykfk83ZaLdar3xVRwXVUQ9Y0ydy&index=5",
  59: "https://www.youtube.com/watch?v=Tz2PAzM5yiQ&list=PLYjRMdykfk83ZaLdar3xVRwXVUQ9Y0ydy&index=6",
  60: "https://www.youtube.com/watch?v=ZBLRuPYcXXk&list=PLYjRMdykfk83ZaLdar3xVRwXVUQ9Y0ydy&index=7",
  61: "https://www.youtube.com/watch?v=RJWrxqS70eI&list=PLYjRMdykfk83ZaLdar3xVRwXVUQ9Y0ydy&index=8",
  62: "https://www.youtube.com/watch?v=hyCl8JIlF6I&list=PLYjRMdykfk83ZaLdar3xVRwXVUQ9Y0ydy&index=9",
  63: "https://www.youtube.com/watch?v=VrEjzWkOsxE",
  64: "Not Found",
  65: "https://www.youtube.com/watch?v=IlScJhsRFC8",
  66: "Not Found",
  67: "https://www.youtube.com/watch?v=rZFJBIcV_pY&t=5s",
  68: "Not Found",
};

const VOTD_POOL = [
  { ref: "John 3:16", book: "John", chap: 3, verse: 16 },
  { ref: "Psalm 23:1", book: "Psalms", chap: 23, verse: 1 },
  { ref: "Philippians 4:13", book: "Philippians", chap: 4, verse: 13 },
  { ref: "Romans 8:28", book: "Romans", chap: 8, verse: 28 },
  { ref: "Proverbs 3:5", book: "Proverbs", chap: 3, verse: 5 },
  { ref: "Isaiah 41:10", book: "Isaiah", chap: 41, verse: 10 },
  { ref: "Lamentations 3:22", book: "Lamentations", chap: 3, verse: 22 },
  { ref: "Hebrews 11:1", book: "Hebrews", chap: 11, verse: 1 },
  { ref: "Matthew 11:28", book: "Matthew", chap: 11, verse: 28 },
  { ref: "Psalm 46:1", book: "Psalms", chap: 46, verse: 1 },
];

const explanationDatabase = {
  "Genesis-1-1": {
    verseText: "In the beginning God created the heavens and the earth.",
    explanation:
      "This verse establishes <span class='key-concept'>God as the sovereign Creator and originator of all existence</span>. It affirms that the universe had a definite beginning and was intentionally designed by a divine intelligence, not random chance.",
  },
  "Genesis-1-3": {
    verseText: "And God said, 'Let there be light,' and there was light.",
    explanation:
      "This demonstrates <span class='key-concept'>the power of God's spoken word to bring reality into existence</span>. The divine command transforms darkness into illumination, symbolizing how God's voice brings truth, revelation, and life where there was only void.",
  },
  "Genesis-1-4": {
    verseText:
      "God saw that the light was good, and he separated the light from the darkness.",
    explanation:
      "This signifies <span class='key-concept'>the creation of order from chaos, establishing distinct boundaries between opposites like light/dark, good/evil, and day/night</span>. It highlights God's power to create, define, and bring clarity to existence.",
  },
  "John-3-16": {
    verseText:
      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    explanation:
      "This reveals <span class='key-concept'>the depth of God's sacrificial love and the pathway to salvation through faith in Christ</span>. It emphasizes that eternal life is a gift available to all who believe, demonstrating God's desire for humanity's redemption rather than destruction.",
  },
  "John-1-1": {
    verseText:
      "In the beginning was the Word, and the Word was with God, and the Word was God.",
    explanation:
      "This establishes <span class='key-concept'>the eternal pre-existence and divine nature of Jesus Christ as the Word (Logos)</span>. It reveals that Christ is both distinct from and one with God, existing before creation as the source of all divine communication and revelation.",
  },
  "Psalms-23-1": {
    verseText: "The LORD is my shepherd, I lack nothing.",
    explanation:
      "This expresses <span class='key-concept'>complete trust in God's provision and guidance, comparing divine care to a shepherd's attentive protection</span>. It affirms that with God as our guide, we have everything we truly need for spiritual and physical wellbeing.",
  },
  "Psalms-119-105": {
    verseText: "Your word is a lamp for my feet, a light on my path.",
    explanation:
      "This illustrates <span class='key-concept'>Scripture as practical guidance for daily living and direction for life's journey</span>. Just as a lamp illuminates immediate steps in darkness, God's Word provides clarity for present decisions and future direction.",
  },
  "Proverbs-3-5": {
    verseText:
      "Trust in the LORD with all your heart and lean not on your own understanding;",
    explanation:
      "This calls for <span class='key-concept'>complete surrender of self-reliance and total dependence on God's wisdom over human reasoning</span>. It challenges us to acknowledge the limitations of our own perspective and submit to divine guidance in all circumstances.",
  },
  "Romans-8-28": {
    verseText:
      "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    explanation:
      "This promises <span class='key-concept'>God's sovereign ability to transform every circumstance—good and bad—into something beneficial for those aligned with His purpose</span>. It offers assurance that divine purpose prevails even in suffering and confusion.",
  },
  "Philippians-4-13": {
    verseText: "I can do all this through him who gives me strength.",
    explanation:
      "This declares <span class='key-concept'>empowerment through Christ's indwelling strength rather than self-sufficiency</span>. It affirms that believers can endure any circumstance, accomplish any calling, and overcome any obstacle through the supernatural enablement provided by Christ.",
  },
  "Isaiah-41-10": {
    verseText:
      "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    explanation:
      "This offers <span class='key-concept'>divine reassurance of God's presence, protection, and powerful support in times of fear and uncertainty</span>. It reminds us that we are not alone in our struggles—God actively strengthens, helps, and sustains those who belong to Him.",
  },
  "Matthew-11-28": {
    verseText:
      "Come to me, all you who are weary and burdened, and I will give you rest.",
    explanation:
      "This extends <span class='key-concept'>Christ's open invitation to find spiritual rest and relief from life's burdens through relationship with Him</span>. It promises that Jesus offers a different kind of yoke—one that brings peace rather than the exhausting weight of religious legalism or worldly anxiety.",
  },
  "Hebrews-11-1": {
    verseText:
      "Now faith is confidence in what we hope for and assurance about what we do not see.",
    explanation:
      "This defines <span class='key-concept'>faith as confident expectation and spiritual conviction that transcends physical evidence</span>. It describes faith not as blind belief, but as a firm foundation that allows us to live with certainty about future promises and invisible realities.",
  },
  "Lamentations-3-22": {
    verseText:
      "Because of the LORD's great love we are not consumed, for his compassions never fail.",
    explanation:
      "This affirms <span class='key-concept'>God's unfailing mercy and faithful love that preserves us even in the midst of judgment and suffering</span>. Despite circumstances that might suggest abandonment, God's compassion remains constant and renews daily.",
  },
  default: [
    {
      explanation:
        "This signifies <span class='key-concept'>the divine revelation of truth that transforms human understanding and calls for faithful response</span>. It highlights God's initiative in communicating with humanity and the importance of receiving His message with obedient hearts.",
    },
    {
      explanation:
        "This demonstrates <span class='key-concept'>the power of faith to overcome obstacles and the necessity of trusting in God's promises despite contrary circumstances</span>. It reminds believers that spiritual victory comes through dependence on divine strength rather than human ability.",
    },
    {
      explanation:
        "This reveals <span class='key-concept'>the character of God as both just and merciful, maintaining righteousness while extending grace to the repentant</span>. It shows how divine attributes work in harmony to accomplish redemption and establish covenant relationship.",
    },
    {
      explanation:
        "This illustrates <span class='key-concept'>the transformative power of encountering God's presence and the resulting change in perspective and purpose</span>. It emphasizes that genuine spiritual experiences produce visible fruit in character and conduct.",
    },
    {
      explanation:
        "This establishes <span class='key-concept'>the foundation of hope for believers and the assurance of God's faithfulness to His promises across generations</span>. It connects present faith to future fulfillment, anchoring confidence in God's unchanging nature.",
    },
  ],
};

let state = {
  book: "John",
  chapter: 1,
  maxChapters: 21,
  currentVerses: [],
  lastVersePlayedIndex: 0,
  currentVOTD: null,
  isPlayingExplanation: false,
  selectedBookData: null,
  isAutoReading: false,
  superbookFilter: "all",
};

let history = JSON.parse(localStorage.getItem("selah_history")) || [];
let synth = window.speechSynthesis;
let isReadingAll = false;
let currentPlayingBtnId = null;
let wakeLock = null;
let voices = [];
let audioInitialized = false;

function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast ${isError ? "error" : ""} show`;
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function getDailyVerseRef() {
  const today = new Date();
  const dateSeed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();
  const index = dateSeed % VOTD_POOL.length;
  return VOTD_POOL[index];
}

function loadVoices() {
  voices = synth.getVoices();
  if (voices.length === 0) {
    synth.onvoiceschanged = () => {
      voices = synth.getVoices();
    };
  }
}

function initAudio() {
  if (audioInitialized) return;
  synth.cancel();
  loadVoices();
  audioInitialized = true;
}

function getBestVoice() {
  if (voices.length === 0) return null;
  return (
    voices.find((v) => v.lang.startsWith("en") && v.name.includes("Google")) ||
    voices.find((v) => v.lang.startsWith("en") && v.name.includes("Natural")) ||
    voices.find((v) => v.lang.startsWith("en")) ||
    voices[0]
  );
}

// FIXED: Stop audio but preserve resume position
function stopAudio() {
  synth.cancel();
  isReadingAll = false;
  state.isAutoReading = false;
  state.isPlayingExplanation = false;

  if (wakeLock) {
    try {
      wakeLock.release();
    } catch (e) {}
    wakeLock = null;
  }

  currentPlayingBtnId = null;
  document
    .querySelectorAll(".audio-playing-row")
    .forEach((el) => el.classList.remove("audio-playing-row"));

  // FIXED: Hide stop and restart buttons, show read all button
  document.getElementById("btn-stop-all").classList.add("hidden");
  document.getElementById("btn-restart-audio").classList.add("hidden");
  document.getElementById("btn-read-all").classList.remove("hidden");

  // Show "Resume" if we have a saved position, otherwise "Read All"
  const savedPosition = localStorage.getItem(
    `selah_audio_pos_${state.book}_${state.chapter}`,
  );
  const resumeIndex = savedPosition ? parseInt(savedPosition) : 0;
  const buttonText =
    resumeIndex > 0 ? `Resume (v${resumeIndex + 1})` : "Read All";
  document.getElementById("read-all-text").innerText = buttonText;

  if ("mediaSession" in navigator)
    navigator.mediaSession.playbackState = "paused";
}

async function requestWakeLock() {
  try {
    if ("wakeLock" in navigator)
      wakeLock = await navigator.wakeLock.request("screen");
  } catch (err) {}
}

function updateMediaSession(title, artist = "Selah Bible") {
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: title,
      artist: artist,
      album: "Holy Bible",
    });
    navigator.mediaSession.setActionHandler("pause", stopAudio);
    navigator.mediaSession.setActionHandler("stop", stopAudio);
  }
}

function generateExpandedExplanation(book, chap, v, verseText) {
  const key = `${book}-${chap}-${v}`;

  let explanationData;
  if (explanationDatabase[key]) {
    explanationData = explanationDatabase[key];
  } else {
    const seed = book.length * 41 + chap * 17 + v * 7;
    const defaultIndex = seed % explanationDatabase.default.length;
    explanationData = {
      verseText: verseText || "This verse contains important spiritual truth.",
      explanation: explanationDatabase.default[defaultIndex].explanation,
    };
  }

  const html = `
                <div class="space-y-3 sm:space-y-4">
                    <div class="insight-header">
                        <h3 class="insight-title">
                            <i class="fas fa-robot"></i> AI Explanation
                        </h3>
                    </div>
                    <div class="explanation-text">
                        <span class="verse-reference" onclick="jumpToVerse('v-${v}')">${book} ${chap}:${v}</span> states, "${explanationData.verseText}" ${explanationData.explanation}
                    </div>
                    <div class="insight-footer">
                        <i class="fas fa-info-circle"></i>
                        <span>Generated insight based on biblical context</span>
                    </div>
                </div>`;

  return { html };
}

function toggleInsight(elementId, book, chapter, verse) {
  const panel = document.getElementById(elementId);
  if (!panel) return;

  const isOpen = panel.classList.contains("open");
  document
    .querySelectorAll(".insight-panel")
    .forEach((p) => p.classList.remove("open"));

  if (!isOpen) {
    let verseText = "";
    if (state.currentVerses) {
      const v = state.currentVerses.find((v) => v.verse === verse);
      if (v) verseText = v.text;
    }

    const { html } = generateExpandedExplanation(
      book,
      chapter,
      verse,
      verseText,
    );
    panel.innerHTML = html;
    panel.classList.add("open");

    setTimeout(() => {
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  }
}

// FIXED: Read All function with proper resume support
async function readFullChapter(startFromIndex = null) {
  initAudio();

  // FIXED: If no index provided, check for saved position
  if (startFromIndex === null) {
    const savedPosition = localStorage.getItem(
      `selah_audio_pos_${state.book}_${state.chapter}`,
    );
    startFromIndex = savedPosition ? parseInt(savedPosition) : 0;
  }

  state.isAutoReading = true;
  isReadingAll = true;

  await requestWakeLock();
  updateMediaSession(`${state.book} ${state.chapter}`);

  // FIXED: Hide read all button, show restart and stop buttons
  document.getElementById("btn-read-all").classList.add("hidden");
  document.getElementById("btn-stop-all").classList.remove("hidden");
  document.getElementById("btn-restart-audio").classList.remove("hidden");

  for (let i = startFromIndex; i < state.currentVerses.length; i++) {
    if (!isReadingAll) break;

    state.lastVersePlayedIndex = i;
    localStorage.setItem(`selah_audio_pos_${state.book}_${state.chapter}`, i);

    const v = state.currentVerses[i];
    const vEl = document.getElementById(`v-${v.verse}`);

    if (vEl) {
      vEl.scrollIntoView({ behavior: "smooth", block: "center" });
      vEl.classList.add("audio-playing-row");
    }

    synth.cancel();

    const utter = new SpeechSynthesisUtterance(`Verse ${v.verse}. ${v.text}`);
    utter.rate = Math.min(
      parseFloat(document.getElementById("audioSpeed").value) || 1.0,
      2.0,
    );

    const voice = getBestVoice();
    if (voice) utter.voice = voice;

    await new Promise((res) => {
      utter.onend = () => {
        if (vEl) vEl.classList.remove("audio-playing-row");
        res();
      };
      utter.onerror = (e) => {
        if (vEl) vEl.classList.remove("audio-playing-row");
        res();
      };
      synth.speak(utter);
    });
  }

  if (isReadingAll && state.isAutoReading) {
    if (state.chapter < state.maxChapters) {
      state.lastVersePlayedIndex = 0;
      localStorage.removeItem(`selah_audio_pos_${state.book}_${state.chapter}`);
      state.chapter++;

      showToast(`Continuing to Chapter ${state.chapter}...`);

      await fetchChapter(true);
    } else {
      state.lastVersePlayedIndex = 0;
      localStorage.removeItem(`selah_audio_pos_${state.book}_${state.chapter}`);
      state.isAutoReading = false;
      stopAudio();
      showToast("Book complete!");
    }
  }
}

function restartReading() {
  synth.cancel();
  isReadingAll = false;
  state.isAutoReading = false;

  state.lastVersePlayedIndex = 0;
  localStorage.removeItem(`selah_audio_pos_${state.book}_${state.chapter}`);

  window.scrollTo({ top: 0, behavior: "smooth" });

  document
    .querySelectorAll(".audio-playing-row")
    .forEach((el) => el.classList.remove("audio-playing-row"));

  showToast("Restarting...");

  setTimeout(() => {
    readFullChapter(0);
  }, 300);
}

function speakVerse(verseNum) {
  initAudio();
  const v = state.currentVerses.find((v) => v.verse === verseNum);
  if (!v) return;

  stopAudio();

  synth.cancel();
  const utter = new SpeechSynthesisUtterance(v.text);
  utter.rate = Math.min(
    parseFloat(document.getElementById("audioSpeed")?.value || 1.0),
    2.0,
  );

  const voice = getBestVoice();
  if (voice) utter.voice = voice;

  synth.speak(utter);
}

function findMax(book) {
  for (let section of Object.values(BIBLE_BOOKS)) {
    for (let [name, chapters] of section) {
      if (name === book) return chapters;
    }
  }
  return 1;
}

function getBookData(bookName) {
  for (let section of Object.values(BIBLE_BOOKS)) {
    for (let book of section) {
      if (book[0] === bookName) return book;
    }
  }
  return null;
}

function loadImageWithFallback(
  imgElement,
  src,
  onLoadCallback,
  onErrorCallback,
) {
  const timeout = setTimeout(() => {
    if (!imgElement.classList.contains("loaded")) {
      imgElement.classList.add("error");
      if (onErrorCallback) onErrorCallback();
    }
  }, 8000);

  imgElement.onload = () => {
    clearTimeout(timeout);
    imgElement.classList.add("loaded");
    imgElement.classList.remove("error");
    imgElement.style.opacity = "1";
    if (onLoadCallback) onLoadCallback();
  };

  imgElement.onerror = () => {
    clearTimeout(timeout);
    imgElement.classList.add("error");
    imgElement.classList.remove("loaded");
    if (onErrorCallback) onErrorCallback();
  };

  imgElement.src = src + "?t=" + Date.now();
}

function openCoverModal(bookName, chapters) {
  const modal = document.getElementById("coverModal");
  const bookData = getBookData(bookName);
  const coverUrl = BOOK_COVERS[bookName] || "";

  const modalImg = document.getElementById("modalCoverImage");
  const fallback = document.getElementById("modalFallback");

  modalImg.style.display = "block";
  modalImg.style.opacity = "0";
  modalImg.classList.remove("loaded", "error");
  fallback.textContent = bookName.charAt(0);

  if (coverUrl) {
    loadImageWithFallback(modalImg, coverUrl, null, () => {
      modalImg.style.display = "none";
    });
  } else {
    modalImg.style.display = "none";
  }

  document.getElementById("modalBookTitle").textContent = bookName;
  document.getElementById("modalBookInfo").textContent = `${chapters} Chapters`;
  document.getElementById("modalBookTagline").textContent = bookData
    ? bookData[3]
    : "";

  document.getElementById("modalReadBtn").onclick = () => {
    closeCoverModal();
    selectBook(bookName, chapters);
  };

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCoverModal(event) {
  if (
    event &&
    event.target !== event.currentTarget &&
    !event.target.closest(".cover-modal-close")
  )
    return;
  const modal = document.getElementById("coverModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";

  const modalImg = document.getElementById("modalCoverImage");
  modalImg.src = "";
  modalImg.style.opacity = "0";
  modalImg.classList.remove("loaded", "error");
}

function selectBook(book, maxChapters) {
  state.book = book;
  state.maxChapters = maxChapters;
  state.selectedBookData = getBookData(book);

  document.getElementById("libraryView").classList.add("hidden");
  document.getElementById("superbookView").classList.add("hidden");
  document.getElementById("selectionView").classList.remove("hidden");
  document.getElementById("selectionFlow").classList.remove("hidden");
  document.getElementById("step1").classList.add("active");
  document.getElementById("selectionTitle").innerText = book;

  const coverUrl = BOOK_COVERS[book] || "";

  const coverDiv = document.getElementById("selectionBookCover");
  coverDiv.innerHTML = "";
  coverDiv.className =
    "w-16 h-24 sm:w-24 sm:h-36 rounded-lg shadow-lg flex-shrink-0 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center";

  if (coverUrl) {
    const img = document.createElement("img");
    img.className = "w-full h-full object-cover";
    img.alt = book;
    img.width = 200;
    img.height = 300;

    loadImageWithFallback(img, coverUrl, null, () => {
      coverDiv.innerHTML = `<span class="text-white font-bold text-3xl">${book.charAt(0)}</span>`;
    });

    coverDiv.appendChild(img);
  } else {
    coverDiv.innerHTML = `<span class="text-white font-bold text-3xl">${book.charAt(0)}</span>`;
  }

  const grid = document.getElementById("selectionGrid");
  grid.innerHTML = "";
  for (let i = 1; i <= maxChapters; i++) {
    grid.innerHTML += `
                    <button onclick="selectChapter(${i})" 
                        class="glass-card p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-indigo-500 hover:text-white transition-all font-bold text-sm sm:text-base relative group overflow-hidden">
                        <span class="relative z-10">${i}</span>
                        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/20 group-hover:to-indigo-500/40 transition-all"></div>
                    </button>`;
  }
}

function selectChapter(chap) {
  state.chapter = chap;
  fetchChapter();
}

function addToHistory() {
  const existingIndex = history.findIndex((h) => h.book === state.book);

  if (existingIndex !== -1) {
    history[existingIndex].chapter = state.chapter;
    history[existingIndex].timestamp = Date.now();
    const updatedEntry = history.splice(existingIndex, 1)[0];
    history.unshift(updatedEntry);
  } else {
    const entry = {
      book: state.book,
      chapter: state.chapter,
      timestamp: Date.now(),
    };
    history.unshift(entry);
  }

  if (history.length > 10) history = history.slice(0, 10);

  localStorage.setItem("selah_history", JSON.stringify(history));
  renderHistory();
}

function getBookProgress(book) {
  const maxChapters = findMax(book);
  const historyEntry = history.find((h) => h.book === book);
  const currentChapter = historyEntry ? historyEntry.chapter : 0;
  const percentage = Math.round((currentChapter / maxChapters) * 100);

  return {
    currentChapter: currentChapter,
    maxChapters: maxChapters,
    percentage: percentage,
  };
}

function createProgressRing(percentage, size = 32) {
  const radius = (size - 4) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return `
                <div class="progress-ring-container" style="width: ${size}px; height: ${size}px;">
                    <svg class="progress-ring-svg" viewBox="0 0 ${size} ${size}">
                        <circle class="progress-ring-bg" cx="${size / 2}" cy="${size / 2}" r="${radius}"></circle>
                        <circle class="progress-ring-fill" cx="${size / 2}" cy="${size / 2}" r="${radius}" 
                            stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"></circle>
                    </svg>
                    <span class="progress-text">${percentage}%</span>
                </div>
            `;
}

function renderReadingProgress() {
  const section = document.getElementById("progressSection");
  const grid = document.getElementById("progressGrid");

  const booksWithProgress = history
    .filter((h) => h.chapter > 0)
    .map((h) => ({
      name: h.book,
      ...getBookProgress(h.book),
    }));

  if (booksWithProgress.length === 0) {
    section.classList.add("hidden");
    return;
  }

  section.classList.remove("hidden");
  grid.innerHTML = booksWithProgress
    .map(
      ({ name, currentChapter, maxChapters, percentage }) => `
                <div class="glass-card history-card progress-card select-none">
                    ${createProgressRing(percentage, window.innerWidth < 640 ? 32 : 40)}
                    <div class="history-card-content">
                        <div class="history-book-name text-slate-700 dark:text-slate-300">${name}</div>
                        <div class="history-chapter-info text-slate-500">Chapter ${currentChapter} of ${maxChapters}</div>
                        <div class="history-progress-detail text-slate-400">${percentage}% complete</div>
                    </div>
                </div>
            `,
    )
    .join("");
}

function renderHistory() {
  const section = document.getElementById("historySection");
  const grid = document.getElementById("historyGrid");

  if (history.length === 0) {
    section.classList.add("hidden");
    return;
  }

  section.classList.remove("hidden");
  grid.innerHTML = history
    .map((h) => {
      const timeAgo = getTimeAgo(h.timestamp);

      return `
                    <button onclick="loadHistory('${h.book}', ${h.chapter})" class="glass-card continue-card hover:bg-indigo-500 hover:text-white transition-all group snap-center cursor-pointer">
                        <div class="continue-icon group-hover:bg-white/20 bg-gradient-to-br from-indigo-500 to-purple-600">
                            <div class="w-full h-full flex items-center justify-center text-white font-bold text-sm">
                                ${h.book.charAt(0)}
                            </div>
                        </div>
                        <div class="continue-content">
                            <div class="continue-book">${h.book}</div>
                            <div class="continue-chapter">Chapter ${h.chapter}</div>
                            <div class="continue-time">${timeAgo}</div>
                        </div>
                    </button>
                `;
    })
    .join("");
}

function getTimeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);

  if (seconds < 60) return "Just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return "Last week";
}

function clearAllProgress() {
  if (confirm("Reset all reading progress?")) {
    history = [];
    localStorage.removeItem("selah_history");
    renderReadingProgress();
    renderHistory();
    showToast("All progress reset");
  }
}

async function fetchChapter(continueAutoRead = false) {
  if (!continueAutoRead) {
    stopAudio();
  }

  try {
    const res = await fetch(
      `https://bible-api.com/${state.book}+${state.chapter}`,
    );
    const data = await res.json();
    state.currentVerses = data.verses || [];

    addToHistory();
    renderReader();

    if (continueAutoRead && state.isAutoReading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        readFullChapter(0);
      }, 500);
    }

    renderReadingProgress();
    window.location.hash = `${state.book}-${state.chapter}`;
  } catch (e) {
    console.error("Error fetching chapter", e);
    showToast("Failed to load chapter", true);
    state.isAutoReading = false;
  }
}

// FIXED: Update button text when rendering reader - hide restart/stop initially
function renderReader() {
  document.getElementById("libraryView").classList.add("hidden");
  document.getElementById("superbookView").classList.add("hidden");
  document.getElementById("selectionView").classList.add("hidden");
  document.getElementById("selectionFlow").classList.add("hidden");
  document.getElementById("readerView").classList.remove("hidden");
  document.getElementById("progressContainer").classList.remove("hidden");

  document.getElementById("readerTitle").innerText =
    `${state.book} ${state.chapter}`;

  document.getElementById("prevChapterBtn").disabled = state.chapter <= 1;
  document.getElementById("nextChapterBtn").disabled =
    state.chapter >= state.maxChapters;

  const chapterDropdown = document.getElementById("chapterJumpDropdown");
  chapterDropdown.innerHTML = "";
  for (let i = 1; i <= state.maxChapters; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = `Chapter ${i}`;
    option.selected = i === state.chapter;
    chapterDropdown.appendChild(option);
  }

  const verseDropdown = document.getElementById("verseDropdown");
  verseDropdown.innerHTML = '<option value="">Jump Verse</option>';

  const verseList = document.getElementById("verseList");
  verseList.innerHTML = "";

  state.currentVerses.forEach((v) => {
    const option = document.createElement("option");
    option.value = `v-${v.verse}`;
    option.text = `Verse ${v.verse}`;
    verseDropdown.appendChild(option);

    const verseEl = document.createElement("div");
    verseEl.id = `v-${v.verse}`;
    verseEl.className =
      "verse-container group hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all";
    verseEl.innerHTML = `
                    <div class="flex gap-3 sm:gap-4">
                        <span class="text-indigo-500 font-bold text-base sm:text-lg select-none flex-shrink-0 w-6 sm:w-8">${v.verse}</span>
                        <p class="text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-200">${v.text}</p>
                    </div>
                    <div class="mt-3 sm:mt-4 flex gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onclick="speakVerse(${v.verse})" class="text-xs bg-indigo-500/10 text-indigo-500 px-2.5 sm:px-3 py-1.5 rounded-lg hover:bg-indigo-500 hover:text-white transition-all flex items-center gap-1.5 sm:gap-2">
                            <i class="fas fa-volume-up"></i> <span class="hidden sm:inline">Read</span>
                        </button>
                        <button onclick="toggleInsight('insight-${v.verse}', '${state.book}', ${state.chapter}, ${v.verse})" class="text-xs bg-amber-500/10 text-amber-600 px-2.5 sm:px-3 py-1.5 rounded-lg hover:bg-amber-500 hover:text-white transition-all flex items-center gap-1.5 sm:gap-2">
                            <i class="fas fa-lightbulb"></i> <span class="hidden sm:inline">Explain</span>
                        </button>
                    </div>
                    <div id="insight-${v.verse}" class="insight-panel mt-2"></div>
                `;
    verseList.appendChild(verseEl);
  });

  // FIXED: Hide restart and stop buttons initially, only show Read All
  document.getElementById("btn-restart-audio").classList.add("hidden");
  document.getElementById("btn-stop-all").classList.add("hidden");
  document.getElementById("btn-read-all").classList.remove("hidden");

  // FIXED: Set correct button text based on saved position
  const savedPosition = localStorage.getItem(
    `selah_audio_pos_${state.book}_${state.chapter}`,
  );
  const resumeIndex = savedPosition ? parseInt(savedPosition) : 0;
  const buttonText =
    resumeIndex > 0 ? `Resume (v${resumeIndex + 1})` : "Read All";
  document.getElementById("read-all-text").innerText = buttonText;

  updateProgress();
}

function jumpToVerse(verseId) {
  if (!verseId) return;
  const el = document.getElementById(verseId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("ring-2", "ring-indigo-500");
    setTimeout(() => el.classList.remove("ring-2", "ring-indigo-500"), 2000);
  }
}

function jumpToChapter(chap) {
  const chapter = parseInt(chap);
  if (chapter && chapter !== state.chapter) {
    state.chapter = chapter;
    state.isAutoReading = false;
    fetchChapter();
  }
}

function navChapter(direction) {
  const newChapter = state.chapter + direction;
  if (newChapter >= 1 && newChapter <= state.maxChapters) {
    state.chapter = newChapter;
    state.isAutoReading = false;
    fetchChapter();
  }
}

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  document.getElementById("progressBar").style.width =
    `${Math.min(progress, 100)}%`;
}

function loadHistory(book, chapter) {
  state.book = book;
  state.chapter = chapter;
  state.maxChapters = findMax(book);
  fetchChapter();
}

function renderLibrary() {
  const otGrid = document.getElementById("otGrid");
  const ntGrid = document.getElementById("ntGrid");

  otGrid.innerHTML = BIBLE_BOOKS.OT.map(([name, chapters, theme, tagline]) => {
    const coverUrl = BOOK_COVERS[name];
    return createBookCard(name, chapters, theme, tagline, coverUrl);
  }).join("");

  ntGrid.innerHTML = BIBLE_BOOKS.NT.map(([name, chapters, theme, tagline]) => {
    const coverUrl = BOOK_COVERS[name];
    return createBookCard(name, chapters, theme, tagline, coverUrl);
  }).join("");
}

function createBookCard(name, chapters, theme, tagline, coverUrl) {
  const uniqueId = "img-" + name.replace(/\s+/g, "-").toLowerCase();

  return `
                <div class="book-cover-container group" onclick="openCoverModal('${name}', ${chapters})">
                    <div class="book-initial">${name.charAt(0)}</div>
                    ${
                      coverUrl
                        ? `<img id="${uniqueId}" 
                              data-src="${coverUrl}" 
                              alt="${name}" 
                              class="book-cover-art" 
                              width="400" 
                              height="600"
                              loading="lazy"
                              decoding="async">`
                        : ""
                    }
                    <div class="book-spine"></div>
                    <span class="book-cover-badge">${theme}</span>
                    <div class="book-cover-overlay">
                        <h3 class="book-cover-title display-font">${name}</h3>
                        <p class="book-cover-chapters">${chapters} chapters</p>
                    </div>
                </div>
            `;
}

function lazyLoadImages() {
  const images = document.querySelectorAll(".book-cover-art[data-src]");
  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");
          if (src) {
            loadImageWithFallback(
              img,
              src,
              () => {
                observer.unobserve(img);
              },
              () => {
                observer.unobserve(img);
              },
            );
          }
        }
      });
    },
    {
      rootMargin: "50px 0px",
      threshold: 0.01,
    },
  );

  images.forEach((img) => imageObserver.observe(img));
}

// Superbook Functions
function renderSuperbookPreview() {
  const preview = document.getElementById("superbookPreview");
  const previewEpisodes = SUPERBOOK_EPISODES.slice(0, 6); // Show first 6 on home

  preview.innerHTML = previewEpisodes
    .map((ep) => createSuperbookCard(ep))
    .join("");

  // Lazy load images
  setTimeout(() => lazyLoadSuperbookImages(), 100);
}

function renderSuperbookFull() {
  const grid = document.getElementById("superbookFullGrid");
  const filtered =
    state.superbookFilter === "all"
      ? SUPERBOOK_EPISODES
      : SUPERBOOK_EPISODES.filter((ep) => ep.season === state.superbookFilter);

  grid.innerHTML = filtered.map((ep) => createSuperbookCard(ep)).join("");
  lazyLoadSuperbookImages();
}

function createSuperbookCard(ep) {
  const thumbUrl = `https://picsum.photos/seed/superbook_s${ep.season}_ep${ep.episode}/400/225`;

  return `
                <div class="superbook-card" onclick="openSuperbookModal(${ep.episode})">
                    <img src="${thumbUrl}" 
                         alt="${ep.title}" 
                         class="superbook-thumbnail"
                         loading="lazy"
                         onload="this.classList.add('loaded')"
                         onerror="this.style.display='none'">
                    <div class="superbook-number">${ep.episode}</div>
                    <span class="superbook-season">S${ep.season}</span>
                    <div class="superbook-content">
                        <h3 class="superbook-title">${ep.title}</h3>
                        <p class="superbook-bible"><i class="fas fa-book-open mr-1"></i>${ep.bible}</p>
                    </div>
                </div>
            `;
}

function lazyLoadSuperbookImages() {
  const images = document.querySelectorAll(".superbook-thumbnail:not(.loaded)");
  images.forEach((img) => {
    if (img.complete && img.naturalHeight !== 0) {
      img.classList.add("loaded");
    }
  });
}

function openSuperbookModal(episodeNum) {
  const ep = SUPERBOOK_EPISODES.find((e) => e.episode === episodeNum);
  if (!ep) return;

  const modal = document.getElementById("superbookModal");

  document.getElementById("superbookModalNumber").textContent = ep.episode;
  document.getElementById("superbookModalSeason").textContent =
    `Season ${ep.season}`;
  document.getElementById("superbookModalTitle").textContent = ep.title;
  document.getElementById("superbookModalBible").textContent =
    `Bible Story: ${ep.bible}`;
  document.getElementById("superbookModalDescription").textContent =
    ep.description;

  const thumbUrl = `https://picsum.photos/seed/superbook_s${ep.season}_ep${ep.episode}/600/338`;
  document.getElementById("superbookModalImage").src = thumbUrl;

  // Get specific YouTube link for this episode
  const youtubeLink = SUPERBOOK_YOUTUBE_LINKS[episodeNum];
  const watchBtn = document.getElementById("superbookWatchBtn");

  if (youtubeLink && youtubeLink !== "Not Found") {
    watchBtn.href = youtubeLink;
    watchBtn.innerHTML = `
                    <i class="fas fa-play-circle"></i>
                    Watch Episode on YouTube
                `;
    watchBtn.classList.remove("opacity-50", "cursor-not-allowed");
    watchBtn.onclick = null;
  } else {
    watchBtn.href = "#";
    watchBtn.innerHTML = `
                    <i class="fas fa-unlink"></i>
                    Not Found
                `;
    watchBtn.classList.add("opacity-50", "cursor-not-allowed");
    watchBtn.onclick = (e) => {
      e.preventDefault();
      showToast("This episode link is not available");
    };
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSuperbookModal(event) {
  if (
    event &&
    event.target !== event.currentTarget &&
    !event.target.closest(".superbook-modal-close")
  )
    return;
  const modal = document.getElementById("superbookModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function showSuperbookSection() {
  stopAudio();
  document.getElementById("libraryView").classList.add("hidden");
  document.getElementById("readerView").classList.add("hidden");
  document.getElementById("selectionView").classList.add("hidden");
  document.getElementById("superbookView").classList.remove("hidden");
  document.getElementById("progressContainer").classList.add("hidden");

  renderSuperbookFull();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterSuperbookSeason(season) {
  state.superbookFilter = season;

  // Update tabs
  document.querySelectorAll(".superbook-tab").forEach((tab) => {
    tab.classList.remove("active");
  });
  event.target.classList.add("active");

  renderSuperbookFull();
}

async function fetchVOTD() {
  const daily = getDailyVerseRef();
  state.currentVOTD = daily;
  try {
    const res = await fetch(`https://bible-api.com/${daily.ref}`);
    const data = await res.json();
    document.getElementById("votdText").innerText = `"${data.text.trim()}"`;
    document.getElementById("votdRef").innerText = data.reference;

    document.getElementById("votdExplainBtn").onclick = () => {
      toggleInsight("votd-insight", daily.book, daily.chap, daily.verse);
    };
  } catch (e) {
    console.error("Error loading VOTD", e);
  }
}

function openVotd() {
  if (!state.currentVOTD) return;
  stopAudio();
  state.book = state.currentVOTD.book;
  state.chapter = state.currentVOTD.chap;
  state.maxChapters = findMax(state.book);
  fetchChapter();
}

function resetToLibrary() {
  stopAudio();
  state.isAutoReading = false;

  document.getElementById("readerView").classList.add("hidden");
  document.getElementById("selectionView").classList.add("hidden");
  document.getElementById("superbookView").classList.add("hidden");
  document.getElementById("selectionFlow").classList.add("hidden");
  document.getElementById("progressContainer").classList.add("hidden");
  document.getElementById("libraryView").classList.remove("hidden");

  window.location.hash = "";

  renderLibrary();
  lazyLoadImages();
  renderReadingProgress();
  renderHistory();
  renderSuperbookPreview();
}

function handleSearch(query) {
  if (!query.trim()) return;

  const match = query.match(/^([\w\s]+?)\s+(\d+)(?::(\d+))?$/i);
  if (match) {
    const bookName = match[1].trim();
    const chapter = parseInt(match[2]);
    const verse = match[3] ? parseInt(match[3]) : null;

    let foundBook = null;
    let maxChapters = 0;

    for (let section of Object.values(BIBLE_BOOKS)) {
      for (let [name, chapters] of section) {
        if (
          name.toLowerCase() === bookName.toLowerCase() ||
          name.toLowerCase().replace(/\s/g, "") ===
            bookName.toLowerCase().replace(/\s/g, "")
        ) {
          foundBook = name;
          maxChapters = chapters;
          break;
        }
      }
      if (foundBook) break;
    }

    if (foundBook && chapter > 0 && chapter <= maxChapters) {
      state.book = foundBook;
      state.chapter = chapter;
      state.maxChapters = maxChapters;
      fetchChapter().then(() => {
        if (verse) {
          setTimeout(() => jumpToVerse(`v-${verse}`), 500);
        }
      });
      return;
    }
  }

  showToast('Format: "Book Chapter" (e.g., "John 3")', true);
}

function applyTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.getElementById("themeIcon").className = isDark
    ? "fas fa-sun text-yellow-400"
    : "fas fa-moon text-slate-500";
}

function toggleDarkMode() {
  applyTheme(!document.documentElement.classList.contains("dark"));
}

function showAuthorsModal() {
  document.getElementById("authorsModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAuthorsModal(event) {
  if (
    event &&
    event.target !== event.currentTarget &&
    !event.target.closest("button")
  )
    return;
  document.getElementById("authorsModal").classList.remove("active");
  document.body.style.overflow = "";
}

function init() {
  renderLibrary();
  lazyLoadImages();
  renderHistory();
  renderReadingProgress();
  renderSuperbookPreview();
  fetchVOTD();
  applyTheme(localStorage.getItem("theme") === "dark");

  document.addEventListener("click", initAudio, { once: true });
  document.addEventListener("touchstart", initAudio, { once: true });

  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const parts = hash.split("-");
    if (parts.length === 2) {
      state.book = decodeURIComponent(parts[0]);
      state.chapter = parseInt(parts[1]);
      state.maxChapters = findMax(state.book);
      fetchChapter();
    }
  }
}

window.addEventListener("scroll", updateProgress);
window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", () => {
  renderReadingProgress();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCoverModal();
    closeAuthorsModal();
    closeSuperbookModal();
  }
});
