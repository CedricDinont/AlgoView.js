define("ViewHandler",
["TextView", "TextViewSimpleGraph", "GraphicalView", "GraphicalViewSimpleGraph", "InvalidViewTypeException", "GraphCreationEvent"],
function(TextView, TextViewSimpleGraph, GraphicalView, GraphicalViewSimpleGraph, InvalidViewTypeException, GraphCreationEvent) {
    function ViewHandler(graph) {
        this.graph = graph;
        this.views = [];

        // views match table which save the model and view objects
        this.viewTypes = {
            "text": { 'model': TextViewSimpleGraph,
                       'view' : TextView
            },
            "graphical": {'model': GraphicalViewSimpleGraph,
                          'view': GraphicalView
            }
        };

    }

    /**
     * Take the type of view to add to the ViewHandler object
     * @param string view type
     *
     */
    ViewHandler.prototype.addView = function(viewType){
            if (viewType === undefined) {
                throw new InvalidViewTypeException(viewType);
            }
            if (!(viewType in this.viewTypes)) {
                throw new InvalidViewTypeException(viewType);
            }

            var newView = {'model': new this.viewTypes[viewType].model(this.graph.isDirected()),
                            'view' : new this.viewTypes[viewType].view()
            };
            newView.model.addReferenceSimpleGraph(this.graph);
            this.views.push(newView);
            return this;
    };


    /**
     * Browse all the added views and call the refresh funtion the treir view
     */
    ViewHandler.prototype.refreshViews = function(){
            var sizeViews = this.views.length;
            for (var i = 0; i < sizeViews; i++) {
                    this.views[i].view.refresh(new GraphCreationEvent(this.views[i].model));
            };
    };
    
    return ViewHandler;
    
});