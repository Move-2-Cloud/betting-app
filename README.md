# Born2Play

This repo is dedicated to Born2Play software. 

This repository contains two main parts:
- **Backend**: The server logic, APIs, and data management.
- **Frontend**: The user interface and client-side interactions.
- **Data**: An initialization SQL file that is automatically executed when the Docker stack is launched

These two parts communicate via REST APIs.

To launch the project, run the following command in the root directory of the project:

```bash
docker compose up -d
