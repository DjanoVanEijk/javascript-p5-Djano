const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];
const resultfiltered = document.getElementById("result-filtered")
const resultmap = document.getElementById("result-map")
const resultsorted = document.getElementById("result-sorted")
const filtered = scores.filter(score => score > 50);
const verdubbeldeScores = scores.map(score => score * 2);
const gesorteerdeScores = scores.sort((a, b) => a - b);

resultfiltered.textContent = filtered
resultmap.textContent = verdubbeldeScores
resultsorted.textContent = gesorteerdeScores



// Filter: toon alleen scores boven de 50 in #result-filtered
// Map: verdubbel alle scores en toon in #result-map
// Sort: sorteer van laag naar hoog en toon in #result-sorted
