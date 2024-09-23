from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup
import json

app = Flask(__name__)

def scrape_github_jobs():
    url = 'https://github.com/SimplifyJobs/Summer2025-Internships/blob/dev/README.md'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    jobs = []

    for row in soup.find_all('tr')[2:]:  # Skip header rows
        cols = row.find_all('td')
        if cols:
            job_info = {
                'company': cols[0].text.strip(),
                'role': cols[1].text.strip(),
                'location': cols[2].text.strip(),
                'application_links': [a['href'] for a in cols[3].find_all('a')] if cols[3].find('a') else ['#'],
                'date_posted': cols[4].text.strip() if len(cols) > 4 else 'Not Listed'
            }
            # Format the job info using the updated format_job function
            formatted_job = scrape_format_job(job_info)
            jobs.append(formatted_job)

    return jobs

def scrape_format_job(job_details):
    return {
        "company": job_details.get("company", "N/A"),
        "title": job_details.get("role", "No title provided"),  # 'role' is mapped to 'title'
        "status": "ONGOING",  # Assuming all jobs are ongoing unless specified
        "rate": "Competitive",  # Add default if missing
        "location": job_details.get("location", "Remote"),
        "applyLink": job_details.get("application_links", ["#"])[0]  # Get first link
    }


def scrape_and_save_tech_jobs():
    jobs = scrape_github_jobs()
    save_jobs_to_file(jobs, 'tech.txt')
    return jsonify({"message": "Tech jobs scraped and saved", "jobs": jobs})

# Function to fetch job IDs based on specified criteria
def fetch_job_ids():
    search_url = "https://api.coresignal.com/cdapi/v1/linkedin/job/search/filter"
    payload = json.dumps({
        "title": "(Data Engineer intern) OR (Software Engineer intern) OR (Analyst Intern)",
        "application_active": "True",
        "deleted": "False",
        "country": "(United States)"
    })
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <YOUR_API_TOKEN>'
    }
    response = requests.post(search_url, headers=headers, data=payload)
    if response.status_code == 200:
        data = response.json()
        return data['data']  # Adjust based on actual key that contains job IDs
    else:
        print("Failed to fetch job IDs")
        return []

# Function to fetch job details for a specific job ID
def fetch_job_details(job_id):
    details_url = f"https://api.coresignal.com/cdapi/v1/linkedin/job/collect/{job_id}"
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <YOUR_API_TOKEN>'
    }
    response = requests.get(details_url, headers=headers)
    if response.status_code == 200:
        return response.json()  # Adjust based on actual response structure
    else:
        print("Failed to pull job from ID")
        return {}


def save_jobs_to_file(jobs, filename):
    with open(f"{filename}.txt", 'a') as file:
        for job in jobs:
            file.write(json.dumps(job) + '\n')


def categorize_job(job_details):
    title = job_details.get("title", "").lower()
    # Extending keyword lists for existing categories
    tech_keywords = ["engineer", "developer", "software", "tech", "programmer", "web", "it", "information technology"]
    banking_keywords = ["analyst", "bank", "finance", "financial", "investment", "credit", "equity", "trader", "broker"]
    consulting_keywords = ["consultant", "consulting", "strategy", "strategic", "advisor", "advisory"]

    if any(word in title for word in tech_keywords):
        return "Tech"
    elif any(word in title for word in banking_keywords):
        return "Banking"
    elif any(word in title for word in consulting_keywords):
        return "Consulting"
    

def update_job_listings():
    job_ids = fetch_job_ids()
    all_jobs = [fetch_job_details(job_id) for job_id in job_ids if job_id]
    categorized_jobs = {'tech': [], 'banking': [], 'consulting': []}

    for job in all_jobs:
        if job:
            category = categorize_job(job)
            categorized_jobs[category].append(job)

    for category, jobs in categorized_jobs.items():
        save_jobs_to_file(jobs, category)

    print(f"Jobs categorized and saved: {json.dumps({k: len(v) for k, v in categorized_jobs.items()}, indent=4)}")

@app.route('/get-jobs')
def get_jobs():
    update_job_listings()
    categories = ['tech', 'banking', 'consulting']
    job_categories = {category.capitalize(): [] for category in categories}

    for category in categories:
        try:
            with open(f"{category}.txt", 'r') as file:
                jobs = file.readlines()
                job_categories[category.capitalize()] = [json.loads(job) for job in jobs]
        except FileNotFoundError:
            job_categories[category.capitalize()] = []

    return jsonify(job_categories)

if __name__ == "__main__":
    app.run(debug=True)
