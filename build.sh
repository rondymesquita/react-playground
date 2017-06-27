docker build -t react-hello .
docker run -ti -p 8080:8080 -v $(pwd):/home/$USER/dev -e USER=$USER -e USERID=$UID react-hello bash