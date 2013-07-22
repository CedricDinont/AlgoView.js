define("GraphCreator",
[],
function(){
    GraphCreator = function(simpleGraph, programTree) {
        this.graph = simpleGraph;
        this.tree = programTree;
        this.allFunctionNodeName = this.createFunctionNodeList(this.getFunctionListNode(programTree));
    };
    GraphCreator.prototype.constructor = GraphCreator;

    /********************** GRAPHCREATOR OPERATIONS ************************************************/

     /**
     * Get the graph of the GraphCreator
     * 
     * @return the graph of GraphCreator
     */
    GraphCreator.prototype.getGraph = function(){
        return this.graph;
    };

     /**
     * Get the tree of the GraphCreator
     * 
     * @return the tree of GraphCreator
     */
    GraphCreator.prototype.getTree = function(){
        return this.tree;
    };

     /**
     * Get the function list node of the programm tree
     * 
     * @param tree
     * @return the functionListNode from the program tree
     */
    GraphCreator.prototype.getFunctionListNode = function(tree){
        var functionListNode;
        for (var i = 0; i < tree.children.length; i++) {
            if (tree.children[i].constructor.name === "FunctionListNode") {
                functionListNode = tree.children[i];
            }
        }
        return functionListNode;
    };

     /**
     * Create a name/id correspondance object of function nodes
     * 
     * @param functionListNode
     * @return the object of the list {id, name}
     */
    GraphCreator.prototype.createFunctionNodeList = function(functionListNode) {
        var allFunctionNodeName = {};
        /*  Commenté pour passer la minification TODO : A revoir
        for (var i = 0; i < functionListNode.children.length; i++) {
            if (functionListNode.children[i].constructor.name === "FunctionNode" && functionListNode.children[i].getName() === "main") {
                allFunctionNodeName[functionListNode.children[i].getName()] = {nodeId: (1), functionNode: functionListNode.children[i]};
            }
        }
        for (var i = 0; i < functionListNode.children.length; i++) {
            if (functionListNode.children[i].constructor.name === "FunctionNode" && functionListNode.children[i].getName() !== "main") {
                allFunctionNodeName[functionListNode.children[i].getName()] = {nodeId: (i + 2), functionNode: functionListNode.children[i]};
            }
        } */
        return allFunctionNodeName;
    };

     /**
     * Get the function node corresponding to the main function of the program
     * 
     * @return the FunctionNode of the main function
     */
    GraphCreator.prototype.getMainFunctionNode = function() {
        var functionNode;
        for (var i = 0; i < this.tree.children.length; i++) {
            if (this.tree.children[i].constructor.name === "FunctionNode") {
                functionNode = this.tree.children[i];
            }
        }
        return functionNode;
    };

     /**
     * Get the functionNameNode of a function call node
     * 
     * @param functionCallNode
     * @return the FunctionNameNode of functionCallNode
     */
    GraphCreator.prototype.getFunctionNameNode = function(functionCallNode) {
        var functionNameNode;
        for (var i = 0; i < functionCallNode.children.length; i++) {
            if (functionCallNode.children[i].constructor.name === "FunctionNameNode") {
               functionNameNode = functionCallNode.children[i];
            }
        }
        return functionNameNode;
    };

     /**
     * Get the instrcutionListNode of any function node
     * 
     * @param functionNode
     * @return instrcutionListNode of functionNode
     */
    GraphCreator.prototype.getInstructionListNode = function(functionNode) {
        var instructionListNode;
        for (var j = 0; j < functionNode.children.length; j++) {
            if (functionNode.children[j].constructor.name === "InstructionListNode") {
                instructionListNode = functionNode.children[j];
            }
        }
        return instructionListNode;
    };

     /**
     * Add all nodes in array functionListNode to the SimpleGraph graph
     * 
     * @param functionListNode
     */
    GraphCreator.prototype.addAllFunctionNodesToSimpleGraph = function(functionListNode) {
        for (var i = 0; i < functionListNode.children.length; i++) {
            if (functionListNode.children[i].getName() === "main") {
                this.graph.addNode(1).setValue(functionListNode.children[i].getName());
            }
        }
        for (var i = 0; i < functionListNode.children.length; i++) {
            if (functionListNode.children[i].constructor.name === "FunctionNode" && functionListNode.children[i].getName() !== "main") {
                this.graph.addNode(i + 2).setValue(functionListNode.children[i].getName());
            }
        }
    };
    
     /**
     * Add all nodes in array  to the SimpleGraph graph
     * 
     * @param functionListNode
     */
    GraphCreator.prototype.browseTreeGraph = function(fatherNode, id) {
        // Browse all children of the father node
        var fatherId = id.id;
        for (var i = 0; i < fatherNode.children.length; i++) {
                // Add new node and an edge from the father node to it.
                if(this.graph.getNode(id.inc()) === undefined){
                    var newNode = this.graph.addNode(id.id);
                    this.browseTreeGraph(fatherNode.children[i], id);
                    newNode.setValue(fatherNode.children[i].constructor.name);
                    this.graph.addEdge(this.graph.getNode(fatherId), newNode);
                }
        }
    };

     /**
     * Recursif search for all FunctionCallNode nodes and add Edges to the graph
     * 
     * @param currentNode
     * @param father
     */
    GraphCreator.prototype.searchFunctionCallNode = function(currentNode, father, visited) {

            // If it's a function call node
            if (currentNode.constructor.name === "FunctionCallNode") {
                // If the the currentNode has a father or hasn't yet been visited
                if (father !== undefined || !visited.isVisited(currentNode)) {
                    // We add the edge between the father and the son
                    this.addFunctionCallEdge(this.getFunctionNameNode(father).getName(), this.getFunctionNameNode(currentNode).getName());
                    // We set the current node as visited
                    visited.addVisitedNode(currentNode);
                }
                if(father !== currentNode){
                father = currentNode;
                this.searchFunctionCallNode(this.allFunctionNodeName[currentNode.getFunctionName()].functionNode, father, visited);
                }
            }
            for (var i = 0; i < currentNode.children.length; i++) {
                this.searchFunctionCallNode(currentNode.children[i], father, visited);
            }
    };

     /**
     * Add edge to the SimpleGraph using sourceNodeName and destNodeName of the tree
     * 
     * @param sourceNodeName
     * @param destNodeName
     */
    GraphCreator.prototype.addFunctionCallEdge = function(sourceNodeName, destNodeName) {
        // If edge hasn't already been added
        if (this.graph.getEdge(this.graph.getNode(this.allFunctionNodeName[sourceNodeName].nodeId), this.graph.getNode(this.allFunctionNodeName[destNodeName].nodeId)) === undefined) {
            // Add the edge to the graph
            this.graph.addEdge(this.graph.getNode(this.allFunctionNodeName[sourceNodeName].nodeId), this.graph.getNode(this.allFunctionNodeName[destNodeName].nodeId));
        }
    };

     /**
     * Procedure to add all nodes and edges of the function calls of the tree
     */
    GraphCreator.prototype.programTreeToFunctionCallSimpleGraph = function(){

        // Get the "root" node of the main function
        var mainFunctionNode = this.getMainFunctionNode();
        // browse the graph the add all nodes
        this.addAllFunctionNodesToSimpleGraph(this.getFunctionListNode(this.tree));
        var visited = {
            visitedList:{},
            isVisited: function(node){
                return this.visitedList[node] !== undefined;
            },
            addVisitedNode: function(node){
                this.visitedList[node] = node;
            }
        };
        this.searchFunctionCallNode(this.getInstructionListNode(mainFunctionNode), mainFunctionNode, visited);
    };

     /**
     * Procedure to add all nodes and edges of the whole tree
     */
    GraphCreator.prototype.programTreeToSimpleGraph = function(){
        // Get the "root" node of the main function
        this.graph.addNode(1).setValue(this.tree.constructor.name);
        var id = {
            id:1,
            inc: function(){
                return ++this.id;
            }
        };
        this.browseTreeGraph(this.tree, id);
    };

    return GraphCreator;
});

