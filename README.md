# Subscription-Calculator
This app helps users list their monthly subscriptions, see the total monthly and annual costs, and get reminders for upcoming renewals.
Here is a `README.md` file for the Subscription Tracker project.

-----

## 🧾 Subscription Tracker

A simple but powerful web application to help you keep track of your monthly recurring subscriptions. This tool makes it easy to see exactly where your money is going and provides helpful reminders for upcoming payments, preventing unwanted charges.

-----

## ✨ Features

  * **Subscription Management:** Easily **add** new subscriptions with a name, monthly cost, and next billing date. **Delete** subscriptions you no longer need with a single click.
  * **Cost Analysis:** The app automatically calculates and prominently displays your **total monthly spend** and the eye-opening **total annual spend**.
  * **Upcoming Renewal Alerts:** Subscriptions with a billing date within the next 7 days are automatically **highlighted**, giving you a visual warning to review or cancel them.
  * **Data Persistence:** Your subscription list is saved directly in your browser's `localStorage`. Your data remains safe and sound even if you close the tab or restart your browser.
  * **Clean & Responsive:** A straightforward, user-friendly interface that works perfectly on desktops, tablets, and mobile phones.

-----

## 🛠️ Tech Stack

This project is built with fundamental web technologies, making it lightweight and easy to understand.

  * **HTML5:** Provides the semantic structure for the form and subscription list.
  * **CSS3:** Styles the application for a clean, modern, and intuitive user experience.
  * **JavaScript (ES6+):** Handles all application logic, including adding/deleting items, calculating totals, checking dates, and interacting with `localStorage`.

-----

## 🚀 How to Use

You can run this project locally without any complex installation or build steps.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/subscription-tracker.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd subscription-tracker
    ```
3.  **Open the `index.html` file in your favorite web browser.**

That's it\! You can now start tracking your subscriptions.

-----

## 📂 File Structure

The project code is organized into three distinct files:

  * **`index.html`**: The main HTML file containing the structure of the app, including the input form, totals display, and the list container.
  * **`style.css`**: Contains all the CSS rules for styling the application, including the layout, colors, and the highlight effect for upcoming renewals.
  * **`script.js`**: The core of the application. This file contains all the JavaScript code for handling user interactions, managing the subscription data array, performing calculations, and saving data to `localStorage`.
