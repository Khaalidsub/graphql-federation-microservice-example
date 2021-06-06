#!/bin/bash
# set -o allexport; source .env; set +o allexport
docker build . -f ./deploy/user/Dockerfile -t user-service
