docker build -t react-hello .
docker run -ti -P -v $(pwd):/home/$USER/dev -e USER=$USER -e USERID=$UID react-hello bash