// Tally object to track heads and tails count
let tally = {
  heads: 0,
  tails: 0,
};

// Function to flip the coin
function flipCoin() {
  return Math.random() < 0.5 ? "heads" : "tails";
}

// Function to update the display
function updateDisplay() {
  document.getElementById("headsCount").innerText = tally.heads;
  document.getElementById("tailsCount").innerText = tally.tails;
}

// Function to add flip result to the corresponding list
function addToList(result) {
  const listItem = document.createElement("li");
  listItem.textContent = result.charAt(0).toUpperCase() + result.slice(1);

  if (result === "heads") {
    document.getElementById("headsList").appendChild(listItem);
  } else {
    document.getElementById("tailsList").appendChild(listItem);
  }
}

// Function to clear the list before new results are displayed
function clearResults() {
  document.getElementById("headsList").innerHTML = "<h3>Heads</h3>";
  document.getElementById("tailsList").innerHTML = "<h3>Tails</h3>";
}

// Event listener for the flip button
document.getElementById("flipBtn").addEventListener("click", function () {
  // Reset the tally and clear previous results
  tally.heads = 0;
  tally.tails = 0;
  clearResults();

  // Flip the coin 100 times
  for (let i = 0; i < 100; i++) {
    const result = flipCoin();

    // Update the tally
    tally[result]++;

    // Add the result to the appropriate list
    addToList(result);
  }

  // Update the display with the new tally
  updateDisplay();
});
