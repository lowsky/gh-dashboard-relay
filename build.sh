IMAGE=dashboard:latest
docker build $IMAGE .
# later: docker run -d --name dash_latest -P $IMAGE
