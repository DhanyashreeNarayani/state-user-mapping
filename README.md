# State and User - app_backend

Backend application- created with Nodejs, Postgres, Postgis

### Topics

- Installation
- Import data
- APIS
- API Documentation
- Directory Structure
- AWS IAAC

#### Installation

Ensure you have [Docker][docker] installed.

To run the application, you need to build the docker Image.

For building the docker image,
`docker-compose build`

To run the docker image,
`docker-compose up`

#### Import data

Import the following files into the db through pgadmin

```
+-- postgres
    +-- state.csv
    +-- user_table.csv
```

#### APIS

1. Get states List
2. Get users in a state by stateID

#### API Documentation

```
.
+-- node-app
|   +-- Dockerfile
|   +-- documentation
|       +-- openapi.yaml
```

#### Directory Structure

```
.
+-- node-app
|   +-- Dockerfile
|   +-- documentation
|   +-- src
|   |   +-- scripts
|   |   +-- app.js
|   |   +-- services
|   |   |   +-- get-state.js
|   |   |   +-- state-to-user-mapper.js
+-- postgres
    +-- Dockerfile
    +-- state.csv
    +-- user_table.csv
```

#### AWS IAAC

I have attached a sample code `basic_cloudformation_template.yaml` containing the example configuration for the AWS cloudformation. Below attached is the system architecture diagram for the same.

![alt text]

[node]: https://nodejs.org/en/
