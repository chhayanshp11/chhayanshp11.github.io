FROM httpd
MAINTAINER CHHAYANSH PUROHIT <chhayanshpurohit@gmail.com>
LABEL description="This is my docker file for deployment of resume website"
COPY ./ /usr/local/apache2/htdocs/
# COPY ./assets  /usr/local/apache2/htdocs/
# COPY ./css  /usr/local/apache2/htdocs/
# COPY ./js  /usr/local/apache2/htdocs/
