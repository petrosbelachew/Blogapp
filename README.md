# Express Mongoose CRUD API

A robust back-end application built with **Express.js** and **Mongoose** (MongoDB ODM) to provide full CRUD (Create, Read, Update, Delete) capabilities for managing blog posts and writer information. This project is structured using the Controller/Service/Model pattern for clean separation of concerns and includes dedicated middleware for error handling and health checks.

---

## 🚀 Getting Started

### Prerequisites

You need the following installed on your machine:

- Node.js (or Bun, as used in the project)
- MongoDB account or local instance
- API Client (e.g., VS Code REST Client, Postman)

### Installation

1.  Clone the repository:

    ```bash
    git clone [your-repo-url]
    cd express-mongo-crud
    ```

2.  Install dependencies:

    ```bash
    bun install  # or npm install
    ```

3.  Configure Environment:
    Create a `.env` file in the root directory and add your MongoDB connection string and port:

    ```env
    MONGO_URL="mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/blogdb?retryWrites=true&w=majority"
    PORT=3000
    ```

### Running the Server

Run the development script defined in your `package.json`:

```bash
bun run devstart  # or npm run devstart
```
