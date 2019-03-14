#!/bin/sh
echo 'restart regina-api'
NODE_ENV=prod sudo /root/.nvm/versions/node/v10.6.0/lib/node_modules/forever/bin/forever start /root/regina-api/dist/server.js