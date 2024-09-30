const FormData = require('form-data');

const username = process.env.USER_NAME;
const password = process.env.PASS_WORD;

const assign = (dataObject) => {
    const formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);

    console.table(dataObject);

    Object.entries(dataObject).forEach(([key, value]) => {
        formData.append(key, value);
    });

    return formData;
}

module.exports = assign;