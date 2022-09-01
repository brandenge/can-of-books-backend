# Project Name

**Authors**: Branden Ge and Robert Shepley
**Version**: ![Version](https://img.shields.io/github/package-json/v/brandenge/can-of-books-backend)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->
Can of Books is a full-stack CRUD application that allows the user to track what books they have read and what books they would like to read next.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
To build the site on your local machine, perform the following steps -

Clone the repository to your local machine.

```bash
git clone https://github.com/ShepleySound/can-of-books-frontend.git
cd can-of-books-frontend
```

Install dependencies

```bash
npm install
```

Rename .env.sample to .env

```bash
mv .env.sample .env
```

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

This project uses Express.js, dotenv, cors, Mongoose, and MongoDB. This backend is connecting to a database in a cluster on the cloud in MongoDB Atlas, using Mongoose.

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->
08-29-2022 - Application has a back-end with a functioning MongoDB database on a cluster in the cloud.
08-29-2022 - Application is sending data from the database to the front-end.
08-30-2022 - Added POST and DELETE methods to the backend.
08-31-2022 - Added PUT method and validation.

## Estimates
<!-- See below -->

### August 29, 2022

| Feature Name | Estimated Time | Start Time | Finish Time | Actual Time |
| ------------ | -------------- | ---------- | ----------- | ----------- |
| Initial Setup | 2 Hours | 3:00PM | 5:00PM | 2 hours |
| Storage       | 2 hours | 5:00PM | 7:00PM | 2 hours |
| Book Component | 2 hours | 7:00PM | 9:00PM | 2 hours |
| Add a new book | 2 hours | 6:15PM | 8:15PM | 2 hours |
| Delete a book | 2 hours | 8:15PM | 9:45PM | 1.5 hours |
| Update a book | 2 hours | 4:15PM | 7:45PM | 3.5 hours |

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

Audrey Peterson and Code Fellows demo code
[Lab 11](https://github.com/codefellows/seattle-code-301d88/tree/main/class-11/in-class-demo)
[Lab 12](https://github.com/codefellows/seattle-code-301d88/tree/main/class-12/in-class-demo)
[Lab 13](https://github.com/codefellows/seattle-code-301d88/tree/main/class-13/in-class-demo)

Created from a template repository from Code Fellows
[Template Repository](https://github.com/codefellows/can-of-books-backend-template)

## Collaboration

This section outlines an agreement between the collaborators that will help achieve a smooth development process.

### Logistical

- What hours will you be available to communicate?
  Anytime during/after class. Our time zones are relatively close. Between 2:30PM PST and 8:30PST will be our core working hours.

- What platform will you use to communicate (ie. Slack, phone …)?
  We will primarily use Slack for communication.**
- How often will you take breaks?
  As often as either person feels is necessary. We both have families and personal lives, and recognize that taking care of ourselves is an important part of working efficiently.
- What is your plan if you start to fall behind?
  Ideally, we will lean on each other's strengths to keep from falling behind and use our time efficiently. But if we do, we will work beyond our core hours to catch up.

### Cooperative

- Make a list of each person’s strengths.
  - Robert: Front-end, styling
  - Branden: JavaScript, back-end development
- How can you best utilize these strengths in the development of your application?  During pair programming, each person will guide the other in their areas of strength and attempt to learn as much as possible about their weaker areas.
- In what areas do you each want to develop greater strength?
  - Robert: Databases, Routing, back-end development
  - Branden: Front-End, networking, databases
- Knowing that every person in your team needs to understand the code, how do you plan to approach the day-to-day development?
We will primarily be pair programming, so we will be able to make changes and explain them to each other live.

### Conflict Resolution

- What will your team do if one person is pulling all the weight while the other person is not contributing?
We don't foresee that happening, but with a pair programming approach, we should be trading off enough that this won't be an issue.
- What will your team do if one person is taking over the project and not letting the other member contribute?
As with the above, we'll be pair programming and talking through any issues. Ideally, we'll both want to learn a lot from each other.
- How will you approach each other and the challenge of building an application knowing that it is impossible for two people to be at the exact same place in understanding and skill level?
Approaching the project with humility and a curiosity-focused mindset will help us avoid making this a stumbling block.
