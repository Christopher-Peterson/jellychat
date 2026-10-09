export type EmojiCatalogItem = {
  emoji: string;
  name: string;
  aliases: string[];
  tags: string[];
};

export type ReactionPreferences = {
  quick: string[];
  favorites: string[];
  recent: string[];
};

export const quickReactionSlotCount = 6;
export const recentEmojiLimit = 18;
export const defaultQuickReactions = ["❤️", "😂", "😮", "😢", "🔥", "❤️‍🔥"];

const quickStorageKey = "jellychat.reactions.quick.v1";
const favoritesStorageKey = "jellychat.reactions.favorites.v1";
const recentStorageKey = "jellychat.reactions.recent.v1";

export const emojiCatalog: EmojiCatalogItem[] = [
  { emoji: "❤️", name: "red heart", aliases: ["heart"], tags: ["love", "like", "favorite", "sweet"] },
  { emoji: "😂", name: "face with tears of joy", aliases: ["laugh", "lol"], tags: ["laugh", "funny", "happy", "joy"] },
  { emoji: "😮", name: "surprised face", aliases: ["surprise", "wow"], tags: ["shock", "surprised", "amazed", "wow"] },
  { emoji: "😭", name: "loudly crying face", aliases: ["sob"], tags: ["sad", "cry", "emotional", "overwhelmed"] },
  { emoji: "🔥", name: "fire", aliases: ["flame"], tags: ["fire", "hot", "hype", "great"] },
  { emoji: "❤️‍🔥", name: "heart on fire", aliases: ["burning heart"], tags: ["love", "fire", "hype", "intense"] },
  { emoji: "🤣", name: "rolling on the floor laughing", aliases: ["rofl"], tags: ["laugh", "funny", "lol", "joy"] },
  { emoji: "😎", name: "smiling face with sunglasses", aliases: ["cool"], tags: ["cool", "smooth", "nice", "confident"] },
  { emoji: "😬", name: "grimacing face", aliases: ["grimace"], tags: ["awkward", "nervous", "oops", "tense"] },
  { emoji: "🤔", name: "thinking face", aliases: ["thinking"], tags: ["think", "hmm", "curious", "question"] },
  { emoji: "🤬", name: "face with symbols on mouth", aliases: ["swearing face"], tags: ["angry", "swearing", "profanity", "symbols"] },
  { emoji: "🤨", name: "face with raised eyebrow", aliases: ["raised brow"], tags: ["eyebrow", "raised", "doubting", "investigate", "colbert"] }, 
  { emoji: "🤮", name: "face vomiting", aliases: ["vomit"], tags: ["gross", "bad", "sick", "dislike"] },
  { emoji: "🤯", name: "exploding head", aliases: ["mind blown"], tags: ["shock", "wow", "surprised", "amazed"] },
  { emoji: "😍", name: "smiling face with heart eyes", aliases: ["heart eyes", "love face"], tags: ["love", "happy", "cute", "wow"] },
  { emoji: "🤠", name: "cowboy hat face", aliases: ["tony"], tags: ["cowboy", "hat", "happy", "smile", "milf hunter"] },

  { emoji: "🍺", name: "beer mug", aliases: ["beer", "drink"], tags: ["beer", "drink", "sip", "cheers"] },
  { emoji: "🍻", name: "beer mugs", aliases: ["beers", "drinks", "toast", "cheers"], tags: ["beer", "drink", "sip", "cheers"] },
  { emoji: "👀", name: "eyes", aliases: ["watching"], tags: ["look", "watch", "attention", "sus"] },
  { emoji: "💀", name: "skull", aliases: ["dead"], tags: ["laugh", "dead", "funny", "shock"] },
  { emoji: "😳", name: "flushed face", aliases: ["flushed"], tags: ["shock", "surprised", "awkward", "wow"] },
  { emoji: "🍿", name: "popcorn", aliases: ["snack"], tags: ["watch", "movie", "drama", "fun"] },
  { emoji: "🍑", name: "peach", aliases: ["butt", "ass"], tags: ["peach","food", "sex", "horny"] },
  { emoji: "🌮", name: "taco", aliases: ["taco"], tags: ["taco", "food", "sex", "horny"] },
  { emoji: "🍆", name: "eggplant", aliases: ["penis"], tags: ["eggplant", "sex","food", "horny"] },
  { emoji: "👌", name: "ok hand", aliases: ["ok"], tags: ["good", "yes", "perfect", "agree"] },
  { emoji: "🌋", name: "volcano", aliases: ["erruption", "climax"], tags: ["volcano", "sex", "horny"] },
  { emoji: "💦", name: "sweat droplets", aliases: ["water droplets"], tags: ["wet", "drops", "water", "skeet", "sex", "horny"] },
  { emoji: "🎷", name: "saxophone", aliases: ["sax", "jazz"], tags: ["saxophone", "sax", "smooth", "sultry", "jazz", "horny"] },
  { emoji: "🌶", name: "hot pepper", aliases: ["pepper", "chili", "spicy"], tags: ["pepper", "hot", "spicy", "chili", "food", "horny"] },
  { emoji: "🚩", name: "triangular flag on post", aliases: ["red flag", "warning"], tags: ["red flag", "flag", "warning"] },
  { emoji: "💲", name: "dollar sign", aliases: ["dollar", "money", "cash", "cha-ching"], tags: ["money", "dollar", "cash", "rich"] },
  { emoji: "💅", name: "nail polish", aliases: ["painting my nails", "nails", "painting", "sipping tea"], tags: ["nails", "vanity", "schadenfreude", "smug"] },
  { emoji: "🔪", name: "kitchen knife", aliases: ["knife"], tags: ["knife", "stabbing", "running"] },
  { emoji: "💯", name: "one hundred", aliases: ["hundred", "100"], tags: ["perfect", "exactly", "agreed", "one hundred", "hundred", "100"] },
  { emoji: "😵‍💫", name: "face with spiral eyes", aliases: ["spiral eyes", "confused"], tags: ["spiral", "confused", "woozy", "wacko"] },
  { emoji: "🪦", name: "headstone", aliases: ["rip", "tombstone"], tags: ["dead", "rip", "tombstone", "headstone", "grave"] },
  { emoji: "🏳️‍🌈", name: "rainbow flag", aliases: ["lgbt flag"], tags: ["rainbow", "flag", "gay", "queer", "lgbt", "gay", "queer"] },
  { emoji: "🇦🇱", name: "albania flag", aliases: ["albania"], tags: ["albania", "slenderbag", "sherds"] },
  { emoji: "💋", name: "kiss mark", aliases: ["lips", "kiss"], tags: ["kiss", "smooch", "love"] },
  { emoji: "💥", name: "collision", aliases: ["boom", "explosion"], tags: ["boom", "bang", "explosion"] },
  
  { emoji: "👍", name: "thumbs up", aliases: ["like", "yes"], tags: ["agree", "good", "ok", "nice"] },
  { emoji: "👏", name: "clapping hands", aliases: ["clap"], tags: ["applause", "good", "bravo", "hype"] },
  { emoji: "🎉", name: "party popper", aliases: ["party"], tags: ["celebrate", "win", "happy", "fun"] },
  { emoji: "😱", name: "face screaming in fear", aliases: ["scream"], tags: ["shock", "scared", "surprised", "wild"] },
  { emoji: "😢", name: "crying face", aliases: ["sad", "tear"], tags: ["sad", "cry", "upset", "emotional"] },
  { emoji: "☹️", name: "frowning face", aliases: ["frown"], tags: ["sad", "down", "bad", "upset"] },
  { emoji: "😆", name: "grinning squinting face", aliases: ["laughing"], tags: ["laugh", "funny", "happy", "joy"] },
  { emoji: "😐", name: "neutral face", aliases: ["neutral"], tags: ["meh", "flat", "quiet", "unsure"] },
  { emoji: "😡", name: "angry face", aliases: ["mad"], tags: ["angry", "rage", "bad", "upset"] },
  { emoji: "🙌", name: "raising hands", aliases: ["raised hands"], tags: ["celebrate", "hype", "yes", "win"] },
  { emoji: "🙏", name: "folded hands", aliases: ["pray", "please"], tags: ["thanks", "hope", "grateful", "please"] },
  { emoji: "💯", name: "hundred points", aliases: ["100"], tags: ["perfect", "score", "agree", "hype"] },
  { emoji: "⭐", name: "star", aliases: ["favorite star"], tags: ["favorite", "great", "shine", "best"] },
  { emoji: "✨", name: "sparkles", aliases: ["sparkle"], tags: ["magic", "pretty", "wow", "nice"] },
  { emoji: "😴", name: "sleeping face", aliases: ["sleep"], tags: ["sleepy", "boring", "tired", "quiet"] },
  { emoji: "🥺", name: "pleading face", aliases: ["pleading"], tags: ["sad", "cute", "please", "soft"] },
  { emoji: "🫶", name: "heart hands", aliases: ["love hands"], tags: ["love", "thanks", "sweet", "support"] },
  { emoji: "💔", name: "broken heart", aliases: ["heartbreak"], tags: ["sad", "love", "hurt", "cry"] },
  { emoji: "🤌", name: "pinched fingers", aliases: ["chef kiss"], tags: ["perfect", "good", "taste", "nice"] },
  { emoji: "👎", name: "thumbs down", aliases: ["dislike"], tags: ["no", "bad", "disagree", "down"] },
  { emoji: "🫡", name: "saluting face", aliases: ["salute"], tags: ["respect", "ok", "yes", "support"] },
  { emoji: "🫠", name: "melting face", aliases: ["melt"], tags: ["awkward", "sad", "overwhelmed", "heat"] }
];

const catalogEmojiSet = new Set(emojiCatalog.map((item) => item.emoji));

function readJsonArray(key: string): string[] {
  try {
    const raw = window.localStorage?.getItem(key);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function writeJsonArray(key: string, values: string[]): void {
  try {
    window.localStorage?.setItem(key, JSON.stringify(values));
  } catch {
    if (window.JellyChatDebug) {
      window.JellyChatDebug.lastError = "Could not save JellyChat reaction preferences.";
    }
  }
}

function uniqueValid(values: string[], options: { catalogOnly: boolean; limit?: number }): string[] {
  const output: string[] = [];
  values.forEach((value) => {
    const emoji = value.trim();
    if (!emoji || output.includes(emoji)) {
      return;
    }

    if (options.catalogOnly && !catalogEmojiSet.has(emoji)) {
      return;
    }

    output.push(emoji);
  });

  return typeof options.limit === "number" ? output.slice(0, options.limit) : output;
}

export function loadReactionPreferences(): ReactionPreferences {
  const storedQuick = uniqueValid(readJsonArray(quickStorageKey), { catalogOnly: true });
  const quick = storedQuick.length === quickReactionSlotCount
    ? storedQuick
    : defaultQuickReactions.slice();
  const favorites = uniqueValid(readJsonArray(favoritesStorageKey), { catalogOnly: true });
  const recent = uniqueValid(readJsonArray(recentStorageKey), { catalogOnly: true, limit: recentEmojiLimit });

  return { quick, favorites, recent };
}

export function saveQuickReactions(quick: string[]): string[] {
  const normalized = uniqueValid(quick, { catalogOnly: true });
  const result = normalized.length === quickReactionSlotCount ? normalized : defaultQuickReactions.slice();
  writeJsonArray(quickStorageKey, result);
  return result;
}

export function saveFavoriteReactions(favorites: string[]): string[] {
  const result = uniqueValid(favorites, { catalogOnly: true });
  writeJsonArray(favoritesStorageKey, result);
  return result;
}

export function saveRecentReactions(recent: string[]): string[] {
  const result = uniqueValid(recent, { catalogOnly: true, limit: recentEmojiLimit });
  writeJsonArray(recentStorageKey, result);
  return result;
}

export function addRecentReaction(recent: string[], emoji: string): string[] {
  return saveRecentReactions([emoji].concat(recent.filter((item) => item !== emoji)));
}

export function searchEmojiCatalog(query: string): EmojiCatalogItem[] {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return emojiCatalog;
  }

  return emojiCatalog.filter((item) => {
    const haystack = [
      item.emoji,
      item.name,
      ...item.aliases,
      ...item.tags
    ].join(" ").toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}
