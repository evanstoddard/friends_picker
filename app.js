// Random Friends Episode Picker

document.addEventListener('DOMContentLoaded', () => {
  const pickButton = document.getElementById('pick-btn');
  const resultDisplay = document.getElementById('result');

  pickButton.addEventListener('click', () => {
    // Get a random episode from the episodes array
    const randomIndex = Math.floor(Math.random() * episodes.length);
    const randomEpisode = episodes[randomIndex];

    // Create the result HTML
    const resultHTML = `
      <div class="episode-result">
        <div class="season-episode">Season ${randomEpisode.season}, Episode ${randomEpisode.episode}</div>
        <div class="episode-title">${randomEpisode.title}</div>
      </div>
    `;

    // Update the result display
    resultDisplay.innerHTML = resultHTML;
  });
});
