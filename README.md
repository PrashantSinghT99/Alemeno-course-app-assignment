# Alemeno-course-app
Created this assignment as part of the hiring process this is a course app as per requirements and conditions responsive on all devices.

The app consists of an authentication interface used firebase as backend(Dummy credentials are email: alice@test.com , bob@test.com password: 12345678)

course listing page 

1) Fetched a list of sample courses but couldn't find free dummy API therefore replicated one with the data model provided.
2) Displayed the courses in a scrollable list with basic information and enable searching
based on course name and instructor (e.g., course name, instructor, etc.).
3) Users can click on a course to view its details.

course detail page

Created a new screen that displays detailed information about a
selected course 
Displayed course model provided as a reference for the structure of course data.

student dashboard

1) Created a user dashboard for students to display the courses they are enrolled in.
Include a user-friendly interface with a list of enrolled courses.
2) Display the course name, instructor name, thumbnail, due date, and a progress bar.
3) Implement a feature that allows students to mark courses as completed.

State management using Redux
Redux was not necessary for implementation though to show redux knowledge used it for authentication and authorization. Replicated local-storage and authorization of browser and api.

Future feature:

real-time connection with API that shows the number of likes instantly in course listing page and able to update data in the backend and it will show up instantly in the frontend have implemented similar features in other application check mern-chat-app for reference

To run code 

To run the application see the following two commands

npm install
npm start
