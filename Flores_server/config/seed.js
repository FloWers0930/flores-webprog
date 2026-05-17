// Flores_server/config/seed.js
const User = require("../models/User");

const seedDatabase = async () => {
  try {
    const count = await User.countDocuments();
    if (count === 0) {
      console.log("🌱 No users found. Seeding sample data...");

      // Optional: Create a default admin user
      await User.create({
        firstName: "Admin",
        lastName: "Flores",
        age: "30",
        gender: "Male",
        contactNumber: "09123456789",
        email: "admin@flores.com",
        username: "admin",
        password: "$2a$10$samplehashedpassword123456", // This is just a placeholder
        address: "Calamba, Laguna",
        type: "admin",
        isActive: true,
      });
      console.log("✅ Sample admin user created");
    } else {
      console.log(`✅ Database already has ${count} users`);
    }
  } catch (error) {
    console.error("Seed error:", error.message);
  }
};

module.exports = seedDatabase;
