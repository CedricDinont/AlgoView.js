define("GraphicalViewListenerHandler",
["jQuery"],
function($j) {

GraphicalViewListenerHandler = function(model, svgId) { // MSO : ajouté svgId
    this.model = model;
    this.svgId = svgId;
};

 // MSO : retiré : sera géré par Ext.js
//GraphicalViewListenerHandler.prototype.OnWindowSizeChange = function(e) {
//    var width = $j(window).width();
//    if(Math.abs(width - e.data.self.model.getWindowWidth()) > 50){
//           e.data.self.model.setWindowWidth(width); 
//    }
//};

GraphicalViewListenerHandler.prototype.nodeDragMouseDown = function(e) {

	var g = $j(e.target).parent();
	g = g[0];

	if(g.nodeName === "g" && $j(g).attr('class') === "groupnode") { //Select a node
	    var clicking = true;

	    Xpage = e.pageX;
	    Ypage = e.pageY;
	    $j('rect',$j(g)).attr('fill', "#d4e1f2");
	    
	    var srcNodes = $j(g).parent(e.data.self.svgId)[0];
	    srcNodes = $j(srcNodes).children("g[data-src="+$j(g).attr('data-id')+"]:not([data-dest="+$j(g).attr('data-id')+"])");

	    var destNodes = $j(g).parent(e.data.self.svgId)[0];
	    destNodes = $j(destNodes).children("g[data-dest="+$j(g).attr('data-id')+"]:not([data-src="+$j(g).attr('data-id')+"])");

	    var srcDestNodes = $j(g).parent(e.data.self.svgId)[0];
	    srcDestNodes = $j(srcDestNodes).children("g[data-dest="+$j(g).attr('data-id')+"][data-src="+$j(g).attr('data-id')+"]");

		$j(document).on('mouseup',function(){
		    clicking = false;
		    $j('rect',$j(g)).attr('fill', "#FFF");
		});

		$j(document).on('mousemove.dragnode', e.data.self.svgId,function(ev){
		    var deltaX = 0.0;
		    var deltaY = 0.0;

		    var x0,y0,x1,y1,angle,a,b,nodeSrc;

		    var ePageX = ev.pageX;
		    var ePageY = ev.pageY;

		    if(clicking === false) return;

		    // Mouse click + moving logic here
		   
		    deltaX = ePageX-Xpage + parseFloat($j("rect",$j(g)).attr("x"));
		    deltaY = ePageY-Ypage + parseFloat($j("rect",$j(g)).attr("y"));

		    $j("rect",$j(g)).attr("x",deltaX);
		    $j("rect",$j(g)).attr("y",deltaY);
                    
            deltaX = ePageX-Xpage + parseFloat($j(".function-line",$j(g)).attr("x"));
		    deltaY = ePageY-Ypage + parseFloat($j(".function-line",$j(g)).attr("y"));

		    $j(".function-line",$j(g)).attr("x",deltaX);
		    $j(".function-line",$j(g)).attr("y",deltaY);

		    deltaX = ePageX-Xpage + parseFloat($j(".function-name",$j(g)).attr("x"));
		    deltaY = ePageY-Ypage + parseFloat($j(".function-name",$j(g)).attr("y"));

		    $j(".function-name",$j(g)).attr("x",deltaX);
		    $j(".function-name",$j(g)).attr("y",deltaY);                   


		    Xpage = ePageX;
		    Ypage = ePageY;

		    


		    //Move edges
		    for (var i = srcNodes.length - 1; i >= 0; i--) {
		    	nodeSrc = $j(e.data.self.svgId+" #node-"+String($j(srcNodes[i]).attr('data-src')));
				nodeSrc = nodeSrc[0];

		    	x0 = deltaX;
		    	y0 = deltaY+($j("rect",nodeSrc).attr('height')/2);
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

		    	nodeSrc = $j(e.data.self.svgId+" #node-"+String($j(destNodes[i]).attr('data-src')));
				nodeSrc = nodeSrc[0];

		    	x0 = $j("line",$j(destNodes[i])).attr("x1");
		    	y0 = $j("line",$j(destNodes[i])).attr("y1");
		    	x1 = deltaX;
		    	y1 = deltaY-($j("rect",nodeSrc).attr('height')/2);

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

		    	nodeSrc = $j(e.data.self.svgId+" #node-"+String($j(srcDestNodes[i]).attr('data-src')));
				nodeSrc = nodeSrc[0];

		    	var de = $j("path.line",$j(srcDestNodes[i])).attr("d");
		    	de = de.split(' ');

		    	var offsetx = e.data.self.model.defaultValues.offsetx;
		    	var offsety = e.data.self.model.defaultValues.offsety;

		    	deltaX = deltaX-($j("rect",nodeSrc).attr('width')/2);

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

GraphicalViewListenerHandler.prototype.moveGraph = function(ev) {
	var Xpage = 0;
	var Ypage = 0;
	var clicking = true;
	if (ev.ctrlKey) {
		$j(document).off('mousemove.dragnode',ev.data.self.svgId);
		Xpage = ev.pageX;
		Ypage = ev.pageY;

		$j(document).on('mouseup', ev.data.self.svgId, function(){
		    clicking = false;
		    Xpage = 0;
		    Ypage = 0;
		    ePageX = 0.0;
		    ePageY = 0.0;
		    $j(document).on('mousemove.dragnode',ev.data.self.svgId);
		    $j(document).off('mousedown.moveGraph',ev.data.self.svgId);
		});

		$j(ev.data.self.svgId).mousemove(function(e){
		    var deltaX = 0.0;
		    var deltaY = 0.0;

		    var x0,y0,x1,y1,angle,a,b;

		    var ePageX = e.pageX;
		    var ePageY = e.pageY;

		    var nodeEq;

		    if(clicking === false) return;

		    // Mouse click + moving logic here
		    $j("rect",$j(this)).each(function() {
		    	deltaX = ePageX-Xpage + parseFloat($j(this).attr("x"));
		    	deltaY = ePageY-Ypage + parseFloat($j(this).attr("y"));

		    	$j(this).attr("x",deltaX);
		    	$j(this).attr("y",deltaY);
		    });

		    $j("text",$j(this)).each(function() {
		    	deltaX = ePageX-Xpage + parseFloat($j(this).attr("x"));
		    	deltaY = ePageY-Ypage + parseFloat($j(this).attr("y"));

		    	$j(this).attr("x",deltaX);
		    	$j(this).attr("y",deltaY);
		    });

		    $j(".groupedge",$j(this)).each(function() {

		    	deltaX = ePageX-Xpage;
		    	deltaY = ePageY-Ypage;

		    	$j("line",$j(this)).attr("x1",parseFloat($j("line",$j(this)).attr("x1"))+deltaX);
		    	$j("line",$j(this)).attr("y1",parseFloat($j("line",$j(this)).attr("y1"))+deltaY);

		    	$j("line",$j(this)).attr("x2",parseFloat($j("line",$j(this)).attr("x2"))+deltaX);
		    	$j("line",$j(this)).attr("y2",parseFloat($j("line",$j(this)).attr("y2"))+deltaY);

		    	if($j(this).attr('data-src') === $j(this).attr('data-dest')) {

		    		x0 = parseFloat($j("rect",$j(nodeDest)).attr('x'));
		    		y0 = parseFloat(parseFloat($j("rect",$j(nodeDest)).attr('y'))+parseFloat($j("rect",$j(nodeDest)).attr('height')/2)+5);
		    		x1 = parseFloat($j("rect",$j(nodeDest)).attr('x'));
		    		y1 = parseFloat(parseFloat($j("rect",$j(nodeDest)).attr('y'))+parseFloat($j("rect",$j(nodeDest)).attr('height')/2)-5);

		    		var offsetx = ev.data.self.model.defaultValues.offsetx;
		    		var offsety = ev.data.self.model.defaultValues.offsety;
		    		
		    		$j("path.line",this).attr("d","M "+x0+" "+y0+" C "+parseFloat(parseFloat(x0)-parseFloat(offsetx))+" "+parseFloat(parseFloat(y0)+parseFloat(offsety))+" , "+parseFloat(parseFloat(x1)-parseFloat(offsetx))+" "+parseFloat(parseFloat(y1)-parseFloat(offsety))+" , "+x1+" "+y1+"")
		    		       .attr("fill","transparent");

		    		if(ev.data.self.model.isDirected() == true) {

		    		    a =(offsetx);
		    		    b =-(offsety);

		    		    if(x1 < offsetx) {
		    		        
		    		        angle =  3*Math.PI/2 + (Math.PI - Math.atan2(a,b));
		    		    }else{
		    		        angle = Math.PI/2 - Math.atan2(a,b)- Math.PI/14;
		    		    }

		    		    $j("path:not(.line)",this).attr("d","m "+ x1+" "+y1+ " l10,-10 l-20,0 z")
		    		               .attr("transform","rotate("+ angle*180/Math.PI +", "+ parseInt(x1) +", "+ parseInt(y1) +")")
		    		               ;
		    		}
		    	}
		    	else {
			    	nodeSrc = $j(ev.data.self.svgId+" #node-"+String($j(this).attr('data-src')));
			    	nodeSrc = nodeSrc[0];

		    		nodeDest = $j(ev.data.self.svgId+" #node-"+String($j(this).attr('data-dest')));
		    		nodeDest = nodeDest[0];

		    		x0 = parseInt($j("rect",nodeSrc).attr('x'))+($j("rect",nodeSrc).attr('width')/2);
		    		y0 = parseInt(parseInt($j("rect",nodeSrc).attr('y'))+parseInt($j("rect",nodeSrc).attr('height')));
		    		x1 = parseInt($j("rect",nodeDest).attr('x'))+($j("rect",nodeDest).attr('width')/2);
		    		y1 = parseInt($j("rect",nodeDest).attr('y'));

		    		a =-(y0-y1);
		    		b =(x0-x1);

		    		if(x1 < x0) {    		    
		    		    angle =  3*Math.PI/2 + (Math.PI - Math.atan2(a,b));
		    		}else{
		    		    angle = Math.PI/2 - Math.atan2(a,b);
		    		}

		    		$j("path:not(.line)",this).attr("d","m "+ x1 +" , " + y1 + " l10,-10 l-20,0 z")
		    		           .attr("transform","rotate("+ angle*180/Math.PI +", "+ parseInt(x1) +", "+ parseInt(y1) +")")
		    		           ;
	    		}
		    });

		    Xpage = ePageX;
		    Ypage = ePageY;
		});
	}
};

GraphicalViewListenerHandler.prototype.zoomGraph = function(ev) {
		if (ev.keyCode == 16) {

			$j(document).on('keypress.zoom2',function(ev2) {
				
				if(ev2.keyCode == 43) {
					//ZOOM
					var coefZoom = ev.data.self.model.defaultValues.coefZoom;
				 	GraphicalViewListenerHandler.prototype.zoomGraphWithCoeff(coefZoom,ev);
				}
				if(ev2.keyCode == 45) {
					//DEZOOM
					var coefDezoom = ev.data.self.model.defaultValues.coefDezoom;
					GraphicalViewListenerHandler.prototype.zoomGraphWithCoeff(coefDezoom,ev);
				}
			});

			$j(document).keyup(function(ev3) {
				if (ev3.keyCode == 16) {
					$j(document).off("keypress.zoom2");
					
				}
			});
		}
};

GraphicalViewListenerHandler.prototype.zoomGraphWithCoeff = function(coeff, ev) {

	var nodeSrc,a,b;

	$j("rect",$j(ev.data.self.svgId)).each(function() {
		$j(this).attr("width",parseFloat($j(this).attr("width")*(parseFloat(coeff))));
		$j(this).attr("height",parseFloat($j(this).attr("height")*(parseFloat(coeff))));
		$j(this).attr("x",parseFloat($j(this).attr("x")*(parseFloat(coeff))));
		$j(this).attr("y",parseFloat($j(this).attr("y")*(parseFloat(coeff))));
	});

	$j("text",$j(ev.data.self.svgId)).each(function() {
		$j(this).css("font-size",parseFloat(parseFloat($j(this).css("font-size"))*(parseFloat(coeff)))+"px");
		$j(this).attr("x",parseFloat($j(this).attr("x")*(parseFloat(coeff))));
		$j(this).attr("y",parseFloat($j(this).attr("y")*(parseFloat(coeff))));
	});

	$j(".groupedge",$j(ev.data.self.svgId)).each(function() {

    	if($j(this).attr('data-src') === $j(this).attr('data-dest')) {

    		//Arc d'un noeud A vers lui-même
    		x0 = parseFloat($j("rect",$j(nodeDest)).attr('x'));
    		y0 = parseFloat(parseFloat($j("rect",$j(nodeDest)).attr('y'))+parseFloat($j("rect",$j(nodeDest)).attr('height')/2)+5);
    		x1 = parseFloat($j("rect",$j(nodeDest)).attr('x'));
    		y1 = parseFloat(parseFloat($j("rect",$j(nodeDest)).attr('y'))+parseFloat($j("rect",$j(nodeDest)).attr('height')/2)-5);

    		var offsetx = ev.data.self.model.defaultValues.offsetx;
    		var offsety = ev.data.self.model.defaultValues.offsety;
    		
    		$j("path.line",this).attr("d","M "+x0+" "+y0+" C "+parseFloat(parseFloat(x0)-parseFloat(offsetx))+" "+parseFloat(parseFloat(y0)+parseFloat(offsety))+" , "+parseFloat(parseFloat(x1)-parseFloat(offsetx))+" "+parseFloat(parseFloat(y1)-parseFloat(offsety))+" , "+x1+" "+y1+"")
    		       .attr("fill","transparent");

    		if(ev.data.self.model.isDirected() == true) {

    		    a =(offsetx);
    		    b =-(offsety);

    		    if(x1 < offsetx) {
    		        
    		        angle =  3*Math.PI/2 + (Math.PI - Math.atan2(a,b));
    		    }else{
    		        angle = Math.PI/2 - Math.atan2(a,b)- Math.PI/14;
    		    }

    		    $j("path:not(.line)",this).attr("d","m "+ x1+" "+y1+ " l10,-10 l-20,0 z")
    		               .attr("transform","rotate("+ angle*180/Math.PI +", "+ parseInt(x1) +", "+ parseInt(y1) +")")
    		               ;
    		}
    	}
    	else {
    		//Arc d'un noeud A vers un noeud B
	    	nodeSrc = $j(ev.data.self.svgId+" #node-"+String($j(this).attr('data-src')));
	    	nodeSrc = nodeSrc[0];

    		nodeDest = $j(ev.data.self.svgId+" #node-"+String($j(this).attr('data-dest')));
    		nodeDest = nodeDest[0];

	    	$j('line',this).attr("x1",parseFloat($j('line',this).attr("x1")*(parseFloat(coeff))));
			$j('line',this).attr("y1",parseFloat($j('line',this).attr("y1")*(parseFloat(coeff))));

			$j('line',this).attr("x2",parseFloat($j('line',this).attr("x2")*(parseFloat(coeff))));
			$j('line',this).attr("y2",parseFloat($j('line',this).attr("y2")*(parseFloat(coeff))));
	    	

    		x0 = parseFloat($j("rect",nodeSrc).attr('x'))+($j("rect",nodeSrc).attr('width')/2);
    		y0 = parseFloat(parseFloat($j("rect",nodeSrc).attr('y'))+parseFloat($j("rect",nodeSrc).attr('height')/2));
    		x1 = parseFloat($j("rect",nodeDest).attr('x'))+($j("rect",nodeSrc).attr('width')/2);
    		y1 = parseFloat($j("rect",nodeDest).attr('y'));

    		a =-(y0-y1);
    		b =(x0-x1);

    		if(x1 < x0) {    		    
    		    angle =  3*Math.PI/2 + (Math.PI - Math.atan2(a,b));
    		}else{
    		    angle = Math.PI/2 - Math.atan2(a,b);
    		}

    		$j("path:not(.line)",this).attr("d","m "+ x1 +" , " + y1 + " l10,-10 l-20,0 z")
    		           .attr("transform","rotate("+ angle*180/Math.PI +", "+ parseFloat(x1) +", "+ parseFloat(y1) +")")
    		           ;
		}
	});
};

    return GraphicalViewListenerHandler;
});
