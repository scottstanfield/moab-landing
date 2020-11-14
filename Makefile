.PHONY: all clean nuke lint


all: dist/main.html dist/main.css

dist: node_modules
	-mkdir -p dist

dist/main.html: src/main.pug
	npx pug --pretty src/*.pug -o dist

# package.json installs sass but if you're on macOS
# brew install sass will install a much faster version
#
dist/main.css: src/main.scss
	@#sass $< $@					# faster version
	npx sass $< $@			# node version

node_modules: package.json
	@echo "Installing node packages"
	npm install --silent
	touch node_modules

clean:
	-rm -rf dist

nuke: clean
	-rm -rf node_modules

lint:
	-npx stylelint --color src/main.scss
