module.exports = {
  "extends": "airbnb",
  "rules": {
      "react/prefer-stateless-function": [0, { "ignorePureComponents": false }],
      "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
      "react/no-unescaped-entities": [0, { "forbid": ['>', '"', '\'', '}'] }],
      "react/destructuring-assignment": [0, 'always']
  }
};
