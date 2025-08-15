export type Project = {
  name: string;
  description: string;
  techStack: { name: string; title: string }[];
  githubLink: string;
  hostedLink?: string;
  images: { src: string; alt: string }[];
};

export const projectData: Project[] = [
  {
    "name": "Wanderlust Dreams",
    "description": "One of the first websites I uploaded to GitHub. This website is just a sort of Travel Catalog site where I list the places that I one day wish to visit once I'm financially stable. This was made as a submission for my CCC181 course requirement for my BS IT undergraduate degree.",
    "techStack": [
      { "name": "html5", "title": "HTML5" },
      { "name": "css3", "title": "CSS3" },
      { "name": "js", "title": "JavaScript" }
    ],
    "githubLink": "https://github.com/Rikuron/CCC181-Eugenio-Website",
    "hostedLink": "https://rikuron.github.io/CCC181-Eugenio-Website/",
    "images": [
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405177/ccc181_1_fkku4s.png", "alt": "Wanderlust Dreams Image 1" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405205/ccc181_2_whph6x.png", "alt": "Wanderlust Dreams Image 2" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405178/ccc181_3_gtqet8.png", "alt": "Wanderlust Dreams Image 3" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405177/ccc181_4_lxavpm.png", "alt": "Wanderlust Dreams Image 4" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405178/ccc181_5_doct0y.png", "alt": "Wanderlust Dreams Image 5" }
    ]
  },
  {
    "name": "Student Recording System", 
    "description": "A school project with a fullstack implementation for student record management. It features user authentication, CRUD operations for student data, role-based access control, CSV import, and data visualization capabilities.",
    "techStack": [
      { "name": "html5", "title": "HTML5" },
      { "name": "css3", "title": "CSS3" },
      { "name": "js", "title": "JavaScript" },
      { "name": "react", "title": "React" },
      { "name": "nodejs", "title": "NodeJS" },
      { "name": "npm", "title": "NPM" },
      { "name": "redis", "title": "Redis" }
    ],
    "githubLink": "https://github.com/Rikuron/Redis-App",
    "hostedLink": "",
    "images": [
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405070/srs_1_uwrdpz.png", "alt": "Student Recording System Image 1" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405069/srs_2_ndfq8u.png", "alt": "Student Recording System Image 2" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405069/srs_3_s3xgys.png", "alt": "Student Recording System Image 3" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405069/srs_4_jlnyth.png", "alt": "Student Recording System Image 4" }
    ]
  },
  {
    "name": "Barangay Profiling System",
    "description": "A fullstack web app with a landing page and dashboard for a local government unit in Iligan City. It serves as a web-based repository for demographic information. This project was part of a research paper accepted for publication at the 8th Information Systems International Conference 2025.",
    "techStack": [
      { "name": "tailwindcss", "title": "Tailwind CSS" },
      { "name": "react", "title": "React" },
      { "name": "vitejs", "title": "Vite" },
      { "name": "nodejs", "title": "NodeJS" },
      { "name": "redis", "title": "Redis" },
      { "name": "mongodb", "title": "MongoDB" },
      { "name": "expressjs", "title": "ExpressJS" },
    ],  
    "githubLink": "https://github.com/Rikuron/Barangay-Profiling-System",
    "hostedLink": "",
    "images": [
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405282/bps_1_qeyvvv.png", "alt": "Barangay Dulag Profiling System Image 1" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405254/bps_2_dkoeap.png", "alt": "Barangay Dulag Profiling System Image 2" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405419/bps_3_mpyph7.png", "alt": "Barangay Dulag Profiling System Image 3" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405253/bps_4_mgcojh.png", "alt": "Barangay Dulag Profiling System Image 4" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405255/bps_5_gtxy8p.png", "alt": "Barangay Dulag Profiling System Image 5" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405255/bps_6_a5rgib.png", "alt": "Barangay Dulag Profiling System Image 6" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405420/bps_7_kj782s.png", "alt": "Barangay Dulag Profiling System Image 7" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405418/bps_8_bckbrw.png", "alt": "Barangay Dulag Profiling System Image 8" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405256/bps_9_geebfr.png", "alt": "Barangay Dulag Profiling System Image 9" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405255/bps_10_vtj7s1.png", "alt": "Barangay Dulag Profiling System Image 10" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405261/bps_11_ej8zuf.png", "alt": "Barangay Dulag Profiling System Image 11" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405419/bps_12_jz6bcz.png", "alt": "Barangay Dulag Profiling System Image 12" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405418/bps_13_cueqmc.png", "alt": "Barangay Dulag Profiling System Image 13" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405256/bps_14_rsr6xk.png", "alt": "Barangay Dulag Profiling System Image 14" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405253/bps_15_evykkb.png", "alt": "Barangay Dulag Profiling System Image 15" }
    ]
  },
  {
    "name": "Yamz Computer Solutions Landing Page",
    "description": "A Landing Page I have developed for the company I was interning on.",
    "techStack": [
      { "name": "tailwindcss", "title": "Tailwind CSS" },
      { "name": "typescript", "title": "TypeScript" },
      { "name": "react", "title": "React" },
      { "name": "nextjs", "title": "NextJS" },
      { "name": "nodejs", "title": "NodeJS" },
      { "name": "cloudinary", "title": "Cloudinary" },
    ],
    "githubLink": "https://github.com/Rikuron/Yamz_Landing_Page",
    "hostedLink": "https://yamz-computer-solutions.vercel.app",
    "images": [
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752405802/yamz_1_vddnun.png", "alt": "Yamz Computer Solutions Landing Page Image 1" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752406012/yamz_2_wng7gc.png", "alt": "Yamz Computer Solutions Landing Page Image 2" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752406003/yamz_3_gwrboa.png", "alt": "Yamz Computer Solutions Landing Page Image 3" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752406006/yamz_4_k1c2v3.png", "alt": "Yamz Computer Solutions Landing Page Image 4" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752406005/yamz_5_sd2f0c.png", "alt": "Yamz Computer Solutions Landing Page Image 5" }
    ]
  },
  {
    "name": "Iligan ICT Month 2025 Microsite",
    "description": "A microsite that I and my co-developers from DEVCON Iligan developed for LGU Iligan for their ICT Month in 2025. This microsite contains information about the ICT Month and the events happening in it.",
    "techStack": [
      { "name": "tailwindcss", "title": "Tailwind CSS" },
      { "name": "typescript", "title": "TypeScript" },
      { "name": "react", "title": "React" },
      { "name": "vitejs", "title": "Vite" },
      { "name": "nodejs", "title": "NodeJS" },
      { "name": "cloudinary", "title": "Cloudinary" },
    ],
    "githubLink": "https://github.com/DEVCON-Iligan/iligan-ictmonth2025",
    "hostedLink": "https://iligan-ictmonth2025.vercel.app",
    "images": [
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752406205/microsite_1_gbxsks.png", "alt": "Iligan ICT Month 2025 Microsite Image 1" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752406205/microsite_2_e6jq1h.png", "alt": "Iligan ICT Month 2025 Microsite Image 2" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752406204/microsite_3_mbehdt.png", "alt": "Iligan ICT Month 2025 Microsite Image 3" },
      { "src": "https://res.cloudinary.com/dgwcnkzdg/image/upload/v1752406205/microsite_4_t0n0mi.png", "alt": "Iligan ICT Month 2025 Microsite Image 4" }
    ]
  }
]