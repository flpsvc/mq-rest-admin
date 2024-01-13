FROM nginx:latest

COPY ./build/ /usr/share/nginx/html/build/
COPY ./nginx-custom-conf/default.conf /etc/nginx/conf.d/