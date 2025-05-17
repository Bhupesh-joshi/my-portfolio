// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';

// Experience Section Logo's
import uxprodxLogo from './assets/company_logo/ux_prodx_logo.jpeg';
import chalkboxLogo from './assets/company_logo/chalkbox_logo.jpeg';

// Education Section Logo's
import icfaiLogo from './assets/education_logo/icfai_logo.png';
import dbitLogo from './assets/education_logo/dbit.jpeg';

// Project Section Logo's
import shopsyLogo from './assets/work_logo/shopsy.png'
import gymWebsiteLogo from './assets/work_logo/gymWebsite.png';
import newPortfolioLogo from './assets/work_logo/newPortfolio.png';
import eCommerceLogo from './assets/work_logo/eCommerce.png';
import uxprodxwebsiteLogo from './assets/work_logo/UxProdxWebsite.png';
import RazorpayLandingPageLogo from './assets/work_logo/RazorpayLandingPage.png';
import portfolioLogo from './assets/work_logo/portfolio.png';
import gdpcollageLogo from './assets/work_logo/gdpcollage.png';
import react_basic_websiteLogo from './assets/work_logo/react_basic_website.png';
import modernChairLogo from './assets/work_logo/modernChair.png';
import imageGalleryLogo from './assets/work_logo/imageGallery.png';

export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node JS', logo: nodejsLogo },
            { name: 'Express JS', logo: expressjsLogo },
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'MongoDB', logo: mongodbLogo },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'JavaScript', logo: javascriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Postman', logo: postmanLogo },
            { name: 'Figma', logo: figmaLogo },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: chalkboxLogo,
        role: "Web Developer Intern",
        company: "ChalkBox",
        date: "Jan 2025 - present",
        desc: "Designed and developed responsive, high-performance web applications using React.js, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS and PHP. Designed and developed responsive, high-performance web applications using React.js, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS and PHP.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Tailwind CSS",
            "Bootstrap",
            "PHP",
        ],
    },
    {
        id: 0,
        img: uxprodxLogo,
        role: "Front-End Developer",
        company: "UxProdX",
        date: "Jan 2022 - Jul-2023",
        desc: "Developed dynamic and scalable web pages using the HTML, CSS, Bootstrap, JavaScript, ReactJS. Collaborated with cross-functional teams to build responsive UI, reusable code and libraries for future use. Collaborated with other team members and stakeholders to ensure successful project completion",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React JS",
            "Bootstrap",
            "Material UI",
        ],
    }
];

export const education = [
    {
        id: 0,
        img: icfaiLogo,
        school: "ICFAI University Dehradun",
        date: "Aug 2023 - Present",
        grade: "8.5 CGPA",
        desc: "I am pursuing my Master's degree (MCA) in Computer Applications from ICFAI University Dehradun. During my time at ICFAI, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at ICFAI University has been instrumental in shaping my technical abilities and professional growth.",
        degree: "Master of Computer Applications - MCA",
    },
    {
        id: 1,
        img: dbitLogo,
        school: "Dev Bhoomi Uttarakhand University Dehradun",
        date: "Aug 2018 - Oct 2021",
        grade: "66%",
        desc: "I completed my Bachelor's degree in Bachelor of Computer Applications (BCA) from Dev Bhoomi Uttarakhand University Dehradun. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at DBIT College allowed me to work on projects that applied theoretical concepts to real-world problems.",
        degree: "Bachelor of Computer Applications - BCA",
    }
];

export const projects = [
    {
        id: 0,
        title: "Shopsy E-commerce App",
        description:
            "Shopsy is a fully responsive modern e-commerce web application built with React.js and Tailwind CSS. It features a clean UI, animated scroll effects using AOS library, and supports Dark Mode for a better user experience. Users can browse product categories, view deals, and enjoy smooth navigation across all devices. The project is deployed using Netlify.",
        image: shopsyLogo,
        tags: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "AOS (Animate On Scroll) Library", "Netlify (Deployment)"],
        github: "",
        webapp: "https://shopsy-e-commerce-app.netlify.app/",
    },
    {
        id: 1,
        title: "Gym Website",
        description:
            "Developed a fully responsive and user-friendly gym website to provide an engaging experience for fitness enthusiasts. Interactive Navigation Bar – Smooth & dynamic navigation with an active state indicator. Modern UI/UX Design – Clean and visually appealing layout with a dark theme. Font Awesome Icons – Enhanced visual elements for social media & search.",
        image: gymWebsiteLogo,
        tags: ["HTML", "CSS", "JavaScript", "git", "gitHub"],
        github: "https://github.com/Bhupesh-joshi/gym-website",
        webapp: "https://bhupesh-joshi.github.io/gym-website/index.html",
    },
    {
        id: 2,
        title: "my-Portfolio",
        description:
            "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
        image: newPortfolioLogo,
        tags: ["HTML5", "CSS3", "JavaScript", "React JS", "Tailwind CSS", "Git", "GitHub", "Smooth Scroll", "Basic Animation Effects"],
        github: "https://github.com/Bhupesh-joshi/my-portfolio",
        webapp: "https://bhupesh-joshi.github.io/my-portfolio/",
    },
    {
        id: 3,
        title: "E-Commerce Website",
        description:
            "I have worked with some pages such as, News Page, Product description page, Checkout p-1, Checkout p-2, Checkout p-2 -1, Discount, Wish list, My Profile, order Placed, Contact us, FAQ’s, Order returned, Saved Address, Order Cancellation Page, added all the pages in the single Application, every page is Responsive for every device.",
        image: eCommerceLogo,
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "GIT", "GITHUB", "Bit Bucket"],
        github: "https://github.com/Bhupesh-joshi/ECommerceWebsite",
        webapp: "https://bhupesh-joshi.github.io/ECommerceWebsite/",
    },
    {
        id: 4,
        title: "Ux-ProdX Website",
        description:
            "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
        image: uxprodxwebsiteLogo,
        tags: ["HTML", "CSS", "JavaScript", "GIT", "GITHUB"],
        github: "https://github.com/Bhupesh-joshi/UXProdXwebsite",
        webapp: "https://bhupesh-joshi.github.io/UXProdXwebsite/",
    },
    {
        id: 5,
        title: "RazorPay Landing Page",
        description:
            "Developed a fully responsive and visually appealing Razorpay landing page clone using HTML, CSS, and Tailwind CSS. Recreated key UI elements like the navbar, hero section, features, and testimonial sections with pixel-perfect design. Focused on performance optimization and mobile-first responsiveness to ensure a seamless user experience across all devices.",
        image: RazorpayLandingPageLogo,
        tags: ["HTML", "Tailwind CSS"],
        github: "https://github.com/Bhupesh-joshi/Razorpay-clone",
        webapp: "https://bhupesh-joshi.github.io/Razorpay-clone/",
    },
    {
        id: 6,
        title: "old-Portfolio",
        description:
            "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
        image: portfolioLogo,
        tags: ["React JS", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/Bhupesh-joshi/ReactPortfolio",
        webapp: "https://bhupesh-joshi.github.io/portfolio",
    },
    {
        id: 7,
        title: "GDP Collage Website",
        description:
            "Built a clean, responsive college website for GPD College using HTML, CSS, and JavaScript. The site includes structured sections like home, about, courses, and contact, offering intuitive navigation. This project highlights the ability to convert static content into a functional and user-friendly interface for educational institutions.",
        image: gdpcollageLogo,
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Bhupesh-joshi/GPDCollegeWebsite",
        webapp: "https://bhupesh-joshi.github.io/GPDCollegeWebsite/",
    },
    {
        id: 8,
        title: "React Basic Website",
        description:
            "Created a responsive portfolio to display multiple web development projects using HTML, CSS, and JavaScript. Designed a clean layout with intuitive navigation and project previews. Demonstrates strong front-end skills and a keen sense of presentation.",
        image: react_basic_websiteLogo,
        tags: ["React JS", "HTML", "CSS", "Javascript"],
        github: "https://github.com/Bhupesh-joshi/Projects",
        webapp: "https://bhupesh-joshi.github.io/Projects/",
    },
    {
        id: 9,
        title: "Modern Chair Project",
        description:
            "Built a sleek, modern product landing page for a designer chair using HTML, CSS, and JavaScript. Focused on clean UI, smooth layout, and responsive design for all screen sizes. Highlights product presentation and front-end styling skills.",
        image: modernChairLogo,
        tags: ["HTML", "CSS"],
        github: "https://github.com/Bhupesh-joshi/modern-chair-project",
        webapp: "https://bhupesh-joshi.github.io/modern-chair-project/",
    },
    {
        id: 10,
        title: "Image Gallery",
        description:
            "Built a sleek, modern product landing page for a designer chair using HTML, CSS, and JavaScript. Focused on clean UI, smooth layout, and responsive design for all screen sizes. Highlights product presentation and front-end styling skills.",
        image: imageGalleryLogo,
        tags: ["HTML", "CSS"],
        github: "https://github.com/Bhupesh-joshi/image-gallery-flexBox",
        webapp: "https://bhupesh-joshi.github.io/image-gallery-flexBox/",
    },
];  