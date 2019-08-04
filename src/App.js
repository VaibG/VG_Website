import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';



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
        "years":"June 2018 - August 2018",
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
        "link": "https://medium.com/@kristin_baumann/walking-the-berlin-s-u-bahn-network-ec2c0b2642fd",
        "tech": "React JS (with react-sketchapp) & Sketch for visualisation, NodeJS for data cleaning",
        "topic": "A Full-Stack React Website",
        "description": [
        {
          desc: "Personal data vis project, inspired by commuting through Berlin"
        },
        {
          desc: "Map highlights the time it takes to walk between the stations of Berlin’s vast S- & U-Bahn network"
        },
        {
          desc: "Distances calculated with the Google Maps Matrix API",
        }],        "cover": "images/personal_website.png",
        "pictures": [ 
        {
          "url": "images/personal_website_1.png",
          "caption": "My"
        },
        {
          "url": "walk_berlin_s_u_bahn_network_2_rectangle.png",
          "caption": "NAME"
        },
        {
          "url": "walk_berlin_s_u_bahn_network_2_rectangle.png",
          "caption": "VAIB"
        }
      ]
      },
      {
        "name": "Bear Central",
        "topic": "An All-In-One iOS Application Centralizing Campus Resources",
        "link": "http://bit.ly/bearcentralapp",
        "role": "iOS Developer",
        "tech": "Google Maps REST API, Firebase Cloud Firestore, Beautiful Soup (for web scraping), CocoaPods, Swift, XCode",
        "description": [
        {
          desc: "Worked with Firebase cloud firestore and realtime database backends to create calendar, maps and safety features"
        },
        {
          desc: "Designed and implemented the Clubs feature scraping club information to JSONs using Beautiful Soup in Python"
        },
        {
          desc: " Understood the complexity of full-fledged applications and the importance of abstraction in large applications/projects",
        }],
        "cover": "images/bear-central.png",
        "pictures": [ 
        {
          "url": "images/bear-central.png",
          "caption": "Bear Central brings together the most essential campus resources"
        },
        {
          "url": "images/bear-central-1.jpg",
          "caption": ""
        },
        {
          "url": "images/bear-central-2.png",
          "caption": ""
        },
        {
          "url": "images/bear-central-3.png",
          "caption": "Bear Central brings together the most essential campus resources"
        },
        {
          "url": "images/bear-central-4.png",
          "caption": ""
        },
        {
          "url": "images/bear-central-5.png",
          "caption": ""
        },
        {
          "url": "images/bear-central-6.png",
          "caption": ""
        }
      ]
      },
      {
        "name": "Invest Test",
        "topic": "A CalHacks Stock Exchange Game",
        "link": "https://www.hackerearth.com/challenges/hackathon/cal-hacks-50/dashboard/e7e2b37/submission/",
        "role": "iOS Developer",
        "tech": "BlackRock REST API, CocoaPods, Swift, XCode",
        "description": [
        {
          desc: "Worked with Firebase cloud firestore and realtime database backends to create calendar, maps and safety features"
        },
        {
          desc: "Designed and implemented the Clubs feature scraping club information to JSONs using Beautiful Soup in Python"
        },
        {
          desc: "Distances calculated with the Google Maps Matrix API",
        }],
        "cover": "images/invest-test.png",
        "pictures": [ 
        {
          "url": "images/invest-test.png",
          "caption": "Bear Central brings together the most essential campus resources"
        },
        {
          "url": "images/invest-test-1.png",
          "caption": ""
        },
        {
          "url": "images/invest-test-2.png",
          "caption": ""
        },
        {
          "url": "images/invest-test-3.png",
          "caption": ""
        },
        {
          "url": "images/invest-test-4.png",
          "caption": ""
        }
      ]
      },
      {
        "name": "NS Checklist",
        "topic": "An Organizer Tool for Army Servicemen",
        "link": "https://www.hackerearth.com/challenges/hackathon/cal-hacks-50/dashboard/e7e2b37/submission/",
        "role": "iOS Developer",
        "tech": "BlackRock REST API, CocoaPods, Swift, XCode",
        "description": [
        {
          desc: "Worked with Firebase cloud firestore and realtime database backends to create calendar, maps and safety features"
        },
        {
          desc: "Designed and implemented the Clubs feature scraping club information to JSONs using Beautiful Soup in Python"
        },
        {
          desc: "Distances calculated with the Google Maps Matrix API",
        }],
        "cover": "images/ns-checklist.png",
        "pictures": [ 
        {
          "url": "images/invest-test.png",
          "caption": "Bear Central brings together the most essential campus resources"
        },
        {
          "url": "images/invest-test-1.png",
          "caption": ""
        },
        {
          "url": "images/invest-test-2.png",
          "caption": ""
        },
        {
          "url": "images/invest-test-3.png",
          "caption": ""
        },
        {
          "url": "images/invest-test-4.png",
          "caption": ""
        }
      ]
      },
      {
        "name": "Mass Apple ID Creator and Verifier",
        "topic": "An Organizer Tool for Army Servicemen",
        "link": "https://www.hackerearth.com/challenges/hackathon/cal-hacks-50/dashboard/e7e2b37/submission/",
        "role": "iOS Developer",
        "tech": "BlackRock REST API, CocoaPods, Swift, XCode",
        "description": [
        {
          desc: "Worked with Firebase cloud firestore and realtime database backends to create calendar, maps and safety features"
        },
        {
          desc: "Designed and implemented the Clubs feature scraping club information to JSONs using Beautiful Soup in Python"
        },
        {
          desc: "Distances calculated with the Google Maps Matrix API",
        }],
        "cover": "images/invest-test.png",
        "pictures": [ 
        {
          "url": "images/invest-test.png",
          "caption": "Bear Central brings together the most essential campus resources"
        },
        {
          "url": "images/invest-test-1.png",
          "caption": ""
        },
        {
          "url": "images/invest-test-2.png",
          "caption": ""
        },
        {
          "url": "images/invest-test-3.png",
          "caption": ""
        },
        {
          "url": "images/invest-test-4.png",
          "caption": ""
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
      </div>
    );
  }
}

export default App;
