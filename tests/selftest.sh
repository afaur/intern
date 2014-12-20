#!/usr/bin/env bash
cd "$(dirname $0)/.."
# We're calling intern-X.js directly here so that this script can be shared by
# master and geezer, but intern should normally be started using the links
# created by npm in node_modules/.bin.
node_modules/intern/bin/intern-client.js config=tests/selftest.intern reporters=intern-selftest/lib/reporters/combined $@
node_modules/intern/bin/intern-runner.js config=tests/selftest.intern reporters=intern-selftest/lib/reporters/combined $@
