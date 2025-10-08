from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

# Mini-Lesson: CORS (Cross-Origin Resource Sharing)
# Browsers have a security policy that blocks a web page (your React app)
# from making requests to a different domain (your Python server) than the one
# that served the page. This middleware tells the browser to allow
# requests from your React app's origin (http://localhost:5173).
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mini-Lesson: Pydantic Models
# FastAPI uses Pydantic for data validation. You define the "shape" of your
# data as a class. When your API receives a request, FastAPI will automatically
# validate that the incoming data matches this shape. If it doesn't, it will
# return a helpful error message. This is great for catching bugs!
# Note how the field names here match the 'name' attributes in your React form.
class TicketRequest(BaseModel):
    movieName: str
    dateTime: str
    platform: str
    theater: str
    email: Optional[str] = None # This field is optional
    seat: Optional[str] = None  # This field is optional

# Mini-Lesson: Path Operations (API Endpoints)
# The "@app.post('/ticket-request')" is a "decorator". It tells FastAPI that
# the function right below it, handle_ticket_request, should handle any
# HTTP POST requests that come in to the "/ticket-request" URL.
@app.post("/ticket-request")
def handle_ticket_request(ticket_request: TicketRequest):
    # For now, we'll just print the data we received to the console.
    # Later, this is where you would save the data to a database.
    print("Received ticket request:")
    print(f"  Movie: {ticket_request.movieName}")
    print(f"  Time: {ticket_request.dateTime}")
    print(f"  Platform: {ticket_request.platform}")
    print(f"  Theater: {ticket_request.theater}")
    print(f"  Seat: {ticket_request.seat}")
    print(f"  Email: {ticket_request.email}")
    
    # FastAPI automatically converts this dictionary to a JSON response.
    return {"status": "success", "message": "Ticket request received!", "data": ticket_request}
