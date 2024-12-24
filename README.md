# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications:  unhandled exceptions within HTTP servers. The `bug.js` file showcases a server that throws an exception but fails to send an appropriate error response to the client. The `bugSolution.js` file provides a corrected version that gracefully handles exceptions and sends relevant error responses.

## Bug

The bug lies in the error handling within the HTTP server's request handler.  A `try...catch` block is used, but the `catch` block only logs the error to the console. No response is sent back to the client, leading to a silent failure and a potentially confusing experience for the user.

## Solution

The solution involves sending an appropriate HTTP error response (e.g., a 500 Internal Server Error) to the client when an exception occurs.  This informs the client that something went wrong and allows for better error handling on the client-side.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `node bug.js`.
4. Observe the console output.  The server will run, but if an error is triggered, the client will get no response. 
5. Run `node bugSolution.js`. This will correctly handle errors and send proper responses. 
