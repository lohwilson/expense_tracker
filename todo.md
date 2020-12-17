# Fullstack JavaScript assignment

## Description

This page describes the assignment for a FullStack JavaScript position.

## Duration

The duration of this assignment is 1 week. The scope of the assignment is intentionally large to give you room to show which aspects of development you would prioritize.

## Goals

The goal of the assignment is to check if you are able to:

- Create an entire application from scratch, using:
  - `React` for the front-end,
  - `Node.js` for the back-end,
  - `Mongodb` for the data persistence.
- Develop a user interface that will match a given design.
- Use git with readable and descriptive commits.
- Use best practices when it comes to development, project structure and code quality.
- Write clean, modular, well-organized and reliable code.
- Cover your code with unit / e2e tests with different test scenarios.
- Handle exceptions and errors appropriately.
- Handle forms validation.
- Write clear and concise documentation with the consumers of your code in mind.

## Application to develop

You must develop an application allowing employees to encode their company expenses.

## Requirements

1. Create a public git repository.

2. Create an API with `Node.js`, using the `Express.js` library.

   Define endpoints in order to allow the API consumer to:

   - Register

     - The consumer should not be able to register if the username is already taken.
     - The password must contain at least 8 characters, 1 digit and 1 symbol.

   - Login

     - The API call must return a `JWT` token. That token must be sent back to the API for any other request to authenticate the user.

   - Create a new personal expense

     - The `JWT` token from the login request must be sent along with the request in order to authenticate the user.
     - The amount of the expense cannot be negative or 0.

   - Retrieve personal expenses
     - The `JWT` token from the login request must be sent along with the request in order to authenticate the user.
     - The consumer should be able to send query parameters along with the request in order to filter the list (search by type or keywords).

   Note:

   - The above endpoints must return the appropriate `HTTP` status code (`200`, `400`, `401`, `404`, `500`, ...) and data.
   - You are allowed to add other endpoints if needed.

   Data must be persisted in a `Mongodb` database:

   - An user must contain at least the following data:

     - An username,
     - A first name,
     - A last name,
     - A password.

   - An expense must contain at least the following data:
     - A date,
     - A type (enum of types),
     - A description,
     - An amount,
     - A currency,
     - An image (proof),

   Note:

   - You are allowed to use third-party libraries.
   - The code should be covered by tests.

3. Create a web application using `ReactJS` library.

   When opening the application for the first time, the user should be redirected to the login page. He/she can then login or go to the register page.

   Once logged in, the user will be redirected to a page listing all his personal expenses. On that page, the user must be able to:

   - Filter his personal expenses by type (Education | Equipment | Utility | Meals & Entertainment | Other). When clicking on a type, the list should be updated. You can define your own list of enum types.
   - Search for expenses. The list should be updated when the user stops typing.
   - Create a new expense. The form must be validated upon submit (for instance, the amount can't be negative, the other fields are mandatory, etc.).
   - Select a preferred currency. When selecting a currency:
     - The list should be updated to show the amounts in that currency.
     - When creating an expense, the currency should be pre-populated with the default currency.
       You must use https://exchangeratesapi.io/ API for the amounts conversion.
   - Logout from the application.

   Note:

   - The code should be covered by tests.
   - The design of the application should match the design defined in the `materials` folder.
   - You are allowed to use third-party libraries to help you with the design layout (Bootstrap, SemanticUI, etc.).
   - You are **not** allowed to use third party librairies to use ready-to-use `React.js` components.

4. Document how your application is structured and the design choices you've made.
5. Document the available endpoints in the API.
6. Explain how to setup and start your application after we clone your repository.
7. Send the link of your github repository for reviewing to jlow@maltem.com.

**Remarks**

Feel free to add everything you think meaningful to your application (improvement, new feature, ...), as long as the above requirements are met.
