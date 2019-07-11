import requests

a = requests.post('http://34.93.5.12/in',data={body="gg"}).text
b = requests.get('http://34.93.5.12/out').text
print(a)
print(b)