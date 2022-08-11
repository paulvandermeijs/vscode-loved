const Color = require('color');

const base = {
    transparent: '#0000',
    black: '#000000',
    white: '#ffffff',
    orange: '#f7987e',
    purple: '#b18bb1',
    pink: '#ea7599',
    yellow: '#eabe9a',
    green: '#97a38f',
    turquoise: '#7ea9a9',
    blue: '#6e94b9',
    brown: '#a67868',
    red: '#e05252',
};

const classes = {
    background: '#121926',
    foreground: '#99a4b8',
    editorBackground: '#17202f',
    editorForeground: '#c0c5ce',
    highlight: '#99beff',
    cursor: Color(base.pink).rotate(0.4).saturate(0.4).lighten(-0.01).hex(),
    error: Color(base.orange).rotate(-3.76).saturate(0.132).lighten(-0.126).hex(),
    warning: Color(base.green).rotate(44).saturate(3.5).lighten(0.033).hex(),
    debug: Color(base.red).rotate(356.7).saturate(0.1621).lighten(0.1536).hex(),
};

module.exports = {
    ...base,
    ...classes,
};
