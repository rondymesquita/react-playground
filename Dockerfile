FROM ubuntu:16.04

# Basis
RUN apt update
RUN apt install git \
				curl \
				wget -y

# Node
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt install -y 	nodejs \
					build-essential

#
# RUN npm install -g create-react-app
# RUN create-react-app hello-world

#Finish
WORKDIR /home