import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resumeData: {
  "main": {
    "name":"Vaibhav Gattani",
    "image":"profilepic.jpg",
    "website": "http://www.vaibgattani.com",
    "resumedownload":"https://drive.google.com/file/d/1UQEUcYUkF-Z3s4nbl4KWcfs8nC_N_MXh/view?usp=sharing",
    "social":[
      {
        "name":"facebook",
        "url":"http://facebook.com/VaibhavGattani",
        "className":"fa fa-facebook"
      },
      {
        "name":"linkedin",
        "url":"https://www.linkedin.com/in/vaibhavgattani/",
        "className":"fa fa-linkedin"
      },
      {
        "name":"instagram",
        "url":"http://instagram.com/vaibgattani",
        "className":"fa fa-instagram"
      },
      {
        "name":"github",
        "url":"http://github.com/VaibG",
        "className":"fa fa-github"
      }
    ]
  },
  "experience":{
    "skillmessage":"Here you can create a short write-up of your skills to show off to employers",
    "education":[
      {
        "school":"University of California, Berkeley",
        "degree":"Bachelors in Computer Science and Business Administration",
        "graduated":"Expected May 2021",
        "description":"Relevant Coursework: CS61A Structure and Interpretations of Computer Programs, CS61B Data Structures, CS70 Discrete Mathematics and Probability Theory, CS61C Systems and Architecture, CS170 Problem Solving"
      },
      {
        "school":"United World College of South East Asia - Dover",
        "degree":"International Baccalaureate, IGCSE",
        "graduated":"May 2016",
        "description":"Completed the IB Diploma at UWCSEA - Dover.\nHigher Level: Computer Science, Further Mathematics, Mathematics, Economics.\nStandard Level: Physics, English: Language and Literature, Spanish.\nActivities and Societies: Model United Nations, UWC Debate Team, Mathematics Competition Club, UWC Tennis Team, HS Percussion Ensemble, Symphonic Band, Interscol (Yearbook) Head of Business, Lights for Sri Lanka GC"
      }
    ],
    "work":[
      {
        "company":"GroupStar",
        "title":"iOS Developer Intern",
        "years":"June 2019 - August 2019",
        "description":"GroupStar is a video creation B2B company that enables anyone to create professionally edited videos. At GroupStar, I migrated the iOS application to a new Restify API backend and migrated all the platforms from Azure to AWS. I improved user experience by standardizing the application design according to iOS design principles and removing redundant API calls. I worked with a Postgres SQL database to make edits to the API calls, lowering the app loading times by 20%"
      },
      {
        "company":"Singapore Armed Forces",
        "title":"Second Sergeant, Section Commander",
        "years":"July 2016 - July 2018",
        "description":"Received a Silver Bayonet award as an Honor Graduate (top 8%) in the Sergeant course. As a Section Commander, I managed a section of 20-40 newly enlisted recruits, helping them transition from civilian to army life. Promoted from Third Sergeant to Second Sergeant in May 2018."
      },
      {
        "company":"MyDoc",
        "title":"Android Development Intern",
        "years":"October 2014",
        "description":"Collaborated with a team of 3 to execute a mobile application, with a purpose of helping doctors reach patients. Also, designed a video call feature on Android and on the web using JavaScript and HTML, hosted by OpenTok servers."
      }
    ],
    "skills": "Java, Python, Swift, React, JavaScript, Android, SQL, Scheme, AppleScript, Pandas, Numpy, PyTorch, PostgreSQL, Firebase, AWS, Azure, Node.js, Git, Adobe Photoshop"
  },
  "projects": [
      {
        "name": "Personal Website",
        "link": "http://vaibgattani.com/",
        "tech": "React JS, jQuery, JavaScript, HTML",
        "topic": "A Full-Stack React Website",
        "description": [
        {
          desc: "Utilized MicroModal and Swiper libraries to display projects interactively"
        },
        {
          desc: "Implemented a flex slider and anchors for easy navigation"
        },
        {
          desc: "",
        }],        "cover": "images/personal_website.png",
        "pictures": [ 
        {
          "url": "images/personal_website_1.png",
          "caption": "Landing page of my website"
        },
        {
          "url": "walk_berlin_s_u_bahn_network_2_rectangle.png",
          "caption": "About section"
        },
        {
          "url": "walk_berlin_s_u_bahn_network_2_rectangle.png",
          "caption": "Experience section"
        },
        {
          "url": "walk_berlin_s_u_bahn_network_2_rectangle.png",
          "caption": "Projects section"
        }
      ]
      },
      {
        "name": "Bear Central",
        "topic": "An All-In-One iOS Application Centralizing Campus Resources",
        "link": "http://bit.ly/bearcentralapp",
        "tech": "Google Maps REST API, Firebase Cloud Firestore, Beautiful Soup (for web scraping), CocoaPods, Swift, XCode",
        "description": [
        {
          desc: "Worked with Firebase cloud firestore and realtime database backends to create calendar, maps and safety features"
        },
        {
          desc: "Designed and implemented the Clubs feature scraping club information to JSONs using Beautiful Soup in Python"
        },
        {
          desc: "Understood the complexity of full-fledged applications and the importance of abstraction in large projects",
        }],
        "cover": "images/bear-central.png",
        "pictures": [ 
        {
          "url": "images/bear-central.png",
          "caption": "Bear Central brings together the most essential campus resources"
        },
        {
          "url": "images/bear-central-1.jpg",
          "caption": "Displaying Around Me, Navigation Home and Safety Toolkit screens"
        },
        {
          "url": "images/bear-central-2.png",
          "caption": "Campus Map - Each building is displayed as a pin and is searchable!"
        },
        {
          "url": "images/bear-central-3.png",
          "caption": "Calendar - Subscribe to the calendar events for your favorite departments"
        },
        {
          "url": "images/bear-central-4.png",
          "caption": "Clubs - Search and view all the student organizations in UC Berkeley"
        },
        {
          "url": "images/bear-central-5.png",
          "caption": "Resources - A list of all the important links for any Berkeley student"
        },
        {
          "url": "images/bear-central-6.png",
          "caption": "Tools - Useful tools including booking library study rooms!"
        }
      ]
      },
      {
        "name": "Invest Test",
        "topic": "A CalHacks Stock Exchange Game",
        "link": "https://www.hackerearth.com/challenges/hackathon/cal-hacks-50/dashboard/e7e2b37/submission/",
        "tech": "BlackRock REST API, CocoaPods, Swift, XCode",
        "description": [
        {
          desc: "An iOS application that analyzed stock portfolios during different time periods"
        },
        {
          desc: "Translated financial data to the basic user knowledge level utilizing BlackRock’s REST API and multiple CocoaPods"
        },
        {
          desc: "Simulated a learning experience for new investors to optimize their portfolio returns in the future"
        }],
        "cover": "images/invest-test.png",
        "pictures": [ 
        {
          "url": "images/invest-test.png",
          "caption": "Input your preferred portfolio, select a time period!"
        },
        {
          "url": "images/invest-test-1.png",
          "caption": "View your portfolio breakdown, look at how you did"
        },
        {
          "url": "images/invest-test-2.png",
          "caption": "Understand how your score is calculated (percentage return compared to S&P)"
        },
        {
          "url": "images/invest-test-3.png",
          "caption": "Analyze the progress of your portfolio during this time period"
        },
        {
          "url": "images/invest-test-4.png",
          "caption": "Challenge your friends, see how you did on the leaderboard"
        }
      ]
      },
      {
        "name": "NS Checklist",
        "topic": "An Organizer Tool for Army Servicemen",
        "link": "https://github.com/VaibG/PT_NS_Checklist",
        "tech": "CoreData, Local Notifications, Swift, XCode",
        "description": [
        {
          desc: "Innovated a tool to help civilians transition into the army, centralizing the essential resources in the army"
        },
        {
          desc: "Utilized CoreData and Local Notifications to integrate checklist, notepad and reminder functions into the application"
        },
        {
          desc: "Calculated IPPT fitness test scores by real time comparisons to an offline scoring grid, helping users train for their test"
        }],
        "cover": "images/ns-checklist.png",
        "pictures": [ 
        {
          "url": "images/ns-checklist-1.png",
          "caption": "Homepage of the NS Checklist app"
        },
        {
          "url": "images/ns-checklist-2.png",
          "caption": "Second menu of the NS Checklist app"
        },
        {
          "url": "images/ns-checklist-3.png",
          "caption": "Book In Mutable Checklist"
        },
        {
          "url": "images/ns-checklist-4.png",
          "caption": "A list of Basic Drills with their English translation"
        },
        {
          "url": "images/ns-checklist-5.png",
          "caption": "A calculator for your fitness test (IPPT) scores"
        },
        {
          "url": "images/ns-checklist-6.png",
          "caption": "A list of all the Ranks in the Singapore Armed Forces"
        }
      ]
      },
      {
        "name": "Mass Apple ID Creator and Verifier",
        "topic": "A High School Project",
        "link": "https://drive.google.com/open?id=19HB4vczRLn96jkBDmHts1QXe6A21E2Xx",
        "tech": "AppleScript, System Events, CSV generation and manipulation, JavaScript",
        "description": [
        {
          desc: "Designed an automated script that created and verified Apple IDs for my high school’s 2000 new Apple devices"
        },
        {
          desc: "Utilized AppleScript and Shell commands to mutate information from a CSV to fully created and verified Apple IDs"
        },
        {
          desc: "Used System Events to navigate around the screen effortlessly",
        }],
        "cover": "images/applescript.jpg",
        "pictures": [ 
        {
          "url": "images/applescript-1.png",
          "caption": "Click on the project link to view the script in action!"
        }
      ]
      },
      {
        "name": "Cambrian Education",
        "topic": "Website built for an upcoming schooling program",
        "link": "vaibgattani.com",
        "tech": "PHP, HTML",
        "description": [
        {
          desc: "Built a complete website for an upcoming schooling project"
        },
        {
          desc: "Played around with design concepts and different ways to present information including overlays and sliders"
        },
        {
          desc: "No link available -- website no longer in use",
        }],
        "cover": "images/cambrian-education.png",
        "pictures": [ 
        {
          "url": "images/cambrian-education.png",
          "caption": "Homepage -- listing out the mission and vision of the project"
        },
        {
          "url": "images/cambrian-education-1.png",
          "caption": "Utilized three column structure to display more information"
        },
        {
          "url": "images/cambrian-education-2.png",
          "caption": "Using overlays to display the different values"
        },
        {
          "url": "images/cambrian-education-3.png",
          "caption": "Using four corners to split information"
        }
      ]
      }
    ]
}
    };
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Experience data={this.state.resumeData.experience}/>
        <Projects data={this.state.resumeData.projects}/>
        <Contact />
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
