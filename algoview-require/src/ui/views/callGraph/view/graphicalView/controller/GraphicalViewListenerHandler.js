define("GraphicalViewListenerHandler",
[],
function() {

GraphicalViewListenerHandler = function(model, svgId) { // MSO : ajouté svgId
    this.model = model;
    this.svgId = svgId;
};

/* // MSO : retiré : sera géré par Ext.js
GraphicalViewListenerHandler.prototype.OnWindowSizeChange = function(e) {
    var width = $j(window).width();
    if(Math.abs(width - e.data.self.model.getWindowWidth()) > 50){
           e.data.self.model.setWindowWidth(width); 
    }
};*/

GraphicalViewListenerHandler.prototype.nodeDragMouseDown = function(e) {

	var g = $j(e.target).parent();
	g = g[0];

	if(g.nodeName == "g" && $j(g).attr('class') == "groupnode") { //Select a node
	    var clicking = true;

	    Xpage = e.pageX;
	    Ypage = e.pageY;
	    $j('rect',$j(g)).attr('fill', "#d4e1f2");

	    var srcNodes = $j(g).parent(this.svgId)[0];
	    srcNodes = $j(srcNodes).children("g[data-src="+$j(g).attr('data-id')+"]:not([data-dest="+$j(g).attr('data-id')+"])");

	    var destNodes = $j(g).parent(this.svgId)[0];
	    destNodes = $j(destNodes).children("g[data-dest="+$j(g).attr('data-id')+"]:not([data-src="+$j(g).attr('data-id')+"])");

	    var srcDestNodes = $j(g).parent(this.svgId)[0];
	    srcDestNodes = $j(srcDestNodes).children("g[data-dest="+$j(g).attr('data-id')+"][data-src="+$j(g).attr('data-id')+"]");

		$j(document).on('mouseup',function(){
		    clicking = false;
		    $j('rect',$j(g)).attr('fill', "#FFF");
		});

		$j(document).on('mousemove', this.svgId,function(ev){
		    var deltaX = 0.0;
		    var deltaY = 0.0;

		    var x0,y0,x1,y1,angle,a,b;

		    var ePageX = ev.pageX;
		    var ePageY = ev.pageY;

		    if(clicking == false) return;

		    // Mouse click + moving logic here
		   
		    deltaX = ePageX-Xpage + parseFloat($j("rect",$j(g)).attr("x"));
		    deltaY = ePageY-Ypage + parseFloat($j("rect",$j(g)).attr("y"));

		    $j("rect",$j(g)).attr("x",deltaX);
		    $j("rect",$j(g)).attr("y",deltaY);

		    deltaX = ePageX-Xpage + parseFloat($j("text",$j(g)).attr("x"));
		    deltaY = ePageY-Ypage + parseFloat($j("text",$j(g)).attr("y"));

		    $j("text",$j(g)).attr("x",deltaX);
		    $j("text",$j(g)).attr("y",deltaY);

		    Xpage = ePageX;
		    Ypage = ePageY;


		    //Move edges
		    for (var i = srcNodes.length - 1; i >= 0; i--) {
		    	x0 = deltaX;
		    	y0 = deltaY+(e.data.self.model.defaultValues.nodeHeight/2);
		    	x1 = $j("line",srcNodes[i]).attr("x2");
		    	y1 = $j("line",srcNodes[i]).attr("y2");

		    	a =-(y0-y1);
		    	b =(x0-x1);

		    	if(x1 < x0) {	    	    
		    	    angle =  3*Math.PI/2 + (Math.PI - Math.atan2(a,b));
		    	}else{
		    	    angle = Math.PI/2 - Math.atan2(a,b);
		    	}

		    	$j("line",$j(srcNodes[i])).attr("x1",x0);
		    	$j("line",$j(srcNodes[i])).attr("y1",y0);
		    	$j("path",$j(srcNodes[i])).attr("d","m"+ x1 +"," + y1 + " l10,-10 l-20,0 z")
		    	           .attr("transform","rotate("+ angle*180/Math.PI +", "+ parseInt(x1) +", "+ parseInt(y1) +")")
		    	           ;
		    };
		    for (var i = destNodes.length - 1; i >= 0; i--) {
		    	x0 = $j("line",$j(destNodes[i])).attr("x1");
		    	y0 = $j("line",$j(destNodes[i])).attr("y1");
		    	x1 = deltaX;
		    	y1 = deltaY-(e.data.self.model.defaultValues.nodeHeight/2);

		    	a =-(y0-y1);
		    	b =(x0-x1);

		    	if(x1 < x0) {	    	    
		    	    angle =  3*Math.PI/2 + (Math.PI - Math.atan2(a,b));
		    	}else{
		    	    angle = Math.PI/2 - Math.atan2(a,b);
		    	}

		    	$j("line",$j(destNodes[i])).attr("x2",x1);
		    	$j("line",$j(destNodes[i])).attr("y2",y1);
		    	$j("path",$j(destNodes[i])).attr("d","m"+ x1 +"," + y1 + " l10,-10 l-20,0 z")
		    	           .attr("transform","rotate("+ angle*180/Math.PI +", "+ parseInt(x1) +", "+ parseInt(y1) +")")
		    	           ;
		    };

		    for (var i = srcDestNodes.length - 1; i >= 0; i--) {

		    	var de = $j("path.line",$j(srcDestNodes[i])).attr("d");
		    	de = de.split(' ');

		    	var offsetx = e.data.self.model.defaultValues.offsetx;
		    	var offsety = e.data.self.model.defaultValues.offsety;

		    	deltaX = deltaX-(e.data.self.model.defaultValues.nodeWidth/2);

		    	x0 = deltaX;
		    	y0 = deltaY;
		    	x1 = deltaX;
		    	y1 = deltaY;

		    	$j("path.line",$j(srcDestNodes[i])).attr("d",de[0]+" "+x0+" "+parseFloat(y0+5)+" "+de[3]+" "+parseFloat(parseFloat(x0)-parseFloat(offsetx))+" "+parseFloat(parseFloat(y0)+parseFloat(offsety))+" "+de[6]+" "+parseFloat(parseFloat(x1)-parseFloat(offsetx))+" "+parseFloat(parseFloat(y1)-parseFloat(offsety))+" "+de[9]+" "+x1+" "+parseFloat(y1-5));

		    	a =(offsetx);
		    	b =-(offsety);

		    	if(x1 < offsetx) {
		    	    
		    	    angle =  3*Math.PI/2 + (Math.PI - Math.atan2(a,b));
		    	}else{
		    	    angle = Math.PI/2 - Math.atan2(a,b)- Math.PI/14;
		    	}

		    	$j("path.arrow",$j(srcDestNodes[i])).attr("d","m"+ x1+" "+parseFloat(y1-5)+ " l10,-10 l-20,0 z")
								    	           .attr("transform","rotate("+ angle*180/Math.PI +", "+ parseInt(x1) +", "+ parseInt(y1-5) +")")
								    	           ;
		    };

		});
	}
};

    return GraphicalViewListenerHandler;

});
