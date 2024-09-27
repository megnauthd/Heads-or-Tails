const tally = {
    heads: 0,
    tails: 0
};

const coinImages = [
    "https://m.media-amazon.com/images/I/51xs7F+tP5L._AC_UF894,1000_QL80_.jpg", // heads image
    "https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_UF894,1000_QL80_.jpg"  // tails image
];

const generate = document.querySelector(".generate");
const headCount = document.querySelector(".headCount");
const tailCount = document.querySelector(".tailCount");
const headList = document.querySelector(".headList");
const tailList = document.querySelector(".tailList");

function getHeadsOrTails() {
    return Math.random() < 0.5 ? "heads" : "tails";
}

function updateDisplayOfTally() {
    headCount.textContent = tally.heads;
    tailCount.textContent = tally.tails;
}

function listUpdater(result) {
    const itemList = document.createElement("li");
    itemList.textContent = result;
  
    if (result === "heads") {
        headList.appendChild(itemList);
    } else {
        tailList.appendChild(itemList);
    }
}

function displayResult(result, listElement) {
    const img = document.createElement('img');
    img.src = result === "heads" ? coinImages[0] : coinImages[1];
    img.style.width = "50px"; // Adjust the size as necessary
    listElement.appendChild(img);
}

generate.addEventListener('click', function () {
    // Reset tally and lists for fresh 100 flips
    tally.heads = 0;
    tally.tails = 0;
    headList.innerHTML = '';
    tailList.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const result = getHeadsOrTails();
        tally[result]++;
        updateDisplayOfTally();
        listUpdater(result);

        // Display images corresponding to heads/tails
        if (result === "heads") {
            displayResult(result, headList);
        } else {
            displayResult(result, tailList);
        }
    }
});
