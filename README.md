# Prime Check API

A simple Node.js API to check if a number is prime.

## How to Run

1. Clone the repo  
2. Install dependencies  
   `npm install`  
3. Start the server  
   `node index.js`

## Endpoint

**GET /is-prime?number=7**  
Response:
```json
{
  "number": 7,
  "isPrime": true
}
