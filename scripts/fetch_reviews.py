import os
import requests
import json
from dotenv import load_dotenv

# Load API key from .env
load_dotenv()
API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")
PLACE_ID = "ChIJEQ65KBPKuEcRzOS05PJwObA"

def fetch_google_reviews():
    if not API_KEY:
        print("❌ Error: GOOGLE_MAPS_API_KEY not found in .env")
        return

    print(f"📡 Fetching reviews for Place ID: {PLACE_ID}...")
    
    # Place Details Endpoint
    url = f"https://maps.googleapis.com/maps/api/place/details/json?place_id={PLACE_ID}&fields=name,rating,reviews&language=de&key={API_KEY}"
    
    response = requests.get(url)
    data = response.json()
    
    if data.get("status") == "OK":
        result = data.get("result", {})
        reviews = result.get("reviews", [])
        
        # Format reviews for our UI
        formatted_reviews = []
        for r in reviews:
            formatted_reviews.append({
                "text": r.get("text", ""),
                "name": r.get("author_name", "Anonym"),
                "rating": r.get("rating", 5),
                "date": r.get("relative_time_description", ""),
                "project": "Kundenbewertung" # Generic fallback
            })
            
        # Save to JSON
        output_path = os.path.join("src", "data", "reviews_google.json")
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(formatted_reviews, f, ensure_ascii=False, indent=2)
            
        print(f"✅ Successfully saved {len(formatted_reviews)} reviews to {output_path}")
    else:
        print(f"❌ API Error: {data.get('status')} - {data.get('error_message', 'No error message')}")

if __name__ == "__main__":
    fetch_google_reviews()
