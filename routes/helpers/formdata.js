var FormData = require('form-data');

const username = process.env.USER_NAME;
const password = process.env.PASS_WORD;

const assign = (dataObject) => {
    var formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);

    console.table(dataObject);

    // Append each key-value pair to the FormData object
    for (const key in dataObject) {
        formData.append(key, dataObject[key]);
    }

    return formData;
}

module.exports = assign