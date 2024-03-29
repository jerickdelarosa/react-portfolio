import {
    linkedin,
    github,
    angular,
    aspnet,
    laravel,
    react,
    blazor,
    sass,
    tailwind,
    typescript,
    vue,
    csharp,
    dotNetCore,
    coding,
    ideas,
    programming,
    webDesign,
    maleAvatar,
    femaleAvatar,
    dtsInfo,
    dtsGmailLogin,
    dtsOffices,
    dtsOfficesInfo,
    dtsLogin,
    ermsv2Dashboard,
    ermsv2Request,
    ermsv2RequestDetails
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

export const mediaLinks = [
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

export const footerLinks = [
    {
        id: "footer-media-1",
        title: "linkedin",
        icon: linkedin,
        link: "https://www.linkedin.com/in/delarosa-jerick-t/",
    },
    {
        id: "footer-media-2",
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
        id: "laravel",
        icon: laravel,
    },
    {
        id: "blazor",
        icon: blazor,
    },
    {
        id: "net-csharp",
        icon: dotNetCore,
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
        title: "DOCUMENT TRACKING SYSTEM",
        year: "2021",
        description: "A website application for Bulacan State University that tracks their organizational document transactions.",
        projectImg: dtsInfo,
        images: [
            {
                id: 1,
                content: dtsInfo,
            },
            {
                id: 2,
                content: dtsGmailLogin,
            },
            {
                id: 3,
                content: dtsOffices,
            },
            {
                id: 4,
                content: dtsOfficesInfo,
            },
            {
                id: 5,
                content: dtsLogin,
            }
        ],
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
                avatar: maleAvatar,
                designation: "Lead Web Developer",
            },
            {
                id: "dev-2",
                title: "Jerick Dela Rosa",
                avatar: maleAvatar,
                designation: "Web Developer"
            },
        ]
    },
    /* {
        id: "project-2",
        title: "E-RECORDS MANAGEMENT SYSTEM",
        year: "2022",
        description: "A website application for Philippine Charity Sweepstakes Office to help them track their internal organizational document transactions.",
        projectImg: dtsOffices,
        images: [
            {
                id: 1,
                content: dtsInfo,
            },
            {
                id: 2,
                content: dtsGmailLogin,
            },
            {
                id: 3,
                content: dtsOffices,
            },
            {
                id: 4,
                content: dtsOfficesInfo,
            },
            {
                id: 5,
                content: dtsLogin,
            }
        ],
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
                avatar: maleAvatar,
                designation: "Lead Web Developer"
            },
            {
                id: "dev-2",
                title: "Jeremiah Peralta",
                avatar: maleAvatar,
                designation: "Web Developer"
            },
            {
                id: "dev-3",
                title: "Jerick Dela Rosa",
                avatar: maleAvatar,
                designation: "Web Developer"
            },
        ]
    }, */
    {
        id: "project-3",
        title: "RECORDS MANAGEMENT SYSTEM",
        year: "2023",
        description: "A website application for Philippine Charity Sweepstakes Office to track, process and dispose organizational document transactions.",
        projectImg: ermsv2RequestDetails,
        images: [
            {
                id: 1,
                content: ermsv2Dashboard
            },
            {
                id: 2,
                content: ermsv2Request
            },
            {
                id: 3,
                content: ermsv2RequestDetails
            },
        ],
        languages: [
            {
                id: "lang-1",
                title: "Blazor"
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
                avatar: maleAvatar,
                designation: "Lead Web Developer"
            },
            {
                id: "dev-2",
                title: "Jeremiah Peralta",
                avatar: maleAvatar,
                designation: "Web Developer"
            },
            {
                id: "dev-3",
                title: "Jerick Dela Rosa",
                avatar: maleAvatar,
                designation: "Web Developer"
            },
        ]
    },
]

export const contacts = [
    {
        id: "contact-1",
        title: "Location",
        content: "Hagonoy, Bulacan, Philippines"
    },
    {
        id: "contact-2",
        title: "Phone",
        content: "+63 987-654-3210"
    },
    {
        id: "contact-3",
        title: "Mail",
        content: "delarosajerick26@gmail.com"
    },
]

