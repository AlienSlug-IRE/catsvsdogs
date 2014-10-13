# Cats vs Dogs

A JavaScript based SPA to display GIF results from Giphy's developer API https://github.com/giphy/GiphyAPI.

The application should include the following features:

1. A control to show latest Cats or Dog results (no search field needed).
2. Results view with paging of 25 GIFs per page.
3. A detail view which shows the select GIF when clicked.

---

## Requirements

> You are free to use any JavaScript technology to implement this solution.

Backbone with requireJS was indicated as the preferred method so that was the framework used in this case.

> You should treat your code as if it were a going into production, so some tests and appropriate comments are expected.

There are comments applied where needed to help find the coding flow and explain anything considered more complicated than standard backbone practices as well as this README.md file to help clarify further details.

### User Flow

An array of options (A) presented to the user.

On selecting a single option, an array (B) of gif options available.

On selecting a single gif chosen (C), more details displayed.

With this in mind the approach of a Config controlled SPA. This is where the apps routes, API and paramters are located for ease of changes without development or template work required.

| Components    | Total        	|
| ------------- |:-------------:|
| Views			| 3 			|
| Templates     | 4				|
| Collections 	| 2 			|
| Controller	| 1				|

---

> We would like you to implement your own design without utilising any third-party CSS frameworks like Twitter Bootstrap.