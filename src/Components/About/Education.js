import React from "react";

const educationData = [
  {
    year: "2022 - 2025",
    degree: "Bachelor of Computer Application",
    institute: "Pacific University, Udaipur",
    result: "8.2 CGPA",
    note: "Secured top 3 rank in BCA Semester 6."
  },
  {
    year: "2021 - 2022",
    degree: "Higher Secondary Education (12th Commerce)",
    institute: "Caravan English Medium School, Ahmedabad",
    result: "83.76% (94.12 Percentile)",
    note: "Secured 3rd rank in school."
  },
  {
    year: "2020 - 2021",
    degree: "Secondary Education (10th)",
    institute: "Caravan English Medium School, Ahmedabad",
    result: "42% (48.12 Percentile)",
    note: ""
  }
];

const experienceData = [
  {
    year: "25th August 2025 - Present",
    role: "Process Associate",
    company: "AndWeSupport (AWS)",
    field: "Promo Industry",
    note: "- At AWS, I support sales operations and manage USA-based client requests using tools like Promo XCRM, Sage, and EPS. This role has strengthened my skills in client handling, sales coordination, and software-driven workflow management."
  },
  {
    year: "1st Jan 2024 - 17th Jul 2025",
    role: "Trainer | Auditor | Quality Analyst | Research Analyst",
    company: "Arcgate, Udaipur",
    field: "KPO/BPO",
    note: "- I have 18 months of experience at Arcgate, where I started at age 18 and quickly advanced into a Trainer role. I trained multiple new joiners many 5–7 years older than me, showcasing my quick learning, leadership, and strong communication skills.",
    certificate:
      "https://drive.google.com/file/d/1KYeflcdtoPtQ7aRdma1YYVO01V0KgXVL/view?usp=sharing"
  },
  {
    year: "Sept 2023 - Nov 2023",
    role: "Delivery Driver",
    company: "Swiggy / Zomato",
    note: "- It was an amazing experience for me to work there since, let's face it, not many well-educated people would want to be delivery boys. However, I was a very big tale, and after working as a delivery partner for just two months, I realized what real hard labor entailed."
  },
  {
    year: "Jul 2023 - Sept 2023",
    role: "Call DE (Delivery Partner)",
    company: "Swiggy",
    note: "- Since this was my first job, which I held for approximately three and a half months when I was just eighteen, I have gained a great deal of experience with Five Star Digital. I have also gained a great deal of patience and excellent communication skills."
  }
];

const TimelineItem = ({ data }) => (
  <div className="relative pl-10 mb-10">
    <span className="absolute top-1 left-0 w-4 h-4 bg-gray-700 rounded-full"></span>
    <span className="absolute top-2 left-1.5 w-1 h-full bg-gray-700 rounded-full"></span>
    <div className="text-xs lg:text-lg flex items-center">
      <img
        src="https://raw.githubusercontent.com/premsharma1231/LinksTOuse/refs/heads/main/calendar.png"
        className="h-5 mr-2"
        alt=""
      />
      {data.year}
    </div>

    <h2 className="text-sm lg:text-xl font-bold pt-1 text-black">{data.degree || data.role}</h2>
    <p className="text-xs lg:text-base">{data.institute || data.company}</p>
    {data.result && <p className="text-xs lg:text-sm">{data.result}</p>}
    {data.field && <p className="text-xs lg:text-sm">{data.field}</p>}
    {data.note && <p className="text-xs lg:text-sm">{data.note}</p>}

    {data.certificate && (
      <a
        href={data.certificate}
        target="_blank"
        rel="noreferrer"
        className="bg-gray-400 py-1 px-2 rounded-md mt-2 inline-block text-xs lg:text-sm"
      >
        Experience Certificate
      </a>
    )}
  </div>
);

const Education = () => {
  return (
    <div className="flex flex-col w-full px-4 gap-4 py-10 lg:flex-row lg:px-12">
      
      {/* Education */}
      <div className="bg-white rounded-md font-Karla p-6 flex-1 text-DarkColor relative border shadow-md">
        <h1 className="font-Bungee text-2xl lg:text-4xl underline mb-10">Education</h1>
        {educationData.map((item, index) => (
          <TimelineItem key={index} data={item} />
        ))}
      </div>

      {/* Experience */}
      <div className="bg-gray-300 rounded-md font-Karla p-6 flex-1 text-black relative border shadow-md">
        <h1 className="font-Bungee text-2xl lg:text-4xl underline mb-10">Experience</h1>
        {experienceData.map((item, index) => (
          <TimelineItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Education;