BRAIN.neuronsToActicate=[];
BRAIN.neuronsToActicate['R_gustatory-external_11'] = false;
BRAIN.neuronsToActicate['L_gustatory-external_11'] = false;
BRAIN.neuronsToActicate['R_gustatory-external_13'] = false;
BRAIN.neuronsToActicate['L_gustatory-external_13'] = false;
BRAIN.neuronsToActicate['R_gustatory-external_24'] = false;
BRAIN.neuronsToActicate['L_gustatory-external_24'] = false;
BRAIN.neuronsToActicate['R_gustatory-external_3'] = false;
BRAIN.neuronsToActicate['L_gustatory-external_3'] = false;
BRAIN.neuronsToActicate['R_gustatory-external_4'] = false;
BRAIN.neuronsToActicate['L_gustatory-external_4'] = false;
BRAIN.neuronsToActicate['R_gustatory-external_5'] = false;
BRAIN.neuronsToActicate['L_gustatory-external_5'] = false;
BRAIN.neuronsToActicate['R_gustatory-external_6'] = false;
BRAIN.neuronsToActicate['L_gustatory-external_6'] = false;
BRAIN.neuronsToActicate['R_gustatory-external_7'] = false;
BRAIN.neuronsToActicate['L_gustatory-external_7'] = false;
BRAIN.neuronsToActicate['R_gustatory-external_9'] = false;
BRAIN.neuronsToActicate['L_gustatory-external_9'] = false;
BRAIN.neuronsToActicate['R_gustatory-external_no cluster'] = false;
BRAIN.neuronsToActicate['L_gustatory-external_no cluster'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_11'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_11'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_13'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_13'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_16'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_16'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_21'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_21'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_24'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_24'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_3'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_3'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_4'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_4'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_5'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_5'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_52'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_52'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_6'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_6'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_65'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_65'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_7'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_7'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_9'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_9'] = false;
BRAIN.neuronsToActicate['R_gustatory-pharyngeal_no cluster'] = false;
BRAIN.neuronsToActicate['L_gustatory-pharyngeal_no cluster'] = false;
BRAIN.neuronsToActicate['R_gut_11'] = false;
BRAIN.neuronsToActicate['L_gut_11'] = false;
BRAIN.neuronsToActicate['R_gut_13'] = false;
BRAIN.neuronsToActicate['L_gut_13'] = false;
BRAIN.neuronsToActicate['R_gut_16'] = false;
BRAIN.neuronsToActicate['L_gut_16'] = false;
BRAIN.neuronsToActicate['R_gut_20'] = false;
BRAIN.neuronsToActicate['L_gut_20'] = false;
BRAIN.neuronsToActicate['R_gut_21'] = false;
BRAIN.neuronsToActicate['L_gut_21'] = false;
BRAIN.neuronsToActicate['R_gut_24'] = false;
BRAIN.neuronsToActicate['L_gut_24'] = false;
BRAIN.neuronsToActicate['R_gut_6'] = false;
BRAIN.neuronsToActicate['L_gut_6'] = false;
BRAIN.neuronsToActicate['R_gut_63'] = false;
BRAIN.neuronsToActicate['L_gut_63'] = false;
BRAIN.neuronsToActicate['R_gut_83'] = false;
BRAIN.neuronsToActicate['L_gut_83'] = false;
BRAIN.neuronsToActicate['R_gut_9'] = false;
BRAIN.neuronsToActicate['L_gut_9'] = false;
BRAIN.neuronsToActicate['R_olfactory_1'] = false;
BRAIN.neuronsToActicate['L_olfactory_1'] = false;
BRAIN.neuronsToActicate['R_olfactory_2'] = false;
BRAIN.neuronsToActicate['L_olfactory_2'] = false;
BRAIN.neuronsToActicate['R_respiratory_20'] = false;
BRAIN.neuronsToActicate['L_respiratory_20'] = false;
BRAIN.neuronsToActicate['R_respiratory_21'] = false;
BRAIN.neuronsToActicate['L_respiratory_21'] = false;
BRAIN.neuronsToActicate['R_respiratory_23'] = false;
BRAIN.neuronsToActicate['L_respiratory_23'] = false;
BRAIN.neuronsToActicate['R_respiratory_51'] = false;
BRAIN.neuronsToActicate['L_respiratory_51'] = false;
BRAIN.neuronsToActicate['R_respiratory_63'] = false;
BRAIN.neuronsToActicate['L_respiratory_63'] = false;
BRAIN.neuronsToActicate['R_thermo-cold_5'] = false;
BRAIN.neuronsToActicate['L_thermo-cold_5'] = false;
BRAIN.neuronsToActicate['R_thermo-warm_2'] = false;
BRAIN.neuronsToActicate['L_thermo-warm_2'] = false;
BRAIN.neuronsToActicate['R_visual_0'] = false;
BRAIN.neuronsToActicate['L_visual_0'] = false;
BRAIN.neuronsToActicate['R_visual_23'] = false;
BRAIN.neuronsToActicate['L_visual_23'] = false;
BRAIN.neuronsToActicate['R_visual_8'] = false;
BRAIN.neuronsToActicate['L_visual_8'] = false;

BRAIN.update = function() {
    if (BRAIN.neuronsToActicate['L_gustatory-external_11']){
        BRAIN.dendriteAccumulate('3267019');
        BRAIN.postSynaptic['3267019'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15730680');
        BRAIN.postSynaptic['15730680'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15714173');
        BRAIN.postSynaptic['15714173'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15675901');
        BRAIN.postSynaptic['15675901'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15678833');
        BRAIN.postSynaptic['15678833'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_11']){
        BRAIN.dendriteAccumulate('15612241');
        BRAIN.postSynaptic['15612241'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15618756');
        BRAIN.postSynaptic['15618756'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15671481');
        BRAIN.postSynaptic['15671481'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15615877');
        BRAIN.postSynaptic['15615877'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3562954');
        BRAIN.postSynaptic['3562954'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_13']){
        BRAIN.dendriteAccumulate('19180425');
        BRAIN.postSynaptic['19180425'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15680710');
        BRAIN.postSynaptic['15680710'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15678441');
        BRAIN.postSynaptic['15678441'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15674083');
        BRAIN.postSynaptic['15674083'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_13']){
        BRAIN.dendriteAccumulate('15609427');
        BRAIN.postSynaptic['15609427'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15629355');
        BRAIN.postSynaptic['15629355'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15611642');
        BRAIN.postSynaptic['15611642'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15611791');
        BRAIN.postSynaptic['15611791'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_24']){
        BRAIN.dendriteAccumulate('15679484');
        BRAIN.postSynaptic['15679484'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15690392');
        BRAIN.postSynaptic['15690392'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15715796');
        BRAIN.postSynaptic['15715796'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_24']){
        BRAIN.dendriteAccumulate('15610387');
        BRAIN.postSynaptic['15610387'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15615305');
        BRAIN.postSynaptic['15615305'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15606918');
        BRAIN.postSynaptic['15606918'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_3']){
        BRAIN.dendriteAccumulate('15716934');
        BRAIN.postSynaptic['15716934'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15714639');
        BRAIN.postSynaptic['15714639'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3586984');
        BRAIN.postSynaptic['3586984'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('4338596');
        BRAIN.postSynaptic['4338596'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15716701');
        BRAIN.postSynaptic['15716701'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15690093');
        BRAIN.postSynaptic['15690093'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15689373');
        BRAIN.postSynaptic['15689373'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15674262');
        BRAIN.postSynaptic['15674262'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('12260696');
        BRAIN.postSynaptic['12260696'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15679577');
        BRAIN.postSynaptic['15679577'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15938337');
        BRAIN.postSynaptic['15938337'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15681740');
        BRAIN.postSynaptic['15681740'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15677323');
        BRAIN.postSynaptic['15677323'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('11745381');
        BRAIN.postSynaptic['11745381'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5186461');
        BRAIN.postSynaptic['5186461'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('18934019');
        BRAIN.postSynaptic['18934019'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_3']){
        BRAIN.dendriteAccumulate('15746421');
        BRAIN.postSynaptic['15746421'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15595950');
        BRAIN.postSynaptic['15595950'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3966683');
        BRAIN.postSynaptic['3966683'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15652529');
        BRAIN.postSynaptic['15652529'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15556868');
        BRAIN.postSynaptic['15556868'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15615042');
        BRAIN.postSynaptic['15615042'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15588691');
        BRAIN.postSynaptic['15588691'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15556081');
        BRAIN.postSynaptic['15556081'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15615589');
        BRAIN.postSynaptic['15615589'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('18625446');
        BRAIN.postSynaptic['18625446'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15595607');
        BRAIN.postSynaptic['15595607'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15589411');
        BRAIN.postSynaptic['15589411'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15653288');
        BRAIN.postSynaptic['15653288'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15653432');
        BRAIN.postSynaptic['15653432'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('9853425');
        BRAIN.postSynaptic['9853425'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15609885');
        BRAIN.postSynaptic['15609885'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_4']){
        BRAIN.dendriteAccumulate('15716309');
        BRAIN.postSynaptic['15716309'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('12073881');
        BRAIN.postSynaptic['12073881'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15715643');
        BRAIN.postSynaptic['15715643'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15688358');
        BRAIN.postSynaptic['15688358'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15680093');
        BRAIN.postSynaptic['15680093'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5088293');
        BRAIN.postSynaptic['5088293'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('11736972');
        BRAIN.postSynaptic['11736972'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15716127');
        BRAIN.postSynaptic['15716127'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5116147');
        BRAIN.postSynaptic['5116147'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15673867');
        BRAIN.postSynaptic['15673867'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_4']){
        BRAIN.dendriteAccumulate('15736147');
        BRAIN.postSynaptic['15736147'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('12253020');
        BRAIN.postSynaptic['12253020'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('16341399');
        BRAIN.postSynaptic['16341399'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15588800');
        BRAIN.postSynaptic['15588800'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('10934438');
        BRAIN.postSynaptic['10934438'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('4097554');
        BRAIN.postSynaptic['4097554'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15595823');
        BRAIN.postSynaptic['15595823'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3071301');
        BRAIN.postSynaptic['3071301'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('4017089');
        BRAIN.postSynaptic['4017089'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15651438');
        BRAIN.postSynaptic['15651438'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_5']){
        BRAIN.dendriteAccumulate('3652587');
        BRAIN.postSynaptic['3652587'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15716094');
        BRAIN.postSynaptic['15716094'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15677030');
        BRAIN.postSynaptic['15677030'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15686512');
        BRAIN.postSynaptic['15686512'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15673925');
        BRAIN.postSynaptic['15673925'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5120097');
        BRAIN.postSynaptic['5120097'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('8055671');
        BRAIN.postSynaptic['8055671'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_5']){
        BRAIN.dendriteAccumulate('3822523');
        BRAIN.postSynaptic['3822523'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15589362');
        BRAIN.postSynaptic['15589362'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15656435');
        BRAIN.postSynaptic['15656435'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15615081');
        BRAIN.postSynaptic['15615081'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15615776');
        BRAIN.postSynaptic['15615776'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('4096703');
        BRAIN.postSynaptic['4096703'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5448622');
        BRAIN.postSynaptic['5448622'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_6']){
        BRAIN.dendriteAccumulate('9808022');
        BRAIN.postSynaptic['9808022'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15717426');
        BRAIN.postSynaptic['15717426'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5057916');
        BRAIN.postSynaptic['5057916'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15715151');
        BRAIN.postSynaptic['15715151'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_6']){
        BRAIN.dendriteAccumulate('15658013');
        BRAIN.postSynaptic['15658013'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('8810739');
        BRAIN.postSynaptic['8810739'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('16115501');
        BRAIN.postSynaptic['16115501'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15653927');
        BRAIN.postSynaptic['15653927'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_7']){
        BRAIN.dendriteAccumulate('15690711');
        BRAIN.postSynaptic['15690711'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15714845');
        BRAIN.postSynaptic['15714845'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15712024');
        BRAIN.postSynaptic['15712024'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15717229');
        BRAIN.postSynaptic['15717229'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15711289');
        BRAIN.postSynaptic['15711289'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15698623');
        BRAIN.postSynaptic['15698623'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15678849');
        BRAIN.postSynaptic['15678849'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15713374');
        BRAIN.postSynaptic['15713374'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15700147');
        BRAIN.postSynaptic['15700147'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_7']){
        BRAIN.dendriteAccumulate('15762568');
        BRAIN.postSynaptic['15762568'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15615475');
        BRAIN.postSynaptic['15615475'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15620606');
        BRAIN.postSynaptic['15620606'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15629241');
        BRAIN.postSynaptic['15629241'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('18679889');
        BRAIN.postSynaptic['18679889'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15594123');
        BRAIN.postSynaptic['15594123'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15618976');
        BRAIN.postSynaptic['15618976'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15620432');
        BRAIN.postSynaptic['15620432'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15743905');
        BRAIN.postSynaptic['15743905'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_9']){
        BRAIN.dendriteAccumulate('5116861');
        BRAIN.postSynaptic['5116861'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5095269');
        BRAIN.postSynaptic['5095269'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15714330');
        BRAIN.postSynaptic['15714330'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15690955');
        BRAIN.postSynaptic['15690955'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15711222');
        BRAIN.postSynaptic['15711222'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15699715');
        BRAIN.postSynaptic['15699715'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_9']){
        BRAIN.dendriteAccumulate('4059758');
        BRAIN.postSynaptic['4059758'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('4030526');
        BRAIN.postSynaptic['4030526'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15638742');
        BRAIN.postSynaptic['15638742'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15617459');
        BRAIN.postSynaptic['15617459'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15607180');
        BRAIN.postSynaptic['15607180'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('18833414');
        BRAIN.postSynaptic['18833414'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_no cluster']){
        BRAIN.dendriteAccumulate('15713206');
        BRAIN.postSynaptic['15713206'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5120990');
        BRAIN.postSynaptic['5120990'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_no cluster']){
        BRAIN.dendriteAccumulate('15629888');
        BRAIN.postSynaptic['15629888'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('4044654');
        BRAIN.postSynaptic['4044654'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_11']){
        BRAIN.dendriteAccumulate('3050645');
        BRAIN.postSynaptic['3050645'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15728017');
        BRAIN.postSynaptic['15728017'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15730645');
        BRAIN.postSynaptic['15730645'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3036249');
        BRAIN.postSynaptic['3036249'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15995861');
        BRAIN.postSynaptic['15995861'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_11']){
        BRAIN.dendriteAccumulate('15639548');
        BRAIN.postSynaptic['15639548'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15640567');
        BRAIN.postSynaptic['15640567'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15914721');
        BRAIN.postSynaptic['15914721'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15672957');
        BRAIN.postSynaptic['15672957'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15445198');
        BRAIN.postSynaptic['15445198'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_13']){
        BRAIN.dendriteAccumulate('15725673');
        BRAIN.postSynaptic['15725673'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_13']){
        BRAIN.dendriteAccumulate('18785124');
        BRAIN.postSynaptic['18785124'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_16']){
        BRAIN.dendriteAccumulate('15998753');
        BRAIN.postSynaptic['15998753'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15724385');
        BRAIN.postSynaptic['15724385'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_16']){
        BRAIN.dendriteAccumulate('3192952');
        BRAIN.postSynaptic['3192952'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15638968');
        BRAIN.postSynaptic['15638968'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_21']){
        BRAIN.dendriteAccumulate('15724175');
        BRAIN.postSynaptic['15724175'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_21']){
        BRAIN.dendriteAccumulate('15640724');
        BRAIN.postSynaptic['15640724'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_24']){
        BRAIN.dendriteAccumulate('1709802');
        BRAIN.postSynaptic['1709802'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_24']){
        BRAIN.dendriteAccumulate('15532105');
        BRAIN.postSynaptic['15532105'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_3']){
        BRAIN.dendriteAccumulate('11671564');
        BRAIN.postSynaptic['11671564'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3054101');
        BRAIN.postSynaptic['3054101'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_3']){
        BRAIN.dendriteAccumulate('15522777');
        BRAIN.postSynaptic['15522777'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3199456');
        BRAIN.postSynaptic['3199456'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_4']){
        BRAIN.dendriteAccumulate('15995929');
        BRAIN.postSynaptic['15995929'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15997645');
        BRAIN.postSynaptic['15997645'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15997692');
        BRAIN.postSynaptic['15997692'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_4']){
        BRAIN.dendriteAccumulate('15506094');
        BRAIN.postSynaptic['15506094'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15592696');
        BRAIN.postSynaptic['15592696'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15507888');
        BRAIN.postSynaptic['15507888'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_5']){
        BRAIN.dendriteAccumulate('15590761');
        BRAIN.postSynaptic['15590761'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1706716');
        BRAIN.postSynaptic['1706716'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('16288872');
        BRAIN.postSynaptic['16288872'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7439909');
        BRAIN.postSynaptic['7439909'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7556564');
        BRAIN.postSynaptic['7556564'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15998817');
        BRAIN.postSynaptic['15998817'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15998782');
        BRAIN.postSynaptic['15998782'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15998768');
        BRAIN.postSynaptic['15998768'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15998469');
        BRAIN.postSynaptic['15998469'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15998307');
        BRAIN.postSynaptic['15998307'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15998218');
        BRAIN.postSynaptic['15998218'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15998100');
        BRAIN.postSynaptic['15998100'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15997983');
        BRAIN.postSynaptic['15997983'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15997929');
        BRAIN.postSynaptic['15997929'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15997807');
        BRAIN.postSynaptic['15997807'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15996518');
        BRAIN.postSynaptic['15996518'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15995404');
        BRAIN.postSynaptic['15995404'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15998261');
        BRAIN.postSynaptic['15998261'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1715990');
        BRAIN.postSynaptic['1715990'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15717736');
        BRAIN.postSynaptic['15717736'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15717935');
        BRAIN.postSynaptic['15717935'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_5']){
        BRAIN.dendriteAccumulate('15409328');
        BRAIN.postSynaptic['15409328'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15541976');
        BRAIN.postSynaptic['15541976'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15639171');
        BRAIN.postSynaptic['15639171'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15531033');
        BRAIN.postSynaptic['15531033'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15640893');
        BRAIN.postSynaptic['15640893'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15530882');
        BRAIN.postSynaptic['15530882'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15531916');
        BRAIN.postSynaptic['15531916'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15525858');
        BRAIN.postSynaptic['15525858'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('16341507');
        BRAIN.postSynaptic['16341507'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15573283');
        BRAIN.postSynaptic['15573283'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('16341966');
        BRAIN.postSynaptic['16341966'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15458316');
        BRAIN.postSynaptic['15458316'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15434200');
        BRAIN.postSynaptic['15434200'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('18620885');
        BRAIN.postSynaptic['18620885'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15398807');
        BRAIN.postSynaptic['15398807'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3795498');
        BRAIN.postSynaptic['3795498'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15461769');
        BRAIN.postSynaptic['15461769'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15451084');
        BRAIN.postSynaptic['15451084'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15573331');
        BRAIN.postSynaptic['15573331'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15639020');
        BRAIN.postSynaptic['15639020'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3123905');
        BRAIN.postSynaptic['3123905'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_52']){
        BRAIN.dendriteAccumulate('1011675');
        BRAIN.postSynaptic['1011675'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_52']){
        BRAIN.dendriteAccumulate('15541944');
        BRAIN.postSynaptic['15541944'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_6']){
        BRAIN.dendriteAccumulate('1347886');
        BRAIN.postSynaptic['1347886'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15723727');
        BRAIN.postSynaptic['15723727'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15996160');
        BRAIN.postSynaptic['15996160'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15718275');
        BRAIN.postSynaptic['15718275'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_6']){
        BRAIN.dendriteAccumulate('7160160');
        BRAIN.postSynaptic['7160160'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15641926');
        BRAIN.postSynaptic['15641926'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15533421');
        BRAIN.postSynaptic['15533421'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15645825');
        BRAIN.postSynaptic['15645825'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_65']){
        BRAIN.dendriteAccumulate('15997666');
        BRAIN.postSynaptic['15997666'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_65']){
        BRAIN.dendriteAccumulate('15508735');
        BRAIN.postSynaptic['15508735'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_7']){
        BRAIN.dendriteAccumulate('15996271');
        BRAIN.postSynaptic['15996271'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15727304');
        BRAIN.postSynaptic['15727304'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15725545');
        BRAIN.postSynaptic['15725545'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15725127');
        BRAIN.postSynaptic['15725127'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15724636');
        BRAIN.postSynaptic['15724636'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15724520');
        BRAIN.postSynaptic['15724520'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('17608754');
        BRAIN.postSynaptic['17608754'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_7']){
        BRAIN.dendriteAccumulate('15505837');
        BRAIN.postSynaptic['15505837'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15672153');
        BRAIN.postSynaptic['15672153'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15639275');
        BRAIN.postSynaptic['15639275'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15637893');
        BRAIN.postSynaptic['15637893'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15671848');
        BRAIN.postSynaptic['15671848'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15638520');
        BRAIN.postSynaptic['15638520'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('16362243');
        BRAIN.postSynaptic['16362243'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_9']){
        BRAIN.dendriteAccumulate('15723479');
        BRAIN.postSynaptic['15723479'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3032520');
        BRAIN.postSynaptic['3032520'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_9']){
        BRAIN.dendriteAccumulate('15640548');
        BRAIN.postSynaptic['15640548'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15640425');
        BRAIN.postSynaptic['15640425'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_no cluster']){
        BRAIN.dendriteAccumulate('15998319');
        BRAIN.postSynaptic['15998319'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15998913');
        BRAIN.postSynaptic['15998913'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15998899');
        BRAIN.postSynaptic['15998899'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_no cluster']){
        BRAIN.dendriteAccumulate('15542199');
        BRAIN.postSynaptic['15542199'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('8199012');
        BRAIN.postSynaptic['8199012'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15594038');
        BRAIN.postSynaptic['15594038'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15508475');
        BRAIN.postSynaptic['15508475'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15605657');
        BRAIN.postSynaptic['15605657'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gut_11']){
        BRAIN.dendriteAccumulate('1428271');
        BRAIN.postSynaptic['1428271'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1432836');
        BRAIN.postSynaptic['1432836'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gut_11']){
        BRAIN.dendriteAccumulate('15572414');
        BRAIN.postSynaptic['15572414'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15564782');
        BRAIN.postSynaptic['15564782'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gut_13']){
        BRAIN.dendriteAccumulate('1415168');
        BRAIN.postSynaptic['1415168'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gut_13']){
        BRAIN.dendriteAccumulate('945309');
        BRAIN.postSynaptic['945309'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gut_16']){
        BRAIN.dendriteAccumulate('15984231');
        BRAIN.postSynaptic['15984231'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15766999');
        BRAIN.postSynaptic['15766999'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15983225');
        BRAIN.postSynaptic['15983225'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7424178');
        BRAIN.postSynaptic['7424178'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15984797');
        BRAIN.postSynaptic['15984797'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15770945');
        BRAIN.postSynaptic['15770945'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1435466');
        BRAIN.postSynaptic['1435466'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15982306');
        BRAIN.postSynaptic['15982306'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gut_16']){
        BRAIN.dendriteAccumulate('15567466');
        BRAIN.postSynaptic['15567466'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('18231999');
        BRAIN.postSynaptic['18231999'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15587166');
        BRAIN.postSynaptic['15587166'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15564882');
        BRAIN.postSynaptic['15564882'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15564661');
        BRAIN.postSynaptic['15564661'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('17951153');
        BRAIN.postSynaptic['17951153'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15546924');
        BRAIN.postSynaptic['15546924'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15569561');
        BRAIN.postSynaptic['15569561'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gut_20']){
        BRAIN.dendriteAccumulate('1400725');
        BRAIN.postSynaptic['1400725'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('9820270');
        BRAIN.postSynaptic['9820270'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1405493');
        BRAIN.postSynaptic['1405493'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1431256');
        BRAIN.postSynaptic['1431256'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1392771');
        BRAIN.postSynaptic['1392771'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1377586');
        BRAIN.postSynaptic['1377586'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1375101');
        BRAIN.postSynaptic['1375101'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1406463');
        BRAIN.postSynaptic['1406463'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gut_20']){
        BRAIN.dendriteAccumulate('15561413');
        BRAIN.postSynaptic['15561413'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15574328');
        BRAIN.postSynaptic['15574328'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15548694');
        BRAIN.postSynaptic['15548694'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('9716858');
        BRAIN.postSynaptic['9716858'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15563553');
        BRAIN.postSynaptic['15563553'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15562137');
        BRAIN.postSynaptic['15562137'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('6883831');
        BRAIN.postSynaptic['6883831'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15573450');
        BRAIN.postSynaptic['15573450'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gut_21']){
        BRAIN.dendriteAccumulate('9838294');
        BRAIN.postSynaptic['9838294'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1391179');
        BRAIN.postSynaptic['1391179'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1414206');
        BRAIN.postSynaptic['1414206'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15769680');
        BRAIN.postSynaptic['15769680'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15770904');
        BRAIN.postSynaptic['15770904'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gut_21']){
        BRAIN.dendriteAccumulate('15586536');
        BRAIN.postSynaptic['15586536'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15573381');
        BRAIN.postSynaptic['15573381'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15564807');
        BRAIN.postSynaptic['15564807'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15575327');
        BRAIN.postSynaptic['15575327'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15543394');
        BRAIN.postSynaptic['15543394'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gut_24']){
        BRAIN.dendriteAccumulate('15983156');
        BRAIN.postSynaptic['15983156'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1429969');
        BRAIN.postSynaptic['1429969'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gut_24']){
        BRAIN.dendriteAccumulate('15564706');
        BRAIN.postSynaptic['15564706'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15574941');
        BRAIN.postSynaptic['15574941'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('9748269');
        BRAIN.postSynaptic['9748269'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('16442344');
        BRAIN.postSynaptic['16442344'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15543068');
        BRAIN.postSynaptic['15543068'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gut_6']){
        BRAIN.dendriteAccumulate('1427012');
        BRAIN.postSynaptic['1427012'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gut_6']){
        BRAIN.dendriteAccumulate('15547732');
        BRAIN.postSynaptic['15547732'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gut_63']){
        BRAIN.dendriteAccumulate('1398253');
        BRAIN.postSynaptic['1398253'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15770032');
        BRAIN.postSynaptic['15770032'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15769419');
        BRAIN.postSynaptic['15769419'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1367171');
        BRAIN.postSynaptic['1367171'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('40152');
        BRAIN.postSynaptic['40152'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1395971');
        BRAIN.postSynaptic['1395971'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gut_63']){
        BRAIN.dendriteAccumulate('15574199');
        BRAIN.postSynaptic['15574199'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3556191');
        BRAIN.postSynaptic['3556191'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15548107');
        BRAIN.postSynaptic['15548107'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15559195');
        BRAIN.postSynaptic['15559195'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15573396');
        BRAIN.postSynaptic['15573396'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15574231');
        BRAIN.postSynaptic['15574231'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gut_83']){
        BRAIN.dendriteAccumulate('13744425');
        BRAIN.postSynaptic['13744425'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2284021');
        BRAIN.postSynaptic['2284021'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gut_83']){
        BRAIN.dendriteAccumulate('2340336');
        BRAIN.postSynaptic['2340336'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2456826');
        BRAIN.postSynaptic['2456826'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_gut_9']){
        BRAIN.dendriteAccumulate('15995327');
        BRAIN.postSynaptic['15995327'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('17380936');
        BRAIN.postSynaptic['17380936'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15994926');
        BRAIN.postSynaptic['15994926'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1351125');
        BRAIN.postSynaptic['1351125'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1419315');
        BRAIN.postSynaptic['1419315'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_gut_9']){
        BRAIN.dendriteAccumulate('15748726');
        BRAIN.postSynaptic['15748726'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15542354');
        BRAIN.postSynaptic['15542354'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15576194');
        BRAIN.postSynaptic['15576194'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15564911');
        BRAIN.postSynaptic['15564911'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15574508');
        BRAIN.postSynaptic['15574508'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15575052');
        BRAIN.postSynaptic['15575052'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('15575232');
        BRAIN.postSynaptic['15575232'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_olfactory_1']){
        BRAIN.dendriteAccumulate('3464773');
        BRAIN.postSynaptic['3464773'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('6791927');
        BRAIN.postSynaptic['6791927'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3716797');
        BRAIN.postSynaptic['3716797'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3465659');
        BRAIN.postSynaptic['3465659'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7527710');
        BRAIN.postSynaptic['7527710'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7542938');
        BRAIN.postSynaptic['7542938'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3511996');
        BRAIN.postSynaptic['3511996'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3410499');
        BRAIN.postSynaptic['3410499'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3774568');
        BRAIN.postSynaptic['3774568'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_olfactory_1']){
        BRAIN.dendriteAccumulate('3827211');
        BRAIN.postSynaptic['3827211'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3790004');
        BRAIN.postSynaptic['3790004'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3963891');
        BRAIN.postSynaptic['3963891'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3840345');
        BRAIN.postSynaptic['3840345'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('4073353');
        BRAIN.postSynaptic['4073353'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3885215');
        BRAIN.postSynaptic['3885215'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3958234');
        BRAIN.postSynaptic['3958234'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2608843');
        BRAIN.postSynaptic['2608843'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3980315');
        BRAIN.postSynaptic['3980315'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_olfactory_2']){
        BRAIN.dendriteAccumulate('3410506');
        BRAIN.postSynaptic['3410506'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2611805');
        BRAIN.postSynaptic['2611805'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5090549');
        BRAIN.postSynaptic['5090549'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3158543');
        BRAIN.postSynaptic['3158543'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3771794');
        BRAIN.postSynaptic['3771794'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3768025');
        BRAIN.postSynaptic['3768025'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('6340439');
        BRAIN.postSynaptic['6340439'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('40045');
        BRAIN.postSynaptic['40045'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3694515');
        BRAIN.postSynaptic['3694515'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3592997');
        BRAIN.postSynaptic['3592997'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3547397');
        BRAIN.postSynaptic['3547397'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3708875');
        BRAIN.postSynaptic['3708875'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_olfactory_2']){
        BRAIN.dendriteAccumulate('3893195');
        BRAIN.postSynaptic['3893195'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2582391');
        BRAIN.postSynaptic['2582391'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3813723');
        BRAIN.postSynaptic['3813723'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7719547');
        BRAIN.postSynaptic['7719547'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7658146');
        BRAIN.postSynaptic['7658146'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2584838');
        BRAIN.postSynaptic['2584838'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('4076389');
        BRAIN.postSynaptic['4076389'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3954014');
        BRAIN.postSynaptic['3954014'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3896629');
        BRAIN.postSynaptic['3896629'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3865952');
        BRAIN.postSynaptic['3865952'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2571761');
        BRAIN.postSynaptic['2571761'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3872653');
        BRAIN.postSynaptic['3872653'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_respiratory_20']){
        BRAIN.dendriteAccumulate('8005609');
        BRAIN.postSynaptic['8005609'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('19120772');
        BRAIN.postSynaptic['19120772'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3795424');
        BRAIN.postSynaptic['3795424'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_respiratory_20']){
        BRAIN.dendriteAccumulate('10852875');
        BRAIN.postSynaptic['10852875'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('891237');
        BRAIN.postSynaptic['891237'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('11291344');
        BRAIN.postSynaptic['11291344'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_respiratory_21']){
        BRAIN.dendriteAccumulate('7012280');
        BRAIN.postSynaptic['7012280'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('16911458');
        BRAIN.postSynaptic['16911458'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('4363883');
        BRAIN.postSynaptic['4363883'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7340629');
        BRAIN.postSynaptic['7340629'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('19017854');
        BRAIN.postSynaptic['19017854'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_respiratory_21']){
        BRAIN.dendriteAccumulate('4061049');
        BRAIN.postSynaptic['4061049'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('12178825');
        BRAIN.postSynaptic['12178825'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5382876');
        BRAIN.postSynaptic['5382876'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7331555');
        BRAIN.postSynaptic['7331555'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('19037563');
        BRAIN.postSynaptic['19037563'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_respiratory_23']){
        BRAIN.dendriteAccumulate('16303262');
        BRAIN.postSynaptic['16303262'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_respiratory_23']){
        BRAIN.dendriteAccumulate('7627878');
        BRAIN.postSynaptic['7627878'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_respiratory_51']){
        BRAIN.dendriteAccumulate('9835169');
        BRAIN.postSynaptic['9835169'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_respiratory_51']){
        BRAIN.dendriteAccumulate('9503203');
        BRAIN.postSynaptic['9503203'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_respiratory_63']){
        BRAIN.dendriteAccumulate('11874130');
        BRAIN.postSynaptic['11874130'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5617164');
        BRAIN.postSynaptic['5617164'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3915835');
        BRAIN.postSynaptic['3915835'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_respiratory_63']){
        BRAIN.dendriteAccumulate('10868477');
        BRAIN.postSynaptic['10868477'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('10963761');
        BRAIN.postSynaptic['10963761'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5638694');
        BRAIN.postSynaptic['5638694'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_thermo-cold_5']){
        BRAIN.dendriteAccumulate('3609202');
        BRAIN.postSynaptic['3609202'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3639968');
        BRAIN.postSynaptic['3639968'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3608397');
        BRAIN.postSynaptic['3608397'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_thermo-cold_5']){
        BRAIN.dendriteAccumulate('3487306');
        BRAIN.postSynaptic['3487306'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('18630153');
        BRAIN.postSynaptic['18630153'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('3650600');
        BRAIN.postSynaptic['3650600'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_thermo-warm_2']){
        BRAIN.dendriteAccumulate('2610744');
        BRAIN.postSynaptic['2610744'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('5093516');
        BRAIN.postSynaptic['5093516'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_thermo-warm_2']){
        BRAIN.dendriteAccumulate('3985829');
        BRAIN.postSynaptic['3985829'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('4023881');
        BRAIN.postSynaptic['4023881'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_visual_0']){
        BRAIN.dendriteAccumulate('2216445');
        BRAIN.postSynaptic['2216445'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2216131');
        BRAIN.postSynaptic['2216131'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('10241716');
        BRAIN.postSynaptic['10241716'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2215622');
        BRAIN.postSynaptic['2215622'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2215447');
        BRAIN.postSynaptic['2215447'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2215247');
        BRAIN.postSynaptic['2215247'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2206279');
        BRAIN.postSynaptic['2206279'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('37365');
        BRAIN.postSynaptic['37365'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2200028');
        BRAIN.postSynaptic['2200028'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_visual_0']){
        BRAIN.dendriteAccumulate('2532841');
        BRAIN.postSynaptic['2532841'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('16267292');
        BRAIN.postSynaptic['16267292'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2544902');
        BRAIN.postSynaptic['2544902'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7566199');
        BRAIN.postSynaptic['7566199'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('1856512');
        BRAIN.postSynaptic['1856512'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('8447845');
        BRAIN.postSynaptic['8447845'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('946481');
        BRAIN.postSynaptic['946481'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('902038');
        BRAIN.postSynaptic['902038'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('900032');
        BRAIN.postSynaptic['900032'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_visual_23']){
    }
    if (BRAIN.neuronsToActicate['R_visual_23']){
        BRAIN.dendriteAccumulate('2552701');
        BRAIN.postSynaptic['2552701'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7555204');
        BRAIN.postSynaptic['7555204'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7568455');
        BRAIN.postSynaptic['7568455'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['L_visual_8']){
        BRAIN.dendriteAccumulate('2216187');
        BRAIN.postSynaptic['2216187'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7480731');
        BRAIN.postSynaptic['7480731'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7483922');
        BRAIN.postSynaptic['7483922'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('2209091');
        BRAIN.postSynaptic['2209091'][BRAIN.nextState] += 40.0 ;
    }
    if (BRAIN.neuronsToActicate['R_visual_8']){
        BRAIN.dendriteAccumulate('766246');
        BRAIN.postSynaptic['766246'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('902877');
        BRAIN.postSynaptic['902877'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7778722');
        BRAIN.postSynaptic['7778722'][BRAIN.nextState] += 40.0 ;
        BRAIN.dendriteAccumulate('7485368');
        BRAIN.postSynaptic['7485368'][BRAIN.nextState] += 40.0 ;
    }
    BRAIN.runconnectome();
}
