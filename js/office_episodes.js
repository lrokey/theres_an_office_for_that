// TODO: finish categorizing episodes
var testData = [{
        "SeasonNum": 1,
        "EpNum": 1,
        "Title": "Pilot",
        "Criteria": ["laugh", "cringe"]
    },
    {
        "SeasonNum": 1,
        "EpNum": 2,
        "Title": "Diversity Day",
        "Criteria": ["laugh", "cringe", "racy"]
    },
    {
        "SeasonNum": 1,
        "EpNum": 3,
        "Title": "Health Care",
        "Criteria": ["laugh", "cringe", "shady", "conspiratory"]
    },
    {
        "SeasonNum": 1,
        "EpNum": 4,
        "Title": "The Alliance",
        "Criteria": ["laugh", "cringe", "loyal", "romantic"]
    },
    {
        "SeasonNum": 1,
        "EpNum": 5,
        "Title": "Basketball",
        "Criteria": ["laugh", "cringe", "sporty", "overwhelmed"]
    },
    {
        "SeasonNum": 1,
        "EpNum": 6,
        "Title": "Hot Girl",
        "Criteria": ["laugh", "cringe", "jealous"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 1,
        "Title": "The Dundies",
        "Criteria": ["laugh", "cringe", "proud", "Chilis"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 2,
        "Title": "Sexual Harrassment",
        "Criteria": ["laugh", "cringe", "gossipy", "angry"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 3,
        "Title": "Office Olympics",
        "Criteria": ["laugh", "cringe", "sporty", "bored", "proud"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 4,
        "Title": "The Fire",
        "Criteria": ["laugh", "cringe", "entrepreneurial", "fiery", "hungry"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 5,
        "Title": "Halloween",
        "Criteria": ["laugh", "cringe", "halloween", "fiery", "hungry"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 6,
        "Title": "The Fight",
        "Criteria": ["laugh", "cringe", "agitated", "forgiving"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 7,
        "Title": "The Client",
        "Criteria": ["laugh", "cringe", "creative", "feisty"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 8,
        "Title": "Performance Review",
        "Criteria": ["laugh", "cringe", "performance reviews"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 9,
        "Title": "Email Surveillance",
        "Criteria": ["laugh", "cringe", "creepy", "naughty"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 10,
        "Title": "Christmas Party",
        "Criteria": ["laugh", "cringe", "Christmas", "naughty"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 11,
        "Title": "Booze Cruise",
        "Criteria": ["laugh", "cringe", "romantic", "cry"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 12,
        "Title": "The Injury",
        "Criteria": ["laugh", "cringe"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 13,
        "Title": "The Secret",
        "Criteria": ["laugh", "cringe", "secretive"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 14,
        "Title": "The Carpet",
        "Criteria": ["laugh", "cringe", "obnoxious"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 15,
        "Title": "Boys and Girls",
        "Criteria": ["laugh", "cringe", "obnoxious", "feminism"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 16,
        "Title": "Boys and Girls",
        "Criteria": ["laugh", "cringe", "Valentines Day"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 17,
        "Title": "Dwights Speech",
        "Criteria": ["laugh", "cringe", "unorthodox"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 18,
        "Title": "Take Your Daughter to Work Day",
        "Criteria": ["laugh", "cringe"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 19,
        "Title": "Michael's Birthday",
        "Criteria": ["laugh", "cringe", "birthday"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 20,
        "Title": "Drug Testing",
        "Criteria": ["laugh", "cringe"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 21,
        "Title": "Conflict Resolution",
        "Criteria": ["laugh", "cringe", "fiesty"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 22,
        "Title": "Casino Night",
        "Criteria": ["laugh", "cringe", "drama", "romantic"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 1,
        "Title": "Gay Witch Hunt",
        "Criteria": ["laugh", "cringe", "obnoxious", "drama"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 2,
        "Title": "The Convention",
        "Criteria": ["laugh", "cringe", "obnoxious", "drama"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 4,
        "Title": "The Coup",
        "Criteria": ["laugh", "cringe", "obnoxious", "drama", "conspiratory", "fiesty"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 5,
        "Title": "Grief Counseling",
        "Criteria": ["cry", "cringe", "obnoxious"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 6,
        "Title": "Diwali",
        "Criteria": ["laugh", "cringe", "drama", "surprised", "Halloween", "Diwali"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 7,
        "Title": "Branch Closing",
        "Criteria": ["laugh", "cringe", "naughty", "surprised"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 8,
        "Title": "The Merger",
        "Criteria": ["laugh", "cringe", "obnoxious", "surprised"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 9,
        "Title": "The Convict",
        "Criteria": ["laugh", "cringe", "prison"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 10,
        "Title": "A Benihana Christmas",
        "Criteria": ["laugh", "cringe", "Christmas", "twins"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 12,
        "Title": "Back From Vacation",
        "Criteria": ["laugh", "cringe", "vacation", "PMS"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 13,
        "Title": "Traveling Salesmen",
        "Criteria": ["laugh", "cringe", "friendship", "drama"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 14,
        "Title": "The Return",
        "Criteria": ["laugh", "cringe", "angry", "drama"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 15,
        "Title": "Ben Franklin",
        "Criteria": ["laugh", "cringe", "naughty", "Ben Franklin"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 16,
        "Title": "Phyllis' Wedding",
        "Criteria": ["laugh", "cringe", "obnoxious", "romantic", "jealous"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 17,
        "Title": "Business School",
        "Criteria": ["laugh", "cringe", "vengeful", "vampires", "jealous"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 18,
        "Title": "Cocktails",
        "Criteria": ["laugh", "cringe", "angry"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 19,
        "Title": "The Negotiation",
        "Criteria": ["laugh", "cringe", "secretive", "vengeful", "fiesty"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 20,
        "Title": "Safety Training",
        "Criteria": ["laugh", "cringe", "depressed", "lucky"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 21,
        "Title": "Product Recall",
        "Criteria": ["laugh", "cringe", "twins", "fiesty"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 22,
        "Title": "Womens Appreciation",
        "Criteria": ["laugh", "cringe", "feminism", "fiesty"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 23,
        "Title": "Beach Games",
        "Criteria": ["laugh", "cringe", "brave", "competitive"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 24,
        "Title": "The Job",
        "Criteria": ["laugh", "cringe", "brave", "competitive"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 1,
        "Title": "Fun Run",
        "Criteria": ["laugh", "cringe", "rabies", "cats", "running", "pasta", "romantic"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 3,
        "Title": "Dunder Mifflin Infinity",
        "Criteria": ["Laugh", "Romantic", "Driving", "Running", "Pasta", "Romantic"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 5,
        "Title": "Launch Party",
        "Criteria": ["laugh", "cringe", "drama"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 7,
        "Title": "Money",
        "Criteria": ["laugh", "cringe", "drama"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 9,
        "Title": "Local Ad",
        "Criteria": ["laugh", "cringe", "drama"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 10,
        "Title": "Branch Wars",
        "Criteria": ["conspiratory", "romantic", "drama", "finer things"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 11,
        "Title": "Survivor Man",
        "Criteria": ["laugh", "cringe", "drama", "birthday"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 12,
        "Title": "The Deposition",
        "Criteria": ["laugh", "cringe", "drama", "vengeful", "ping pong"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 13,
        "Title": "Dinner Party",
        "Criteria": ["laugh", "cringe", "drama", "hungry", "obnoxious", "unorthodox"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 14,
        "Title": "Chair Model",
        "Criteria": ["laugh", "cringe", "drama", "obnoxious", "unorthodox"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 15,
        "Title": "Night Out",
        "Criteria": ["laugh", "cringe", "drama", "fiesty", "unorthodox"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 16,
        "Title": "Did I Stutter",
        "Criteria": ["laugh", "cringe", "drama", "obnoxious"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 17,
        "Title": "Job Fair",
        "Criteria": ["performance reviews", "cringe", "drama", "brave", "romantic"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 18,
        "Title": "Goodbye, Toby",
        "Criteria": ["competitive", "cringe", "drama", "entrepreneurial", "romantic"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 1,
        "Title": "Weight Loss",
        "Criteria": ["competitive", "cringe", "drama", "romantic"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 3,
        "Title": "Business Ethics",
        "Criteria": ["cringe", "drama"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 4,
        "Title": "Baby Shower",
        "Criteria": ["cringe", "drama", "jealous"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 5,
        "Title": "Crime Aid",
        "Criteria": ["cringe", "drama", "fiesty", "naughty"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 6,
        "Title": "Employee Transfer",
        "Criteria": ["cringe", "drama", "depressed", "Halloween"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 7,
        "Title": "Customer Survey",
        "Criteria": ["cringe", "drama", "performance reviews", "secretive"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 8,
        "Title": " Business Trip",
        "Criteria": ["cringe", "drama", "fiesty"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 9,
        "Title": "Frame Toby",
        "Criteria": ["cringe", "drama", "vengeful", "surprised"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 10,
        "Title": "The Surplus",
        "Criteria": ["cringe", "drama", "unorthodox", "secretive"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 11,
        "Title": "Moroccan Christmas",
        "Criteria": ["cringe", "drama", "Christmas", "fiery", "unorthodox"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 12,
        "Title": "The Duel",
        "Criteria": ["cringe", "drama", "jealousd"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 13,
        "Title": "Prince Family Paper",
        "Criteria": ["cringe", "drama", "competitive", "Hilary Swank"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 14,
        "Title": "Stress Relief",
        "Criteria": ["cringe", "drama", "stressed", "depressed"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 16,
        "Title": "Lecture Circuit",
        "Criteria": ["cringe", "drama", "birthday"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 18,
        "Title": "Blood Drive",
        "Criteria": ["cringe", "drama", "depressed", "Valentines Day", "fiesty", "romantic"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 19,
        "Title": "Golden Ticket",
        "Criteria": ["cringe", "drama", "Willy Wonka"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 20,
        "Title": "New Boss",
        "Criteria": ["cringe", "drama", "Idris Elba"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 21,
        "Title": "Two Weeks",
        "Criteria": ["cringe", "drama", "Idris Elba", "entrepreneurial"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 22,
        "Title": "Dream Team",
        "Criteria": ["cringe", "drama", "Idris Elba", "entrepreneurial", "competitive"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 22,
        "Title": "Dream Team",
        "Criteria": ["cringe", "drama", "Idris Elba", "entrepreneurial", "competitive"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 23,
        "Title": "Michael Scott Paper Company",
        "Criteria": ["cringe", "drama", "entrepreneurial", "Idris Elba", "competitive", "jealous"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 24,
        "Title": "Heavy Competition",
        "Criteria": ["cringe", "drama", "entrepreneurial", "Idris Elba", "competitive"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 25,
        "Title": "Broke",
        "Criteria": ["cringe", "drama", "Idris Elba", "brave"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 26,
        "Title": "Casual Friday",
        "Criteria": ["cringe", "drama", "jeans"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 27,
        "Title": "Cafe Disco",
        "Criteria": ["cringe", "drama", "disco"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 28,
        "Title": "Company Picnic",
        "Criteria": ["cringe", "drama", "Idris Elba", "Slumdog Millionaire", "volleyball"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 1,
        "Title": "Gossip",
        "Criteria": ["cringe", "drama", "jealous", "gossipy", "obnoxious", "secretive"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 2,
        "Title": "The Meeting",
        "Criteria": ["cringe", "drama", "jealous", "obnoxious", "secretive"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 3,
        "Title": "The Promotion",
        "Criteria": ["cringe", "drama", "jealous", "obnoxious", "unorthodox", "overwhelmed"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 4,
        "Title": "Niagra",
        "Criteria": ["romantic"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 6,
        "Title": "Mafia",
        "Criteria": ["cringe", "drama", "the mafia", "obnoxious"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 7,
        "Title": "The Lover",
        "Criteria": ["cringe", "drama", "surprised", "obnoxious", "unorthodox", "jealous"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 8,
        "Title": "Koi Pond",
        "Criteria": ["cringe", "drama", "fiesty", "obnoxious", "unorthodox"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 9,
        "Title": "Double Date",
        "Criteria": ["cringe", "drama", "conspiratory", "obnoxious", "unorthodox"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 10,
        "Title": "Murder",
        "Criteria": ["cringe", "drama", "naughty", "obnoxious", "unorthodox"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 11,
        "Title": "Shareholder Meeting",
        "Criteria": ["cringe", "drama", "naughty", "obnoxious", "stressed", "overwhelmed"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 12,
        "Title": "Scott's Tots",
        "Criteria": ["cringe", "drama", "naughty", "obnoxious", "overwhelmed", "unorthodox"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 13,
        "Title": "Secret Sanata",
        "Criteria": ["cringe", "drama", "Christmas", "obnoxious"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 14,
        "Title": "The Banker",
        "Criteria": ["cringe", "drama", "loyal", "forgiving"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 15,
        "Title": "Sabre",
        "Criteria": ["cringe", "drama", "obnoxious", "vacuums"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 16,
        "Title": "The Manager and the Salesman",
        "Criteria": ["cringe", "drama", "obnoxious", "Valentines Day"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 17,
        "Title": "The Delivery",
        "Criteria": ["cringe", "drama", "babies"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 19,
        "Title": "St. Patrick's Day",
        "Criteria": ["cringe", "drama", "St. Patrick's Day"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 20,
        "Title": "New Leads",
        "Criteria": ["cringe", "drama", "romantic", "feisty"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 21,
        "Title": "Happy Hour",
        "Criteria": ["cringe", "drama", "romantic", "feisty", "jealous", "secretive"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 22,
        "Title": "Secretary's Day",
        "Criteria": ["cringe", "drama", "Cookie Monster", "jealous"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 23,
        "Title": "Body Language",
        "Criteria": ["cringe", "drama", "fiesty", "unorthodox"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 24,
        "Title": "The Cover Up",
        "Criteria": ["cringe", "drama", "conspiratory", "unorthodox", "secretive"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 25,
        "Title": "The Chump",
        "Criteria": ["cringe", "drama", "unorthodox", "secretive", "shady"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 25,
        "Title": "Whistleblower",
        "Criteria": ["cringe", "drama", "stressed", "secretive", "vengeful", "brave", "forgiving"]
    }
];

var categories = {
    "verbs": "agitated,cringe,cry,feisty,forgiving,hungry,jealous,laugh,proud,surprised,stressed",
    "adjectives": "angry,bored,brave,competitive,conspiratory,creative,creepy,depressed,entrepreneurial,fiery,feisty,forgiving,gossipy,hungry,jealous,loyal,lucky,naughty,obnoxious,overwhelmed,proud,racy,romantic,secretive,shady,sporty,unorthodox,vengeful",
    "nouns": "babies,Ben Franklin,cats,Chilis,Cookie Monster,disco,drama,driving,feminism,finer things,friendship,Hilary Swank,Idris Elba,jeans,the mafia,pasta,performance reviews,ping pong,PMS,pretzels,prison,rabies,running,Slumdog Millionaire,twins,vacation,vampires,volleyball,vacuums,Willy Wonka",
    "holidays": "birthday,Christmas,Diwali,Halloween,Thanksgiving,Valentines Day,St. Patrick's Day"
};

function Episode(title, seasonNum, episodeNum) {
    this.title = title;
    this.seasonNum = seasonNum;
    this.episodeNum = episodeNum;
}

var numOfEpisodesToShowToUser = 3;

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}


// shortList is a subsection of the curated episodes. (array)
function printEpisodeInfo(shortList) {
    var recommendation = "";
    for (var i = 0; i < shortList.length; i++) {
        recommendation += shortList[i].title + " (Season " + shortList[i].seasonNum + ", Episode " + shortList[i].episodeNum + ")\n";
    }
    console.log(recommendation);
    return recommendation;
}

function curateOfficeEpisodes(userCriteria) {
    var curatedEpisodes = [];
    var numOfEpisodes = testData.length;
    for (var i = 0; i < numOfEpisodes; i++) {
        var seasonNum = testData[i]['SeasonNum'];
        var episodeNum = testData[i]['EpNum'];
        var title = testData[i]['Title'];
        var moods = testData[i]['Criteria'];
        for (var j = 0; j < moods.length; j++) {
            if (moods[j] == userCriteria) {
                var episode = new Episode(title, seasonNum, episodeNum);
                curatedEpisodes.push(episode);
            }
        }
    }
    return curatedEpisodes;
}
