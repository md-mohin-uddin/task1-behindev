// Array of different headings
const headings = [
    "Selecting Leaders",
    "Conducting Surveys",
    "Taking Polls",
    "Educating Voters",
    "Running Contest",
    "Making Decisions",
  ];
  
  // Function to update the heading text
  function updateHeading() {
    const headingElement = document.getElementById('dynamic-heading');
    // Get a random heading from the array
    const randomHeading = headings[Math.floor(Math.random() * headings.length)];
    // Update the text content of the heading element
    headingElement.textContent = randomHeading;
  }
  
  // Set interval to update the heading every 5 seconds (5000 milliseconds)
  setInterval(updateHeading, 2000);
  