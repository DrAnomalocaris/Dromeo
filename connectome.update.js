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
        BRAIN.dendriteAccumulate('15730680');
        BRAIN.dendriteAccumulate('15714173');
        BRAIN.dendriteAccumulate('15675901');
        BRAIN.dendriteAccumulate('15678833');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_11']){
        BRAIN.dendriteAccumulate('15612241');
        BRAIN.dendriteAccumulate('15618756');
        BRAIN.dendriteAccumulate('15671481');
        BRAIN.dendriteAccumulate('15615877');
        BRAIN.dendriteAccumulate('3562954');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_13']){
        BRAIN.dendriteAccumulate('19180425');
        BRAIN.dendriteAccumulate('15680710');
        BRAIN.dendriteAccumulate('15678441');
        BRAIN.dendriteAccumulate('15674083');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_13']){
        BRAIN.dendriteAccumulate('15609427');
        BRAIN.dendriteAccumulate('15629355');
        BRAIN.dendriteAccumulate('15611642');
        BRAIN.dendriteAccumulate('15611791');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_24']){
        BRAIN.dendriteAccumulate('15679484');
        BRAIN.dendriteAccumulate('15690392');
        BRAIN.dendriteAccumulate('15715796');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_24']){
        BRAIN.dendriteAccumulate('15610387');
        BRAIN.dendriteAccumulate('15615305');
        BRAIN.dendriteAccumulate('15606918');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_3']){
        BRAIN.dendriteAccumulate('15716934');
        BRAIN.dendriteAccumulate('15714639');
        BRAIN.dendriteAccumulate('3586984');
        BRAIN.dendriteAccumulate('4338596');
        BRAIN.dendriteAccumulate('15716701');
        BRAIN.dendriteAccumulate('15690093');
        BRAIN.dendriteAccumulate('15689373');
        BRAIN.dendriteAccumulate('15674262');
        BRAIN.dendriteAccumulate('12260696');
        BRAIN.dendriteAccumulate('15679577');
        BRAIN.dendriteAccumulate('15938337');
        BRAIN.dendriteAccumulate('15681740');
        BRAIN.dendriteAccumulate('15677323');
        BRAIN.dendriteAccumulate('11745381');
        BRAIN.dendriteAccumulate('5186461');
        BRAIN.dendriteAccumulate('18934019');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_3']){
        BRAIN.dendriteAccumulate('15746421');
        BRAIN.dendriteAccumulate('15595950');
        BRAIN.dendriteAccumulate('3966683');
        BRAIN.dendriteAccumulate('15652529');
        BRAIN.dendriteAccumulate('15556868');
        BRAIN.dendriteAccumulate('15615042');
        BRAIN.dendriteAccumulate('15588691');
        BRAIN.dendriteAccumulate('15556081');
        BRAIN.dendriteAccumulate('15615589');
        BRAIN.dendriteAccumulate('18625446');
        BRAIN.dendriteAccumulate('15595607');
        BRAIN.dendriteAccumulate('15589411');
        BRAIN.dendriteAccumulate('15653288');
        BRAIN.dendriteAccumulate('15653432');
        BRAIN.dendriteAccumulate('9853425');
        BRAIN.dendriteAccumulate('15609885');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_4']){
        BRAIN.dendriteAccumulate('15716309');
        BRAIN.dendriteAccumulate('12073881');
        BRAIN.dendriteAccumulate('15715643');
        BRAIN.dendriteAccumulate('15688358');
        BRAIN.dendriteAccumulate('15680093');
        BRAIN.dendriteAccumulate('5088293');
        BRAIN.dendriteAccumulate('11736972');
        BRAIN.dendriteAccumulate('15716127');
        BRAIN.dendriteAccumulate('5116147');
        BRAIN.dendriteAccumulate('15673867');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_4']){
        BRAIN.dendriteAccumulate('15736147');
        BRAIN.dendriteAccumulate('12253020');
        BRAIN.dendriteAccumulate('16341399');
        BRAIN.dendriteAccumulate('15588800');
        BRAIN.dendriteAccumulate('10934438');
        BRAIN.dendriteAccumulate('4097554');
        BRAIN.dendriteAccumulate('15595823');
        BRAIN.dendriteAccumulate('3071301');
        BRAIN.dendriteAccumulate('4017089');
        BRAIN.dendriteAccumulate('15651438');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_5']){
        BRAIN.dendriteAccumulate('3652587');
        BRAIN.dendriteAccumulate('15716094');
        BRAIN.dendriteAccumulate('15677030');
        BRAIN.dendriteAccumulate('15686512');
        BRAIN.dendriteAccumulate('15673925');
        BRAIN.dendriteAccumulate('5120097');
        BRAIN.dendriteAccumulate('8055671');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_5']){
        BRAIN.dendriteAccumulate('3822523');
        BRAIN.dendriteAccumulate('15589362');
        BRAIN.dendriteAccumulate('15656435');
        BRAIN.dendriteAccumulate('15615081');
        BRAIN.dendriteAccumulate('15615776');
        BRAIN.dendriteAccumulate('4096703');
        BRAIN.dendriteAccumulate('5448622');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_6']){
        BRAIN.dendriteAccumulate('9808022');
        BRAIN.dendriteAccumulate('15717426');
        BRAIN.dendriteAccumulate('5057916');
        BRAIN.dendriteAccumulate('15715151');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_6']){
        BRAIN.dendriteAccumulate('15658013');
        BRAIN.dendriteAccumulate('8810739');
        BRAIN.dendriteAccumulate('16115501');
        BRAIN.dendriteAccumulate('15653927');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_7']){
        BRAIN.dendriteAccumulate('15690711');
        BRAIN.dendriteAccumulate('15714845');
        BRAIN.dendriteAccumulate('15712024');
        BRAIN.dendriteAccumulate('15717229');
        BRAIN.dendriteAccumulate('15711289');
        BRAIN.dendriteAccumulate('15698623');
        BRAIN.dendriteAccumulate('15678849');
        BRAIN.dendriteAccumulate('15713374');
        BRAIN.dendriteAccumulate('15700147');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_7']){
        BRAIN.dendriteAccumulate('15762568');
        BRAIN.dendriteAccumulate('15615475');
        BRAIN.dendriteAccumulate('15620606');
        BRAIN.dendriteAccumulate('15629241');
        BRAIN.dendriteAccumulate('18679889');
        BRAIN.dendriteAccumulate('15594123');
        BRAIN.dendriteAccumulate('15618976');
        BRAIN.dendriteAccumulate('15620432');
        BRAIN.dendriteAccumulate('15743905');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_9']){
        BRAIN.dendriteAccumulate('5116861');
        BRAIN.dendriteAccumulate('5095269');
        BRAIN.dendriteAccumulate('15714330');
        BRAIN.dendriteAccumulate('15690955');
        BRAIN.dendriteAccumulate('15711222');
        BRAIN.dendriteAccumulate('15699715');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_9']){
        BRAIN.dendriteAccumulate('4059758');
        BRAIN.dendriteAccumulate('4030526');
        BRAIN.dendriteAccumulate('15638742');
        BRAIN.dendriteAccumulate('15617459');
        BRAIN.dendriteAccumulate('15607180');
        BRAIN.dendriteAccumulate('18833414');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-external_no cluster']){
        BRAIN.dendriteAccumulate('15713206');
        BRAIN.dendriteAccumulate('5120990');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-external_no cluster']){
        BRAIN.dendriteAccumulate('15629888');
        BRAIN.dendriteAccumulate('4044654');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_11']){
        BRAIN.dendriteAccumulate('3050645');
        BRAIN.dendriteAccumulate('15728017');
        BRAIN.dendriteAccumulate('15730645');
        BRAIN.dendriteAccumulate('3036249');
        BRAIN.dendriteAccumulate('15995861');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_11']){
        BRAIN.dendriteAccumulate('15639548');
        BRAIN.dendriteAccumulate('15640567');
        BRAIN.dendriteAccumulate('15914721');
        BRAIN.dendriteAccumulate('15672957');
        BRAIN.dendriteAccumulate('15445198');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_13']){
        BRAIN.dendriteAccumulate('15725673');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_13']){
        BRAIN.dendriteAccumulate('18785124');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_16']){
        BRAIN.dendriteAccumulate('15998753');
        BRAIN.dendriteAccumulate('15724385');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_16']){
        BRAIN.dendriteAccumulate('3192952');
        BRAIN.dendriteAccumulate('15638968');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_21']){
        BRAIN.dendriteAccumulate('15724175');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_21']){
        BRAIN.dendriteAccumulate('15640724');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_24']){
        BRAIN.dendriteAccumulate('1709802');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_24']){
        BRAIN.dendriteAccumulate('15532105');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_3']){
        BRAIN.dendriteAccumulate('11671564');
        BRAIN.dendriteAccumulate('3054101');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_3']){
        BRAIN.dendriteAccumulate('15522777');
        BRAIN.dendriteAccumulate('3199456');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_4']){
        BRAIN.dendriteAccumulate('15995929');
        BRAIN.dendriteAccumulate('15997645');
        BRAIN.dendriteAccumulate('15997692');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_4']){
        BRAIN.dendriteAccumulate('15506094');
        BRAIN.dendriteAccumulate('15592696');
        BRAIN.dendriteAccumulate('15507888');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_5']){
        BRAIN.dendriteAccumulate('15590761');
        BRAIN.dendriteAccumulate('1706716');
        BRAIN.dendriteAccumulate('16288872');
        BRAIN.dendriteAccumulate('7439909');
        BRAIN.dendriteAccumulate('7556564');
        BRAIN.dendriteAccumulate('15998817');
        BRAIN.dendriteAccumulate('15998782');
        BRAIN.dendriteAccumulate('15998768');
        BRAIN.dendriteAccumulate('15998469');
        BRAIN.dendriteAccumulate('15998307');
        BRAIN.dendriteAccumulate('15998218');
        BRAIN.dendriteAccumulate('15998100');
        BRAIN.dendriteAccumulate('15997983');
        BRAIN.dendriteAccumulate('15997929');
        BRAIN.dendriteAccumulate('15997807');
        BRAIN.dendriteAccumulate('15996518');
        BRAIN.dendriteAccumulate('15995404');
        BRAIN.dendriteAccumulate('15998261');
        BRAIN.dendriteAccumulate('1715990');
        BRAIN.dendriteAccumulate('15717736');
        BRAIN.dendriteAccumulate('15717935');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_5']){
        BRAIN.dendriteAccumulate('15409328');
        BRAIN.dendriteAccumulate('15541976');
        BRAIN.dendriteAccumulate('15639171');
        BRAIN.dendriteAccumulate('15531033');
        BRAIN.dendriteAccumulate('15640893');
        BRAIN.dendriteAccumulate('15530882');
        BRAIN.dendriteAccumulate('15531916');
        BRAIN.dendriteAccumulate('15525858');
        BRAIN.dendriteAccumulate('16341507');
        BRAIN.dendriteAccumulate('15573283');
        BRAIN.dendriteAccumulate('16341966');
        BRAIN.dendriteAccumulate('15458316');
        BRAIN.dendriteAccumulate('15434200');
        BRAIN.dendriteAccumulate('18620885');
        BRAIN.dendriteAccumulate('15398807');
        BRAIN.dendriteAccumulate('3795498');
        BRAIN.dendriteAccumulate('15461769');
        BRAIN.dendriteAccumulate('15451084');
        BRAIN.dendriteAccumulate('15573331');
        BRAIN.dendriteAccumulate('15639020');
        BRAIN.dendriteAccumulate('3123905');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_52']){
        BRAIN.dendriteAccumulate('1011675');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_52']){
        BRAIN.dendriteAccumulate('15541944');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_6']){
        BRAIN.dendriteAccumulate('1347886');
        BRAIN.dendriteAccumulate('15723727');
        BRAIN.dendriteAccumulate('15996160');
        BRAIN.dendriteAccumulate('15718275');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_6']){
        BRAIN.dendriteAccumulate('7160160');
        BRAIN.dendriteAccumulate('15641926');
        BRAIN.dendriteAccumulate('15533421');
        BRAIN.dendriteAccumulate('15645825');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_65']){
        BRAIN.dendriteAccumulate('15997666');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_65']){
        BRAIN.dendriteAccumulate('15508735');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_7']){
        BRAIN.dendriteAccumulate('15996271');
        BRAIN.dendriteAccumulate('15727304');
        BRAIN.dendriteAccumulate('15725545');
        BRAIN.dendriteAccumulate('15725127');
        BRAIN.dendriteAccumulate('15724636');
        BRAIN.dendriteAccumulate('15724520');
        BRAIN.dendriteAccumulate('17608754');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_7']){
        BRAIN.dendriteAccumulate('15505837');
        BRAIN.dendriteAccumulate('15672153');
        BRAIN.dendriteAccumulate('15639275');
        BRAIN.dendriteAccumulate('15637893');
        BRAIN.dendriteAccumulate('15671848');
        BRAIN.dendriteAccumulate('15638520');
        BRAIN.dendriteAccumulate('16362243');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_9']){
        BRAIN.dendriteAccumulate('15723479');
        BRAIN.dendriteAccumulate('3032520');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_9']){
        BRAIN.dendriteAccumulate('15640548');
        BRAIN.dendriteAccumulate('15640425');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gustatory-pharyngeal_no cluster']){
        BRAIN.dendriteAccumulate('15998319');
        BRAIN.dendriteAccumulate('15998913');
        BRAIN.dendriteAccumulate('15998899');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gustatory-pharyngeal_no cluster']){
        BRAIN.dendriteAccumulate('15542199');
        BRAIN.dendriteAccumulate('8199012');
        BRAIN.dendriteAccumulate('15594038');
        BRAIN.dendriteAccumulate('15508475');
        BRAIN.dendriteAccumulate('15605657');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gut_11']){
        BRAIN.dendriteAccumulate('1428271');
        BRAIN.dendriteAccumulate('1432836');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gut_11']){
        BRAIN.dendriteAccumulate('15572414');
        BRAIN.dendriteAccumulate('15564782');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gut_13']){
        BRAIN.dendriteAccumulate('1415168');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gut_13']){
        BRAIN.dendriteAccumulate('945309');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gut_16']){
        BRAIN.dendriteAccumulate('15984231');
        BRAIN.dendriteAccumulate('15766999');
        BRAIN.dendriteAccumulate('15983225');
        BRAIN.dendriteAccumulate('7424178');
        BRAIN.dendriteAccumulate('15984797');
        BRAIN.dendriteAccumulate('15770945');
        BRAIN.dendriteAccumulate('1435466');
        BRAIN.dendriteAccumulate('15982306');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gut_16']){
        BRAIN.dendriteAccumulate('15567466');
        BRAIN.dendriteAccumulate('18231999');
        BRAIN.dendriteAccumulate('15587166');
        BRAIN.dendriteAccumulate('15564882');
        BRAIN.dendriteAccumulate('15564661');
        BRAIN.dendriteAccumulate('17951153');
        BRAIN.dendriteAccumulate('15546924');
        BRAIN.dendriteAccumulate('15569561');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gut_20']){
        BRAIN.dendriteAccumulate('1400725');
        BRAIN.dendriteAccumulate('9820270');
        BRAIN.dendriteAccumulate('1405493');
        BRAIN.dendriteAccumulate('1431256');
        BRAIN.dendriteAccumulate('1392771');
        BRAIN.dendriteAccumulate('1377586');
        BRAIN.dendriteAccumulate('1375101');
        BRAIN.dendriteAccumulate('1406463');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gut_20']){
        BRAIN.dendriteAccumulate('15561413');
        BRAIN.dendriteAccumulate('15574328');
        BRAIN.dendriteAccumulate('15548694');
        BRAIN.dendriteAccumulate('9716858');
        BRAIN.dendriteAccumulate('15563553');
        BRAIN.dendriteAccumulate('15562137');
        BRAIN.dendriteAccumulate('6883831');
        BRAIN.dendriteAccumulate('15573450');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gut_21']){
        BRAIN.dendriteAccumulate('9838294');
        BRAIN.dendriteAccumulate('1391179');
        BRAIN.dendriteAccumulate('1414206');
        BRAIN.dendriteAccumulate('15769680');
        BRAIN.dendriteAccumulate('15770904');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gut_21']){
        BRAIN.dendriteAccumulate('15586536');
        BRAIN.dendriteAccumulate('15573381');
        BRAIN.dendriteAccumulate('15564807');
        BRAIN.dendriteAccumulate('15575327');
        BRAIN.dendriteAccumulate('15543394');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gut_24']){
        BRAIN.dendriteAccumulate('15983156');
        BRAIN.dendriteAccumulate('1429969');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gut_24']){
        BRAIN.dendriteAccumulate('15564706');
        BRAIN.dendriteAccumulate('15574941');
        BRAIN.dendriteAccumulate('9748269');
        BRAIN.dendriteAccumulate('16442344');
        BRAIN.dendriteAccumulate('15543068');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gut_6']){
        BRAIN.dendriteAccumulate('1427012');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gut_6']){
        BRAIN.dendriteAccumulate('15547732');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gut_63']){
        BRAIN.dendriteAccumulate('1398253');
        BRAIN.dendriteAccumulate('15770032');
        BRAIN.dendriteAccumulate('15769419');
        BRAIN.dendriteAccumulate('1367171');
        BRAIN.dendriteAccumulate('40152');
        BRAIN.dendriteAccumulate('1395971');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gut_63']){
        BRAIN.dendriteAccumulate('15574199');
        BRAIN.dendriteAccumulate('3556191');
        BRAIN.dendriteAccumulate('15548107');
        BRAIN.dendriteAccumulate('15559195');
        BRAIN.dendriteAccumulate('15573396');
        BRAIN.dendriteAccumulate('15574231');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gut_83']){
        BRAIN.dendriteAccumulate('13744425');
        BRAIN.dendriteAccumulate('2284021');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gut_83']){
        BRAIN.dendriteAccumulate('2340336');
        BRAIN.dendriteAccumulate('2456826');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_gut_9']){
        BRAIN.dendriteAccumulate('15995327');
        BRAIN.dendriteAccumulate('17380936');
        BRAIN.dendriteAccumulate('15994926');
        BRAIN.dendriteAccumulate('1351125');
        BRAIN.dendriteAccumulate('1419315');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_gut_9']){
        BRAIN.dendriteAccumulate('15748726');
        BRAIN.dendriteAccumulate('15542354');
        BRAIN.dendriteAccumulate('15576194');
        BRAIN.dendriteAccumulate('15564911');
        BRAIN.dendriteAccumulate('15574508');
        BRAIN.dendriteAccumulate('15575052');
        BRAIN.dendriteAccumulate('15575232');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_olfactory_1']){
        BRAIN.dendriteAccumulate('3464773');
        BRAIN.dendriteAccumulate('6791927');
        BRAIN.dendriteAccumulate('3716797');
        BRAIN.dendriteAccumulate('3465659');
        BRAIN.dendriteAccumulate('7527710');
        BRAIN.dendriteAccumulate('7542938');
        BRAIN.dendriteAccumulate('3511996');
        BRAIN.dendriteAccumulate('3410499');
        BRAIN.dendriteAccumulate('3774568');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_olfactory_1']){
        BRAIN.dendriteAccumulate('3827211');
        BRAIN.dendriteAccumulate('3790004');
        BRAIN.dendriteAccumulate('3963891');
        BRAIN.dendriteAccumulate('3840345');
        BRAIN.dendriteAccumulate('4073353');
        BRAIN.dendriteAccumulate('3885215');
        BRAIN.dendriteAccumulate('3958234');
        BRAIN.dendriteAccumulate('2608843');
        BRAIN.dendriteAccumulate('3980315');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_olfactory_2']){
        BRAIN.dendriteAccumulate('3410506');
        BRAIN.dendriteAccumulate('2611805');
        BRAIN.dendriteAccumulate('5090549');
        BRAIN.dendriteAccumulate('3158543');
        BRAIN.dendriteAccumulate('3771794');
        BRAIN.dendriteAccumulate('3768025');
        BRAIN.dendriteAccumulate('6340439');
        BRAIN.dendriteAccumulate('40045');
        BRAIN.dendriteAccumulate('3694515');
        BRAIN.dendriteAccumulate('3592997');
        BRAIN.dendriteAccumulate('3547397');
        BRAIN.dendriteAccumulate('3708875');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_olfactory_2']){
        BRAIN.dendriteAccumulate('3893195');
        BRAIN.dendriteAccumulate('2582391');
        BRAIN.dendriteAccumulate('3813723');
        BRAIN.dendriteAccumulate('7719547');
        BRAIN.dendriteAccumulate('7658146');
        BRAIN.dendriteAccumulate('2584838');
        BRAIN.dendriteAccumulate('4076389');
        BRAIN.dendriteAccumulate('3954014');
        BRAIN.dendriteAccumulate('3896629');
        BRAIN.dendriteAccumulate('3865952');
        BRAIN.dendriteAccumulate('2571761');
        BRAIN.dendriteAccumulate('3872653');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_respiratory_20']){
        BRAIN.dendriteAccumulate('8005609');
        BRAIN.dendriteAccumulate('19120772');
        BRAIN.dendriteAccumulate('3795424');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_respiratory_20']){
        BRAIN.dendriteAccumulate('10852875');
        BRAIN.dendriteAccumulate('891237');
        BRAIN.dendriteAccumulate('11291344');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_respiratory_21']){
        BRAIN.dendriteAccumulate('7012280');
        BRAIN.dendriteAccumulate('16911458');
        BRAIN.dendriteAccumulate('4363883');
        BRAIN.dendriteAccumulate('7340629');
        BRAIN.dendriteAccumulate('19017854');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_respiratory_21']){
        BRAIN.dendriteAccumulate('4061049');
        BRAIN.dendriteAccumulate('12178825');
        BRAIN.dendriteAccumulate('5382876');
        BRAIN.dendriteAccumulate('7331555');
        BRAIN.dendriteAccumulate('19037563');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_respiratory_23']){
        BRAIN.dendriteAccumulate('16303262');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_respiratory_23']){
        BRAIN.dendriteAccumulate('7627878');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_respiratory_51']){
        BRAIN.dendriteAccumulate('9835169');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_respiratory_51']){
        BRAIN.dendriteAccumulate('9503203');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_respiratory_63']){
        BRAIN.dendriteAccumulate('11874130');
        BRAIN.dendriteAccumulate('5617164');
        BRAIN.dendriteAccumulate('3915835');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_respiratory_63']){
        BRAIN.dendriteAccumulate('10868477');
        BRAIN.dendriteAccumulate('10963761');
        BRAIN.dendriteAccumulate('5638694');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_thermo-cold_5']){
        BRAIN.dendriteAccumulate('3609202');
        BRAIN.dendriteAccumulate('3639968');
        BRAIN.dendriteAccumulate('3608397');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_thermo-cold_5']){
        BRAIN.dendriteAccumulate('3487306');
        BRAIN.dendriteAccumulate('18630153');
        BRAIN.dendriteAccumulate('3650600');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_thermo-warm_2']){
        BRAIN.dendriteAccumulate('2610744');
        BRAIN.dendriteAccumulate('5093516');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_thermo-warm_2']){
        BRAIN.dendriteAccumulate('3985829');
        BRAIN.dendriteAccumulate('4023881');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_visual_0']){
        BRAIN.dendriteAccumulate('2216445');
        BRAIN.dendriteAccumulate('2216131');
        BRAIN.dendriteAccumulate('10241716');
        BRAIN.dendriteAccumulate('2215622');
        BRAIN.dendriteAccumulate('2215447');
        BRAIN.dendriteAccumulate('2215247');
        BRAIN.dendriteAccumulate('2206279');
        BRAIN.dendriteAccumulate('37365');
        BRAIN.dendriteAccumulate('2200028');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_visual_0']){
        BRAIN.dendriteAccumulate('2532841');
        BRAIN.dendriteAccumulate('16267292');
        BRAIN.dendriteAccumulate('2544902');
        BRAIN.dendriteAccumulate('7566199');
        BRAIN.dendriteAccumulate('1856512');
        BRAIN.dendriteAccumulate('8447845');
        BRAIN.dendriteAccumulate('946481');
        BRAIN.dendriteAccumulate('902038');
        BRAIN.dendriteAccumulate('900032');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_visual_23']){
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_visual_23']){
        BRAIN.dendriteAccumulate('2552701');
        BRAIN.dendriteAccumulate('7555204');
        BRAIN.dendriteAccumulate('7568455');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['L_visual_8']){
        BRAIN.dendriteAccumulate('2216187');
        BRAIN.dendriteAccumulate('7480731');
        BRAIN.dendriteAccumulate('7483922');
        BRAIN.dendriteAccumulate('2209091');
        BRAIN.runconnectome();
    }
    if (BRAIN.neuronsToActicate['R_visual_8']){
        BRAIN.dendriteAccumulate('766246');
        BRAIN.dendriteAccumulate('902877');
        BRAIN.dendriteAccumulate('7778722');
        BRAIN.dendriteAccumulate('7485368');
        BRAIN.runconnectome();
    }
}
