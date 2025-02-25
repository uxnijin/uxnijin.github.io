// data.js
const portfolioData = {
    bio: {
        name: "uxnijin",
        description: "Hey, I’m Nijin <br> <br>I design products that just work—stuff you’d want in your hands. This spot’s my world: my projects, my daydreams, everything I’m about. <br><br> I’m the one you call when you want something fresh and solid. What do you say—wanna chat?"
    },
    experience: {
        work: [
            { title: "UI UX Designer at Qmark Technolabs (Kochi)", duration: "Apr 2024 - Oct 2024" },
            { title: "UI UX Designer at RITS (Calicut)", duration: "Sep 2023 - Apr 2024" },
            { title: "Design Intern at Tinkerhub Organization (Kochi)", duration: "Sep 2023 - Jun 2024" }
        ],
        education: [
            { title: "BSc Computer Science", duration: "Mar 2021 - Mar 2024" },
            { title: "Higher Secondary", duration: "Mar 2019 - Mar 2021" }
        ]
    },
    about: {
        featuredImage: "assets/about.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis nulla quis enim vestibulum, sed cursus erat commodo. Praesent porta imperdiet tincidunt. Morbi lacinia, elit a fermentum molestie, mauris ante dictum leo, ac dignissim velit enim sed nisi. Nunc pretium dui sed malesuada posuere. Proin molestie in sapien vitae sodales.<br><br>Nulla et lacinia nisi. Vivamus ultrices a turpis et auctor. Duis mattis vulputate volutpat. Nullam interdum eu magna nec eleifend."
    },
    works: [
        { 
            id: "work0",
            title: "3D Editor interface (Vision OS Style)",
            image: "assets/workthumb-1.png",
            content: {
                featuredImage: "assets/workthumb-1.png",
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
            title: "How a Simple YouTube Playlist Widget Could Change the Way We Learn", 
            thumbnail: "assets/writing1-thumb.png",
            content: {
                featuredImage: "assets/writing1-thumb.png",
                date: "23 March 2024",
                readTime: "5 min read",
                blocks: [
                    {
                        text: "The internet has become the world’s biggest, most accessible university, and YouTube is one of its greatest tools. There’s a class for everything—from complex coding tutorials to easy cooking hacks. But here’s the thing: we’ve all started a YouTube playlist with the intention to finish it, only to end up sidetracked. We plan to learn consistently, yet life’s interruptions and the distractions of the platform itself make it tough to stick to those learning goals. <br><br> So what if one small change—a simple YouTube playlist widget on your home screen—could make all the difference? It’s a design idea focused on keeping learning within easy reach, helping you maintain your motivation every single day. <br><br> Why We Lose Learning Momentum on YouTube <br><br>There’s a real psychological pull every time you open YouTube. Studies show that over 70% of YouTube’s watch time comes from algorithm-driven recommendations. What does that mean for someone who’s trying to learn? If you open YouTube to continue a playlist but get distracted by a trending video or a funny clip, it’s easy to abandon your learning for something more immediate and eye-catching.In a bit of research I did on users’ learning habits on platforms like YouTube, I found that the average learner only revisits a playlist about 20% of the time after starting it. Life gets in the way, or the lure of instant entertainment does. A YouTube playlist widget helps bypass those distractions and gives you quick, direct access to your learning goals without getting sidetracked.<br><br>",
                        images: ["assets/work1-1.png", "assets/work1-2.png"]
                    },
                    {
                        text: "As a product designer, my goal was to find a small, impactful solution to a big problem: how to make learning consistent in a world full of distractions. So, I focused on designing this widget with a clean, straightforward layout, allowing it to blend seamlessly into the home screen while still being noticeable. Every time you unlock your phone, there it is—a small visual nudge, keeping your goal in sight without feeling overwhelming. <br><br> When people see a visual reminder of a goal regularly, they’re up to 40% more likely to stick with it. Just seeing that reminder—even without acting on it immediately—reinforces your commitment and keeps your goal top of mind. It’s like having a friend say, “Hey, remember that design series you were watching?” each time you unlock your phone.<br><br> Designing for Real-Life Impact<br><br>",
                        images: ["assets/work1-3.png", "assets/work1-4.png"] // you can add up to 2
                    },
                    {
                        text: "In creating this widget, I wanted the design to encourage consistent use without being intrusive. The interface is simple—just the playlist name, thumbnail of the last watched video and the creator, along with a one-tap access that takes you straight to your lesson. The goal is to remove the mental and practical barriers to opening YouTube and hunting down your playlist.<br><br> Why This Matters<br><br> Consistency is one of the hardest parts of learning. A simple widget might sound trivial, but it’s more than that. It’s about building a habit, making learning as easy and accessible as anything else you do on your phone. Every time you see it, it’s a reminder that growth is within reach, just one tap away.<br><br> <em>Note: This article reflects my personal perspective as a designer focused on user consistency. Other perspectives and strategies may offer different insights on building learning habits.</em>",
                        images: []
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
    contactEmail: "mailto:uxnijin@gmail.com"
};

// Export data for use in pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}