# example-jwt-rsa
A simple example illustrating a dummy authentication service that can issue and sign a (access) JWT via self generated PEM certificate. JWT is then used by client to query protected route in a dummy API service, that validates the JWT via JWK public key from the authentication service.  

# Start
There are 2 components in play:

### Authentication service

```sh
cd src/auth
npm i
npm run certs:generate
npm run start
```

### API service

```sh
cd src/service
npm i
npm run start
```

### Docker
Use docker-compose to run the entire orchistration
```sh
docker-compose up --build
```

Both services can be individually started via docker, but since they share code from common path outside of Docker local context, it has to be run from parent directory. This might require minor changes to the dockerfile.

```sh
docker build -t example_jwt_rsa_auth -f src/auth/Dockerfile .
docker run -p 3001:3001 -d example_jwt_rsa_auth

docker build -t example_jwt_rsa_service -f src/service/Dockerfile .
docker run -p 3002:3002 -d example_jwt_rsa_service
```

# Client
This closed cycle is tested via REST Client extension from VS Code, but any http helper client can be used. Might as well make a small app in the future :)
