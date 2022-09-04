from sys import api_version
from flask import Flask, jsonify,request
from flask_cors import CORS
import requests
import json

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

proxies = {
'http': 'http://7.182.9.227:3128/',
'https': 'http://7.182.9.227:3128/',
}

@app.route('/', methods=['GET','POST'])
def get_weather_data():
    api_key= "20571ab45c74dc2a1897b60c5b8047a1"
    base_url_weekly="https://api.openweathermap.org/data/2.5/forecast/daily"
    base_url="https://api.openweathermap.org/data/2.5/weather"
    isCityExist=True
    callUrl =""
    temp_type=request.json.get('temp')

    if request.json.get('city') == "":
        isCityExist=False

    if(isCityExist):
        callUrl ="?q={city}".format(city=request.json.get('city'))
    else:
        callUrl ="?lat={lat}&lon={long}".format(lat=request.json.get('lat'),long=request.json.get('long'))

    args=request.args
    req = requests.get("{base_url}{callUrl}&appid={api_key}&units={temp_type}".format(base_url=base_url,api_key=api_key,callUrl=callUrl,temp_type=temp_type),proxies=proxies)
    req2 = requests.get("{base_url_weekly}{callUrl}&cnt=7&appid={api_key}&units={temp_type}".format(api_key=api_key,callUrl=callUrl,base_url_weekly=base_url_weekly,temp_type=temp_type),proxies=proxies)

    return jsonify({
        'status': 'success',
        'current_weather': req.json(),
        'weekly_weather': req2.json()
    })



if __name__ == '__main__':
    app.run()