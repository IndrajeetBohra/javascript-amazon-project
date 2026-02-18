# JavaScript Amazon Clone (Vanilla JS)

A fully functional Amazon-style ecommerce frontend built using **Vanilla JavaScript, HTML, and CSS**, developed as the final project of the **JavaScript course by SuperSimpleDev**.

This project demonstrates core to advanced JavaScript concepts including DOM manipulation, modular architecture, asynchronous programming, object-oriented programming, localStorage persistence, and unit testing using Jasmine.

## Live Demo

Can run this project locally by opening: amazon.html

Or host it using GitHub Pages.

## Project Overview

This project is a simplified frontend implementation of an ecommerce platform inspired by Amazon. It allows users to browse products, search items, add products to a cart, checkout, place orders, and track deliveries.

Unlike traditional ecommerce applications, this project does not use a database. Instead, it uses **localStorage as a persistent client-side storage solution**, simulating real-world application state management.

This project focuses heavily on **JavaScript architecture, logic, and state management**, rather than backend infrastructure.

## Features

### Product Browsing

- Dynamically loads products from backend API
- Displays products in a responsive grid
- Shows product image, rating, price, and quantity selector

### Search Functionality

- Functional search bar
- Filters products by name and keywords
- Supports search via:
  - Search button
  - Enter key
- Uses URL query parameters (`?search=`)

### Cart System

- Add products to cart
- Remove products from cart
- Update delivery options
- Dynamic cart quantity indicator
- Persistent cart using localStorage

### Checkout System

- Displays order summary
- Calculates:
  - Product total
  - Shipping cost
  - Tax
  - Final order total
- Delivery option selection
- Place order functionality

### Order Management

- Stores orders in localStorage
- Displays order history
- Shows order ID, date, products, and total cost
- Buy Again functionality

### Order Tracking

- Dedicated tracking page
- Displays delivery progress
- Shows estimated delivery date
- Dynamic progress bar

### Persistent Data Storage

- Uses localStorage to store:
  - Cart data
  - Order history
- Maintains state across page reloads and sessions

### Backend Integration

- Fetches product data from backend API
- Sends order data using POST requests
- Uses modern async/await and fetch API

## Testing (Jasmine)

This project includes unit tests using the Jasmine testing framework.

Tested components include:

- Currency formatting utility
- Cart functionality
- Order summary rendering
- localStorage interactions
- DOM rendering behavior

To run tests: tests/test.html

## Technologies Used

### Core Technologies

- JavaScript (Vanilla JS)
- HTML5
- CSS3

### JavaScript Concepts Used

- DOM manipulation
- ES6 modules
- Event handling
- Async/await
- Promises
- Fetch API
- URL parameters
- localStorage
- Error handling

### Object-Oriented Programming

- Classes
- Inheritance
- Encapsulation
- Method overriding

### Architecture Concepts

- Modular architecture
- Separation of concerns
- State management
- Data abstraction
- Utility functions

### Testing

- Jasmine (standalone version)
- Unit testing
- Mocking using spyOn()
- DOM testing

### External Libraries

- dayjs (date handling)

## Data Storage Architecture

This project does not use a traditional database.

Instead, it uses localStorage to simulate persistent backend storage.

This approach allows:

- Persistent state
- Stateless frontend architecture
- No backend dependency

## Backend API Used

Products and orders interact with: https://supersimplebackend.dev

Used for:

- Fetching product data
- Creating orders

## Learning Outcomes

This project helped develop a strong understanding of:

- Core JavaScript fundamentals
- DOM manipulation
- Modular JavaScript architecture
- Async programming
- Object-oriented programming
- State management
- Testing frontend applications
- Backend communication
- Real-world application structure

## Course Reference

This project was built as part of the: **JavaScript Tutorial Full Course by SuperSimpleDev**

Course topics covered include:

- JavaScript fundamentals
- DOM manipulation
- Arrays and objects
- Functions and advanced functions
- Modules
- Async programming
- OOP
- Testing with Jasmine
- Backend communication

## Future Improvements

Planned improvements include:

- More comprehensive test coverage
- UI improvements
- Single Page Application conversion
- Deployment

## Author

Indrajeet Bohra

GitHub: https://github.com/IndrajeetBohra

## License

This project is for educational purposes.
