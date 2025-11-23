// middleware/healthCheck.js

/**
 * Checks the operational status of the service.
 * A health check endpoint is used by load balancers and container orchestrators
 * (like Docker, Kubernetes) to determine if the instance is ready to receive traffic.
 */
export const healthCheck = (req, res) => {
  const healthcheck = {
    uptime: process.uptime(), // Time the process has been running
    message: "OK",
    timestamp: Date.now(),
    // In a real app, you would also check MongoDB status here
  };
  try {
    res.send(healthcheck);
  } catch (e) {
    // If an error occurs, send 503 Service Unavailable
    healthcheck.message = e.message;
    res.status(503).send(healthcheck);
  }
};
