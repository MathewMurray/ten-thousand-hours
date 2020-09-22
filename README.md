Welcome! And I hope the day finds you well. This is the 
# 10,000 hours application.

## What is 10,000 hour?

This application was built on the idea that spending a signifigant amount of time on a skill/concept will lead to mastery of that subject. 
The application works like a personal blog that each individual user can set goals with a target amount of hours, then post logs that are
saved to those goals for the user to track their progress towards their target. 

check out the live version here:
https://ten-thousand-hours.vercel.app/

demo user account has been set up. simply log in with the following:
username: Demo
password: Demo1234!

you may also register if you'd like! 


## Home page -
![Alt text](/screenshots/homepage.png?raw=true "Optional Title")
this component is the first one you will see when you load the page. it contains links to login and register with the database.
When a user is logged in, this page will change the links on the header to display links to the Userpage, add goals as
as well as allow the user to log out.
  
## User Page - 
![Alt text](/screenshots/userpage.png?raw=true "Optional Title")
This displays the user's goals as active links that will go to an indiviual goal page where logs are found for that goal.
This also contains links to the home page, User page(goals), the add goals page and a log out page. 
  
## Add Goals - 
![Alt text](/screenshots/addgoalpage.png?raw=true "Optional Title")
Here a user can add a new goal. The user is asked to input a title for the goal and a target for how many hours they want
to spend on this goal(in numarical value).
  
## Goals page - 
![Alt text](/screenshots/goalpage.png?raw=true "Optional Title")
This displays the individual user goal the user selected from their user page. Here is shows the goal title, target hours 
and any logs the user has made. It also allows the user to add a new log via the form at the bottom of the screen. To add
a new log, the user would input what they did and for how long. When submitted, the log will show under the goal target 
in a list along with any other logs for that goal. The log will display the activity, posted date, and the recorded hours.
  
## Tech Stack:

This application, along with its back end support were built using React, express and Postgresql.
