from flask import Flask
from templates.python.views import home_blueprint

app = Flask(__name__,
			static_folder = './public',
			template_folder="./static")

# register the blueprints
app.register_blueprint(home_blueprint)
