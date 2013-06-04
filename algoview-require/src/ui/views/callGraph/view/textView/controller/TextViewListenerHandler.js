define("TextViewListenerHandler",
[0],
function(){
    TextViewListenerHandler = function(model) {
        this.model = model;
    };

    /**
     * Take the general event when the user click on the graph and dispatch it the approriate actions
     * @param listener event object
     *
     */
    TextViewListenerHandler.prototype.OnGraphClick = function(e) {
        if (e.target.tagName === 'LI') {
            if ($(e.target).attr('id') !== undefined) {
                var elementType = $(e.target).attr('id').split("-")[0];
                if (elementType === 'node') { // User clicked on a node
                    e.data.self.OnNodeClick(e);
                }

                if (elementType === 'edge') { // User clicked on an edge
                    e.data.self.OnEdgeClick(e);
                }
            }
        } else if (e.target.tagName === 'SPAN' || e.target.tagName === 'A') {
            e.target = e.target.parentElement;
            e.data.self.OnGraphClick(e);
        }
    };

    /**
     * Take the event when the user click on a node and touch the status of the node in the model
     * @param listener event object
     *
     */
    TextViewListenerHandler.prototype.OnNodeClick = function(e) {
        var nodeId = parseInt($(e.target).attr('id').split("-")[1]);
        if (e.data.self.model.isNodeOpen(nodeId)) {
            e.data.self.model.closeNode(e.target, nodeId);
        } else {
            e.data.self.model.openNode(e.target, nodeId);
        }
    };


    /**
     * Take the general event when the user click on an edge and tell the model to open the dest node
     * @param listener event object
     *
     */
    TextViewListenerHandler.prototype.OnEdgeClick = function(e) {
        var sourceNodeId = parseInt($(e.target).attr('id').split("-")[1]);
        var destNodeId = parseInt($(e.target).attr('id').split("-")[2]);
        var destNodeDOM = e.data.self.getNodeDOM(destNodeId);

        if ($(destNodeDOM).attr('class') === 'closed') {
           e.data.self.model.openNode(destNodeDOM, destNodeId);
        }
    };


    /**
     * returns the node in the DOM from its Id
     * @param The id of the node
     *
     * @return DOM node object
     */
    TextViewListenerHandler.prototype.getNodeDOM = function(nodeId) {
        return $('#node-' + nodeId)[0];
    };

    return TextViewListenerHandler;

});