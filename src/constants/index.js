import {
    linkedin,
    github,
    angular,
    aspnet,
    laravel,
    react,
    sass,
    tailwind,
    typescript,
    vue,
    coding,
    ideas,
    programming,
    webDesign,
    mechKeeb1,
    mechKeeb2,
    mechKeeb3
} from '../assets'


export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "features",
        title: "Features",
    },
    {
        id: "product",
        title: "Product",
    },
    {
        id: "clients",
        title: "Clients",
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        title: "linkedin",
        icon: linkedin,
        link: "https://www.linkedin.com/in/delarosa-jerick-t/",
    },
    {
        id: "social-media-2",
        title: "github",
        icon: github,
        link: "https://www.github.com/jerickdelarosa",
    },
];

export const languages = [
    {
        id: "vue",
        icon: vue,
    },
    {
        id: "angular",
        icon: angular,
    },
    {
        id: "react",
        icon: react,
    },
    {
        id: "laravel",
        icon: laravel,
    },
    {
        id: "aspnet",
        icon: aspnet,
    },
    {
        id: "typescript",
        icon: typescript,
    },
    {
        id: "tailwind",
        icon: tailwind,
    },
    {
        id: "sass",
        icon: sass,
    },
];

export const skills = [
    {
        id: "skill-1",
        title: "Ideas",
        image: ideas,
        content: "Maximizing the project's capability based on the client's requirements."
    },
    {
        id: "skill-2",
        title: "Design",
        image: webDesign,
        content: "The project ensures a user-friendly and modern interface style."
    },
    {
        id: "skill-3",
        title: "Code",
        image: programming,
        content: "Modern and contemporary codes are utilized in the project."
    }
];

export const projects = [
    {
        id: "project-1",
        title: "Document Tracking System",
        description: "A website application for Bulacan State University to help them track their internal organizational document transactions.",
        projectImg: mechKeeb1,
        languages: [
            {
                id: "lang-1",
                title: "Vue"
            },
            {
                id: "lang-2",
                title: "Laravel"
            },
            {
                id: "lang-3",
                title: "MySQL"
            },
        ],
        developers: [
            {
                id: "dev-1",
                title: "Kevin Kim De Vera",
                designation: "Lead Web Developer"
            },
            {
                id: "dev-2",
                title: "Jerick Dela Rosa",
                designation: "Web Developer"
            },
        ]
    },
    {
        id: "project-2",
        title: "Electronic Records Management System",
        description: "A website application for Philippine Charity Sweepstakes Office to help them track their internal organizational document transactions.",
        projectImg: mechKeeb2,
        languages: [
            {
                id: "lang-1",
                title: "Angular"
            },
            {
                id: "lang-2",
                title: ".NET C#"
            },
            {
                id: "lang-3",
                title: "MS SQL"
            },
        ],
        developers: [
            {
                id: "dev-1",
                title: "Joseph Reynaldo",
                designation: "Lead Web Developer"
            },
            {
                id: "dev-2",
                title: "Jerimaiah Peralta",
                designation: "Web Developer"
            },
            {
                id: "dev-3",
                title: "Jerick Dela Rosa",
                designation: "Web Developer"
            },
        ]
    },
]

