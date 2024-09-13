// Import typeDefs and resolvers
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// Export them to be used in Apollo Server setup
module.exports = { typeDefs, resolvers };
