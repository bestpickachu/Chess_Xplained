function goToSection(section) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Show About Me first
goToSection('about');
function goToSection(section) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(section).style.display = 'block';

    if (section === "lesson") {
        loadQuoteOfTheDay();
    }

    if (section === "puzzle") {
        loadPuzzleOfTheDay();
    }
}

goToSection('home');

// Floating pawn background
function spawnPawn() {
    const pawn = document.createElement("img");
    pawn.src = "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg";
    pawn.style.left = Math.random() * window.innerWidth + "px";
    pawn.style.animationDuration = (8 + Math.random() * 6) + "s";

    document.getElementById("pawn-container").appendChild(pawn);

    setTimeout(() => pawn.remove(), 15000);
}

setInterval(spawnPawn, 500);

// ⭐ Quote of the Day
const quotes = [
    "Chess is the gymnasium of the mind. – Blaise Pascal",
    "In life, as in chess, forethought wins. – Charles Buxton",
    "The beauty of a move lies not in its appearance but in the thought behind it. – Aron Nimzowitsch",
    "Even the strongest pieces are useless without a plan.",
    "Every master was once a beginner.",
    "Your next move can always be your best move."
];

const extraQuotes = [
    "A bad plan is better than no plan at all.",
    "The hardest game to win is a won game.",
    "When you see a good move, look for a better one.",
    "Chess teaches you to think before you act.",
    "Losing is learning — every game makes you stronger."
];

function loadQuoteOfTheDay() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const extra = extraQuotes[Math.floor(Math.random() * extraQuotes.length)];

    document.getElementById("daily-quote").textContent = quote;
    document.getElementById("extra-quote").textContent = extra;
}

// ⭐ PUZZLE OF THE DAY (simple images, not clickable)
const puzzles = [
    {
        img: "https://images.chesscomfiles.com/uploads/v1/images/learn-chess/puzzles/basic-mate-in-1.png",
        desc: "White to move and checkmate in one.",
        solution: "Qh7# is checkmate."
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Chess_Mate_in_2.svg/512px-Chess_Mate_in_2.svg.png",
        desc: "White to move. Mate in two.",
        solution: "1. Qg7+! Kxg7 2. Rh7#"
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Chess_Puzzle_Example.svg/512px-Chess_Puzzle_Example.svg.png",
        desc: "White to move and win material.",
        solution: "1. Nxd5! wins the pinned knight."
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chess_simple_pawn_endgame.svg/512px-Chess_simple_pawn_endgame.svg.png",
        desc: "White to move and win the pawn race.",
        solution: "1. d5! Kxd5 2. Ke3 and White wins the race."
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chess_pawn_breakthrough_example.svg/512px-Chess_pawn_breakthrough_example.svg.png",
        desc: "White to move and create a passed pawn.",
        solution: "1. f4! followed by f5 — White breaks through."
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Chess_tactic_fork_example.svg/512px-Chess_tactic_fork_example.svg.png",
        desc: "White to move and fork the king and rook.",
        solution: "1. Nc7+! forks king and rook."
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_pin_tactic_example.svg/512px-Chess_pin_tactic_example.svg.png",
        desc: "White to move and use a pin to win material.",
        solution: "1. Bg5! pins the knight and wins it."
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chess_skewer_example.svg/512px-Chess_skewer_example.svg.png",
        desc: "White to move and skewer the king and rook.",
        solution: "1. Qe8+! forces the king away and wins the rook."
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chess_discovered_attack_example.svg/512px-Chess_discovered_attack_example.svg.png",
        desc: "White to move and use a discovered attack.",
        solution: "1. Bd5+! followed by Qxd7 — winning material."
    }
];

function loadPuzzleOfTheDay() {
    const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];

    document.getElementById("puzzle-image").src = puzzle
