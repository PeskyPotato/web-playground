import csv
import time
import json
start_time = time.time()

show = "The Big Bang Theory"
year = "2007"

# get show tconst
with open("data/imdb/title.basics.tsv") as f:
    reader = csv.DictReader(f, dialect="excel-tab")
    for row in reader:
        if row["primaryTitle"] == show and row["titleType"] == "tvSeries" and row["startYear"] == year:
            show_tconst = row["tconst"]

print(show_tconst)
episode_tconst = {}
max_values = {}

# get tconst of each episode and total number of episodes and seasons
with open("data/imdb/title.episode.tsv") as f:
    reader = csv.DictReader(f, dialect="excel-tab")
    for row in reader:
        if row["parentTconst"] == show_tconst:
            episode_tconst[(int(row["seasonNumber"]), int(row["episodeNumber"]))] = row["tconst"]
            try:
                max_values[int(row["seasonNumber"])] += 1
            except KeyError:
                max_values[int(row["seasonNumber"])] = 1

ratings = []
# get ratings for each episode
with open("data/imdb/title.ratings.tsv") as f:
    reader = csv.DictReader(f, dialect="excel-tab")
    for season in range(1, len(max_values.keys()) + 1):
        for episode in range(1, max_values[season] + 1):
            for row in reader:
                if row["tconst"] == episode_tconst[(season, episode)]:
                    ratings.append({
                        "season": season,
                        "episode": episode,
                        "tconst": row["tconst"],
                        "averageRating": row["averageRating"]
                    })
                    print("{},{},{},{}".format(season, episode, row["tconst"], row["averageRating"]))
                    f.seek(0)
                    break

json_data = {
    "title": "The Newsroom",
    "year": 2012,
    "ratings": ratings
}
with open("{}_({}).json".format(show.replace(" ", "_"), year), "w") as outfile:
    json.dump(json_data, outfile)

print("--- {} seconds ---".format(time.time() - start_time))
