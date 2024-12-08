# 🛒 Shopping Cart Project

This project is a simple Shopping Cart web application implemented using **AngularJS 1.0**. It features product display, search functionality, and cart management (add, update, remove items). The project is deployed on **Netlify**.

---

## 📖 Table of Contents

1. [How to Run the Project](#how-to-run-the-project)
   - [Prerequisites](#prerequisites)
   - [Steps to Run Locally](#steps-to-run-locally)
   - [Run on Netlify](#run-on-netlify)
2. [Features](#features)
3. [Challenges Faced](#challenges-faced)
4. [Future Enhancements](#future-enhancements)

---

## 🚀 How to Run the Project

### Prerequisites

1. Install a modern web browser (e.g., Google Chrome, Mozilla Firefox).
2. (Optional) Install a local development server like **http-server** for testing the application locally.

### Steps to Run Locally

1. **Clone or Download the Repository:**

   - Clone the repository or download the ZIP file and extract it.

2. **Navigate to the Project Directory:**

   ```
   cd path/to/project
   ```

3. **Start a Local Server:**
   If you have **http-server** installed, run:

   ```
   http-server
   ```

   Open the provided URL (e.g., `http://127.0.0.1:8080`) in your browser.

   Alternatively, you can open the `index.html` file directly in your browser (this may result in limited functionality due to browser restrictions).

4. **Interact with the Application:**

   - View products, search for items, add them to the cart, and view the cart.

### Run on Netlify

The application is deployed on Netlify. Use the following URL to access it:

```
https://Shopping_Cart.netlify.app
```


## ✨ Features

- Product catalog with images, names, and prices.
- Search functionality for filtering products by name.
- Add products to the cart.
- Update product quantity in the cart.
- Remove products from the cart.
- Calculate total cart value.
- Responsive design to ensure usability across devices.

---

## 🛠️ Challenges Faced

### 1. Maintaining AngularJS 1.0 State Across Page Refreshes

- **Issue:** When the page was refreshed, the cart data was lost.
- **Solution:** Implemented localStorage to persist cart data.

### 2. Styling the Cart and Product Grid

- **Issue:** Aligning two products in a row and ensuring a responsive layout.
- **Solution:** Used `flexbox` in CSS with appropriate `media queries` to adapt the layout for smaller screens.

### 3. Loading Screen Implementation

- **Issue:** Adding a loading screen that disappears after page load.
- **Solution:** Used a `loading-screen` overlay with a `DOMContentLoaded` event listener in JavaScript.

### 4. Deployment on Netlify

- **Issue:** Some resources were not loading properly after deployment.
- **Solution:** Verified all paths were relative and ensured files were uploaded correctly.

---

## 🌟 Future Enhancements

- Implement user authentication.
- Add backend support for saving cart data.
- Integrate payment gateway for checkout.

---



