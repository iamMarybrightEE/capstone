/*eslint no-undef: "error"*/
/*eslint-env node*/

// lint-staged.config.js
module.exports = {
  // Lint then format TypeScript and JavaScript files
  '**/*.(js|jsx)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `npx prettier --write ${filenames.join(' ')}`,
};
