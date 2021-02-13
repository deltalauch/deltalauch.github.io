var gmodLS = {}

/**
 * To get the users avatar and username, a steam web api key is needed.
 * You can get it with your steam account for free here: https://steamcommunity.com/dev/apikey
 * @type {String}
 */
gmodLS.steamWebApiKey = '4E141ACBE388DEC628AD4A65EB5AEFF9';

/**
 * A URI path or full URL to the loadingscreen background.
 * Will be centered and streched if needed to the users resolution
 * @type {String}
 */
gmodLS.backgroundImg  = 'https://i.imgur.com/G8P8uMC.png';

/**
 * Serverrules - One rule per row
 * @type {Array}
 */
gmodLS.rules = [
    "Don't spam mic/chat",
    "Be friendly",
    "No RDM'ing",
    "No ghosting",
];