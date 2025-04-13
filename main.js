function generatePlan() {
  const destination = document.getElementById("destination").value;
  const days = document.getElementById("days").value;
  const preferences = document.getElementById("preferences").value;
  const budget = document.getElementById("budget").value;

  let output = `🧳 Trip Plan for ${destination}\n\n`;

  for (let i = 1; i <= days; i++) {
    output += `Day ${i}:\n- Explore local spots based on your interest in ${preferences}.\n- Try local food and engage in cultural experiences.\n- Relax and enjoy scenic views.\n\n`;
  }

  output += `🎯 Total Budget: ${budget}\n`;
  output += `✨ Enjoy your personalized trip to ${destination}!`;

  document.getElementById("output").textContent = output;
}
