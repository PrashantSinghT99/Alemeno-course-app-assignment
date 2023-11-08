export const data = 
[
    // Course 1
    {
      id: 1,
      name: "Introduction to Programming",
      instructor: "John Doe",
      description:
        "Learn the basics of programming with this introductory course.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_1.jpg",
      duration: "6 weeks",
      schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["None"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Programming Concepts",
          content: "Overview of programming and basic concepts.",
        },
        {
          week: 2,
          topic: "Getting Started with Coding",
          content: "Start coding with a simple language like Python.",
        },
  
        // Additional weeks and topics...
      ],
      progress:60,
      students: [{ id: "hYBrdyzoPmTsnCm3vlpZbFtuywg1", name: "alice", email: "alice@test.com" }],
    },
    // Course 2
    {
      id: 2,
      name: "Web Development Fundamentals",
      instructor: "Jane Smith",
      description:
        "Get started with web development and build your first website.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_2.jpg",
      duration: "8 weeks",
      schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
      location: "Online",
      prerequisites: ["Basic HTML and CSS knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Web Development",
          content: "Overview of web development and HTML basics.",
        },
        {
          week: 2,
          topic: "Styling with CSS",
          content: "Learn to style web pages using CSS.",
        },
        // Additional weeks and topics...
      ],
      progress:20,
      students: [{ id: "hYBrdyzoPmTsnCm3vlpZbFtuywg1", name: "alice", email: "alice@test.com" }],
    },
    // Course 3
    {
      id: 3,
      name: "Data Science Essentials",
      instructor: "Mike Johnson",
      description: "Explore the world of data science and machine learning.",
      enrollmentStatus: "Closed",
      thumbnail: "your_image_3.jpg",
      duration: "10 weeks",
      schedule: "Saturdays, 9:00 AM - 11:00 AM",
      location: "Campus XYZ",
      prerequisites: ["Basic statistics knowledge", "Python programming"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Data Science",
          content: "Overview of data science and its applications.",
        },
        {
          week: 2,
          topic: "Data Analysis with Python",
          content: "Analyze data using Python and pandas library.",
        },
        // Additional weeks and topics...
      ],
      progress:30,
      students: [
        {
          id: "hYBrdyzoPmTsnCm3vlpZbFtuywg1",
          name: "Alice Johnson",
          email: "alice@example.com",
        },
        // Additional enrolled students...
      ],
    },
    // Course 4
    {
      id: 4,
      name: "JavaScript Masterclass",
      instructor: "Chris Wilson",
      description:
        "Become a JavaScript expert and build interactive web applications.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_4.jpg",
      duration: "12 weeks",
      schedule: "Fridays, 6:30 PM - 8:30 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "JavaScript Fundamentals",
          content: "Learn the basics of JavaScript programming.",
        },
        {
          week: 2,
          topic: "Advanced JavaScript Concepts",
          content: "Explore closures, promises, and more.",
        },
        // Additional weeks and topics...
      ],
      progress:40,
      students: [{ id: "hYBrdyzoPmTsnCm3vlpZbFtuywg1", name: "alice", email: "alice@test.com" }],
    },
    // Course 5
    {
      id: 5,
      name: "Machine Learning Basics",
      instructor: "Sophia Adams",
      description: "Introduction to machine learning and its applications.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_5.jpg",
      duration: "8 weeks",
      schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
      location: "Online",
      prerequisites: ["Basic Python knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Machine Learning",
          content: "Overview of machine learning and its algorithms.",
        },
        {
          week: 2,
          topic: "Supervised Learning",
          content: "Understanding supervised learning techniques.",
        },
        // Additional weeks and topics...
      ],
      progress:40,
      students: [{ id: "hYBrdyzoPmTsnCm3vlpZbFtuywg1", name: "alice", email: "alice@test.com" }],
    },
    // Course 6
    {
      id: 6,
      name: "Front-End Web Development",
      instructor: "Eva Martin",
      description:
        "Learn front-end web development and create interactive websites.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_6.jpg",
      duration: "10 weeks",
      schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
      location: "Online",
      prerequisites: ["HTML and CSS knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "HTML and CSS Basics",
          content: "Fundamentals of HTML and CSS.",
        },
        {
          week: 2,
          topic: "JavaScript for Front-End",
          content: "Using JavaScript to create dynamic web pages.",
        },
        // Additional weeks and topics...
      ],
      progress:40,
      students: [
        {
          id: "RS9MLX38XvPdIWGENQmq9Q7hXOA2",
          name: "bob",
          email: "bob@test.com",
        },
      ],
  
    },
    // Course 7
    {
      id: 7,
      name: "React.js Fundamentals",
      instructor: "David Brown",
      description:
        "Learn the fundamentals of React.js for building modern web apps.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_7.jpg",
      duration: "8 weeks",
      schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to React.js",
          content: "Getting started with React.js and its concepts.",
        },
        {
          week: 2,
          topic: "Component-Based Development",
          content: "Creating reusable components in React.",
        },
        // Additional weeks and topics...
      ],
      progress:48,
      students: [
        {
          id: "RS9MLX38XvPdIWGENQmq9Q7hXOA2",
          name: "bob",
          email: "bob@test.com",
        },
      ],
    },
    // Course 8
    {
      id: 8,
      name: "Mobile App Development",
      instructor: "Anna Wilson",
      description: "Build mobile apps for iOS and Android using React Native.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_8.jpg",
      duration: "12 weeks",
      schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript and React knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Getting Started with React Native",
          content: "Setting up your development environment for React Native.",
        },
        {
          week: 2,
          topic: "Building Your First App",
          content: "Creating a simple mobile app with React Native.",
        },
        // Additional weeks and topics...
      ],
      progress:45,
      students: [
        {
          id: "RS9MLX38XvPdIWGENQmq9Q7hXOA2",
          name: "bob",
          email: "bob@test.com",
        },
      ],
    },
    // Course 9
    {
      id: 9,
      name: "Full-Stack Web Development",
      instructor: "Daniel Smith",
      description:
        "Become a full-stack web developer with expertise in front-end and back-end technologies.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_9.jpg",
      duration: "14 weeks",
      schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
      location: "Online",
      prerequisites: ["HTML, CSS, JavaScript knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Front-End Development",
          content: "Master front-end technologies like React and HTML/CSS.",
        },
        {
          week: 2,
          topic: "Back-End Development",
          content: "Building server-side applications with Node.js.",
        },
        // Additional weeks and topics...
      ],
      progress:60,
      students: [
        {
          id: "RS9MLX38XvPdIWGENQmq9Q7hXOA2",
          name: "bob",
          email: "bob@test.com",
        },
      ],
    },
    // Course 10
    {
      id: 10,
      name: "Python Programming",
      instructor: "Olivia Martin",
      description: "Learn Python, a versatile and popular programming language.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_10.jpg",
      duration: "8 weeks",
      schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
      location: "Online",
      prerequisites: ["None"],
      syllabus: [
        {
          week: 1,
          topic: "Python Basics",
          content: "Introduction to Python programming and its syntax.",
        },
        {
          week: 2,
          topic: "Data Structures in Python",
          content: "Working with data structures in Python.",
        },
        // Additional weeks and topics...
      ],
      progress:60,
      students: [],
    },
    {
      id: 11,
      name: "Introduction to Programming",
      instructor: "John Doe",
      description:
        "Learn the basics of programming with this introductory course.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_1.jpg",
      duration: "6 weeks",
      schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["None"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Programming Concepts",
          content: "Overview of programming and basic concepts.",
        },
        {
          week: 2,
          topic: "Getting Started with Coding",
          content: "Start coding with a simple language like Python.",
        },
        // Additional weeks and topics...
      ],
      progress:60,
      students: [],
    },
  
    {
      id: 12,
      name: "Web Development Fundamentals",
      instructor: "Jane Smith",
      description:
        "Get started with web development and build your first website.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_2.jpg",
      duration: "8 weeks",
      schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
      location: "Online",
      prerequisites: ["Basic HTML and CSS knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Web Development",
          content: "Overview of web development and HTML basics.",
        },
        {
          week: 2,
          topic: "Styling with CSS",
          content: "Learn to style web pages using CSS.",
        },
        // Additional weeks and topics...
      ],
      progress:60,
      students: [],
    },
  
    {
      id: 13,
      name: "Data Science Essentials",
      instructor: "Mike Johnson",
      description: "Explore the world of data science and machine learning.",
      enrollmentStatus: "Closed",
      thumbnail: "your_image_3.jpg",
      duration: "10 weeks",
      schedule: "Saturdays, 9:00 AM - 11:00 AM",
      location: "Campus XYZ",
      prerequisites: ["Basic statistics knowledge", "Python programming"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Data Science",
          content: "Overview of data science and its applications.",
        },
        {
          week: 2,
          topic: "Data Analysis with Python",
          content: "Analyze data using Python and pandas library.",
        },
        // Additional weeks and topics...
      ],
      progress:60,
      students: [],
    },
  
    {
      id: 14,
      name: "JavaScript Masterclass",
      instructor: "Chris Wilson",
      description:
        "Become a JavaScript expert and build interactive web applications.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_4.jpg",
      duration: "12 weeks",
      schedule: "Fridays, 6:30 PM - 8:30 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "JavaScript Fundamentals",
          content: "Learn the basics of JavaScript programming.",
        },
        {
          week: 2,
          topic: "Advanced JavaScript Concepts",
          content: "Explore closures, promises, and more.",
        },
        // Additional weeks and topics...
      ],
      progress:55,
      students: [],
    },
    {
      id: 15,
      name: "Machine Learning Basics",
      instructor: "Sophia Adams",
      description: "Introduction to machine learning and its applications.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_5.jpg",
      duration: "8 weeks",
      schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
      location: "Online",
      prerequisites: ["Basic Python knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to Machine Learning",
          content: "Overview of machine learning and its algorithms.",
        },
        {
          week: 2,
          topic: "Supervised Learning",
          content: "Understanding supervised learning techniques.",
        },
        // Additional weeks and topics...
      ],
      progress:55,
      students: [],
    },
  
    {
      id: 16,
      name: "Front-End Web Development",
      instructor: "Eva Martin",
      description:
        "Learn front-end web development and create interactive websites.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_6.jpg",
      duration: "10 weeks",
      schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
      location: "Online",
      prerequisites: ["HTML and CSS knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "HTML and CSS Basics",
          content: "Fundamentals of HTML and CSS.",
        },
        {
          week: 2,
          topic: "JavaScript for Front-End",
          content: "Using JavaScript to create dynamic web pages.",
        },
        // Additional weeks and topics...
      ],
      progress:55,
      students: [],
    },
  
    {
      id: 17,
      name: "React.js Fundamentals",
      instructor: "David Brown",
      description:
        "Learn the fundamentals of React.js for building modern web apps.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_7.jpg",
      duration: "8 weeks",
      schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Introduction to React.js",
          content: "Getting started with React.js and its concepts.",
        },
        {
          week: 2,
          topic: "Component-Based Development",
          content: "Creating reusable components in React.",
        },
        // Additional weeks and topics...
      ],
      progress:55,
      students: [],
    },
  
    {
      id: 18,
      name: "Mobile App Development",
      instructor: "Anna Wilson",
      description: "Build mobile apps for iOS and Android using React Native.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_8.jpg",
      duration: "12 weeks",
      schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      location: "Online",
      prerequisites: ["Basic JavaScript and React knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Getting Started with React Native",
          content: "Setting up your development environment for React Native.",
        },
        {
          week: 2,
          topic: "Building Your First App",
          content: "Creating a simple mobile app with React Native.",
        },
        // Additional weeks and topics...
      ],
      progress:55,
      students: [],
    },
  
    {
      id: 19,
      name: "Full-Stack Web Development",
      instructor: "Daniel Smith",
      description:
        "Become a full-stack web developer with expertise in front-end and back-end technologies.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_9.jpg",
      duration: "14 weeks",
      schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
      location: "Online",
      prerequisites: ["HTML, CSS, JavaScript knowledge"],
      syllabus: [
        {
          week: 1,
          topic: "Front-End Development",
          content: "Master front-end technologies like React and HTML/CSS.",
        },
        {
          week: 2,
          topic: "Back-End Development",
          content: "Building server-side applications with Node.js.",
        },
        // Additional weeks and topics...
      ],
      progress:55,
      students: [],
    },
  
    {
      id: 20,
      name: "Python Programming",
      instructor: "Olivia Martin",
      description: "Learn Python, a versatile and popular programming language.",
      enrollmentStatus: "Open",
      thumbnail: "your_image_10.jpg",
      duration: "8 weeks",
      schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
      location: "Online",
      prerequisites: ["None"],
      syllabus: [
        {
          week: 1,
          topic: "Python Basics",
          content: "Introduction to Python programming and its syntax.",
        },
        {
          week: 2,
          topic: "Data Structures in Python",
          content: "Working with data structures in Python.",
        },
        // Additional weeks and topics...
      ],
      progress:55,
      students: [],
    },
  ]
;
