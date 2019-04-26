# model_viz: IN DEVELOPMENT

Full-stack model vizualisation web-app

- Front-end: HTML, Javascript with React, jQuery, + vizualisation libs
- Backend: Python/ flask api service to send data to app via JSON requests
- Development tools: git, yarn, npm, babel, webpack

## Requirements
- npm, yarn
- python3

## Set-Up
- `git clone https://github.com/JTT94/model_viz.git`
- `python -m venv venv`
- `venv\Scripts\activate`
- `python -m pip install --upgrade pip`
- `pip install -r requirements.txt`
- `cd ./templates/static`
- `yarn install`

## Run
- Open 2 terminals
  - Terminal 1: 
    - `cd ./templates/static`
    - `yarn run watch`
  - Terminal 2: 
    - `python run.py`
