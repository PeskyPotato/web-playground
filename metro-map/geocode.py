import requests
import json
import os
import argparse
from time import sleep

def find_station_node(data):
    for node in data:
        if node["type"] == "station":
            return node
    return False



def get_station_api(name):
    BASE = "https://nominatim.openstreetmap.org/search"
    params = {"q": name, "format": "json"}

    print(f"Fetched: {name}")
    r = requests.get(BASE, params=params)
    data = r.json()

    with open(os.path.join("nodes", f"{params['q']}.json"), "w") as f:
        json.dump(data, f)
    sleep(1)
    return find_station_node(data)

def get_node(station_name):
    if not os.path.isfile(os.path.join("nodes", f"{station_name}.json")):
        node = get_station_api(station_name)
    else:
        with open(os.path.join("nodes", f"{station_name}.json")) as f:
            data = json.load(f)

        node = find_station_node(data)

    if not node:
        print(f"not a station: {station_name}")
        return 0
    else:
        return node

if __name__ == "__main__":
    # Setup arguments
    parser = argparse.ArgumentParser()
    parser.add_argument(dest='station_name', help="Enter a station name")

    # Parse arguments
    args = parser.parse_args()
    station_name = args.station_name.strip()

    # Get station data
    print(get_node(station_name))
