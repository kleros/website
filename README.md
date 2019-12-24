
# Kleros website
Kleros website built with Gatsby framework.

## Translation
Translation files are under [/src/intl](https://github.com/kleros/website/tree/master/src/intl) directory. Each language is represented by a json file, for example: `en.json` for English and `ko.json` for Korean.

### Steps to add a new language
1. Copy en.json, rename it to new language code, for example: `ru.json`.
2. Put the file under [/src/intl](https://github.com/kleros/website/tree/master/src/intl)
3. Edit values (translate) inside the new created JSON file.
4. Inside `gatsby-config.js`, edit `gatsby-plugin-intl` by adding the new language code to `languages` array.
