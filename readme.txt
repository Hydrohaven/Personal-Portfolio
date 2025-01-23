--Readme document for *author*--

A reminder on academic integrity, as described in the syllabus.

In general, the course staff expects that you will look at code and examples from many online resources as part of the assignments, particularly to resolve syntax and understand frameworks. We expect that you'll use other libraries you find, and will even require it in some assignments. These practices are often critical to the work of developers today. The best developers are adept at interpreting the examples they see, customizing them to their specific situation, and citing their sources so they can find them later. We expect you to do the same.

While learning from examples is encouraged, attempting to pass an existing project or example from the web as your own is not allowed. If you ever have a question about what is or is not appropriate, feel free to ask the course staff!

Talking to classmates about class material, assignment requirements, etc. is a great way to verify ideas and get feedback. But this distinctly does *not* permit attempting to pass off someone else’s code as your own. Talking over ideas and approaches is allowed, but the work that you produce and submit must be your own.

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 Readme
- 2/2 Basic HTML content
- 1/1 Basic CSS styling
- 1/1 Advanced feature
- 2/2 Responsive layout
- 1/1 Passes validation checks
- 2/2 Embraces spirit of the assignment

2. What (a) basic features, (b) CSS features, and (c) advanced features did you include in your portfolio?

(a) Basic features
- At least one image with descriptibe alt attributes across each section of the portfolio
- Appropriate headings and paragraph text for my Projects and Experiences
- Links to external pages such as my GitHub, LinkedIn, and Resume
- Semantic HTML tags like nav and footer
- Custom GitHub, LinkedIn, Resume, and Mail icons from FontAwesome


(b) CSS features
- Modified the padding and margins of various elements
- Modified text color and background colors to follow a palette and theme (I went with a beach/ocean theme)


(c) Advanced features
- Created a more complex page layout, implementing a navbar


3. How long, in hours, did it take you to complete this assignment?
15-20 hours


4. What online resources did you consult when completing this assignment? (list specific URLs, describe queries to Generative AI, or use of AI-based code completion)
- I used the Ocean Simulation example from the official Three.js GitHub located here https://threejs.org/examples/webgl_shaders_ocean.html and https://github.com/Sean-Bradley/three.js
- Three.js official documentation to understand the library https://threejs.org/docs/
- TailwindCSS official documentation https://tailwindcss.com/docs/
- Many generative AI queries (ChatGPT) to understand the many innerworkings between React, TailwindCSS, and Three.js
  - Queries ranged from topics of how to implement certain flex layouts using TailwindCSS
  - Understanding various elements of Three.js code
  - Understanding how to decrease the resolution of 3D renders, and thus increasing computer performance 


5. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
- A fellow student, Nathan Henry Ong, for guidance using TailwindCSS and understanding project instructions
- My girlfriend, Margaret Sara Galvez, for general input on my designs and styling
- My siblings, for general input on designs as well


6. Is there anything special we need to know in order to run your code?
- Nope! No downloads necessary as I entirely utilize CDNs. Cloning my repo and running index.html should be enough

VALIDITY EXPLANATION
The CSS validity checker is flagging things it shouldn't
  1. It says "scrollbar-gutter: stable" doesn't exist when it does as proof on the mdn web docs https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter
     It probably is not up to date as scrollbar-gutter I believe was added recently in December 2024.
  2. My font-awesome import creates css animation that get flagged by the validity checker. Even though they are fine as they are part of a library in the project instructions.
