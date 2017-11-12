### Table of Contents

-   [getRiderData](#getriderdata)
-   [getDriverData](#getdriverdata)
-   [addNewDestination](#addnewdestination)
-   [fillArrays](#fillarrays)
-   [updateDriverEmail](#updatedriveremail)
-   [updateRiderEmail](#updaterideremail)
-   [match_notification](#match_notification)
-   [signInUser](#signinuser)

## getRiderData

This funtion appends date departure, zipcode of destination, your rider's email, and you roder's phone number. Nothing will happen if the user is not a driver to any destinations.

**Parameters**

-   `uEmal` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** email address of user currently signed in

## getDriverData

This funtion appends date departure, zipcode of destination, your rider's email, and you roder's phone number. Nothing will happen if the user is not a driver to any destinations.

**Parameters**

-   `uEmal` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** email address of user currently signed in

## addNewDestination

Adds a new destination to the database

**Parameters**

-   `tData` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** specific destination
-   `tDriverEmail` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** driver email that will be added
-   `tRiderEmail` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** rider email that will be added

**Examples**

```javascript
addNewDestination("12278 12342019 University of Kansas", "newDriver@email.com", "newRider@email.com");
```

## fillArrays

Fills two arrays. One contains all of the rider emails and one contains all of the driver emails that have parents who's detinations match the one just submitted by the user

## updateDriverEmail

Updates the email address of the driver for a specific destinatin

**Parameters**

-   `toCodeVal` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** specific destination
-   `newEmail` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** email to update to

**Examples**

```javascript
updateDriverEmail("12278 12342019 University of Kansas", "new@email.com");
```

## updateRiderEmail

Updates the email address of the rider for a specific destinatin

**Parameters**

-   `toCodeVal` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** specific destination
-   `newEmail` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** email to update to

**Examples**

```javascript
updateRiderEmail("12278 12342019 University of Kansas", "new@email.com");
```

## match_notification

Sends an email to a user

**Parameters**

-   `message_name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Subject line for the email
-   `message_body` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Body of email
-   `email` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** address to send message to

**Examples**

```javascript
match_notification("Subject", "Message", "notReal@email.com");
```

## signInUser

Signs in a user to the website

**Parameters**

-   `userEmail` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** email associated with user's account
-   `userPassword` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** password associated with user's account

**Examples**

```javascript
signInUser{"notReal@email.com", "password123"}
```
