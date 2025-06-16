#!/bin/bash
cd /home/kavia/workspace/code-generation/dinediscover-57282-ee8d9513/dinediscover_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

