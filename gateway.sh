#!/bin/bash
# set -o allexport; source .env; set +o allexport
docker build . -f ./deploy/gateway/Dockerfile -t gateway-service