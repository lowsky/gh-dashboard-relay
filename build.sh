IMAGE=dashboard:latest
docker build -t $IMAGE .
# later: docker run -d --name dash_latest -P $IMAGE
