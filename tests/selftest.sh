cd "$(dirname $0)/.."

export SAUCE_USERNAME=afaur
export SAUCE_ACCESS_KEY=b5399ad8-270f-44ce-b29f-729d3020333c

node_modules/.bin/intern-client config=tests/selftest.intern $@
node_modules/.bin/intern-runner config=tests/selftest.intern $@
