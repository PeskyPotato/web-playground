from geocode import get_node
import json

with open('elizabeth_line.txt') as f:
    stations = f.readlines()

formatted_stations = []
current_id = 0

for station_name in stations:
    station_name = station_name.strip()
    node = get_node(station_name)
    if not node:
        continue

    station = {
        "data": {},
        "position": {}
    }
    station["data"]["id"] = f'{current_id:05d}'
    station["data"]["s_name"] = station_name
    station["position"]["x"] = float(node["lon"])*1000
    station["position"]["y"] = float(node["lat"])*-1000

    # station = {
    #     "data": {}
    # }
    # station["data"]["id"] = f'{current_id:05d}'
    # station["data"]["s_name"] = station_name
    # station["data"]["lng"] = float(node["lon"])
    # station["data"]["lat"] = float(node["lat"])


    current_id += 1
    formatted_stations.append(station)

with open("stations.json", "w") as f:
    json.dump(formatted_stations, f)

