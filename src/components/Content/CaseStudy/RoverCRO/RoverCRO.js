import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import InlineImage from '../../../Global/InlineImage';

export default class RoverCRO extends Component {

  render() {
    return (
      <div className="RoverCRO case-study-images">

        <h1>Rover Growth & CRO</h1>

        <section>

        	<h2>Building a Roadmap</h2>

	        <InlineImage 
		        src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/case-study/cro/rover_cro_scenario_mapping.jpg"
		        position="right"
		        label="CRO Research: Funnel Scenario Mapping"
		      />

	        <p>
	        Through almost all of my tenure at Rover I have been the primary designer on the growth team which is focused on increasing new bookings through Conversion Rate Optimization, Search Engine Optimization and User Referral initiatives. In August 2019 Rover hired a dedicated CRO project manager. This created an opportunity for the product manager and I to completely reassess our core funnel and prioritize a research driven roadmap that put the needs of our customer first. This change in project prioritization was one of my biggest achievements in the growth space. “... [Aaron] transformed the way the Growth PM team works with UX and approaches work … taking the Growth product space from a fairly reactive one, to a more customer focused, strategic product space.” (2019 Review)
	        </p>
	        <p>
	        We started with an extensive research phase that combined scenario mapping, user testing, customer interviews and existing research to learn what drives our customer at every step of the funnel. We identified an extensive list of issues and potential opportunities, which we then prioritized based on the opportunity size. We primarily focused on mobile web, a platform which saw some of the lowest conversion numbers on Rover despite our best efforts to be a mobile first company. 
	        </p>
	        <p>
	        Here are a few of the many Growth projects I worked on. 
	        </p>

        </section>

        <section>

	        <h2>Mobile Web Profile - Reorganize content and add Navigation</h2>

	        <p>
	        Our first priority was looking at the pet sitter profile, which is a crucial step for the customer to evaluate sitters and determine if they are willing to leave their pets in the sitters care. The sitter profile was performing significantly worse on mobile web than on desktop or our native apps. With a majority of our web traffic coming on mobile, it’s underperformance was a huge opportunity for optimization. 
	        </p>

	        <InlineImage 
		        src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/case-study/cro/rover_cro_profile_update_navigation.jpg"
		        position="left"
		        label="Left: Leading with the about section. Right: Profile Navigation"
		      />
		      
	        <p>
	        Our hypothesis was that the content on the mobile web profile was incredibly long, unorganized and frankly hadn’t been considered in any meaningful way. The layout was primarily dictated by the fact that the desktop sidebar was placed above the main content on mobile. Also the information architecture was inconsistent, content that should be grouped together wasn’t, meaning users would have to hunt on the page to find what they were looking for. 
	        </p>
	        <p>
	        In our user research we learned that the two most important factors in the customer’s decision making process were reviews from other customers, and the sitters biography, which gave them a look at their character and pet care style. Knowing this, we redesigned the information architecture on the page to prioritize these two pieces of information first, so users would see what they needed immediately and spend less time hunting on the page. We then did a general cleanup on the page, reducing redundancy and grouping similar content together. This allowed us to also design a followup test that added navigation to the page, similar to our mobile apps, so that users could quickly navigate to the section most relevant to them. 
	        </p>
	        <p>
	        We launched an A/B/C test with two content variants to determine if reviews or a short biography would perform better as the lead item on the profile. Both variants outperformed the control, with the biography variant being the most successful. This matched our expectations, as it was a warmed intro to ‘hear from the sitter’ before you read their reviews. We then conducted the followup test that added navigation to the page, which also won. The combined projects led to a 2% overall increase in Search to Book conversion. The lift was even higher at 3% for new non-authorized users. 
	        </p>

        </section>

        <section>

	        <h2>Logged Out App Experience</h2>

	        <InlineImage 
		        src="https://blacksquare.nyc3.digitaloceanspaces.com/portfolio/case-study/cro/rover_logged_out_app_experience_flow_chart.png"
		        position="right"
		        label="The logged out experience flow chart"
		      />

	        <p>
	        Traditionally, our native apps had featured an authentication wall immediately upon opening the app, forcing users to commit to giving us their personal information before they’d learned about what Rover is and what services we offer. This was different from our web experience, which let users search for sitters and view their profiles without having to sign up.   Our hypothesis was that if we allowed users to navigate the app, in a similar fashion to our web experience, less users would bounce after downloading the app, and more users would convert and book a Rover service. 
	       	</p>
	       	<p> 
	      	To start this project, I mapped out the entire Rover app experience in a flowchart so we could evaluate each view and determine whether it should be accessible to an unauthenticated customer. I began marking different views as green, to keep, or red, to hide behind authentication. This quickly created a visual representation of what the project would look like that we could discuss with the developers to begin planning the backend infrastructure requirements before I had even started designing. This was a crucial step in saving us time and reducing scope, as the developers could weigh in on the effort of allowing access to each view. Once we had finalized the new unauthenticated site map, I designed the UX changes, which focused on updating the authentication screens, and removing inaccessible navigation items across the app. I then produced a high fidelity spec which merged these UX changes with the sitemap to create a working document for the developers to reference. 
	      	</p>
	      	<p>
	      	The first moment of success for me was in the bug bash prior to launch, We had no significant issues come up which was a testament to the close collaboration we had with the developers starting at kickoff, and helped us get this project out the door on schedule. The test was also a success, as we saw the ‘Install to Book’ Metric rise from 4.52% to 4.69%, allowing us to deploy the change to 100% of users in March 2020. 
	      	</p>

	      </section>

      </div>
    )
  }
}
