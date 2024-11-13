const express = require("express");
const app = express();
const port = 3000;

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "noor",
    username: "alnooristiak",
    email: "test@gmail.com",
  });

  res.send(createduser);
});

app.get("/update", async (req, res) => {
  try {
    let updateduser = await userModel.findOneAndUpdate(
      { username: "noor" }, // Filter criteria
      { name: "al noor istiak" }, // Update data
      { new: true } // Return the updated document
    );
    res.send(updateduser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating user");
  }
});

app.get("/read", async (req, res) => {
  let users = await userModel.find({ username: "alnooristiak" });
  res.send(users);
});

app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ username: "alnooristiak" });
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
