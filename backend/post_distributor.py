import pandas as pd
import numpy

def read_excel_odc(file_path, sheet_name=0):
    """
    Reads an Excel file and returns the data from the specified sheet.

    :param file_path: Path to the Excel file.
    :param sheet_name: Name or index of the sheet to read. Default is the first sheet.
    :return: DataFrame containing the data from the specified sheet.
    """
    try:
        data = pd.read_excel(file_path, sheet_name=sheet_name)
        return data
    except Exception as e:
        print(f"An error occurred while reading the Excel file: {e}")
        return None
    

def get_posts():
    return read_excel_odc("posts.xlsx")["TEXT"].to_list()

def get_list():
    

    data = read_excel_odc("posts.xlsx")
    posts = data["TEXT"]
    data["index"] = data.index
    
    # Create a new empty CSV file
    result = pd.DataFrame()  # Create an empty DataFrame

    for index, post in enumerate(posts):
        percents = []
        if not pd.isna(data["Detecting-AI.com"][index]):
            percents.append(data["Detecting-AI.com"][index])
        if not pd.isna(data["GPT Zero"][index]):
            percents.append(data["GPT Zero"][index])
        if not pd.isna(data["Scribbr"][index]):
            percents.append(data["Scribbr"][index])
        if not pd.isna(data["TheChecker.AI"][index]):
            percents.append(data["TheChecker.AI"][index])
        if not pd.isna(data["ZeroGPT"][index]):
            percents.append(data["ZeroGPT"][index])

        if (len(percents) > 0): # Placeholder decider

            
            avg = sum(percents) / len(percents)

            result = result._append({'Post': post, 'Average': avg, 'index': index, "human":0, "AI":0}, ignore_index=True)

            # save to file
    result.to_csv("result.csv", index=False)

    return result
        
def get_quiz(result):


    quiz_posts = pd.DataFrame()

    fil_results = result[result["Average"] > 50]
    selected_indices = fil_results.sample(5)
    quiz_posts = quiz_posts._append(selected_indices)

    fil_results = result[(50 > result["Average"]) > 0]
    selected_indices = fil_results.sample(5) 
    quiz_posts = quiz_posts._append(selected_indices)

    quiz_posts = quiz_posts.sample(frac=1)
    
    pythoned_list = quiz_posts[["Post", "index"]].to_dict("records")
    print(pythoned_list)


    return pythoned_list