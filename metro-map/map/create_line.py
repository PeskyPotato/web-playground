import json

lines = []

name = "Jubilee"
stations = []

for s_id in range (216, 229):
    stations.append(f'{s_id:05d}')


lines.append({
    "l_name": name,
    "stations": stations
})

with open("lines.json", "w") as f:
    json.dump(lines, f)