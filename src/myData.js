// Skills Icons
import jsIcon from "./images/javascript.svg"
import pythonIcon from "./images/python.png"
import reactIcon from "./images/react-logo.png"
import profilePicture from "./images/leo-full-body-500.png"
import dondelaveoimage from './images/dondelaveoimage.png'

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
        " solutions",
    ],
    //   Header Paragraph
    headerParagraph:
        "Junior ReactJS developer.",
    //Contact Email
    contactEmail: "leoplazavzla@gmail.com",

    // End Header Details -----------------------

    // Work Section ------------------------
    projects: [
        {
            title: "¿Dónde la veo?", //Project Title - Add Your Project Title Here
            para:
                "Want to know which streaming service is displaying your favorite movie or series?", // Add Your Service Type Here
            technologies: "React WebApp consuming an external API",
            //Project Image - Add Your Project Image Here
            imageSrc:
                "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
            //Project URL - Add Your Project Url Here
            github: "https://github.com/Leoplazavzla/donde-la-veo",
            url: "https://dondelaveo.com/",
        },
        {
            title: "Productivity tools", //Project Title - Add Your Project Title Here
            para:"Personal webapp to add alarms, notes and upload files", // Add Your Service Type Here
            technologies:"Simple CRUD  webApp using Firebase as backend" ,
            //Project Image - Add Your Project Image Here
            imageSrc:
                "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
            //Project URL - Add Your Project Url Here
            url: "https://leo-productivity-tools.web.app//",
            github: "https://github.com/Leoplazavzla/leoProductivityTools"
        },
    ],
    // End Work Section -----------------------

    // About Section --------------
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
        /*{
            img: pythonIcon,
            para:
                "I've regain the love for programming that JS made me lost with Python! I've made much more small projects with it and moving on to learn Django ",
        },*/
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