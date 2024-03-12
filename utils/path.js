// On Linux, the path uses / instead of \ as the separator
// On Windows, the path uses \ instead of / as the separator
// With path.join, we can use the correct separator for the OS

const path = require("path");

module.exports = path.dirname(require.main.filename);
