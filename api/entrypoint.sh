#!/bin/sh
set -ex

npx prisma migrate dev

exec "$@"