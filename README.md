# Portfolio Project 

## Code Louisville Web Dev 1 Final 
### William Berry


### About the Project:

To create a responsive Portfolio page that displays contact information, resume, and completed projects. In addition to completing the necessary requirements to get a passing grade for the CL final, I wanted to challenge myself to add more JS and design elements than I have in previous projects. In doing so I found myself frequently researching outside of the course material and encountering challenges that expanded my understanding of CSS and JS.

### Requirements of Completion:

- [x] Project Plan
   - Completed Project Plan Submission Form

- [x] Project must be visually appealing
   - While appeal is subjective, I believe the palette, font, general layout is pleasing to the eye. (It better be.. I spent WAY to much time picking out colors.)

- [x] 2 media queries that create a better layout/user experience
   - Adding a media queries for mobile styling that vertically align content (see Home and Project Page) as well as sizing the navigation menu for different screen sizes.

- [x] Project is uploaded to Github and has 5 separate commits
   - While I did not commit every time I worked on the project. I have certainly achieved this requirement. 

- [x] Includes a README file with explanations of the project
   - I certainty hope I've completed this one. 

- [x] Fully formed website with Header Footer and Body Sections
   - admittedly I did not have a header or footer section until reading the Project Requirements doc for the 10th time. You live and learn I suppose. 

- [x] Best Effort at Semantic HTML
   -VScode does make the easy with lines that pair elements. Upon committing the final version of the project I made sure to clean up any white space I deemed unnecessary.

- [x] Project used either flexbox or grid for page layout
   -Achieved primarily through flexbox. 

- [x] Best effort to be accessible
   -Using Lighthouse from the Chrome inspector, the page received a score of 86 in accessibility.  

- [x] FEATURE 1: Create a custom animation that animates across the screen. 
   - Achieved by the full screen navigation menu that slide left to right over the course of 0.5s. 

- [x] FEATURE 2: Create accordion boxes to display different types of information. 
   - Once navigating to the About Page, 3 accordion boxes give the user information on how to contact me. 

- [x] FEATURE 3: Run PageSpeed Insights from google.com get a score of 80 or better.
   - With the assumption that Lighthouse is an acceptable tool to measure performance, all pages received a score of 99 in performance.  


### Features For Consideration:

- Animated linear gradient background
  -subtle as not to distract from the overall content, while providing variation to the background. 

- Modal Box with downloadable resume
  -clicking the 'More About Me' shows basic contact information as well as a resume that can be downloaded. 

- Fade in transitions
  - An attempt to add an eye catching element to the introduction to the page.  


### Challenges: 

Not knowing very much about JS going into the project, I wanted to make sure that I avoided simply copying and pasting code from various tutorials. Taking the time to watch videos or ask mentors about the HOW behind the JS I was writing was immensely valuable. 

In particular was the learning about the window.onload function. I noticed that the accordion boxes where not operating correctly, and using the inspector tool I found that variables assigned to the Modal box were returning 'null' and thus killing the JS for the accordion. However the navigation menu was working perfectly fine. 

The result was learning in real time that JS loads in order (which is why the the nav menu worked), and that window.onload would scan the html to verify that there was a Modal on that page before it ran that script. 

## Conclusion

Html, CSS, and JS are typically seen as things beginners learn. It is clear, however, how complicated they are to master and how seemingly infinite their capabilities are. WebDev1 from CL gave me a solid foundation that will help me build a strong skill set in these languages and beyond. 




