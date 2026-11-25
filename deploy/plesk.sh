#!/bin/sh
set -eu

cd "$(dirname "$0")/.."
php_bin=${PHP_BIN:-php}

if [ ! -s public/build/manifest.json ]; then
    echo 'Missing Vite manifest. Deploy a Git revision containing the npm run build:plesk output.' >&2
    exit 1
fi

rm -f public/hot

if [ ! -e public/storage ]; then
    "$php_bin" artisan storage:link
    test -d public/storage
fi

"$php_bin" artisan config:clear
"$php_bin" artisan migrate --force
"$php_bin" artisan optimize
