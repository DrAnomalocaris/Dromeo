




BRAIN.runconnectome = function() {

    for (var ps in BRAIN.postSynaptic) {
        /* Muscles cannot fire, make sure they don't */
        if(BRAIN.muscles.indexOf(ps.substring(0,3)) == -1 &&
           BRAIN.postSynaptic[ps][BRAIN.thisState] > BRAIN.fireThreshold) {
            BRAIN.fireNeuron(ps);
        }
    }

    BRAIN.motorcontrol();

    for (var ps in BRAIN.postSynaptic) {
        BRAIN.postSynaptic[ps][BRAIN.thisState] = BRAIN.postSynaptic[ps][BRAIN.nextState];
    }

    var temp = BRAIN.thisState;
    BRAIN.thisState = BRAIN.nextState;
    BRAIN.nextState = temp;

}

BRAIN.fireNeuron = function(fneuron) {

    /* The threshold has been exceeded and we fire the neurite */
    if (fneuron !== "MVULVA") {
        BRAIN.connectome[fneuron]();
        BRAIN.postSynaptic[fneuron][BRAIN.nextState] = 0;
    }

}

BRAIN.dendriteAccumulate = function(dneuron) {
    BRAIN.connectome[dneuron]();

}

BRAIN.motorcontrol = function() {

    /* accumulate left and right muscles and the accumulated values are
       used to move the left and right motors of the robot */

    BRAIN.accumleft = 0;
    BRAIN.accumright = 0;

    for(var m = 0; m < BRAIN.muscleList.length; m++) {
        var muscleName = BRAIN.muscleList[m];

        if(BRAIN.mLeft.indexOf(muscleName) != -1) {
            BRAIN.accumleft += BRAIN.postSynaptic[muscleName][BRAIN.nextState];
            BRAIN.postSynaptic[muscleName][BRAIN.nextState] = 0;
        } else if(BRAIN.mRight.indexOf(muscleName) != -1) {
            BRAIN.accumright += BRAIN.postSynaptic[muscleName][BRAIN.nextState];
            BRAIN.postSynaptic[muscleName][BRAIN.nextState] = 0;
        }
    }

}