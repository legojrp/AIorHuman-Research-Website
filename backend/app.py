from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/api/")
def api():
    political_tweets = [
        "A brighter future starts with education reform. Every child deserves access to quality schooling, no matter their ZIP code. #EducationForAll",
        "Climate change is the defining challenge of our time. We need bold action now to secure a sustainable planet for future generations. #ActOnClimate",
        "Healthcare is a human right, not a privilege. It's time to ensure affordable healthcare for every American. #UniversalHealthcare",
        "Our economy should work for everyone, not just the wealthiest 1%. Let's raise the minimum wage and ensure fair pay for all. #EconomicJustice",
        "Democracy thrives when every voice is heard. Protect voting rights and ensure fair elections across the nation. #VotingRights",
        "We honor the sacrifices of our veterans. It's our duty to provide them with the support and resources they deserve. #SupportOurVeterans",
        "Gun violence is a public health crisis. We must pass common-sense gun reform to protect our communities. #GunSafety",
        "Equality for all means protecting LGBTQ+ rights, fighting discrimination, and fostering inclusivity. #LoveIsLove",
        "It's time to rebuild our nation's infrastructure, creating jobs and ensuring safety for generations to come. #InfrastructureWeek",
        "Immigration strengthens our country. We need compassionate and comprehensive immigration reform. #ImmigrationReform"
    ]
    return jsonify(political_tweets)

if __name__ == "__main__":
    app.run()

