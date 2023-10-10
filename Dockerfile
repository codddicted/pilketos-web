FROM nginx:latest

# copy project to nginx 
COPY . /usr/share/nginx/html

# copy config to nginx 
COPY  ./default.conf /etc/nginx/conf.d/default.conf

# expose 
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]


