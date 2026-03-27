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
  document.getElementById("selectionFlow").classList.add("hidden");
  document.getElementById("progressContainer").classList.add("hidden");
  document.getElementById("libraryView").classList.remove("hidden");

  window.location.hash = "";

  renderLibrary();
  lazyLoadImages();
  renderReadingProgress();
  renderHistory();
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
  }
});
