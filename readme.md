# What is express.js

Don't re-invent the wheel. Use the tools that are available to you. Express.js is a web application framework for Node.js. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. It is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## All about middleware

Express is all about middleware. It's like a series of checkpoints that each request must go through. Each middleware has the ability to terminate the request-response cycle. If it doesn't, it must call the next middleware in the stack. This is how you can add functionality to your server. You can add logging, authentication, and more. You can even serve static files.

### Add a middleware

Adding a middleware is easy. You just call `app.use` and pass in the middleware function. Here's an example of a middleware that logs the request method and path.

```javascript
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
```

In that function, the `middleware` or bodyguard will let you pass through by calling the `next()` function. If you don't call `next()`, the request will be stuck in that middleware. Like if you were stuck at the airport security checkpoint and you didn't have your passport.

### Middleware function

The middleware function `app.use` accepts a path and can also accept a series of callbacks. The path is not the absolute path, but the beginning of the URL. For example, the `/` path will accept all requests. The `/api` path will accept all requests that start with `/api`. So, since the request goes from top to bottom, you can have a series of middlewares that only accept requests that start with `/api` for example.

So, you can set the last `/` path to serve has a 404 page. Here's an example of a middleware that serves a 404 page.

### Send a response

When going through the series of middlewares or `gates`, you need to have an answer at some point. You can send a response with `res.send`. Here's an example of a middleware that sends a response.

```javascript
app.use((req, res, next) => {
  res.send("You shall not pass");
});
```

### Parsing the body

With Express, you can easily add a middleware to parse the body of the request. To make sure you have the `body-parser` middleware, you can install it with npm `npm i body-parser`.

### Methods

With Express, it is possible to scope a middleware to a specific HTTP method. For example, you can have a middleware that only accepts `GET` requests. Here's an example of a middleware that only accepts `GET` requests.

```javascript
app.get("/", (req, res, next) => {
  res.send("You shall not pass");
});
```

## Views

Express can serve dynamic content. You can use a templating engine to serve HTML files. You can use EJS, Pug, Mustache, and many more. I personally don't serve HTML files with express, but I use it to serve JSON data. I use it to build APIs.
