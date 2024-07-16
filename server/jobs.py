from flask import Flask, jsonify
from flask_cors import CORS
import requests
import json
import os

app = Flask(__name__)
CORS(app)

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
        'Authorization':'BearereyJhbGciOiJFZERTQSIsImtpZCI6ImY2ZGNiYTU1LTQwZjItNjY3MC1jOWVmLWE2NmRhOWFhZTlkMiJ9.eyJhdWQiOiJteS53aGl0d29ydGguZWR1IiwiZXhwIjoxNzUyNTk1NDI0LCJpYXQiOjE3MjEwMzg0NzIsImlzcyI6Imh0dHBzOi8vb3BzLmNvcmVzaWduYWwuY29tOjgzMDAvdjEvaWRlbnRpdHkvb2lkYyIsIm5hbWVzcGFjZSI6InJvb3QiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJteS53aGl0d29ydGguZWR1Iiwic3ViIjoiZmEwYzRjOWMtYzIxYy1mZmRmLWMwYjktNDhhZWQ1YWY5YzE2IiwidXNlcmluZm8iOnsic2NvcGVzIjoiY2RhcGkifX0.zo9kUwFMW81462rvAD4taL7Lk50Buu04mKLrJJl644WPNaeW7BoKI50aWG-dmSOF3_rKI5LAVNdVHoUQUEiYBA'
    }
    response = requests.post(search_url, headers=headers, data=payload)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print("Failed to fetch job IDs")
        return []

def fetch_job_details(job_id):
    details_url = f"https://api.coresignal.com/cdapi/v1/linkedin/job/collect/{job_id}"sd 
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'BearereyJhbGciOiJFZERTQSIsImtpZCI6ImY2ZGNiYTU1LTQwZjItNjY3MC1jOWVmLWE2NmRhOWFhZTlkMiJ9.eyJhdWQiOiJteS53aGl0d29ydGguZWR1IiwiZXhwIjoxNzUyNTk1NDI0LCJpYXQiOjE3MjEwMzg0NzIsImlzcyI6Imh0dHBzOi8vb3BzLmNvcmVzaWduYWwuY29tOjgzMDAvdjEvaWRlbnRpdHkvb2lkYyIsIm5hbWVzcGFjZSI6InJvb3QiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJteS53aGl0d29ydGguZWR1Iiwic3ViIjoiZmEwYzRjOWMtYzIxYy1mZmRmLWMwYjktNDhhZWQ1YWY5YzE2IiwidXNlcmluZm8iOnsic2NvcGVzIjoiY2RhcGkifX0.zo9kUwFMW81462rvAD4taL7Lk50Buu04mKLrJJl644WPNaeW7BoKI50aWG-dmSOF3_rKI5LAVNdVHoUQUEiYBA'
    }
    response = requests.get(details_url, headers=headers)
    if response.status_code == 200:
        hold = response.json()
        return hold
    else:
        print("Failed to pull job from id ")
        return []

def format_job(job_details):
    # This is an example of how you might format each job detail to fit the frontend expectation.
    return {
        "company": job_details.get("company_name", "N/A"),
        "title": job_details.get("title", "No title provided"),
        "status": "ONGOING",  # Assuming all jobs are ongoing; adjust based on your data.
        "rate": job_details.get("salary", "Competitive"),
        "location": job_details.get("location", "Remote"),
        "applyLink": job_details.get("url", "#")
    }

def categorize_job(job_details):
    # Dummy function to determine category, needs real implementation
    title = job_details.get("title", "").lower()
    if "engineer" in title or "developer" in title:
        return "Tech"
    elif "analyst" in title or "bank" in title:
        return "Banking"
    elif "consultant" in title:
        return "Consulting"
    return "Other"

@app.route('/fetch_jobs')
def fetch_jobs():
    job_ids = fetch_job_ids()
    all_jobs_details = []
    for job_id in job_ids:
        job_details = fetch_job_details(job_id)
        if job_details:
            all_jobs_details.append(job_details)
    # Convert the detailed job info into the format expected by the frontend
    categorized_jobs = {"Tech": [], "Banking": [], "Consulting": []}  # Example categories
    for job in all_jobs_details:
        # Here you need to categorize and format each job
        category = categorize_job(job)  # Implement this function based on job details
        if category in categorized_jobs:
            categorized_jobs[category].append(format_job(job))  # Implement this function to match frontend expectation
    return jsonify(categorized_jobs)


if __name__ == '__main__':
    app.run(debug=True)
