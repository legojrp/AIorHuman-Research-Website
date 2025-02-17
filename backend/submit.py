import pandas as pd
import json
import time

def check_answers(data):
    
    total_correct = 0
    total = 0
    
    result = pd.read_csv("result.csv")
    
    for datapoint in data:
        row = result.loc[result['index'] == datapoint['backendIndex']]
        if datapoint["choice"] == "human":
            result.loc[row.index, "human"] += 1
        else:
            result.loc[row.index, "AI"] += 1

        total += 1
        
        print(row["Average"].values[0])
        print(row["Average"].values[0] < 50)

        if row["Average"].values[0] < 50 and datapoint["choice"] == "human":
            total_correct += 1
        elif row["Average"].values[0] > 50 and datapoint["choice"] == "notHuman":
            total_correct += 1
    
    result.to_csv("result.csv", index=False)

    print(total_correct)
    print(total)

    data_obj = {
        "data": data,
        "timestamp": time.time()
    }
    with open("user_submissions.txt", "a") as f:
        f.write(json.dumps(data_obj) + "\n")



    return round(total_correct / total * 100, 0)
        


        
        
        
