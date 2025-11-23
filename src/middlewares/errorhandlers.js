/**
 * Global Error Handler Middleware.
 * This function MUST have exactly 4 arguments (err, req, res, next).
 */
export const errorHandler = (err, req, res, next) => {
  // Log the error internally for debugging
  console.error(`[ERROR] ${err.name}: ${err.message}`);
  console.error(err.stack);

  // Determine status code (default to 500 Internal Server Error)
  const statusCode =
    res.statusCode !== 200 && res.statusCode !== 201 ? res.statusCode : 500;

  // Send the error response to the client
  res.status(statusCode).json({
    message: err.message,
    // Only show stack trace in development/debug mode
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};

/**
 * 404 Not Found Handler Middleware.
 * Catches requests that fall through all routes.
 */
export const notFound = (req, res, next) => {
  // Set the status code before passing to the error handler
  res.status(404);
  const error = new Error(`🔍 Not Found - ${req.originalUrl}`);
  next(error); // Pass error to the errorHandler
};
