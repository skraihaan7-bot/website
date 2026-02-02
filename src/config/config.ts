// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Shaik Muhammad Raihaan',
    title: 'Economics (Hons) Undergraduate | Student Leader',
    image: getAsset('images/profile.png'), // Resolves to /profile.png or /base-path/profile.png
    description: 'I am a second-year Economics (Honours) undergraduate at Christ (Deemed to be) University, Bengaluru. I am a motivated and approachable student who enjoys working with people, taking initiative, and contributing meaningfully to academic and campus life.\n\n' +
    'I have actively engaged in student leadership through roles such as Class Representative, Student Council member, and organizing committee member for departmental and university-level events. My experiences span event planning, policy simulations, debate forums, and student outreach initiatives.\n\n' +
    'With a strong foundation in economics, public policy, and social engagement, I aim to build inclusive environments that strengthen collaboration between students, faculty, and administration.',
    tagline: 'Leadership, policy thinking, and student engagement.',
  location: 'Bangalore, India',
  },

  seo: {
    title: "Shaik Muhammad Raihaan | Economics Undergraduate",
    description: "Official website showcasing Shaik Muhammad Raihaan\'s education, research, projects and experience.",
  },

  animatedText: ['AI Researcher', 'Educator', 'Speaker', 'Builder'],

navigation: [
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/projects' },
  { name: 'Research', url: '/research' },
  { name: 'Education', url: '/education' },
  { name: 'Experience', url: '/experience' },
  { name: 'Blogs', url: '/blogs' },
  { name: 'Resume', url: '/resume' },
  { name: 'Contact', url: '/contact' },
],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Project Management Mastery',
      url: getAsset('static_page/project_management_blog.html'),
    },
  ],


  education: [
    {
      institution: 'Christ University, Bangalore',
      degree: 'Bachelor of Arts in Economics (Honours)',
      year: '2024–2027',
      image: getAsset('images/education/Christ_University.png'),
      description: [
        'Coursework: Microeconomics, Macroeconomics, Statistics for Economics',
      'Mathematical Economics, Urban Space Development, Economic History of India',
      'GPA: 3.36 / 4.00',
      ],
    },
    {
      institution: 'Narayana Civil Services Academy',
      degree: 'Diploma in Arts and Humanities',
      year: '2022–2024',
      image: getAsset('images/education/ignouLogo.png'),
      description: [
       'Coursework: History, Public Administration, Polity, Geography',
      'Indian Economy, Arithmetic and Reasoning',
      ],
    },
    {
      institution: 'Chaudhary Charan Singh University, Meerut',
      degree: "Masters of Commerce – Finance",
      year: '2015–2017',
      image: getAsset('images/education/CCSU-Logo.jpg'),
      description: [
        'Studied managerial economics, statistical analysis',
        'Focus on security analysis, portfolio & financial management',
      ],
    },
  ],

// ✅ Unified MOOC + Certifications Section
certifications: [
  // --- Deep Learning Specialization (DeepLearning.AI) ---
    // --- Deep Learning Specialization (DeepLearning.AI) ---
  {
    title: "Deep Learning Specialization (DeepLearning.AI)",
    specialization: true,
    file: getAsset("images/education/Certifications/deep learning specialisation- Neural Networks and Deep Learning Improving Deep Neural Networks Hyperparameter tuning Regularization and Optimization Structuring Machine Learning Projects Convolutional Neural Networks Sequence Models.pdf"),
    certificates: [
      { name: "Neural Networks and Deep Learning", file: getAsset("images/education/Certifications/deep learning Neural Networks and Deep Learning.pdf") },
  { name: "Improving Deep Neural Networks", file: getAsset("images/education/Certifications/deep learning- Improving Deep Neural Networks- Hyperparameter tuning, Regularization and Optimization.pdf") },
      { name: "Structuring Machine Learning Projects", file: getAsset("images/education/Certifications/deep learning ai structuring ML projects.pdf") },
      { name: "Convolutional Neural Networks", file: getAsset("images/education/Certifications/deep learning Convolutional Neural Networks.pdf") },
      { name: "Sequence Models", file: getAsset("images/education/Certifications/deep learning sequence models.pdf") },
    ],
  },

  // --- TensorFlow Developer Specialization (DeepLearning.AI) ---
  {
    title: "TensorFlow Developer Professional Certificate (DeepLearning.AI)",
    specialization: true,
    file: getAsset("images/education/Certifications/deep learning specialisation- Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning Convolutional Neural Networks in TensorFlow Natural Language Processing in TensorFlow Sequences, Time Series and Prediction.pdf"),
    certificates: [
      { name: "Introduction to TensorFlow for AI", file: getAsset("images/education/Certifications/deep learning ai Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning.pdf") },
      { name: "Convolutional Neural Networks in TensorFlow", file: getAsset("images/education/Certifications/deep learning Convolutional Neural Networks in TensorFlow.pdf") },
      { name: "Natural Language Processing in TensorFlow", file: getAsset("images/education/Certifications/deep learning ai Natural language processing in tensorflow.pdf") },
  { name: "Sequences, Time Series and Prediction", file: getAsset("images/education/Certifications/deeplearning ai- Sequences, time series and prediction.pdf") },
    ],
  },

  // --- Mathematics for Machine Learning (Imperial College London) ---
  {
    title: "Mathematics for Machine Learning Specialization (Imperial College London)",
    specialization: true,
    file: getAsset("images/education/Certifications/specialisation- mathematics for ML- 3 courses.pdf"),
    certificates: [
  { name: "Linear Algebra", file: getAsset("images/education/Certifications/Imperial college london- M a t h e m a t i c s   f o r   M a c h i n e   L e a r n i n g -   L i n e a r  A l g e b r a.pdf") },
  { name: "Multivariate Calculus", file: getAsset("images/education/Certifications/imperial college london- M a t h e m a t i c s   f o r   M a c h i n e   L e a r n i n g -   M u l t i v a r i a t e  C a l c u l u s.pdf") },
  { name: "Principal Component Analysis", file: getAsset("images/education/Certifications/Imperial college london- M a t h e m a t i c s   f o r   M a c h i n e   L e a r n i n g -   P C A.pdf") },
    ],
  },

  // --- University of Michigan ---
  {
    title: "Introduction to Data Science in Python (University of Michigan)",
    file: getAsset("images/education/Certifications/university of michigan- Introduction to Data Science in Python.pdf"),
  },

  // --- Duke University ---
  {
    title: "Business Metrics for Data-Driven Companies (Duke University)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/Duke university- Business metrics for Data-driven companies.pdf"),
  },
  {
    title: "Mastering Data Analysis in Excel (Duke University)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/Duke university- Mastering Data Analysis in Excel.pdf"),
  },

  // --- Corporate Finance Institute (CFI) ---
  {
    title: "Accounting Fundamentals (CFI)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/corporate finance institure- accounting fundamentals.pdf"),
  },
  {
    title: "Excel Crash Course (CFI)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/corporate finance institute excel crash course.pdf"),
  },
  {
    title: "Reading Financial Statements (CFI)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/corporate finance institute reading financial statements.pdf"),
  },

  // --- SoloLearn Programming Courses ---
  {
    title: "Python 3 Tutorial (SoloLearn)",
    file: getAsset("images/education/Certifications/sololearn python 3 tutorial course.jpg"),
  },
  {
    title: "Java Tutorial (SoloLearn)",
    file: getAsset("images/education/Certifications/sololearn java tutorial course.jpg"),
  },
  {
    title: "SQL Fundamentals (SoloLearn)",
    file: getAsset("images/education/Certifications/sololearn sql fundamental course.jpg"),
  },
  {
    title: "HTML Fundamentals (SoloLearn)",
    file: getAsset("images/education/Certifications/sololearn HTML fundamentals course.jpg"),
  },

  // --- Additional Workshops & Achievements ---
  {
    title: "Intellectual Property Rights Workshop (Central University of Haryana)",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/central university of haryana: intellectual property rights.pdf"),
  },
  {
    title: "Clarivate Journal Citation Reports Workshop",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/Journal citation reports: clarivate.pdf"),
  },
  {
    title: "IEEE Bangalore: Role of IEEE in Engineering",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/IEEE bangalore section role of ieee in engineering.pdf"),
  },
  {
    title: "Microsoft AI Classroom Series",
  cardImage: getAsset("images/education/Certifications/download.svg"),
    file: getAsset("images/education/Certifications/Microsoft ai classroom series certificate.pdf"),
  },
  {
    title: "HackerRank SQL (Basic)",
    file: getAsset("images/education/Certifications/HackerRank SQL basic.png"),
  },
],



  // ✅ Experience section updated
  experience: [
  {
    title: "School Student Council Member",
    cardImage: getAsset("images/experience/Christ_University.png"),
    place: "Christ University",
    time: "2024 - 2025",
    desp: [
     'Served as a communication link between faculty and classmates',
      'Represented student concerns and coordinated academic communication',
    ],
  },
  {
    title: "Head of Logistics & Production Design",
    cardImage: getAsset("images/experience/Christ_University.png"),
    place: "Christ University, Zariya Productions",
    time: "(2024 – 2025)",
    desp: [
       'Managed logistics and production planning for events',
      'Coordinated teams and ensured smooth execution of activities',
    ],
  },
],


  // ✅ Projects section updated
  projects: [
    {
      title: "Policy Drafting Simulation",
      cardImage: getAsset("images/project/Brain-AutoML.png"),
      description:  'Acted as Event Head and co-judge for a policy drafting simulation organised by Econtago, evaluating policy proposals and economic reasoning.',
      Githublink: "https://github.com/chandraveshchaudhari/brain-ai",
    },
    {
      title: "Handful of Food Drive",
      cardImage: getAsset("images/project/HSFSIframework.png"),
      description: "Student coordinator for a social outreach initiative focused on food security and community engagement.",
      Githublink: "https://github.com/chandraveshchaudhari/hybrid-feature-selection",
    },
    {
      title: "Mock Parliament",
      cardImage: getAsset("images/project/systematic-reviewpy.png"),
      description: "Led legislative simulations by drafting policy arguments, manifestos, and debating major national issues.",
      Githublink: "https://github.com/chandraveshchaudhari/systematic-reviewpy",
    },
  ],


  research: [
    {
      title: "Stock Market Prediction Techniques Using Artificial Intelligence: A Systematic Review",
      authors: "Chandravesh Chaudhari, Geetanjali Purswani",
      conferences: "Congress on Intelligent Systems, Springer Nature Singapore",
      researchYr: 2022,
      image: getAsset("/images/research/review_paper.png"),
      citation: {
        vancouver:
          "Chaudhari, C., Purswani, G. (2023). Stock Market Prediction Techniques Using Artificial Intelligence: A Systematic Review. In: Kumar, S., Sharma, H., Balachandran, K., Kim, J.H., Bansal, J.C. (eds) Third Congress on Intelligent Systems. CIS 2022. Lecture Notes in Networks and Systems, vol 608. Springer, Singapore. https://doi.org/10.1007/978-981-19-9225-4_17",
      },
      abstract:
        "This paper systematically reviews the literature related to stock price prediction systems...",
      link: "https://link.springer.com/chapter/10.1007/978-981-19-9225-4_17", // optional: external link if available
    },
    {
      title: "Hybrid Subset Feature Selection And Importance Framework",
      authors: "Chandravesh Chaudhari, Geetanjali Purswani",
      conferences:
        "2023 IEEE International Conference on Contemporary Computing and Communications (InC4), Bangalore, India, 2023",
      researchYr: 2023,
      image: getAsset("/images/research/subset.png"),
      citation: {
        vancouver:
          "C. Chaudhari and G. Purswani, \"Hybrid Subset Feature Selection And Importance Framework,\" 2023 IEEE International Conference on Contemporary Computing and Communications (InC4), Bangalore, India, 2023, pp. 1-6, doi: 10.1109/InC457730.2023.10262828.",
      },
      abstract:
        "Feature selection algorithms are used in high-dimensional data to remove noise...",
      link: "https://ieeexplore.ieee.org/abstract/document/10262828",
    },
  ],

  books: [
    {
      title: 'Programming for Machine Learning and Business',
      description: 'This interactive book is designed to help learners, researchers, and professionals bridge the gap between Python programming, machine learning fundamentals, and real-world business applications.',
      image: getAsset('images/Book_Cover_programming_for_business.png'), // Resolves to /book2.jpg
      link: 'https://chandraveshchaudhari.github.io/Programming_for_Business/intro.html',
    },
    {
      title: 'Machine Learning for Business',
      description: 'Machine Learning for Business is an interactive and practical learning hub that connects business strategy with modern machine learning techniques.',
      image: getAsset('images/book_cover_machine_learning_for_business.png'), // Resolves to /book1.jpg
      link: 'https://chandraveshchaudhari.github.io/Machine_Learning_For_Business/intro.html#',
    },
  ],

  contact: {
    email: 'shaik.raihaan@baecoh.christuniversity.in',
    linkedin: 'https://www.linkedin.com/in/shaikraihaan',
    github: 'https://github.com/chandraveshchaudhari',
    googleScholar: 'https://scholar.google.com/citations?authuser=1&user=V78qbA8AAAAJ',
  orcid: 'https://orcid.org/0000-0003-1053-7541',
  },
};

export default siteConfig;
