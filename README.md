# Basic Node and Express

This is the boilerplate code for the Basic Node and Express Challenges. Instructions for working on these challenges start at https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/

# Notes

## serving in Express
Express routes use the following template:
`app.METHOD(PATH, HANDLER)` where:
-  `METHOD` is an HTTP method in **lowercase**
- `PATH` is a relative path on the server (Can be string or regex).
- `HANDLER` is the function Express calls when the route matches.
    - HANDLER takes the form of `function(req, res) {...}`
        - example: `app.get("/", (res, req) => {...})` for arrow functions
        - example: `app.get("/", function(res, req))` for traditional functions
- `app.send()` allows you to send a string
- `app.sendFile()` allows you to send a file, the headers are automatically applied
- `app.static(path)` where `path` is the absolute path of the folder containing the asset allows you to call static assets such as stylesheets, scripts and images. This is a middleware function, which are functions that intercept route handlers and add some kind of information. These functions must be mounted using `app.use(path, middlewareFunction)`, the first path is optional. If it is not set, the middleware will be applied to all requests.
    - use: `app.use(express.static(__dirname + "/path"))` and `app.use("/path", express.static(__dirname + "/path"))` to allow anything in the folder "path" be used when "/path" is mentioned

## Serving JSON, REST API
REST stands for REpresentational State Transfer. A REST API allows for data exchange without clients needing to know details about the server itself. All the client will need is the url where the resource is and the action they want to perform on it (ie. GET from localhost:3000/test). ([more verbs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods))

- `GET` - fetch info without modifying anything
- `POST` - submits an entity to the specific resource
- `PUT` - replaces all current representations of the resource with the request payload
- `DELETE` - deletes specific resource
- `HEAD` - asks for a response identical to the `GET` but without the response body
- `CONNECT` establishes a tunnel to the server identified by the target resource
- `OPTIONS` describes the communication options for the target resource
- `TRACE` performs a message loop-back test along the path to the target resource
- `PATCH` applies partial modifications to a resource