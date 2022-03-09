import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import PersonCardStaffPage from "../components/personCardStaffPage/personCardStaffPage";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const people = [
  {
    slug: "tim",
    name: "Tim Doran",
    role: "Brass Caption Head",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["brass"],
  },
  {
    slug: "schmitt",
    name: "Lewis Schmitt",
    role: "Brass Instructor",
    email: null,
    imageUrl: "/img/staff/schmitt.png",
    bio: null,
    tags: ["brass"],
  },
  {
    slug: "remy",
    name: "Remy Perez",
    role: "Brass Technician",
    email: null,
    imageUrl: "/img/staff/remy.png",
    bio: null,
    tags: ["brass"],
  },
  {
    slug: "chris",
    name: "Chris Holland",
    role: "Brass Technician",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["brass"],
  },
  {
    slug: "moya",
    name: "Jeremiah Moya",
    role: "Brass Technician",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["brass"],
  },
  {
    slug: "david",
    name: "David Hobart",
    role: "Executive Director",
    email: "hobart1@gmail.com",
    imageUrl: "/img/staff/david.png",
    bio: null,
    tags: ["leaders"],
  },
  {
    slug: "budd",
    name: "Budd Williams",
    role: "Program Coordinator",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["leaders"],
  },
  {
    slug: "frank",
    name: "Frank Mauriello",
    role: "Director of Music",
    email: null,
    imageUrl: "/img/staff/frank.png",
    bio: null,
    tags: ["leaders"],
  },
  {
    slug: "tom",
    name: "Tom Synder",
    role: "Brass Arranger",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["leaders"],
  },
  {
    slug: "rudy",
    name: "Rudy Flores",
    role: "Battery Arranger",
    email: null,
    imageUrl: "/img/staff/defaults/woman.png",
    bio: null,
    tags: ["leaders"],
  },
  {
    slug: "neil",
    name: "Neil Cain",
    role: "Front Ensemble Arranger",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["leaders"],
  },
  {
    slug: "scott",
    name: "Scott Tomlin",
    role: "Drill Designer",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["leaders"],
  },

  {
    slug: "carlos",
    name: "Carlos Becerra",
    role: "Percussion Caption Head",
    email: null,
    imageUrl: "/img/staff/carlos.png",
    bio: null,
    tags: ["percussion"],
  },
  {
    slug: "v",
    name: "Michael Valente",
    role: "Front Ensemble Coordinator",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["percussion"],
  },
  {
    slug: "cameron",
    name: "Cameron Gutierrez",
    role: "Percussion Instructor",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["percussion"],
  },
  {
    slug: "aaron",
    name: "Aaron Gregory",
    role: "Percussion Intructor",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["percussion"],
  },

  {
    slug: "lori",
    name: "Lori Tomlin",
    role: "Color Guard Designer and Supervisor",
    email: null,
    imageUrl: "/img/staff/defaults/woman.png",
    bio: null,
    tags: ["guard"],
  },
  {
    slug: "nick",
    name: "Nick Ashley",
    role: "Color Guard Caption Head",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["guard"],
  },
  {
    slug: "paige",
    name: "Paige MacKay",
    role: "Color Guard Technician",
    email: null,
    imageUrl: "/img/staff/defaults/woman.png",
    bio: null,
    tags: ["guard"],
  },
  {
    slug: "stephanie",
    name: "Stephanie Perdikos",
    role: "Color Guard Technician",
    email: null,
    imageUrl: "/img/staff/defaults/woman.png",
    bio: null,
    tags: ["guard"],
  },
  {
    slug: "noreen",
    name: "Noreen LaNasa",
    role: "Visual Co-Caption Head",
    email: null,
    imageUrl: "/img/staff/noreen.png",
    bio: ` Noreen served in the role of Visual Caption Head then later as program coordinator for the 2021 season for the Sunrisers.  She was also on the visual team in 2018 as a Tech.  Noreen was a marching member of the Jersey Surf from 2004-2007.  Then she marched Fusion Core in 2013.
    In 2005, she joined Hicksville high school as a visual Tech. She taught there for seven years. Noreen currently teaches at the Sachem high school as assistant band director, show designer, and on visual staff.
    Noreen attended Hofstra University and graduated with a music education degree.`,
    tags: ["visual"],
  },

  {
    slug: "alfredo",
    name: "Alfredo Gumbs",
    role: "Visual Co-Caption Head",
    email: null,
    imageUrl: "/img/staff/alfredo.png",
    bio: ` Alfredo has taught with various high school music programs in Northern NJ since 2015.
    Currently, Alfredo is working with Glen Ridge high school, and he was also recently hired as the visual caption head at Passaic County Technical Vocational Institute. 
    Alfredo attended Seton Hall University, where he graduated with a Psychology degree. He currently works as a Special Education teacher and a behavioral therapist and has worked with children and young adults on the spectrum for more than ten years.`,
    tags: ["visual"],
  },
  {
    slug: "scully",
    name: "Alec Scully",
    role: "Visual Consultant",
    email: null,
    imageUrl: "/img/staff/scully.jpg",
    bio: `Alec marched with the Hawthorne Caballeros from 2014 to 2016.  Alec marched with the Crossmen in 2017 and then returned to Caballeros on visual staff in 2018-2019.
    Alec graduated from West Chester University, where he marched with the Golden Rams. He majored in Computer Science and currently works as a .NET Developer.`,
    tags: ["visual"],
  },
  {
    slug: "arthur",
    name: "Jordan Arthur",
    role: "Visual Technician",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["visual"],
  },
  {
    slug: "leon",
    name: "Leon Pooran",
    role: "Visual Technician",
    email: null,
    imageUrl: "/img/staff/leon.jpeg",
    bio: null,
    tags: ["visual"],
  },
  {
    slug: "antonio",
    name: "Antonio Hernandez",
    role: "Visual Technician",
    email: null,
    imageUrl: "/img/staff/defaults/antonio.jpeg",
    bio: null,
    tags: ["visual"],
  },
  {
    slug: "pat",
    name: "Pat Bocker",
    role: "Visual Technician",
    email: null,
    imageUrl: "/img/staff/pat.png",
    bio: null,
    tags: ["visual"],
  },
  {
    slug: "angelo",
    name: "Angelo Oliver",
    role: "Visual Technician",
    email: null,
    imageUrl: "/img/staff/defaults/man.png",
    bio: null,
    tags: ["visual"],
  },
];

const tabs = [
  { name: "Leaders", tag: "leaders", href: "#" },
  { name: "Visual", tag: "visual", href: "#" },
  { name: "Brass", tag: "brass", href: "#" },
  { name: "Percussion", tag: "percussion", href: "#" },
  { name: "Color Guard", tag: "guard", href: "#" },
];

export default function Staff() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [membersDisplayed, setMembersDisplayed] = useState(people);

  useEffect(() => {
    let newMembers = people.filter((person) => {
      return person.tags.includes(currentTab.tag.toLocaleLowerCase());
    });
    setMembersDisplayed(newMembers);
  }, [currentTab]);

  return (
    <div className="bg-white">
      <Navbar />

      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Meet our leadership
          </h2>

          <div className="border-b border-gray-200">
            <div className="sm:flex sm:items-baseline">
              <div className="mt-2 ">
                <nav className=" flex space-x-8">
                  {tabs.map((tab) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      className={`text-lg leading-6 font-medium text-gray-900 ${
                        currentTab.name === tab.name
                          ? "border-indigo-500 text-orange-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                      onClick={() => setCurrentTab(tab)}
                    >
                      {tab.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <ul
            role="list"
            className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {membersDisplayed.map((person) => (
              <PersonCardStaffPage key={person.name} {...person} />
            ))}
          </ul>
        </div>
        <div className="text-center mt-10  container">
          <hr />
          <p>
            Default profile pictures provided by{" "}
            <a className="text-orange-700" href="https://www.flaticon.com/">
              FlatIcon
            </a>{" "}
            free of charge. Thank you!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
