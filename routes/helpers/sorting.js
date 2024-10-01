const sortDataByName = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
        return data;
    }

    return data.sort((a, b) => {
        if (a.name && b.name) {
            return a.name.localeCompare(b.name);
        }

        if (!a.name) return 1;
        if (!b.name) return -1;
        return 0;
    });
};

module.exports = {
    sortDataByName
};