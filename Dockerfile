FROM dtr.containerh.prudentialdobrasil.com.br/dev/nginx-fullstack:20220809

COPY ./build /etc/nginx/html


ENV NGINX_PROXY_ROOT="/etc/nginx/html/"
ENV NGINX_PROXY_BACKEND_PROXY_PASS="https://api-dev.prudential.com/"