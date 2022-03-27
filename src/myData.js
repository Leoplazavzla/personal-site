// Skills Icons
import jsIcon from "./images/javascript.svg"
import pythonIcon from "./images/python.png"
import reactIcon from "./images/react-logo.png"
import profilePicture from "./images/leo-full-body-500.png"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin-logo.png"
import facebookIcon from "./images/facebook.png"

export default {
    //(Please Do Not Remove The comma(,) after every variable)
    //Change The Website Template

    //   Header Details ---------------------
    name: "Leonardo",
    headerTagline: [
        //Line 1 For Header
        "Building digital",
        //Line 2 For Header
        "products, brands,",
        //Line 3 For Header
        "and solutions",
    ],
    //   Header Paragraph
    headerParagraph:
        "Digital marketer switching career to programming. Working remotely since 2014 ;-)",

    //Contact Email
    contactEmail: "leoplazavzla@gmail.com",

    // End Header Details -----------------------

    // Work Section ------------------------
    projects: [
        {
            title: "My first website", //Project Title - Add Your Project Title Here
            para:
                "This was my first website using HTML, CSS and JS. This is an affiliate website to make money with Amazon", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc:
                "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
            //Project URL - Add Your Project Url Here
            github: "https://github.com/Leoplazavzla/tubatidoraideal",
            url: "https://tubatidoraideal.com/",
        },
        {
            title: "Productivity tools", //Project Title - Add Your Project Title Here
            para:
                "Web App made with ReactJS and Firebase. It's a simple CRUD application with authentication and storage", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc:
                "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
            //Project URL - Add Your Project Url Here
            url: "https://leo-productivity-tools.web.app//",
            github: "https://github.com/Leoplazavzla/leoProductivityTools"
        },
        {
            title: "Alarm App", //Project Title - Add Your Project Title Here
            para:
                "This was my first Ecma Script application using OOP. It looks awful but it made me very happy :-)", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc:
                "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
            //Project URL - Add Your Project Url Here
            url: "https://leoplazavzla.github.io/alarm_app/",
            github: "https://github.com/Leoplazavzla/alarm_app",
        },
    ],
    pythonProjects: [
        {
            title: "LinkedIn Scrapper", //Project Title - Add Your Project Title Here
            para:
                "A bot for scrapping data from LinkedIn and save the data into an Excel file", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc:
                "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
            //Project URL - Add Your Project Url Here
            github: "https://github.com/Leoplazavzla/Linkedin-grab-data",
        },
        {
            title: "AirTM Automation Bot", //Project Title - Add Your Project Title Here
            para:
                "Automation bot made to accept forex transactions on its own and send me notifications on my phone. Graphic interface was made with Tkinter", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc:
                "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
            //Project URL - Add Your Project Url Here
            github: "https://github.com/Leoplazavzla/airtmBot",
        },
        {
            title: "Get LinkedIn Accounts", //Project Title - Add Your Project Title Here
            para:
                "Web scrapper made to obtain LinkedIn accounts from a single name and country.", // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc:
                "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
            //Project URL - Add Your Project Url Here
            github: "https://github.com/Leoplazavzla/goolescrapper",
        },
    ],

    // End Work Section -----------------------

    // About Secton --------------
    aboutParaOne:
        "I'm a digital marketing professional who decided to switch career into programming at my 30s. Coming from a destroyed nation and having to migrate to a new country, I am very familiar with the concept of start-over as I have started a new life already in Argentina.",
    aboutParaTwo:
        "My experience it's not just with digital marketing and SEO, but also Project Management. Being PRINCE2 and Agile Scrum my two major references in the subject. This makes me a good candidate as I am not only focused on the technical aspects of a project, but also the business and human side of it.",
    aboutParaThree:
        "I know how to communicate well, offer ideas and express any concerns. Also, being 33 and having worked the last 8 years for the same company, allows me to have a more focused mindset and a bigger sense of responsibility with the quality of my work.",
    aboutImage: profilePicture,

    //   End About Section ---------------------

    // Skills Section ---------------

    //   Import Icons from the top and link it here

    skills: [
        {
            img: reactIcon,
            para:
                "I can work with classes or functional components, Hooks, Context API or Redux, Bootstrap or Material UI. Creating apps from scratch to deploy with Firebase",
        },
        {
            img: jsIcon,
            para:
                "I've spent the last three years studying EcmaScript non-stop. I love the language but as soon as I found ReactJS I stopped creating projects with it :-(",
        },
        {
            img: pythonIcon,
            para:
                "I've regain the love for programming that JS made me lost with Python! I've made much more small projects with it and moving on to learn Django ",
        },
    ],

    // End Skills Section --------------------------

    //   Promotion Section --------------------------

    promotionHeading: "Current Studies",
    promotionPara:
        "I've found very easy to deploy apps with Firebase but my main goal is to become fullstack so I can deploy my own apps without paying Google :-) I am also eager to understand what happens on the other side of the web. Where the good old typed languages rest. So I'm learning the Django framework at this very moment.",
    // End Promotion Section -----------------

    //   Contact Section --------------

    contactSubHeading: "Let's create your next software solution together",
    social: [
        // Add Or Remove The Link Accordingly
        { img: githubIcon, url: "https://github.com/Leoplazavzla" },
        {
            img: linkedinIcon,
            url: "https://www.linkedin.com/in/plazaleonardo/",
        },
        {
            img: facebookIcon,
            url: "https://www.facebook.com/profile.php?id=688063958",
        },
    ],

    // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com