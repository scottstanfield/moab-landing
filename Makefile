# References
# https://gist.github.com/emilbjorklund/77cb39aafd04d60ef1f5
# https://gist.github.com/matijs/3707f7208198f578d2c0

.PHONY: all clean nuke lint

CSS_T := $(patsubst src/%.scss, build/%.css, $(wildcard src/*.scss))
HTML_T := $(patsubst src/%.pug, build/%.html, $(wildcard src/*.pug))

TARGETS := $(CSS_T) $(HTML_T) build/images build/index.html

all: $(TARGETS)

$(HTML_T): build/%.html : src/%.pug | build
	npx pug --pretty $< --out build

$(CSS_T): build/%.css : src/%.scss | build
	sassc $< | npx postcss -u autoprefixer > $@

build: node_modules
	-mkdir -p build

build/index.html: src/index.html
	cp $< $@

build/images: src/images
	cp -r $< $@

# package.json installs sass but if you're on macOS
# brew install sass will install a much faster version

node_modules: package.json
	@echo "Installing node packages"
	npm install --silent
	touch node_modules

clean:
	-rm -rf build

nuke: clean
	-rm -rf node_modules

lint:
	-npx stylelint --color src/main.scss
