const faker = require('@faker-js/faker');

function createName() {
    return faker.name.findName();
}

function createEmail() {
    return faker.internet.email();
}
function createURL() {
    return faker.internet.url();
}

function createDate() {
    let date =  faker.date.recent();
    return date.getDate().toString().concat("/").concat(date.getMonth().toString()).concat("/").concat(date.getFullYear());
}

function createUnacceptableURL() {
    let url = faker.internet.url();
    return url.replace('://','');

}


module.exports = {
    createName,
    createEmail,
    createDate,
    createURL,
    createUnacceptableURL
};