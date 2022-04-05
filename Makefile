PLUGIN_NAME = javascript-example-plugin
PLUGIN_PATH = easydb-javascript-example-plugin

# INSTALL FILES NOT TESTED YET.

INSTALL_FILES = \
	$(WEB)/javascript-example-plugin.js \
	manifest.yml

all: build

include easydb-library/tools/base-plugins.make

build: npm_install code

npm_install:
	npm install

code:
	npm run build

clean: clean-base
