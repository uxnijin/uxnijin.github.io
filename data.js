// data.js
const portfolioData = {
    bio: {
        name: "uxnijin",
        description: "Nijin Muhammed is a UI UX Designer who loves creating things that look good and work well.<br><br>He's currently a UI UX Designer at Qmark Technolabs. Previously, he was a designer at Moonley Interactive & RITS.<br><br>He received a Bachelor of Science in Computer Science after studying at Farook College, India."
    },
    experience: {
        work: [
            { title: "Designer at Qmark Technolabs", duration: "Apr 2024 - Oct 2024" },
            { title: "Designer at Qmark Technolabs", duration: "Apr 2024 - Oct 2024" },
            { title: "Designer at Qmark Technolabs", duration: "Apr 2024 - Oct 2024" },
            { title: "Designer at Tinkerhub Organization", duration: "Sep 2023 - Jun 2024" }
        ],
        education: [
            { title: "BSc Computer Science", duration: "Mar 2021 - Mar 2024" },
            { title: "BSc Computer Science", duration: "Mar 2021 - Mar 2024" },
            { title: "Plus Two", duration: "Mar 2019 - Mar 2021" }
        ]
    },
    about: {
        featuredImage: "assets/about.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis nulla quis enim vestibulum, sed cursus erat commodo. Praesent porta imperdiet tincidunt. Morbi lacinia, elit a fermentum molestie, mauris ante dictum leo, ac dignissim velit enim sed nisi. Nunc pretium dui sed malesuada posuere. Proin molestie in sapien vitae sodales.<br><br>Nulla et lacinia nisi. Vivamus ultrices a turpis et auctor. Duis mattis vulputate volutpat. Nullam interdum eu magna nec eleifend."
    },
    works: [
        { 
            id: "work0",
            title: "Designing for AI Engineers: UI patterns you need to know for AI Engineers: UI patterns you need to know",
            image: "assets/work1.jpg",
            content: {
                featuredImage: "assets/work1.jpg",
                blocks: [
                    {
                        text: "This project involved creating UI patterns tailored for AI engineers, focusing on usability and efficiency.",
                        images: ["assets/work1-img1.jpg", "assets/work1-img2.jpg"]
                    },
                    {
                        text: "We iterated on these designs to ensure they met the needs of a fast-paced development team.",
                        images: ["assets/work1-img3.jpg"]
                    }
                ]
            }
        },
        { 
            id: "work1",
            title: "Designing for AI Engineers: UI patterns you need to know",
            image: "assets/work1.jpg",
            content: {
                featuredImage: "assets/work1-featured.jpg",
                blocks: [
                    {
                        text: "This project involved creating UI patterns tailored for AI engineers, focusing on usability and efficiency.",
                        images: ["assets/work1-img1.jpg", "assets/work1-img2.jpg"]
                    },
                    {
                        text: "We iterated on these designs to ensure they met the needs of a fast-paced development team.",
                        images: ["assets/work1-img3.jpg"]
                    }
                ]
            }
        }
    ],
    writings: [
        { 
            id: "writing1", 
            title: "Designing for AI Engineers: UI patterns you need to know for AI Engineers: UI patterns you need to know", 
            thumbnail: "assets/writings.png",
            content: {
                featuredImage: "assets/writing1.png",
                date: "23 March 2024",
                readTime: "3 min read",
                blocks: [
                    {
                        text: "As the Head of Design at Modular AI, my team is going from 0 to 1 on a lot of AI products and workflows this year. Even though I’ve been designing for developers for years, I’ve personally had to quickly ramp up on some AI specific topics and build out our personas, so I thought I’d share a few best practices and top references I’ve established for myself",
                        images: ["assets/writing1.png", "assets/writing1.png"]
                    },
                    {
                        text: "So with those principles in mind here are some key interfaces that my team has released this year. Keep in mind my team is 4 people (2 designers & 2 developers), and we’re a fast-paced start-up. Our designs are all released as MVPs at first, then iterated once live, and often built off of existing systems to get from 0 to 1 and get real external validation as fast as possible. All of the designs in this post were created by myself and Will Rust together. Design is a team sport.",
                        images: ["assets/writing2.jpg", "assets/writing1.png"] // you can add up to 2
                    },
                    {
                        text: "<em>I’m really excited to build so many more workflows and share them. I hope to focus on agentic workflows and cloud monitoring dashboards next.</em>",
                        images: ["assets/writing1.png", "assets/writing1.png"]
                    }
                ],
                readNext: "writing2"
            }
        },
        { 
            id: "writing2", 
            title: "second writing is this", 
            thumbnail: "assets/writings.png",
            content: {
                featuredImage: "assets/writing1.png",
                date: "23 March 2024",
                readTime: "3 min read",
                blocks: [
                    {
                        text: "As the Head of Design at Modular AI, my team is going from 0 to 1 on a lot of AI products and workflows this year. Even though I’ve been designing for developers for years, I’ve personally had to quickly ramp up on some AI specific topics and build out our personas, so I thought I’d share a few best practices and top references I’ve established for myself",
                        images: ["assets/writing1.png", "assets/writing1.png"]
                    },
                    {
                        text: "<em>I’m really excited to build so many more workflows and share them. I hope to focus on agentic workflows and cloud monitoring dashboards next.</em>",
                        images: []
                    }
                ],
                readNext: "writing3"
            }
        },
        { 
            id: "writing3", 
            title: "this is third writing", 
            thumbnail: "assets/writings.png",
            content: {
                featuredImage: "assets/writing1.png",
                date: "23 March 2024",
                readTime: "3 min read",
                blocks: [
                    {
                        text: "As the Head of Design at Modular AI, my team is going from 0 to 1 on a lot of AI products and workflows this year. Even though I’ve been designing for developers for years, I’ve personally had to quickly ramp up on some AI specific topics and build out our personas, so I thought I’d share a few best practices and top references I’ve established for myself",
                        images: ["assets/writing1.png", "assets/writing1.png"]
                    },
                    {
                        text: "<em>I’m really excited to build so many more workflows and share them. I hope to focus on agentic workflows and cloud monitoring dashboards next.</em>",
                        images: []
                    }
                ],
                readNext: "writing1"
            }
        }
        // Add more writings as needed...
    ],
    contactEmail: "mailto:uxnijin@example.com"
};

// Export data for use in pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}