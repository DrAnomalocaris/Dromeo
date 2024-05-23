var pronouns="sier/sieser/siem/sien ";
var brainTick=50;



BRAIN.setup()

// Create a box for each post-synaptic neuron
print("setting up connectome html")
for (var ps in BRAIN.connectome) {
	var newBox = document.createElement('span');
	newBox.id = ps;
	newBox.className = 'brainNode';
	document.getElementById('nodeHolder').appendChild(newBox);
  if (inputNeurons.includes(ps)){
      newBox.classList.add('inputNeurons')   
      document.getElementById('inputHolder').appendChild(newBox);

  }else if (outputNeurons.includes(ps)){
      newBox.classList.add('outputNeurons')
      document.getElementById('outputHolder').appendChild(newBox);

  }else{
    newBox.classList.add('interNeurons')
    document.getElementById('interHolder').appendChild(newBox);
  }

}
for (var key in BRAIN.neuronsToActicate) {
  if (BRAIN.neuronsToActicate.hasOwnProperty(key)) {
    if (key.startsWith('R')){
      var InputDiv = document.getElementById('rightInput');

    } else if (key.startsWith('L')){
      var InputDiv = document.getElementById('leftInput');
  }
  var input = document.createElement('input');
  input.type = 'checkbox';
  input.id = key;
  input.classList.add("toggle");
  // Set the initial checked state based on the value in BRAIN.neuronsToActicate[key]
  input.checked = BRAIN.neuronsToActicate[key];
  // Add event listener to toggle the value when the checkbox is clicked
  input.addEventListener('change', function() {
      BRAIN.neuronsToActicate[key] = this.checked;
  });
  // Append input element to the div
  InputDiv.appendChild(input);
  // Create label for the input element
  var label = document.createElement('label');
  label.htmlFor = key;
  label.textContent = key;
  label.classList.add("toggle-label")
  InputDiv.appendChild(label);
  

 }
}


/* toggleCheckbox.addEventListener('click', function() {
  var toggleLabel = document.querySelector('.toggle-label');
  // Toggle the background color based on checkbox state
  toggleLabel.style.backgroundColor = toggleCheckbox.checked ? '#66bb6a' : '#ccc';
}); */

/**
 * Updates the brain of the worm.
 * This function updates the brain's state, updates the visual representation of the post-synaptic connections,
 * calculates the new direction and speed of the worm based on the accumulated left and right inputs.
 */

function updateBrain() {
  BRAIN.update();
	for (var postSynaptic in BRAIN.connectome) {
		var psBox = document.getElementById(postSynaptic);
		var neuron = BRAIN.postSynaptic[postSynaptic][BRAIN.thisState];

		psBox.style.opacity = Math.min(1, (neuron / 50)+.2);
	}
	//let scalingFactor = 20;
	//let newDir = (BRAIN.accumleft - BRAIN.accumright) / scalingFactor;
	//targetDir = facingDir + newDir * Math.PI;
	//targetDir = facingDir + calculateFinalDirection(BRAIN.accumleft/200, BRAIN.accumright/200);
	//targetSpeed =
	//	(Math.abs(BRAIN.accumleft) + Math.abs(BRAIN.accumright)) /
	//	(scalingFactor * 5);
	//speedChangeInterval = (targetSpeed - speed) / (scalingFactor * 1.5);
}

//BRAIN.randExcite();

setInterval(updateBrain, brainTick);