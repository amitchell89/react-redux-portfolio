export const projects = [
    {
       name: "My Personal Portfolio",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/covers/react_logo.png",
       url: "https://mitchellaaron.com",
       git: "https://github.com/amitchell89/react-redux-portfolio",
       about: "I built this website, my personal portfolio, to showcase my professional work, my personal artwork and my web development projects. I focused heavily on creating a clean, professional gallery setting that lets the work speak for itself. The site is mobile responsive, and was built from scratch using React, Redux, Node and Express. The site features basic authentication to password protect certain galleries on the site. It is bundled using webpack and uses a sass preprocessor for the css. It is hosted on DigitalOcean using a Caddy server. I would recommend anyone evaluating my coding skills to explore the public code on GitHub. ",
       hidden: false
    },
    {
       name: "Schillaci Guitars",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/covers/schillaci_guitars_logo_background.jpg",
       url: "http://www.schillaciguitars.com",
       git: "https://github.com/amitchell89/schillaci_guitars",
       about: "One of my first freelance web development projects was building a website for guitar luthier Darren Schillaci. The goal of the site was to create a clean and professional portfolio to showcase his custom guitars and necks and to promote sails via direct contact. I originally built the site in 2012 using php, and later rebuilt it in 2017 using the MERN stack (MongoDB, Express, React/Redux and Node). It’s bundled using webpack and uses a sass preprocessor for the css. The site is mobile responsive and features email collection and contact forms to generate leads. ",
       hidden: false
    },
    {
       name: "Moose Almighty",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/design/aaron_mitchell_moose_almighty_logo.png",
       url: "https://www.moosealmighty.com/",
       about: "I built a website for my band Moose Almighty using the MERN stack (MongoDB, Express, React/Redux and Node). The goal of the site was to create a platform for us to share our music with both fans and booking agents. The site is mobile responsive and features a press kit section, videos and recordings of our live performances, band photos, a calendar of upcoming shows powered by song kick, an email collection form and an online store powered by Shopify and Printful.",
       hidden: false
    },
    {
       name: "Link Ventures",
       url: "http://www.linkventures.com",
       wireframe: "../images/projects/mockups/Link_Ventures_Wireframe.jpg",
       mockup: "../images/projects/mockups/Link_Ventures_Mockup.jpg",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/logos/link_ventures.jpg",
       about: "Link Ventures is the Venture Capital Firm behind Cogo Labs in Cambridge, MA. While working at Cogo Labs in 2015, I led the rebranding of Link Ventures which included designing a new logo and website for the firm. The goal of the rebranding was to create a clean and modern website to showcase the Link Ventures brand and the portfolio of companies they had invested in. I began by doing competitive analysis of other venture capital firms such as Greylock, Sequoia Capital and First Round Capital. Next I met with key stakeholders to build a list of requirements. I then created a wireframe and gathered feedback from the investors. After incorporating their feedback I made a high fidelity mockup and we were approved to build. I worked with the Cogo Labs Web Engineering Team to build the site. I handled all the content, styling and responsive work while they focused on the back end infrastructure . The site utilized node, jade, stylus, jQuery and keystone JS for the CMS.",
       hidden: false
    },
    {
       name: "Janes Colony",
       url: "https://www.janescolony.com/",
       git: "",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/design/aaron_mitchell_janes_colony_logo.png",
       about: "Jane’s Colony is a marijuana lifestyle brand that I developed in 2017. I used the project to explore and research the burgeoning legal marijuana industry. I designed the logo and branding, built a website, and ran an instagram account that helped me learn about social media marketing. The website was built using the MERN stack (MongoDB, Express, React/Redux and Node). It featured an interactive map showcasing which states had legalized marijuana, laws from each state, an email collection form and a comprehensive guide on how to grow marijuana at home.",
       hidden: false
    },
    {
       name: "Boxes From Fucking Box Space",
       url: "https://boxesfromspace.com/",
       git: "",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/covers/aaron_mitchell_boxes_from_space.png",
       about: "In 2018 I began exploring the VR space after getting a Samsung Gear VR headset and learning about A-Frame, a web framework for building Virtual Reality Experiences. I built out several experiences, but the most complete was ‘Boxes from Fucking Box Space’ a simple VR shooter inspired by Tetris and Space Invaders that put the user up against an invading army of boxes from space. Each box destroyed would increase their score, while each that hit you would lower your life. In typical retro gaming fashion, the difficulty level of the game ramped up the more successful you were. One issue I learned about building web VR experiences, was that you are severely limited since there are no universal controllers users will have access to when using web VR. I instead opted to utilize the users ‘gaze’ as the games controller, with the gun moving around to wherever the user happened to be looking. Once their gaze was locked on to a box, a projectile would fire and it would be destroyed. While elegant in theory, I will admit that user testing this game with my friends proved this mechanic to be slightly vomit inducing when played inside a VR headset. Learning this, I limited the field of vision that boxes would emerge from to reduce the head movement needed to play. While a VR experience the game is also playable in a normal browser on desktop and mobile web.",
       hidden: true
    },
    {
       name: "Ombrely",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/logos/ombrely_logo.png",
       url: "https://ombrely.com",
       git: "https://github.com/amitchell89/ombrely",
       about: "Ombrély is a personal project built around my love of gradients (I know I’ll take some flak here but that’s fine by me). It started as a simple JavaScript exercise that I decided to turn into a full site using VueJs. Users can generate random gradients with the ability to view the css and copy that code to the clipboard.",
       hidden: true
    },
    {
       name: "Umbrella Check",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/logos/umbrella_check.jpg",
       url: "http://www.umbrellacheck.com",
       wireframe: "../images/projects/mockups/Umbrella_Check_Wireframe.png",
       mockup: "../images/projects/mockups/Umbrella_Check_Mockup.jpg",
       styleGuide: "../images/projects/mockups/Umbrella_Check_Style_Guide.jpg",
       about: "Umbrella Check is a weather site I worked on at Cogo Labs. The goal of the site was to leverage readily available weather API’s to make a mobile first weather application. I worked with a group of designers to plan the site and features, with the idea of umbrella alerts giving quick access to expected rain as our differentiating feature. After researching popular weather sites such as Wundergound, Accuweather and Forecast.io (now darksky.net), I reviewed the available data, I created the wireframe and gathered feedback from the design team. From there I designed a high fidelity mockup. then worked with the Cogo Labs Web Engineering Team to build the site. I helped building out the front end and handled all the styling and responsive work. The brand and logo were created by a coworker.",
       hidden: true
    },
    {
       name: "Thrive Medicare",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/logos/thrive_medicare.jpg",
       wireframe: "../images/projects/mockups/ThriveMedicare_Wireframe.png",
       mockup: "../images/projects/mockups/ThriveMedicare_Mockup.jpg",
       styleGuide: "../images/projects/mockups/ThriveMedicare_Style_Guide.png",
       about: "Thrive Medicare is a brand and website I designed for Equate Analytics, a Link Ventures company based out of Washington, DC. I worked on the project remotely. The goal of the site was to create a healthcare marketplace lead generation website using a modern design similar to www.healthcare.gov/. After researching the space I designed the logo and created a wireframe to review with the team. From there I made a high fidelity mockup and then worked with their lead developer in building out the front end and handled all the styling and responsive work. The site is built using Ruby on Rails, Html, Sass and jQuery. Equate Analytics and Thrive Medicare are no longer active.",
       hidden: true
    },
    {
       name: "Rekindld",
       wireframe: "../images/projects/mockups/Rekindld_Wireframe.jpg",
       mockup: "../images/projects/mockups/Rekindld_Mockup.jpg",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/logos/rekindld_logo.jpg",
       about: "Rekindld was a 50+ dating website I worked on at Cogo Labs. The goal was to create a dating web application marketed to users above 50 years old. The first step was research and exploring the differences in marketing and audience between sites such as match.com, ourtime.com and farmersonly.com and the differences in approach, characterized by the full extensive profiles of okcupid.com and the brief, picture heavy focus of apps like Tinder. We decided to marry the modern tinder like dating experience with a desktop accessible web app. From there I designed a wireframe, gathered feedback and made a high fidelity mockup. I then worked worked with our engineers to build an MVP version of the site. As soon as we had a working prototype of the site we organized a user test, bringing in users between the ages of 40 and 75 into the office to demo the app, and interview them about their online dating experiences. The user testing sessions were a revelation. Besides uncovering bugs and confusing UI elements, we also learned that our ‘senior dating’ marketing message and collateral was not aligned with out user base who did not view themselves in that light. Taking this info, we updated our messaging to be more inclusive and launched. The site was active for several months and experienced decent user growth, but was eventually deprioritized due to other projects and concerns about monitoring user-generated content. The site is no longer active.",
       hidden: true
    },
    {
       name: "Cogo Labs 404 Page",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/illustrations/Aaron_Mitchell_Cogo_Labs_404_Page.jpg",
       url: "http://www.cogolabs.com/404",
       about: "I was tasked with creating a fun and interesting 404 easter egg page for www.cogolabs.com. Much of our branding plays on space and exploration themes, so I envisioned a crash landing on an alien planet being the perfect metaphor for being lost. The final scene reminded me of the choose your own adventure books I read as a kid, so I opted for two mystery call to actions, with the ‘embrace the dark side’ leading to our careers page. It features CSS animation and a a digital illustration I made that has been layered to create a parallax effect based on the location of the mouse. ",
       hidden: true
    },
    {
       name: "Fuck 2016",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/design/Aaron_Mitchell_Fuck_2016_700.jpg",
       url: "http://www.fuck2016.com",
       git: "https://github.com/amitchell89/fuck2016",
       about: "Fuck2016 is brand I developed to capitalize on the 2016 presidential election. The site was quickly stood up without a framework to host a Shopify iframed online store. The products were created using theprintful.com, a site that allows you to upload designs, create products based on those designs, and fulfill individually printed orders received from your Shopify store. The site features Facebook and Twitter widgets, as well as Google Analytics tracking. I also maintained Facebook and Twitter pages for the brand. For advertising I was shut out of my initial plan to advertise on Facebook due to their profanity guidelines, but did end up seeing some sales from my Facebook page, Reddit and organic traffic after the results of the election and a John Oliver segment that happened to use the same message.",
       hidden: true
    },
    {
       name: "Table Flipper",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/logos/table_flipper.jpg",
       about: "Table Flipper is a node command line interface tool that I built to make coding emails easier and faster. It allows you to code emails using Jade for the markup, Sass for inline styles and Json for declaring variables and rendering options. The code is compiled into two versions, a clean production version, and a populated version for testing. It includes options to manipulate the final html by randomizing class names, shuffling html attributes and deleting unused classes.Table Flipper also provides a library of common partials for reusable elements and email fixes, and allows users to create blueprints, or starter templates for an even faster workflow. It utilizes nodemon for watching for changes and AWS syncing for quickly uploading images to Amazon S3.",
       hidden: true
    },
    {
       name: "Offer Coffer",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/logos/cogo_labs_logo.jpg",
       about: "Offer Coffer is a React / Flux / Bootstrap internal tool that is used to manage, edit and review email offers and associated assets (subject lines, email templates etc). I was tasked with designing a new site layout and UI, adding react router, adding filtering to our main list view (along with URL query filtering), enabling multiple items to be saved simultaneously (even though they were still processed individually by the API), redesigning alerts and updating the UI to allow permissions to be set on an granular level for every asset within an offer.",
       hidden: true
    },
    {
      name: "Arduino Keyboard",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/logos/Aaron_Mitchell_Arduino_Keyboard.jpg",
       git: "https://github.com/amitchell89/arduino-keyboard",
       about: "Using Arduino I built a tone generating keyboard. Its powered by a Mega Arduino 2560, which allows you more I/O than your standard arduino (54 pins). It features two octaves of Buttons and an up and down Octave Switch which moves the whole keyboard by one Octave. Its powered by battery and has both speaker and 1/4\" jacks so you can plug into your favorite amplifier.",
       hidden: false
    },
    {
      name: "Kenobot",
       image: "https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/projects/logos/keno_logo.png",
       git: "https://github.com/amitchell89/kenobot",
       about: "A Node App for scraping and analyzing Massachusetts Keno Data.",
       hidden: true
    }
  ]