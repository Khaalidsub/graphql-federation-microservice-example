#!/bin/bash
# set -o allexport; source .env; set +o allexport
docker build . -f ./deploy/booking/Dockerfile -t booking-service
