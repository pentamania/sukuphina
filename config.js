
var SCREEN_WIDTH = 1024;
var SCREEN_HEIGHT = 768;
var MARKER_RADIUS = 70;
var MARKER_STROKE_WIDTH = 8;

var TRACK_NUM = 9;
var ICON_INTERVAL_DEGREE = 180 / (TRACK_NUM - 1); // 22.5

var MARKER_APPEARANCE_DELTA = 1000; // ノーツ出現時間(ms): 大きくするほど低速
var UNIT_ARRANGE_RADIUS = SCREEN_WIDTH * 0.41 | 0;
var MUSIC_START_DELAY = 2000;

var RATING_TABLE = {
  perfect: {
    score: 1000,
    range: 34, //ms
  },
  great: {
    score: 500,
    range: 64, //ms
  },
  good: {
    score: 100,
    range: 90, //ms
  },
  miss: {
    score: 0,
    range: 134, //ms
  },
};

// キーボード操作用
var KEYCODE_TO_KEYDATA_MAP = {
  80: {key:"p", id:0},
  // 187: {key:";", id:0},
  76: {key:"l", id:1},
  75: {key:"k", id:2},
  78: {key:"n", id:3},
  66: {key:"b", id:4},
  // 32: {key:"sp", id:4},
  86: {key:"v", id:5},
  68: {key:"d", id:6},
  83: {key:"s", id:7},
  81: {key:"q", id:8},
  // 65: {key:"a", id:8},
};
var INDEX_TO_KEY_MAP = {};
KEYCODE_TO_KEYDATA_MAP.forIn(function(key, val) {
  INDEX_TO_KEY_MAP[val.id] = val.key;
});

var ASSETS = {
  sound: {
    music: "./assets/grandfather-clock.mp3",
    ring: "./assets/tamborine.mp3",
  },
  json: {
    beatmap: "./assets/grandfather-clock.json"
  }
};

// テスト用譜面
// var DEBUG_BEATMAP = {
//   offset: 0,
//   notes: [],
// };
// (100).times(function(i) {
//   DEBUG_BEATMAP.notes.push({
//     track: i%9,
//     targetTime: 500*i
//   });
// });
