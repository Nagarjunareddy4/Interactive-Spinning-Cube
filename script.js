// Get the cube element
const cube = document.getElementById("cube");

// Initialize rotation angles
let angleX = 0;
let angleY = 0;

// Add click event listener
cube.addEventListener("click", () => {
  // Randomly increase angles on click for spinning effect
  angleX += Math.random() * 180 + 90;
  angleY += Math.random() * 180 + 90;

  // Apply the transformation
  cube.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});
