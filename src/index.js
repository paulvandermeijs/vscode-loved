const fs = require('fs');
const theme = require('./theme');

fs.writeFileSync('themes/Loved-color-theme.json', JSON.stringify(theme, '', 4));
