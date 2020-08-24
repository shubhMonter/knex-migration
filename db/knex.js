var environment = process.env.NODE_ENV || 'development';
var config = require("../knexFile")[environment];
const { attachPaginate } = require('knex-paginate');

var knex =require('knex')(config);
attachPaginate();
module.exports= knex;