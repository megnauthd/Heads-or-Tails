// Array to tally both the heads and tails default value will be 0 so when flipped the values will change
let tally = {
  heads: 0,
  tails: 0,
};

// Function to flip the coin by using math.random that pretty much days heads or tails 50/50
function flipCoin() {
  return Math.random() < 0.5 ? "heads" : "tails";
}

// Function to update the display by getting what value it lands on or Id is displayed then it tally's that id 
function updateDisplay() {
  document.getElementById("headsCount").innerText = tally.heads;
  document.getElementById("tailsCount").innerText = tally.tails;
}

// Function to add flip result to the corresponding list
// created a new list everytime its flipped
//conditional statement that determines what will be displayed
function addToList(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result.charAt(0).toUpperCase() + result.slice(1);

  if (result === "heads") {
    document.getElementById("headsList").appendChild(listItem);
  } else {
    document.getElementById("tailsList").appendChild(listItem);
  }
}

// Event listener for the flip button
// This allows for when the button is clicked to send an argument or message to the function saying to flip the coin
document.getElementById("flipBtn").addEventListener("click", function () {
  const result = flipCoin();

  // Flip the coin 100 times
  for (let i = 0; i < 100; i++) {
    const result = flipCoin();

    // Update the tally
    tally[result]++;

    // Add the result to the appropriate list
    addToList(result);
  }

  // Update the display, calls the function to rerender at the end of the code as its being read from top to bottom
  updateDisplay();
});
