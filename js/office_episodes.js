// TODO: finish categorizing episodes
var testData = [{
        "SeasonNum": 1,
        "EpNum": 1,
        "Title": "Pilot",
        "Criteria": ["like I need a laugh", "awkward"]
    },
    {
        "SeasonNum": 1,
        "EpNum": 2,
        "Title": "Diversity Day",
        "Criteria": ["like I need a laugh", "awkward", "racy"]
    },
    {
        "SeasonNum": 1,
        "EpNum": 3,
        "Title": "Health Care",
        "Criteria": ["like I need a laugh", "awkward", "shady", "conspiratory"]
    },
    {
        "SeasonNum": 1,
        "EpNum": 4,
        "Title": "The Alliance",
        "Criteria": ["like I need a laugh", "awkward", "loyal", "romantic"]
    },
    {
        "SeasonNum": 1,
        "EpNum": 5,
        "Title": "Basketball",
        "Criteria": ["like I need a laugh", "awkward", "sporty", "overwhelmed"]
    },
    {
        "SeasonNum": 1,
        "EpNum": 6,
        "Title": "Hot Girl",
        "Criteria": ["like I need a laugh", "awkward", "jealous"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 1,
        "Title": "The Dundies",
        "Criteria": ["like I need a laugh", "awkward", "proud", "Chilis"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 2,
        "Title": "Sexual Harrassment",
        "Criteria": ["like I need a laugh", "awkward", "gossipy", "angry"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 3,
        "Title": "Office Olympics",
        "Criteria": ["like I need a laugh", "awkward", "sporty", "bored", "proud"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 4,
        "Title": "The Fire",
        "Criteria": ["like I need a laugh", "awkward", "entrepreneurial", "fiery", "hungry"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 5,
        "Title": "Halloween",
        "Criteria": ["like I need a laugh", "awkward", "halloween", "fiery", "hungry"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 6,
        "Title": "The Fight",
        "Criteria": ["like I need a laugh", "awkward", "agitated", "forgiving"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 7,
        "Title": "The Client",
        "Criteria": ["like I need a laugh", "awkward", "creative", "feisty"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 8,
        "Title": "Performance Review",
        "Criteria": ["like I need a laugh", "awkward", "performance reviews"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 9,
        "Title": "Email Surveillance",
        "Criteria": ["like I need a laugh", "awkward", "creepy", "naughty"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 10,
        "Title": "Christmas Party",
        "Criteria": ["like I need a laugh", "awkward", "Christmas", "naughty"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 11,
        "Title": "Booze Cruise",
        "Criteria": ["like I need a laugh", "awkward", "romantic", "sad"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 12,
        "Title": "The Injury",
        "Criteria": ["like I need a laugh", "awkward"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 13,
        "Title": "The Secret",
        "Criteria": ["like I need a laugh", "awkward", "secretive"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 14,
        "Title": "The Carpet",
        "Criteria": ["like I need a laugh", "awkward", "obnoxious"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 15,
        "Title": "Boys and Girls",
        "Criteria": ["like I need a laugh", "awkward", "obnoxious", "feminism"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 16,
        "Title": "Boys and Girls",
        "Criteria": ["like I need a laugh", "awkward", "Valentine's Day"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 17,
        "Title": "Dwights Speech",
        "Criteria": ["like I need a laugh", "awkward", "unorthodox"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 18,
        "Title": "Take Your Daughter to Work Day",
        "Criteria": ["like I need a laugh", "awkward"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 19,
        "Title": "Michael's Birthday",
        "Criteria": ["like I need a laugh", "awkward", "birthday"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 20,
        "Title": "Drug Testing",
        "Criteria": ["like I need a laugh", "awkward"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 21,
        "Title": "Conflict Resolution",
        "Criteria": ["like I need a laugh", "awkward", "fiesty"]
    },
    {
        "SeasonNum": 2,
        "EpNum": 22,
        "Title": "Casino Night",
        "Criteria": ["like I need a laugh", "awkward", "drama", "romantic"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 1,
        "Title": "Gay Witch Hunt",
        "Criteria": ["like I need a laugh", "awkward", "obnoxious", "drama"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 2,
        "Title": "The Convention",
        "Criteria": ["like I need a laugh", "awkward", "obnoxious", "drama"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 4,
        "Title": "The Coup",
        "Criteria": ["like I need a laugh", "awkward", "obnoxious", "drama", "conspiratory", "fiesty"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 5,
        "Title": "Grief Counseling",
        "Criteria": ["sad", "awkward", "obnoxious"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 6,
        "Title": "Diwali",
        "Criteria": ["like I need a laugh", "awkward", "drama", "like I need a surprise", "Halloween", "Diwali"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 7,
        "Title": "Branch Closing",
        "Criteria": ["like I need a laugh", "awkward", "naughty", "like I need a surprise"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 8,
        "Title": "The Merger",
        "Criteria": ["like I need a laugh", "awkward", "obnoxious", "like I need a surprise"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 9,
        "Title": "The Convict",
        "Criteria": ["like I need a laugh", "awkward", "prison"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 10,
        "Title": "A Benihana Christmas",
        "Criteria": ["like I need a laugh", "awkward", "Christmas", "twins"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 12,
        "Title": "Back From Vacation",
        "Criteria": ["like I need a laugh", "awkward", "vacation", "PMS"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 13,
        "Title": "Traveling Salesmen",
        "Criteria": ["like I need a laugh", "awkward", "friendship", "drama"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 14,
        "Title": "The Return",
        "Criteria": ["like I need a laugh", "awkward", "angry", "drama"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 15,
        "Title": "Ben Franklin",
        "Criteria": ["like I need a laugh", "awkward", "naughty", "Ben Franklin"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 16,
        "Title": "Phyllis' Wedding",
        "Criteria": ["like I need a laugh", "awkward", "obnoxious", "romantic", "jealous"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 17,
        "Title": "Business School",
        "Criteria": ["like I need a laugh", "awkward", "vengeful", "vampires", "jealous"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 18,
        "Title": "Cocktails",
        "Criteria": ["like I need a laugh", "awkward", "angry"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 19,
        "Title": "The Negotiation",
        "Criteria": ["like I need a laugh", "awkward", "secretive", "vengeful", "fiesty"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 20,
        "Title": "Safety Training",
        "Criteria": ["like I need a laugh", "awkward", "depressed", "lucky"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 21,
        "Title": "Product Recall",
        "Criteria": ["like I need a laugh", "awkward", "twins", "fiesty"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 22,
        "Title": "Womens Appreciation",
        "Criteria": ["like I need a laugh", "awkward", "feminism", "fiesty"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 23,
        "Title": "Beach Games",
        "Criteria": ["like I need a laugh", "awkward", "brave", "competitive"]
    },
    {
        "SeasonNum": 3,
        "EpNum": 24,
        "Title": "The Job",
        "Criteria": ["like I need a laugh", "awkward", "brave", "competitive"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 1,
        "Title": "Fun Run",
        "Criteria": ["like I need a laugh", "awkward", "rabies", "cats", "running", "pasta", "romantic"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 3,
        "Title": "Dunder Mifflin Infinity",
        "Criteria": ["like I need a laugh", "Romantic", "Driving", "Running", "Pasta", "Romantic"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 5,
        "Title": "Launch Party",
        "Criteria": ["like I need a laugh", "awkward", "drama"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 7,
        "Title": "Money",
        "Criteria": ["like I need a laugh", "awkward", "drama"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 9,
        "Title": "Local Ad",
        "Criteria": ["like I need a laugh", "awkward", "drama"]
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
        "Criteria": ["like I need a laugh", "awkward", "drama", "birthday"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 12,
        "Title": "The Deposition",
        "Criteria": ["like I need a laugh", "awkward", "drama", "vengeful", "ping pong"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 13,
        "Title": "Dinner Party",
        "Criteria": ["like I need a laugh", "awkward", "drama", "hungry", "obnoxious", "unorthodox"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 14,
        "Title": "Chair Model",
        "Criteria": ["like I need a laugh", "awkward", "drama", "obnoxious", "unorthodox"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 15,
        "Title": "Night Out",
        "Criteria": ["like I need a laugh", "awkward", "drama", "fiesty", "unorthodox"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 16,
        "Title": "Did I Stutter",
        "Criteria": ["like I need a laugh", "awkward", "drama", "obnoxious"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 17,
        "Title": "Job Fair",
        "Criteria": ["performance reviews", "awkward", "drama", "brave", "romantic"]
    },
    {
        "SeasonNum": 4,
        "EpNum": 18,
        "Title": "Goodbye, Toby",
        "Criteria": ["competitive", "awkward", "drama", "entrepreneurial", "romantic"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 1,
        "Title": "Weight Loss",
        "Criteria": ["competitive", "awkward", "drama", "romantic"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 3,
        "Title": "Business Ethics",
        "Criteria": ["awkward", "drama"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 4,
        "Title": "Baby Shower",
        "Criteria": ["awkward", "drama", "jealous"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 5,
        "Title": "Crime Aid",
        "Criteria": ["awkward", "drama", "fiesty", "naughty"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 6,
        "Title": "Employee Transfer",
        "Criteria": ["awkward", "drama", "depressed", "Halloween"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 7,
        "Title": "Customer Survey",
        "Criteria": ["awkward", "drama", "performance reviews", "secretive"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 8,
        "Title": " Business Trip",
        "Criteria": ["awkward", "drama", "fiesty"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 9,
        "Title": "Frame Toby",
        "Criteria": ["awkward", "drama", "vengeful", "like I need a surprise"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 10,
        "Title": "The Surplus",
        "Criteria": ["awkward", "drama", "unorthodox", "secretive"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 11,
        "Title": "Moroccan Christmas",
        "Criteria": ["awkward", "drama", "Christmas", "fiery", "unorthodox"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 12,
        "Title": "The Duel",
        "Criteria": ["awkward", "drama", "jealousd"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 13,
        "Title": "Prince Family Paper",
        "Criteria": ["awkward", "drama", "competitive", "Hilary Swank"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 14,
        "Title": "Stress Relief",
        "Criteria": ["awkward", "drama", "stressed", "depressed"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 16,
        "Title": "Lecture Circuit",
        "Criteria": ["awkward", "drama", "birthday"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 18,
        "Title": "Blood Drive",
        "Criteria": ["awkward", "drama", "depressed", "Valentine's Day", "fiesty", "romantic"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 19,
        "Title": "Golden Ticket",
        "Criteria": ["awkward", "drama", "Willy Wonka"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 20,
        "Title": "New Boss",
        "Criteria": ["awkward", "drama", "Idris Elba"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 21,
        "Title": "Two Weeks",
        "Criteria": ["awkward", "drama", "Idris Elba", "entrepreneurial"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 22,
        "Title": "Dream Team",
        "Criteria": ["awkward", "drama", "Idris Elba", "entrepreneurial", "competitive"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 22,
        "Title": "Dream Team",
        "Criteria": ["awkward", "drama", "Idris Elba", "entrepreneurial", "competitive"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 23,
        "Title": "Michael Scott Paper Company",
        "Criteria": ["awkward", "drama", "entrepreneurial", "Idris Elba", "competitive", "jealous"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 24,
        "Title": "Heavy Competition",
        "Criteria": ["awkward", "drama", "entrepreneurial", "Idris Elba", "competitive"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 25,
        "Title": "Broke",
        "Criteria": ["awkward", "drama", "Idris Elba", "brave"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 26,
        "Title": "Casual Friday",
        "Criteria": ["awkward", "drama", "jeans"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 27,
        "Title": "Cafe Disco",
        "Criteria": ["awkward", "drama", "disco"]
    },
    {
        "SeasonNum": 5,
        "EpNum": 28,
        "Title": "Company Picnic",
        "Criteria": ["awkward", "drama", "Idris Elba", "Slumdog Millionaire", "volleyball"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 1,
        "Title": "Gossip",
        "Criteria": ["awkward", "drama", "jealous", "gossipy", "obnoxious", "secretive"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 2,
        "Title": "The Meeting",
        "Criteria": ["awkward", "drama", "jealous", "obnoxious", "secretive"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 3,
        "Title": "The Promotion",
        "Criteria": ["awkward", "drama", "jealous", "obnoxious", "unorthodox", "overwhelmed"]
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
        "Criteria": ["awkward", "drama", "the mafia", "obnoxious"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 7,
        "Title": "The Lover",
        "Criteria": ["awkward", "drama", "like I need a surprise", "obnoxious", "unorthodox", "jealous"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 8,
        "Title": "Koi Pond",
        "Criteria": ["awkward", "drama", "fiesty", "obnoxious", "unorthodox"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 9,
        "Title": "Double Date",
        "Criteria": ["awkward", "drama", "conspiratory", "obnoxious", "unorthodox"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 10,
        "Title": "Murder",
        "Criteria": ["awkward", "drama", "naughty", "obnoxious", "unorthodox"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 11,
        "Title": "Shareholder Meeting",
        "Criteria": ["awkward", "drama", "naughty", "obnoxious", "stressed", "overwhelmed"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 12,
        "Title": "Scott's Tots",
        "Criteria": ["awkward", "drama", "naughty", "obnoxious", "overwhelmed", "unorthodox"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 13,
        "Title": "Secret Sanata",
        "Criteria": ["awkward", "drama", "Christmas", "obnoxious"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 14,
        "Title": "The Banker",
        "Criteria": ["awkward", "drama", "loyal", "forgiving"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 15,
        "Title": "Sabre",
        "Criteria": ["awkward", "drama", "obnoxious", "vacuums"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 16,
        "Title": "The Manager and the Salesman",
        "Criteria": ["awkward", "drama", "obnoxious", "Valentine's Day"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 17,
        "Title": "The Delivery",
        "Criteria": ["awkward", "drama", "babies"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 19,
        "Title": "St. Patrick's Day",
        "Criteria": ["awkward", "drama", "St. Patrick's Day"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 20,
        "Title": "New Leads",
        "Criteria": ["awkward", "drama", "romantic", "feisty"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 21,
        "Title": "Happy Hour",
        "Criteria": ["awkward", "drama", "romantic", "feisty", "jealous", "secretive"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 22,
        "Title": "Secretary's Day",
        "Criteria": ["awkward", "drama", "Cookie Monster", "jealous"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 23,
        "Title": "Body Language",
        "Criteria": ["awkward", "drama", "fiesty", "unorthodox"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 24,
        "Title": "The Cover Up",
        "Criteria": ["awkward", "drama", "conspiratory", "unorthodox", "secretive"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 25,
        "Title": "The Chump",
        "Criteria": ["awkward", "drama", "unorthodox", "secretive", "shady"]
    },
    {
        "SeasonNum": 6,
        "EpNum": 25,
        "Title": "Whistleblower",
        "Criteria": ["awkward", "drama", "stressed", "secretive", "vengeful", "brave", "forgiving"]
    }
];

var categories = {
    "adjectives": "agitated,angry,awkward,bored,brave,competitive,conspiratory,creative,creepy,depressed,entrepreneurial,fiery,feisty,forgiving,gossipy,hungry,jealous,like I need a laugh,loyal,lucky,naughty,obnoxious,overwhelmed,proud,racy,romantic,sad,secretive,shady,sporty,stressed,like I need a surprise,unorthodox,vengeful",
    "nouns": "babies,Ben Franklin,cats,Chilis,Cookie Monster,disco,drama,driving,feminism,finer things,friendship,Hilary Swank,Idris Elba,jeans,the mafia,pasta,performance reviews,ping pong,PMS,pretzels,prison,rabies,running,Slumdog Millionaire,twins,vacation,vampires,volleyball,vacuums,Willy Wonka",
    "holidays": "birthday,Christmas,Diwali,Halloween,Thanksgiving,Valentine's Day,St. Patrick's Day"
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
