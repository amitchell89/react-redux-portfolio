export const projects = [
    {
       name: "My Personal Portfolio",
       image: "projects/react__logo.jpg",
       url: true,
       url_link: "http://www.mitchellaaron.com",
       git: true,
       git_link: "https://github.com/amitchell89/react-redux-portfolio",
       about: "This website is built using React and Redux on an express framework. Its bundled using webpack and uses a sass preprocessor for the css.",
       hidden: false
    },
    {
       name: "Link Ventures",
       url: true,
       url_link: "http://www.linkventures.com",
       image: "projects/cogo_labs_logo.jpg",
       git: false,
       git_link: "Work Project (Code Not Public)",
       about: "Link Ventures is a portfolio site for the investment firm that backs my Cogo Labs. I designed the brand and logo, created the wireframe and site layout, designed the mockup, contributed in building out the front end and handled all the styling and responsive work. It was built on a proprietary framework that utilized node, jade, stylus, jQuery and keystone JS for the CMS.",
       hidden: false
    },
    {
       name: "Umbrella Check",
       image: "projects/cogo_labs_logo.jpg",
       url: true,
       url_link: "http://www.umbrellacheck.com",
       git: false,
       git_link: "Work Project (Code Not Public)",
       about: "Umbrella Check is a weather site I worked on at Cogo Labs. I created the wireframe and site layout, designed the mockup, contributed in building out the front end and handled all the styling and responsive work. The brand and logo were created by a coworker.",
       hidden: false
    },
    {
       name: "Thrive Medicare",
       image: "projects/cogo_labs_logo.jpg",
       url: true,
       url_link: "http://www.thrivemedicare.com",
       git: false,
       git_link: "Work Project (Code Not Public)",
       about: "Thrive Medicare is a healthcare marketplace lead generation website I worked on at Cogo Labs, for one of our portfolio companies, Equate Analytics. I designed the brand and logo, created the wireframe and site layout, designed the mockup, worked with their lead developer in building out the front end and handled all the styling and responsive work. The site is built using Ruby on Rails, Html, Sass and jQuery.",
       hidden: false
    },
    {
       name: "Cogo Labs 404 Page",
       image: "illustrations/Aaron_Mitchell_Cogo_Labs_404_Page.jpg",
       url: true,
       url_link: "http://www.cogolabs.com/404",
       git: false,
       git_link: "Work Project (Code Not Public)",
       about: "I was tasked with creating a fun and interesting 404 easter egg page for my works main website. It features a digital illustration I made that has been layered to create a parallax effect based on the location of the mouse.",
       hidden: false
    },
    {
       name: "Schillaci Guitars",
       image: "design/Aaron_Mitchell_Schillaci_Guitars_Logo_700.jpg",
       url: true,
       url_link: "http://www.schillaciguitars.com",
       git: true,
       git_link: "https://github.com/amitchell89/schillaci_guitars",
       about: "Schillaci Guitars is a website I designed and built as a freelancer in 2012. It was made for a guitar luthier to showcase his past projects and to promote sales. It was built using PHP without a framework or CMS. It utilizes fancybox for the modal gallery on each guitar page and a phpMyAdmin database for serving up images and information about the different guitars. The site is still in use and occasionally updated.",
       hidden: false
    },
    {
       name: "Fuck 2016",
       image: "design/Aaron_Mitchell_Fuck_2016_700.jpg",
       url: true,
       url_link: "http://www.fuck2016.com",
       git: true,
       git_link: "https://github.com/amitchell89/fuck2016",
       about: "Fuck2016 is brand I developed to capitalize on the 2016 presidential election. The site was quickly stood up without a framework to host a Shopify iframed online store. The products were created using theprintful.com, a site that allows you to upload designs, create products based on those designs, and fulfill individually printed orders received from your Shopify store. The site features Facebook and Twitter widgets, as well as Google Analytics tracking. I also maintained Facebook and Twitter pages for the brand. For advertising I was shut out of my initial plan to advertise on Facebook due to their profanity guidelines, but did end up seeing some sales from my Facebook page, Reddit and organic traffic after the results of the election and a John Oliver segment that happened to use the same message.",
       hidden: false
    },
    {
       name: "Table Flipper",
       image: "projects/cogo_labs_logo.jpg",
       url: false,
       url_link: "Command Line Tool. No UI",
       git: false,
       git_link: "Work Project (Code Not Public)",
       about: "Table Flipper is a node command line interface tool that I built to make coding emails easier and faster. It allows you to code emails using Jade for the markup, Sass for inline styles and Json for declaring variables and rendering options. The code is compiled into two versions, a clean production version, and a populated version for testing. It includes options to manipulate the final html by randomizing class names, shuffling html attributes and deleting unused classes.Table Flipper also provides a library of common partials for reusable elements and email fixes, and allows users to create blueprints, or starter templates for an even faster workflow. It utilizes nodemon for watching for changes and AWS syncing for quickly uploading images to Amazon S3.",
       hidden: false
    },
    {
       name: "Offer Coffer",
       image: "projects/cogo_labs_logo.jpg",
       url: false,
       url_link: "Internal Tool. Not Public Facing",
       git: false,
       git_link: "Work Project (Code Not Public)",
       about: "Offer Coffer is a React / Flux / Bootstrap internal tool that is used to manage, edit and review email offers and associated assets (subject lines, email templates etc). I was tasked with designing a new site layout and UI, adding react router, adding filtering to our main list view (along with URL query filtering), enabling multiple items to be saved simultaneously (even though they were still processed individually by the API), redesigning alerts and updating the UI to allow permissions to be set on an granular level for every asset within an offer.",
       hidden: false
    }
  ]