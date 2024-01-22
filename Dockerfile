FROM nginx:latest

COPY ./build/ /usr/share/nginx/html/build/
COPY ./nginx-custom-conf/default.conf /etc/nginx/conf.d/
COPY ./nginx-custom-conf/proxy_params /etc/nginx/