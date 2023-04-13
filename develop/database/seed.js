
const mongoose = require('mongoose');
const db = require('./connection');
const { User, Thought } = require('./models');

const seedData = {
  users: [
    { username: "Jonathan", email: "jonathan@example.com" },
    { username: "Mark", email: "mark@example.com" }
  ],
  thoughts: [
    { thoughtText: "Automatic Test Seeded Thought 1", username: "Jonathan" },
    { thoughtText: "Automatic Test Seeded Thought 2", username: "Mark" }
  ]
};

(async () => {
  try {
    await db;
    await User.deleteMany({});
    await Thought.deleteMany({});
    await User.insertMany(seedData.users);
    await Thought.insertMany(seedData.thoughts);
    console.log('Seed successful');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding:', error);
    process.exit(1);
  }
})();
