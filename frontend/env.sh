#!/bin/sh
# Generate env-config.js with environment variables starting with VITE_
echo "window.env = {" > /usr/share/nginx/html/env-config.js
env | grep VITE_ | awk -F '=' '{print "  \"" $1 "\": \"" $2 "\","}' >> /usr/share/nginx/html/env-config.js
echo "}" >> /usr/share/nginx/html/env-config.js
