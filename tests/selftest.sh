cd "$(dirname $0)/.."
node_modules/.bin/intern-client config=tests/selftest.intern reporters=intern-selftest/lib/reporters/combined $@
node_modules/.bin/intern-runner config=tests/selftest.intern reporters=intern-selftest/lib/reporters/combined $@
