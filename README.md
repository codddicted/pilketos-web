## Setup Project in Docker

```bash
# build image
$ docker build -t pilketos-frontend .

# build container & run on port 8080
$ docker run -it --name pilketos-frontend -p 80:80 pilketos-frontend

# or for simplemt command
# $ npm run deploy:docker
```

### Setting nginx

edit the default.conf then

```bash
# copy default.conf to container
$ docker cp "default.conf" pilketos-frontend:"\etc\nginx\conf.d\default.conf"

# restart nginx
$ docker exec -it pilketos-frontend nginx -s reload
```
