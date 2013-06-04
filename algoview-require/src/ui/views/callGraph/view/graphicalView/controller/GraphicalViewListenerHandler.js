define("GraphicalViewListenerHandler",
[0],
function() {

GraphicalViewListenerHandler = function(model) {
    this.model = model;
};


GraphicalViewListenerHandler.prototype.OnWindowSizeChange = function(e) {
    var width = $(window).width();
    if(Math.abs(width - e.data.self.model.getWindowWidth()) > 50){
           e.data.self.model.setWindowWidth(width); 
    }
};

GraphicalViewListenerHandler.prototype.nodeDragMouseDown = function(e) {

	var g = $(e.target).parent();
	g = g[0];

	if(g.nodeName == "g" && $(g).attr('class') == "groupnode") { //Select a node
	    var clicking = true;

	    Xpage = e.pageX;
	    Ypage = e.pageY;
	    $('rect',$(g)).attr('fill', "#d4e1f2");

	    var srcNodes = $(g).parent("#svg")[0];
	    srcNodes = $(srcNodes).children("g[data-src="+$(g).attr('data-id')+"]:not([data-dest="+$(g).attr('data-id')+"])");

	    var destNodes = $(g).parent("#svg")[0];
	    destNodes = $(destNodes).children("g[data-dest="+$(g).attr('data-id')+"]:not([data-src="+$(g).attr('data-id')+"])");

	    var srcDestNodes = $(g).parent("#svg")[0];
	    srcDestNodes = $(srcDestNodes).children("g[data-dest="+$(g).attr('data-id')+"][data-src="+$(g).attr('data-id')+"]");

		$(document).on('mouseup',function(){
		    clicking = false;
		    $('rect',$(g)).attr('fill', "#FFF");
		});

		$(document).on('mousemove', '#svg',function(ev){
		    var deltaX = 0.0;
		    var deltaY = 0.0;

		    var x0,y0,x1,y1,angle,a,b;

		    var ePageX = ev.pageX;
		    var ePageY = ev.pageY;

		    if(clicking == false) return;

		    // Mouse click + moving logic here
		   
		    deltaX = ePageX-Xpage + parseFloat($("rect",$(g)).attr("x"));
		    deltaY = ePageY-Ypage + parseFloat($("rect",$(g)).attr("y"));

		    $("rect",$(g)).attr("x",deltaX);
		    $("rect",$(g)).attr("y",deltaY);

		    deltaX = ePageX-Xpage + parseFloat($("text",$(g)).attr("x"));
		    deltaY = ePageY-Ypage + parseFloat($("text",$(g)).attr("y"));

		    $("text",$(g)).attr("x",deltaX);
		    $("text",$(g)).attr("y",deltaY);

		    Xpage = ePageX;
		    Ypage = ePageY;


		    //Move edges
		    for (var i = srcNodes.length - 1; i >= 0; i--) {
		    	x0 = deltaX;
		    	y0 = deltaY+(e.data.self.model.defaultValues.nodeHeight/2);
		    	x1 = $("line",srcNodes[i]).attr("x2");
		    	y1 = $("line",srcNodes[i]).attr("y2");

		    	a =-(y0-y1);
		    	b =(x0-x1);

		    	if(x1 < x0) {	    	    
		    	    angle =  3*Math.PI/2 + (Math.PI - Math.atan2(a,b));
		    	}else{
		    	    angle = Math.PI/2 - Math.atan2(a,b);
		    	}

		    	$("line",$(srcNodes[i])).attr("x1",x0);
		    	$("line",$(srcNodes[i])).attr("y1",y0);
		    	$("path",$(srcNodes[i])).attr("d","m"+ x1 +"," + y1 + " l10,-10 l-20,0 z")
		    	           .attr("transform","rotate("+ angle*180/Math.PI +", "+ parseInt(x1) +", "+ parseInt(y1) +")")
		    	           ;
		    };
		    for (var i = destNodes.length - 1; i >= 0; i--) {
		    	x0 = $("line",$(destNodes[i])).attr("x1");
		    	y0 = $("line",$(destNodes[i])).attr("y1");
		    	x1 = deltaX;
		    	y1 = deltaY-(e.data.self.model.defaultValues.nodeHeight/2);

		    	a =-(y0-y1);
		    	b =(x0-x1);

		    	if(x1 < x0) {	    	    
		    	    angle =  3*Math.PI/2 + (Math.PI - Math.atan2(a,b));
		    	}else{
		    	    angle = Math.PI/2 - Math.atan2(a,b);
		    	}

		    	$("line",$(destNodes[i])).attr("x2",x1);
		    	$("line",$(destNodes[i])).attr("y2",y1);
		    	$("path",$(destNodes[i])).attr("d","m"+ x1 +"," + y1 + " l10,-10 l-20,0 z")
		    	           .attr("transform","rotate("+ angle*180/Math.PI +", "+ parseInt(x1) +", "+ parseInt(y1) +")")
		    	           ;
		    };

		    for (var i = srcDestNodes.length - 1; i >= 0; i--) {

		    	var de = $("path.line",$(srcDestNodes[i])).attr("d");
		    	de = de.split(' ');

		    	var offsetx = e.data.self.model.defaultValues.offsetx;
		    	var offsety = e.data.self.model.defaultValues.offsety;

		    	deltaX = deltaX-(e.data.self.model.defaultValues.nodeWidth/2);

		    	x0 = deltaX;
		    	y0 = deltaY;
		    	x1 = deltaX;
		    	y1 = deltaY;

		    	$("path.line",$(srcDestNodes[i])).attr("d",de[0]+" "+x0+" "+parseFloat(y0+5)+" "+de[3]+" "+parseFloat(parseFloat(x0)-parseFloat(offsetx))+" "+parseFloat(parseFloat(y0)+parseFloat(offsety))+" "+de[6]+" "+parseFloat(parseFloat(x1)-parseFloat(offsetx))+" "+parseFloat(parseFloat(y1)-parseFloat(offsety))+" "+de[9]+" "+x1+" "+parseFloat(y1-5));

		    	a =(offsetx);
		    	b =-(offsety);

		    	if(x1 < offsetx) {
		    	    
		    	    angle =  3*Math.PI/2 + (Math.PI - Math.atan2(a,b));
		    	}else{
		    	    angle = Math.PI/2 - Math.atan2(a,b)- Math.PI/14;
		    	}

		    	$("path.arrow",$(srcDestNodes[i])).attr("d","m"+ x1+" "+parseFloat(y1-5)+ " l10,-10 l-20,0 z")
								    	           .attr("transform","rotate("+ angle*180/Math.PI +", "+ parseInt(x1) +", "+ parseInt(y1-5) +")")
								    	           ;
		    };

		});
	}
};

    return GraphicalViewListenerHandler;

});
