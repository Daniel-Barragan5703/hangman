
let words = [
    "ABSOLUTE", "BACHELOR", "COMPUTER", "ABSTRACT", "BACTERIA", "CONCLUDE",
    "ACADEMIC", "BASEBALL", "CONCRETE", "ACCEPTED", "BATHROOM", "CONFLICT",
    "ACCIDENT", "BECOMING", "CONFUSED", "ACCURACY", "BIRTHDAY", "CONGRESS",
    "ACCURATE", "BOUNDARY", "CONSIDER", "ACHIEVED", "BREAKING", "CONSTANT",
    "ACQUIRED", "BREEDING", "CONSUMER", "ACTIVITY", "BUILDING", "CONTINUE",
    "ACTUALLY", "BULLETIN", "CONTRACT", "ADDITION", "BUSINESS", "CONTRARY",
    "ADEQUATE", "CALENDAR", "CONTRAST", "ADJACENT", "CAMPAIGN", "CONVINCE",
    "ADJUSTED", "CAPACITY", "CORRIDOR", "ADVANCED", "CASHMERE", "COVERAGE",
    "ADVISORY", "CASUALTY", "COVERING", "ADVOCATE", "CATCHING", "CREATION",
    "AFFECTED", "CATEGORY", "CREATIVE", "AIRCRAFT", "CATHOLIC", "CRIMINAL",
    "ALLIANCE", "CAUTIOUS", "CRITICAL", "ALTHOUGH", "CELLULAR", "CROSSING",
    "ALUMINUM", "CEREMONY", "CULTURAL", "ANALYSIS", "CHAIRMAN", "CURRENCY",
    "ANNOUNCE", "CHAMPION", "CUSTOMER", "ANYTHING", "CHEMICAL", "DATABASE",
    "ANYWHERE", "CHILDREN", "DAUGHTER", "APPARENT", "CIRCULAR", "DAYLIGHT",
    "APPENDIX", "CIVILIAN", "DEADLINE", "APPROACH", "CLEARING", "DECIDING",
    "APPROVAL", "CLINICAL", "DECISION", "ARGUMENT", "CLOTHING", "DECREASE",
    "ARTISTIC", "COLLAPSE", "DEFERRED", "ASSEMBLY", "COLONIAL", "DEFINITE",
    "ASSUMING", "COLORFUL", "DELICATE", "ATHLETIC", "COMMENCE", "DELIVERY",
    "ATTACHED", "COMMERCE", "DESCRIBE", "ATTITUDE", "COMPLAIN", "DESIGNER",
    "ATTORNEY", "COMPLETE", "DETAILED", "AUDIENCE", "COMPOSED", "DIABETES",
    "AUTONOMY", "COMPOUND", "DIALOGUE", "AVIATION", "COMPRISE", "DIAMETER",
    "DOUBTFUL", "EMERGING", "DIRECTLY", "DRAMATIC", "EMPHASIS", "DIRECTOR",
    "DRESSING", "EMPLOYEE", "DISABLED", "DROPPING", "ENDEAVOR", "DISASTER",
    "DURATION", "ENGAGING", "DISCLOSE", "DYNAMICS", "ENGINEER", "DISCOUNT",
    "EARNINGS", "ENORMOUS", "DISCOVER", "ECONOMIC", "ENTIRELY", "DISORDER",
    "EDUCATED", "ENTRANCE", "DISPOSAL", "EFFICACY", "ENVELOPE", "DISTANCE",
    "EIGHTEEN", "EQUALITY", "DISTINCT", "ELECTION", "EQUATION", "DISTRICT",
    "ELECTRIC", "ESTIMATE", "DIVIDEND", "ELIGIBLE", "EVALUATE", "DIVISION",
    "EXTERNAL", "EVENTUAL", "DOCTRINE", "FACILITY", "EVERYDAY", "DOCUMENT",
    "FAMILIAR", "EVERYONE", "DOMESTIC", "FEATURED", "EVIDENCE", "DOMINANT",
    "FEEDBACK", "EXCHANGE", "DOMINATE", "FESTIVAL", "EXCITING", "FLOATING",
    "FINISHED", "EXERCISE", "FOOTBALL", "FIREWALL", "EXPLICIT", "FOOTHILL",
    "FLAGSHIP", "EXPOSURE", "FORECAST", "FLEXIBLE", "EXTENDED", "FOREMOST",
    "FUNCTION", "GUIDANCE", "FORMERLY", "GENERATE", "HANDLING", "FOURTEEN",
    "GENEROUS", "HARDWARE", "FRACTION", "GENOMICS", "HERITAGE", "FRACTURE",
    "GOODWILL", "HIGHLAND", "FREQUENT", "GOVERNOR", "HISTORIC", "FRIENDLY",
    "GRADUATE", "HOMELESS", "FRONTIER", "GRAPHICS", "HOMEPAGE", "IMPERIAL",
    "GRATEFUL", "HOSPITAL", "INCIDENT", "GUARDIAN", "HUMANITY", "INCLUDED",
    "INITIATE", "IDENTIFY", "INCREASE", "INNOCENT", "IDENTITY", "INDICATE",
    "INSPIRED", "IDEOLOGY", "INDIRECT", "INSTANCE", "INTIMATE", "INDUSTRY",
    "INTEGRAL", "INTRANET", "INFORMAL", "INTENDED", "INVASION", "INFORMED",
    "INTERACT", "INVOLVED", "INHERENT", "INTEREST", "ISOLATED", "KEYBOARD",
    "INTERIOR", "JUDGMENT", "LANDLORD", "INTERNAL", "JUDICIAL", "LANGUAGE",
    "INTERVAL", "JUNCTION", "LAUGHTER", "MATERIAL", "MINORITY", "LEARNING",
    "MATURITY", "MOBILITY", "LEVERAGE", "MAXIMIZE", "MODELING", "LIFETIME",
    "MEANTIME", "MODERATE", "LIGHTING", "MEASURED", "MOMENTUM", "LIKEWISE",
    "MEDICINE", "MONETARY", "LIMITING", "MEDIEVAL", "MOREOVER", "LITERARY",
    "MEMORIAL", "MORTGAGE", "LOCATION", "MERCHANT", "MOUNTAIN", "MAGAZINE",
    "MIDNIGHT", "MOUNTING", "MAGNETIC", "MILITARY", "MOVEMENT", "MAINTAIN",
    "MINIMIZE", "MULTIPLE", "MAJORITY", "MINISTER", "NATIONAL", "MARGINAL",
    "MINISTRY", "NEGATIVE", "MARRIAGE", "ORIGINAL", "NINETEEN", "PRESERVE",
    "OVERCOME", "NORTHERN", "PRESSING", "OVERHEAD", "NOTEBOOK", "PRESSURE",
    "OVERSEAS", "NUMEROUS", "PREVIOUS", "OVERVIEW", "OBSERVER", "PRINCESS",
    "PAINTING", "OCCASION", "PRINTING", "PARALLEL", "OFFERING", "PRIORITY",
    "PARENTAL", "OFFICIAL", "PROBABLE", "PATENTED", "OFFSHORE", "PROBABLY",
    "PATIENCE", "OPERATOR", "PRODUCER", "PEACEFUL", "OPPONENT", "PROFOUND",
    "PERIODIC", "OPPOSITE", "PROGRESS", "PERSONAL", "OPTIMISM", "PROPERTY",
    "PERSUADE", "OPTIONAL", "PROPOSAL", "PETITION", "ORDINARY", "PROSPECT",
    "PHYSICAL", "ORGANIZE", "PROTOCOL", "PIPELINE", "RELATION", "PROVIDED",
    "PLATFORM", "RELATIVE", "PROVIDER", "PLEASANT", "RELEVANT", "PROVINCE",
    "PLEASURE", "RELIABLE", "PUBLICLY", "POLITICS", "RELIANCE", "PURCHASE",
    "PORTABLE", "RELIGION", "PURSUANT", "PORTRAIT", "REMEMBER", "QUANTITY",
    "POSITION", "RENOWNED", "QUESTION", "POSITIVE", "REPEATED", "RATIONAL",
    "POSSIBLE", "REPORTER", "REACTION", "POWERFUL", "REPUBLIC", "RECEIVED",
    "PRACTICE", "REQUIRED", "RECEIVER", "PRECIOUS", "RESEARCH", "RECOVERY",
    "PREGNANT", "RESERVED", "REGIONAL", "PRESENCE", "RESIDENT", "REGISTER",
    "SCENARIO", "RESIGNED", "REVISION", "SCHEDULE", "RESOURCE", "RIGOROUS",
    "SCRUTINY", "RESPONSE", "ROMANTIC", "SEASONAL", "RESTRICT", "SAMPLING",
    "SECONDLY", "SOMEBODY", "STRUGGLE", "SECURITY", "SOMEWHAT", "STUNNING",
    "SENSIBLE", "SOUTHERN", "SUBURBAN", "SENTENCE", "SPEAKING", "SUITABLE",
    "SEPARATE", "SPECIFIC", "SUPERIOR", "SEQUENCE", "SPECTRUM", "SUPPOSED",
    "SERGEANT", "SPORTING", "SURGICAL", "SHIPPING", "STANDARD", "SURPRISE",
    "SHORTAGE", "STANDING", "SURVIVAL", "SHOULDER", "STANDOUT", "SWEEPING",
    "SIMPLIFY", "STERLING", "SWIMMING", "SITUATED", "STRAIGHT", "SYMBOLIC",
    "SLIGHTLY", "STRATEGY", "SYMPATHY", "SOFTWARE", "STRENGTH", "SYNDROME",
    "SOLUTION", "STRIKING", "TACTICAL", "TERRIBLE", "TRAINING", "TAILORED",
    "THINKING", "TRANSFER", "TAKEOVER", "THIRTEEN", "TRAGICAL", "TANGIBLE",
    "THOROUGH", "TREASURY", "TAXATION", "THOUSAND", "TRIANGLE", "TAXPAYER",
    "TOGETHER", "TROPICAL", "TEACHING", "TOMORROW", "TURNOVER", "TENDENCY",
    "TOUCHING", "ULTIMATE", "TERMINAL", "TRACKING", "UMBRELLA", "UNIVERSE",
    "WEAKNESS", "WITHDRAW", "UNLAWFUL", "WEIGHTED", "WOODLAND", "UNLIKELY",
    "WHATEVER", "WORKSHOP", "VALUABLE", "WHENEVER", "YOURSELF", "VARIABLE",
    "WHEREVER", "VOLATILE", "VERTICAL", "WILDLIFE", "WARRANTY", "VICTORIA",
    "WIRELESS", "VIOLENCE"
];

let images = [
    document.getElementById("hangman0"),
    document.getElementById("hangman1"),
    document.getElementById("hangman2"),
    document.getElementById("hangman3"),
    document.getElementById("hangman4"),
    document.getElementById("hangman5"),
    document.getElementById("hangman6"),
];

let word = Math.floor(words.length * Math.random());

console.log(words[word]);

var counter = 0;
let points = 0;


let wrong_buzzer = new Audio("wrong-47985.mp3");
let correct_ding = new Audio("hotel-bell-ding-1-174457.mp3");


let btn = document.getElementById("myButton");
let reset = document.getElementById("reset");
let input = document.getElementById("input1");
let pick = document.getElementById("picked");
let boxes = document.querySelector(".letter");
let letters = [
    document.getElementById("letter1"),
    document.getElementById("letter2"),
    document.getElementById("letter3"),
    document.getElementById("letter4"),
    document.getElementById("letter5"),
    document.getElementById("letter6"),
    document.getElementById("letter7"),
    document.getElementById("letter8")
];

btn.addEventListener("click", guess);

reset.addEventListener("click", newGame);

function guess() {
    if (checkIfLetter(input.value) && checkIfRepeat(input.value)) {
        input.value = input.value.toUpperCase();
        let answer = false;

        for (let i = 0; i < words[word].length; i++) {
            if (words[word][i] == input.value) {
                letters[i].textContent = input.value;
                answer = true;
                points += 1;
                correct_ding.volume=0.6;
                correct_ding.play();
            }
        }
        if (points == 8) {
            GameWon();
        }
        if(answer)
        {
            correct.play();
        }
        if (answer == false) {
            images[counter].style.display = "none";
            pick.textContent = input.value + " " + pick.textContent;
            counter += 1;
            images[counter].style.display = "inline";
            wrong_buzzer.volume=0.6;
            wrong_buzzer.play();
        }
        if (counter == 6) {
            GameOver();
        }
        input.value = "";
    }
}

function checkIfLetter(letter) {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90 || letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
        return true;
    }
    else {
        return false;
    }
}

function checkIfRepeat(letter) {
    for (let i = 0; i < words[word].length; i++) {
        if(letters[i].textContent==letter.toUpperCase()) {
            return false;
        }
    }
    for (let i = 0; i < pick.textContent.length; i++) {
        if(pick.textContent[i]==letter.toUpperCase()) {
            return false;
        }
    }
    return true;
}

function GameOver() {
    alert("Game Over, you used up all of your attempts!");
    input.style.display = "none";
    btn.style.display = "none";
}
function GameWon() {
    alert("Congratulations you guessed the word!");
    input.style.display = "none";
    btn.style.display = "none";
}

function newGame() {
    images[counter].style.display = "none"
    points = 0;
    counter = 0;
    images[counter].style.display = "inline"
    word = Math.floor(words.length * Math.random());
    pick.textContent ="";
    for (let i = 0; i < words[word].length; i++) {
        letters[i].textContent = "";
    }
    input.style.display = "inline";
    btn.style.display = "inline";
    console.log(words[word]);
}
