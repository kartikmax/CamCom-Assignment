export const across = [
  { no: 1, hints: "Petty fight", word: "sfat" },
  { no: 5, hints: "Funny little habit", word: "quirk" },
  {
    no: 7,
    hints:
      "I cant ____ that!(response to the being told that Colonel Sanders bowtie looks like a stick figure body) ",
    word: "unsee",
  },
  { no: 8, hints: "Mother-of-pearl design on a guitar ,e.g", word: "inlay" },
  { no: 9, hints: "Colored, as hair", word: "dyed" },
];

export const down = [
  { no: 1, hints: "Source of edible ink", word: "squid" },
  {
    no: 2,
    hints: "Likek the horror movie titles Chopping Mall and Santas Slay ",
    word: "funny",
  },
  { no: 3, hints: "Airplane seat choice", word: "aisle" },
  { no: 4, hints: "Grippy part of a tire", word: "tread" },
  { no: 6, hints: "Paper with the answers on it", word: "key" },
];

export const blocks = [
  { keyNo: 1, letter: "s", empty: false, across: true, bottom: true,position:[0,0] },
  { keyNo: 2, letter: "f", empty: false, across: false, bottom: true ,position:[0,1] },
  { keyNo: 3, letter: "a", empty: false, across: false, bottom: true ,position:[0,2] },
  { keyNo: 4, letter: "t", empty: false, across: false, bottom: true,position:[0,3]  },
  { keyNo: null, letter: "", empty: true, across: false, bottom: false ,position:[0,4] },
  { keyNo: 5, letter: "q", empty: false, across: false, bottom: false ,position:[1,0] },
  { keyNo: null, letter: "u", empty: false, across: false, bottom: false ,position:[1,1] },
  { keyNo: null, letter: "i", empty: false, across: false, bottom: false ,position:[1,2] },
  { keyNo: null, letter: "r", empty: false, across: false, bottom: false,position:[1,3]  },
  { keyNo: 6, letter: "k", empty: false, across: false, bottom: true,position:[1,4]  },
  { keyNo: 7, letter: "u", empty: false, across: true, bottom: false ,position:[2,0] },
  { keyNo: null, letter: "n", empty: false, across: false, bottom: false,position:[2,1]  },
  { keyNo: null, letter: "s", empty: false, across: false, bottom: false,position:[2,2]  },
  { keyNo: null, letter: "e", empty: false, across: false, bottom: false,position:[2,3]  },
  { keyNo: null, letter: "e", empty: false, across: false, bottom: false ,position:[2,4] },
  { keyNo: 8, letter: "i", empty: false, across: true, bottom: false,position:[3,0]  },
  { keyNo: null, letter: "n", empty: false, across: false, bottom: false ,position:[3,1] },
  { keyNo: null, letter: "l", empty: false, across: false, bottom: false ,position:[3,2] },
  { keyNo: null, letter: "a", empty: false, across: false, bottom: false,position:[3,3]  },
  { keyNo: null, letter: "y", empty: false, across: false, bottom: false ,position:[3,4] },
  { keyNo: 9, letter: "d", empty: false, across: true, bottom: false,position:[4,0]  },
  { keyNo: null, letter: "y", empty: false, across: false, bottom: false,position:[4,1]  },
  { keyNo: null, letter: "e", empty: false, across: false, bottom: false,position:[4,2]  },
  { keyNo: null, letter: "d", empty: false, across: false, bottom: false ,position:[4,3] },
  { keyNo: null, letter: "", empty: true, across: false, bottom: false,position:[4,4]  },
];
