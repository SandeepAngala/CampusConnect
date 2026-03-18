const mongoose = require('mongoose');
const Announcement = require('./models/Announcement');
const Activity = require('./models/Activity');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const announcements = [
  {
    title: "Welcome to Brainstorm Club",
    content: "Our club empowers young innovators and leaders. Join us to be a part of the future.",
    category: "General",
    priority: "Normal",
    author: "Admin",
    publishDate: new Date(),
    isActive: true,
    tags: ["Welcome", "Innovators"]
  },
  {
    title: "Hackathon 2025 Announced",
    content: "Participate in the biggest tech event of the year. Exciting prizes up for grabs!",
    category: "Event",
    priority: "High",
    author: "Events Head",
    publishDate: new Date(),
    isActive: true,
    tags: ["Hackathon", "Tech"]
  },
  {
    title: "New Projects Launched",
    content: "Several new student-led projects are now live in the Innovation Lab.",
    category: "Club News",
    priority: "Urgent",
    author: "Projects Lead",
    publishDate: new Date(),
    isActive: true,
    tags: ["Innovation", "Projects"]
  }
];

const activities = [
  {
    title: "Robotics Project",
    description: "Building an autonomous robot in the innovation lab using Arduino and ROS.",
    type: "Project",
    status: "In Progress",
    startDate: new Date("2025-02-01"),
    leader: "Sandeep Angala",
    participants: [
      { name: "John Doe", role: "Developer" },
      { name: "Jane Smith", role: "Designer" }
    ],
    technologies: ["Arduino", "Python", "ROS"],
    isHighlighted: true,
    visibility: "Public",
    tags: ["Robotics", "Hardware"]
  },
  {
    title: "Web Development Bootcamp",
    description: "Training students on MERN stack from the ground up with industry-standard practices.",
    type: "Workshop",
    status: "Completed",
    startDate: new Date("2025-01-18"),
    endDate: new Date("2025-02-15"),
    leader: "Tech Head",
    participants: [
      { name: "Himanshu", role: "Instructor" }
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    isHighlighted: true,
    visibility: "Public",
    tags: ["WebDev", "MERN"]
  },
  {
    title: "App Development",
    description: "Developing campus connect application for the students to stay informed and productive.",
    type: "Project",
    status: "In Progress",
    startDate: new Date("2025-01-05"),
    leader: "Himanshu Kumar Singh",
    participants: [
      { name: "Sandeep Bablu", role: "Developer" }
    ],
    technologies: ["React Native", "Firebase"],
    isHighlighted: false,
    visibility: "Public",
    tags: ["MobileDev", "App"]
  }
];

const seedDB = async () => {
  try {
    const announcementCount = await Announcement.countDocuments();
    const activityCount = await Activity.countDocuments();

    if (announcementCount === 0) {
      console.log('Seeding announcements...');
      await Announcement.insertMany(announcements);
      console.log('Announcements seeded successfully!');
    } else {
      console.log('Announcements already exist, skipping seeding.');
    }

    if (activityCount === 0) {
      console.log('Seeding activities...');
      await Activity.insertMany(activities);
      console.log('Activities seeded successfully!');
    } else {
      console.log('Activities already exist, skipping seeding.');
    }
  } catch (error) {
    console.error('Error seeding database:', error.message);
  }
};

module.exports = seedDB;
