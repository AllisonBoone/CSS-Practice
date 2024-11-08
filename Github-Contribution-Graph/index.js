function generateRandomContributionStatus() {
  const contributions = [];
  const levels = [0, 0, 0, 3, 5, 10];

  for (let i = 0; i < 52; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      week.push(levels[Math.floor(Math.random() * levels.length)]);
    }
    contributions.push(week);
  }

  return contributions;
}

function makeGraph() {
  const graph = document.querySelector('.graph');
  const contributions = generateRandomContributionStatus();

  contributions.forEach((week) => {
    const graphWeek = document.createElement('ul');
    week.forEach((level) => {
      const square = document.createElement('li');
      square.classList.add('square');
      square.dataset.value = level;
      graphWeek.appendChild(square);
    });
    graph.appendChild(graphWeek);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  makeGraph();
});
