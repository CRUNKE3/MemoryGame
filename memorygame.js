var numClick = 0;
var clubs = 0;
var diamonds = 0;
var triangles = 0;
var smileys = 0;
var spades = 0;
var hearts = 0;
let club = "https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/43-512.png";
let triangle = "https://www.emoji.co.uk/files/google-emojis/symbols-android/8122-down-pointing-small-red-triangle.png";
let diamond = "http://www.jemome.com/cdn/2009/10/diamonds-card-game-icon_67838.png";
let spade = "https://openclipart.org/image/2400px/svg_to_png/166674/outlinedspade.png";
let smiley = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png";
let heart = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Card_heart.svg/866px-Card_heart.svg.png";
let zero = "https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/43-512.png";
let one = "http://www.jemome.com/cdn/2009/10/diamonds-card-game-icon_67838.png";
let two = "https://openclipart.org/image/2400px/svg_to_png/166674/outlinedspade.png";
let three = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png";
let four = "https://www.emoji.co.uk/files/google-emojis/symbols-android/8122-down-pointing-small-red-triangle.png";
let five = "https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/43-512.png";
let six = "https://www.emoji.co.uk/files/google-emojis/symbols-android/8122-down-pointing-small-red-triangle.png";
let seven = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Card_heart.svg/866px-Card_heart.svg.png";
let eight = "http://www.jemome.com/cdn/2009/10/diamonds-card-game-icon_67838.png";
let nine = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Card_heart.svg/866px-Card_heart.svg.png";
let ten = "https://openclipart.org/image/2400px/svg_to_png/166674/outlinedspade.png";
let eleven = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png";
var pic = [club, diamond, spade, triangle, heart, smiley];
var cards = [
  [zero, one, two, three],
  [four, five, six, seven],
  [eight, nine, ten, eleven],
];
var shuffleButton = document.getElementById("shuffle")
function shuffle() {
  cards[0].sort(function(a, b){return 0.5 - Math.random()});
  cards[1].sort(function(a, b){return 0.5 - Math.random()});
  cards[2].sort(function(a, b){return 0.5 - Math.random()});
  triangles = 0;
  clubs = 0;
  smileys = 0;
  hearts = 0;
  spades = 0;
  diamonds = 0;
    document.getElementById('club1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('club2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('diamond1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('diamond2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('triangle1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('triangle2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('smiley1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('smiley2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('spade1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('spade2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('heart1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
    document.getElementById('heart2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
}

function cellOne() {
  numClick++
  clubs++
  document.getElementById("club1").src = cards[0][0];
}

function cellTwo() {
  numClick++
  clubs++
  document.getElementById("club2").src = cards[1][1];
}

function cellThree() {
  numClick++
  triangles++
  document.getElementById("triangle1").src = cards[1][0];
}

function cellFour() {
  numClick++
  triangles++
  document.getElementById("triangle2").src = cards[1][2];
}

function cellFive() {
  numClick++
  diamonds++
  document.getElementById("diamond1").src = cards[0][1];
}

function cellSix() {
  numClick++
  diamonds++
  document.getElementById("diamond2").src = cards[2][0];
}

function cellSeven() {
  numClick++
  smileys++
  document.getElementById("smiley1").src = cards[0][3];
}

function cellEight() {
  numClick++
  smileys++
  document.getElementById("smiley2").src = cards[2][3];
}

function cellNine() {
  numClick++
  spades++
  document.getElementById("spade1").src = cards[0][2];
}

function cellTen() {
  numClick++
  spades++
  document.getElementById("spade2").src = cards[2][2];
}

function cellEleven() {
  numClick++
  hearts++
  document.getElementById("heart1").src = cards[1][3];
}

function cellTwelve() {
  numClick++
  hearts++
  document.getElementById("heart2").src = cards[2][1];
}

function twoCardsFlipped() {
  if (numClick >= 2) {
    numClick = 0;
    if (clubs == 2) {
      document.getElementById('club1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('club2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    } else if (clubs == 1) {
      document.getElementById('club1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      document.getElementById('club2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      clubs = 0;
    }
    if (diamonds == 2) {
      document.getElementById('diamond1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('diamond2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    } else if (diamonds == 1) {
      document.getElementById('diamond1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      document.getElementById('diamond2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      diamonds = 0;
    }
    if (triangles == 2) {
      document.getElementById('triangle1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('triangle2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    } else if (triangles == 1) {
      document.getElementById('triangle1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      document.getElementById('triangle2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      triangles = 0;
    }
    if (smileys == 2) {
      document.getElementById('smiley1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('smiley2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    } else if (smileys == 1) {
      document.getElementById('smiley1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      document.getElementById('smiley2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      smileys = 0;
    }
    if (spades == 2) {
      document.getElementById('spade1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('spade2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    } else if (spades == 1) {
      document.getElementById('spade1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      document.getElementById('spade2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      spades = 0;
    }
    if (hearts == 2) {
      document.getElementById('heart1').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
      document.getElementById('heart2').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/2000px-Yes_Check_Circle.svg.png";
    } else if (hearts == 1) {
      document.getElementById('heart1').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      document.getElementById('heart2').src="https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png?v=1535755695";
      hearts = 0;
    }
  }
  }
