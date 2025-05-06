const bcrypt = require("bcrypt");

const saltRounds = 10;

const hash = string => {
    return bcrypt.hashSync(string, saltRounds);
};

const compare = (string, hashedString) => {
    return bcrypt.compareSync(string, hashedString);
};

module.exports = {hash, compare};