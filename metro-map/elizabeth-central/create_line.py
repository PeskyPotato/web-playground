import json

lines = []

name = "Central"
stations = []

for s_id in range (65, 78):
    stations.append(f'{s_id:05d}')


lines.append({
    "l_name": name,
    "stations": stations
})

with open("lines.json", "w") as f:
    json.dump(lines, f)