export const hamberger_logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png";

export const youtube_logo = "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500";

export const user_logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUqUm9UKfycxPbpzfpgCxKMpqaYSWhnfKtxQ7M5zjnw&s";

export const search_logo = "https://us.123rf.com/450wm/yoginta/yoginta2301/yoginta230100639/197388928-search-video-symbol-illustration-vector.jpg?ver=6";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEOS_API = " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&&maxResults=50&chart=mostPopular&regionCode=IN&key="+ YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const LIVE_CHAT_COUNT = 17;