async function Postdata() {
  try {
    const response = await axios.get(`/post/${PostID}`);

    // Extract the data from the response
    const postdata = await response.data;

    // Return the fetched posts
    return postdata;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error:", error);
    throw error; // You can choose to handle the error differently if needed
  }
}

async function Userdata({ UserID }) {
  try {
    const response = await axios.get(`/user/${UserID}`);

    // Extract the data from the response
    const userdata = await response.data;

    // Return the fetched posts
    return userdata;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error:", error);
    throw error; // You can choose to handle the error differently if needed
  }
}

export {Userdata, Postdata};
