const intoTitleCase = (string) => {
    let sentence = string.toLowerCase().split(' ');
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    sentence = sentence.join(' ');
    return sentence;
};

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

//output like: "1,000,000,000"
const formatNumber = (number) => String(number).replace(/(.)(?=(\d{3})+$)/g, '$1,');

//to find intersection between two arrays
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

export {
    intoTitleCase,
    keyExtractor,
    getAPIError,
    truncateString,
    getCityRegionCountryFromGoogleApiResults,
    formatBytes,
    formatNumber,
    intersectionBy,
    generateRandomNumber
}