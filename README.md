# CFLMS-Oxales-CodeReview-03

Third Website Project

Project description:

Car insurances are one of the biggest hassles in adult life. Even more so, finding an insurance company nearby and getting a quote can be surprisingly tedious! 
This week's CodeReview is going to solve all that!

Your tasks will be:

1. To create a homepage for a car-insurance company.
Create a landing-page index.html with a rich design based on our layout proposal

2. Create an input form on the index.html page, where a customer can ask for an insurance-quote.
Create a form to input the customer’s name, age, country of origin (Austria, Hungary, Greece) and the horsepower of their car. 
Upon clicking on the "Calculate" button of the form, run a calculateInsurance() function that calculates the insurance and shows the results on the “Printed calculation goes here” area of the screen 
- this area should not be visible until the user fill the form and press “calculate” button.


For this CodeReview, the following criteria will be graded:

- Correct usage of the HTML structure (proper order of HTML elements).

- Correct code structure (aka code indentation) for the HTML and Javascript code, that makes it easier for humans to read.

- Clear separation of CSS, JavaScript and images in distinct folders: css, js, img (access through relative paths).

- Correct CSS styling according to the provided design (colors, layout, fonts etc. Pay attention to the small details like shadows, rounded corners, etc.). Feel free to improve the design if you want.

- Create at least one media query to make the webpage responsive.

- Create a new function calculateInsurance(). This function does a calculation with a formula based on the selected country:

                                          For Austria : insurance = horse_power x 100 / age   + 50;

                                          For Hungary: insurance = horse_power x 120 / age  + 100;

                                          For Greece: insurance = horse_power x 150 / (age+3)  + 50;


- Extract the values from the input fields and use them as calculation values for calculateInsurance() function. (hint: pay attention to type conversion!)

- Use these calculated values to present the insurance price on the screen where "printed calculation goes here" is placed (see image example). e.g. “John, your insurance costs 300 €”


Bonus Points:

- Display the employees within the team.html (provide your own design of this page) outputting the data using objects(see below)

- Add more information to the objects (i.e more information other than name, email and image). When a member is clicked on (for example, Bill), then more information should be displayed about this specific member(i.e. Bill in this example). 



var teamMembers = [
                    {name:"Fran", email:"fran@index.com",image:"images/person1.png"},
                    {name:"Bill",email:"bill@index.com",image:"images/person2.png"},
                    {name:"Fritz", email:"fritz@index.com",image:"images/person3.png"}
                  ];

Hint: Make a loop to display this data on the page in a fitting manner. 
