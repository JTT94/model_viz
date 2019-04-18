from flask import render_template, Blueprint
home_blueprint = Blueprint('home',__name__)
map_blueprint = Blueprint('map',__name__)

@home_blueprint.route('/')
@home_blueprint.route('/HOME')
def index():
	return render_template("index.html")


@map_blueprint.route('/map')
def map():
	return render_template("map.html")
