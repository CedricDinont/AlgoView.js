define("GraphicalViewEdgeView",
[0],
function() {
    
    function NodeView(){

    }

    NodeView.prototype.constructor = NodeView;

    NodeView.prototype.refresh = function (){
            // TODO
    };

    NodeView.prototype.createNode = function (){

        var drawRect = Raphael(
         ["svg", 320, 200, {
            type: "rect",
            x: 15,
            y: 15,
            width: 40,
            height: 40,
            stroke: "#f00"
        }, {
            type: "text",
            x: 10,
            y: 5,
            text: "Hello"
        }]);
    };

    return NodeView;
});