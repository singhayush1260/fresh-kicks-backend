# Sneaker Shop E-commerce Backend

Welcome to the backend repository for the Sneaker Shop called Fresh Kicks, MERN stack e-commerce web app. This backend is responsible for user authentication, payment gateway integration using Razorpay, and follows the MVC architecture.
For Frontend repo, [click here](https://github.com/singhayush1260/fresh-kicks)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [Payment Gateway](#payment-gateway)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This backend repository complements the Sneaker Shop MERN stack e-commerce web app. It handles user authentication, and payment processing via the Razorpay API, and follows the MVC (Model-View-Controller) architecture to ensure organized codebase management.

## Features

- User Authentication: Secure user registration and login using bcrypt for password hashing and JWT for token-based authentication.
- Payment Gateway Integration: Integration with the Razorpay payment gateway for secure and seamless online payments.
- MVC Architecture: Organized project structure following the Model-View-Controller pattern for maintainability.
- API Documentation: Comprehensive documentation of available API endpoints for developers to understand and integrate with the backend.

## Technologies Used

- Express.js: A minimal and flexible Node.js web application framework.
- Node.js: A runtime environment for executing JavaScript code server-side.
- MongoDB: A NoSQL database for data storage and retrieval.
- Bcrypt: A library for password hashing and validation.
- JSON Web Tokens (JWT): Tokens for securely transmitting information between parties.
- Razorpay: A payment gateway for handling online payments.
- MVC Architecture: A software design pattern for separating concerns in the codebase.

## Getting Started

1. Clone this repository: `git clone https://github.com/your-username/sneaker-shop-backend.git`
2. Navigate to the project directory: `cd sneaker-shop-backend`
3. Install dependencies: `npm install`
4. Configure environment variables: Create a `.env` file and provide the necessary configuration.
5. Start the server: `npm start`

## Project Structure

The backend follows the MVC architecture:

- `models/`: Contains database schema models.
- `controllers/`: Handles the logic of each route.
- `routes/`: Defines API routes and maps them to controller actions.
- `middlewares/`: Custom middleware functions.
- `config/`: Configuration files and environment variables.
- `index.js`: Entry point of the application.

## Authentication

User authentication is handled using JWT (JSON Web Tokens) and bcrypt for password hashing. Users can register and log in securely.

## Payment Gateway

The backend integrates with the Razorpay payment gateway for processing online payments. Users can make secure purchases through the app.

## Contributing

Contributions are welcome! If you encounter issues or want to contribute new features, please create an issue or submit a pull request following the standard GitHub process.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For inquiries or feedback, please contact us at singh.dev6537@gmail.com.
