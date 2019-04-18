from flask import render_template, Blueprint, jsonify
home_blueprint = Blueprint('home',__name__)
map_blueprint = Blueprint('map',__name__)

@home_blueprint.route('/')
@home_blueprint.route('/HOME')
def index():
	return render_template("index.html")


@map_blueprint.route('/map')
def map():
	return render_template("map.html")

@home_blueprint.route('/data')
def barchart():
	data = dict(data= [12, 5, 6, 6, 9, 10])
	return jsonify(data)