




BRAIN.setup()


// Create a box for each post-synaptic neuron
print("setting up connectome html")
for (var ps in BRAIN.connectome) {
	var nameBox = document.createElement('span');
	//nameBox.innerHTML = ps;
	document.getElementById('nodeHolder').appendChild(nameBox);

	var newBox = document.createElement('span');
	newBox.cols = 3;
	newBox.rows = 1;
	newBox.id = ps;
	newBox.className = 'brainNode';
	document.getElementById('nodeHolder').appendChild(newBox);

}
print("set up connectome html")

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

		psBox.style.backgroundColor = '#55FF55';
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
BRAIN.neuronsToActicate['R_olfactory_1'] = true;

BRAIN.randExcite();
setInterval(updateBrain, 250);