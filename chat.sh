#!/bin/bash
# set -o allexport; source .env; set +o allexport
docker build . -f ./deploy/chat/Dockerfile -t chat-service