[![Node.Js Connect Logo](http://www.nodejsconnect.com//sites/default/themes/drupalconnect/images/layout/logo-lo.png)](http://www.nodejsconnect.com/)

# Easy HTTP POST testing with the request module

## Code Examples for [Node.Js Connect](http://www.nodejsconnect.com/) Blog Post: Easy HTTP POST testing with the request module.

## Dependencies

What you need to run this app:

* [Node.Js](https://nodejs.org)

## Instructions

### Setup

* Clone this repo: git clone https://github.com/kevinchisholm/easy-http-post-testing-with-the-request-module.git
* Run this command: **npm install**

### Running the examples

* Open up two terminal windows (terminal A and terminal B), and make sure that you are in the root of the repository folder.
* In **terminal A**, execute this command: **node post-server.js**.
* In **terminal B**, execute this command: **node test-post.js**.
* In **terminal A**, you should see the message: **The POST data received was XXX**.
* In **terminal A**, you should see the message: **JSON response from the server: XXX**.

_(In each case, **XXX** represents the data from the HTTP POST request)_