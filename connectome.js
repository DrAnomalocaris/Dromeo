print("loading Drosophila melanogaster brain")

var BRAIN=[];
const neuronNodes = 'paperSupplemental/EMS175448-supplement-Supplementary_Data_S2.csv';
const neuronEdges = 'paperSupplemental/all-all_connectivity_matrix.csv'; // Provide the path to your edges CSV file

// Function to fetch and parse CSV file
function fetchAndParseCSV(csvFilePath) {
    print(`fetching ${csvFilePath}`)
    return fetch(csvFilePath)
        .then(response => response.text())
        .then(csvText => {
            return new Promise((resolve, reject) => {
                Papa.parse(csvText, {
                    complete: function(results) {
                        resolve(results.data);
                    },
                    header: true
                });
            });
        })
        .catch(error => {
            console.error('Error fetching or parsing the CSV file:', error);
            throw error;
        });
}

// Fetch and parse both CSV files
Promise.all([
    fetchAndParseCSV(neuronNodes),
    fetchAndParseCSV(neuronEdges)
])
.then(([nodesData, edgesData]) => {
    // Process nodes data
    var nodes = [];
    print("Reading nodes")
    nodesData.forEach(function(row) {
        if (row.left_id && row.left_id !== "no pair") {
            nodes.push({ id: row.left_id });
        }
        if (row.right_id && row.right_id !== "no pair") {
            nodes.push({ id: row.right_id, label: row.right_id });
        }
    });

    // Process edges data
    var edges = [];
    print("Reading edges")
    for (var rowIndex = 0; rowIndex < edgesData.length; rowIndex++) {
        var row = edgesData[rowIndex];
        
        // Iterate through the key-value pairs of the items in the row
        var keys = Object.keys(row);
        var fromKey = keys[0];
        for (var i = 1; i < keys.length; i++) {
            var key = keys[i];
            var value = row[key];
            // Do something with the key-value pair
            if  (value > 0 && key != fromKey){
                edges.push({ from: fromKey, to: key, width: value });
            }
        }
        
        // Break the loop after processing the first row
        break;
    }

    // Create the network using the processed nodes and edges data
    createNetwork(nodes, edges);
})
.catch(error => console.error('Error fetching or parsing CSV files:', error));

// Function to create network using nodes and edges data
function createNetwork(nodes, edges) {
    print("setting connectome diagram")
    var container = document.getElementById('connectome');
    var data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges)
    };
    var options =  {layout:{randomSeed: 42,
                            improvedLayout: false
    }};
    print("creating connectome diagram")
    
    var network = new vis.Network(container, data, options);
    print("created connectome diagram")
 
}
