# moab-landing
Landing page for Microsoft Moab

If you're using VS Code for local development, install **Live Server**
for hot reloading and **Live Sass Compiler** for hot compiling of .scss
-> .css. Once you have those two extensions installed, restart VS Code
and follow the instructions on how to start the extensions.

## sync changes with browser

browser-sync start --server --files 'build/*'

# SCSS --> CSS

```
sassc src/main.scss | npx postcss -u autoprefixer 
```

## watching for changes

onchange 'src/*' -- make


# removing unused CSS classes

Only found one! .space-medium

```
npm i purgecss -g
purgecss --css main.css --content index.html -o purged.css
diff main.css purged.css
```

# check for CSS styles that aren't compatible

```
cat .browserlistrc && npx browserlist
cat dist/main.css | npx doiuse
cat dist/main.css | npx doiuse --browsers "ie > 10, 0.5%"
```

# stylelinter

```
cat .stylelintrc.json
node_modules/.bin/stylelint --color src/main.scss --fix
```
