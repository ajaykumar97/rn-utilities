import { toWords, toCamelCase } from './lib/helpers';

/* 
    To convert normal string into titleCase string, e.g.

    intoTitleCase('tutorix is one of best e-platforms') //Tutorix Is One Of Best E-platforms
*/
const intoTitleCase = (string) => {
    let sentence = string.toLowerCase().split(' ');

    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    sentence = sentence.join(' ');
    return sentence;
};

/* 
    To convert normal string into camelCase string, e.g.

    toCamelCaseString('tutorix is one of best e-platforms') //tutorixIsOneOfBestEPlatforms
*/
const toCamelCaseString = (input) => {
    let words = toWords(input);

    return toCamelCase(words);
}

const keyExtractor = (item) => String(item.id);

const getAPIError = (error) => {
    if (
        error.response
        && error.response.data
        && error.response.data.msg
    ) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        /* console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers); */

        return error.response.data.msg;
    }

    return error;
};

const truncateString = (string, numOfChars = 50) => {
    if (string.length > numOfChars) {
        return `${string.slice(0, numOfChars > 3 ? numOfChars - 3 : numOfChars)}...`;
    }
    return str;
};

const getCityRegionCountryFromGoogleApiResults = (addressResults) => {
    let city = {};
    let region = {};
    let country = {};

    for (let j = 0; j < addressResults.length; j++) {
        for (let i = 0; i < addressResults[j].address_components.length; i++) {
            if (addressResults[j].address_components[i].types[0] === 'locality') {
                //this is the object you are looking for City
                city = addressResults[j].address_components[i];
            }
            if (addressResults[j].address_components[i].types[0] === 'administrative_area_level_1') {
                //this is the object you are looking for State
                region = addressResults[j].address_components[i];
            }
            if (addressResults[j].address_components[i].types[0] === 'country') {
                //this is the object you are looking for country
                country = addressResults[j].address_components[i];
            }
        }
    }

    console.log(`${city.long_name} || ${region.long_name} || ${country.short_name}`)

    return {
        city: city.long_name,
        region: region.long_name,
        country: country.short_name
    };
};

//to convert Bytes into KB, MB GB etc
const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

/* 
    To format number into comma separated number according to Tens position

    e.g.:
        
        formatNumber(1000000000) //"1,000,000,000"
*/

const formatNumber = (number) => String(number).replace(/(.)(?=(\d{3})+$)/g, '$1,');

/* 
    To find intersection between two arrays 
    e.g.:

    intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
*/
const intersectionBy = (a, b, fn) => {
    const s = new Set(b.map(fn));
    return a.filter(x => s.has(fn(x)));
};

const generateRandomNumber = (numberLength = 4) => {
    let multiplier = '9';
    let adder = '1';

    for (let i = 0; i < numberLength - 1; i++) {
        multiplier += '0';
        adder += '0'
    }

    return Math.floor((Math.random() * parseInt(multiplier)) + parseInt(adder));
}

//to convert RGB color into hex code
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

/*

    To convert date object into colon format, e.g.
    
    getColonTimeFromDate(new Date()); // "08:38:00"

*/
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);


/* 
    To check if it is an absolute URL or not, e.g.
    
    isAbsoluteURL('https://google.com'); // true
    isAbsoluteURL('ftp://www.myserver.net'); // true
    isAbsoluteURL('/foo/bar'); // false

*/
const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

/* 

    To compare two objects, e.g.

*/
const isDeepEqual = (obj1, obj2, testPrototypes = false) => {
    if (obj1 === obj2) {
        return true
    }

    if (typeof obj1 === "function" && typeof obj2 === "function") {
        return obj1.toString() === obj2.toString()
    }

    if (obj1 instanceof Date && obj2 instanceof Date) {
        return obj1.getTime() === obj2.getTime()
    }

    if (
        Object.prototype.toString.call(obj1) !==
        Object.prototype.toString.call(obj2) ||
        typeof obj1 !== "object"
    ) {
        return false
    }

    const prototypesAreEqual = testPrototypes
        ? isDeepEqual(
            Object.getPrototypeOf(obj1),
            Object.getPrototypeOf(obj2),
            true
        )
        : true

    const obj1Props = Object.getOwnPropertyNames(obj1)
    const obj2Props = Object.getOwnPropertyNames(obj2)

    return (
        obj1Props.length === obj2Props.length &&
        prototypesAreEqual &&
        obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))
    )
}

export {
    intoTitleCase,
    toCamelCaseString,
    keyExtractor,
    getAPIError,
    truncateString,
    getCityRegionCountryFromGoogleApiResults,
    formatBytes,
    formatNumber,
    intersectionBy,
    generateRandomNumber,
    RGBToHex,
    getColonTimeFromDate,
    isAbsoluteURL,
    isDeepEqual
}
