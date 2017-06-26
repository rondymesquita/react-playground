docker build -t react-hello .
docker run -ti -P -v $(pwd):/home/dev react-hello bash