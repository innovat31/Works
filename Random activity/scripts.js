// Array of possible activities
const activities = [
    "Go for a walk in the park",
    "Read a book",
    "Cook a new recipe",
    "Watch a movie",
    "Learn a new skill online",
    "Do some yoga",
    "Call a friend or family member",
    "Draw or paint something",
    "Listen to a podcast",
    "Organize your workspace"
];

// Function to pick a random activity
function pickRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const randomActivity = activities[randomIndex];
    document.getElementById('activity-display').textContent = randomActivity;
}
