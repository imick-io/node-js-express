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

### Send a response

When going through the series of middlewares or `gates`, you need to have an answer at some point. You can send a response with `res.send`. Here's an example of a middleware that sends a response.

```javascript
app.use((req, res, next) => {
  res.send("You shall not pass");
});
```
