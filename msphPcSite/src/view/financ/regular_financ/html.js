const content = require('./regular_financ.ejs');
const renderData = require('../../../public-resource/layout/layout.js');

module.exports = content(renderData(['listPaging','navList']));