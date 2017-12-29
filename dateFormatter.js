const moment = require('moment');

exports.formattedDate = () => {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
};