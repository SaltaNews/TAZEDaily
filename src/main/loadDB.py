import requests
import json
nytimes_api = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports&api-key=Z4HaAD7CGAyh4xKFOWbBLKAlRHAWgGOj'
taze_api = 'http://127.0.0.1:8080/newsarticle/postall'
testurl = 'http://127.0.0.1:8080/newsarticle'

data = requests.get(nytimes_api, timeout=1).json

title = []


title.append(data['results'][0]['title'])

print(title)
