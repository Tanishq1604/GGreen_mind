import { useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar.jsx";
import Postbox from "./postbox.jsx";

async function getAllPosts() {
  try {
    // Make a GET request to the backend endpoint to fetch all posts
    const response = await axios.get("/posts");

    // Extract the data from the response
    const posts = response.data;

    // Return the fetched posts
    return posts;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error fetching posts:", error);
    throw error; // You can choose to handle the error differently if needed
  }
}

// Example usage of the getAllPosts function
async function fetchPosts() {
  try {
    // Fetch all posts from the backend
    const posts = await getAllPosts();

    // Do something with the fetched posts (e.g., display them on the webpage)
    console.log("Fetched posts:", posts);
  } catch (error) {
    // Handle errors if needed
    console.error("Error fetching posts:", error);
  }
}

export default function Explore() {
  return (
    <>
      <Sidebar />
      <div className="scroll">
        {console.log(fetchPosts())}
        <Postbox/>
        <Postbox />
      </div>
    </>
  );
}
