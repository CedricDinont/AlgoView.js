<?php
	include "../../src/scripts_utils.php";
	$scriptsLocation = "../../src";
?>

<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>AlgoView.js Test Panel</title>
		<link rel="stylesheet" href="../../style/algoview.css" type="text/css" media="screen">
		<link rel="stylesheet" href="style/algoview.css" type="text/css" media="screen">
	</head>

	<body>
		<button onclick="allocSimpleStruct()"> Alloc Simple Struct </button>	
		
		<button onclick="allocNestedStruct()"> Alloc Nested Struct </button>	
		
		<button onclick="allocRandomInteger()"> Alloc integer </button>
		
		<button onclick="allocRandomCharacter()"> Alloc character </button>
		
		<button onclick="free(1)"> Free </button>	
		
		<input type="text" size="3" id="freeAddress"> </input>	
								
		<button onclick="reset()"> Reset </button>	
		
		<button onclick="pushRandomBoolean()"> Push boolean </button>			
				
		<button onclick="pushRandomCharacter()"> Push character </button>		
		
		<button onclick="pushRandomInteger()"> Push integer </button>	
		
		<button onclick="pushPointer()"> Push pointer </button>	
	
		<input type="text" size="3" id="pointerStackAddress"> </input>	
			
		<button onclick="pushPointerArray()"> Push pointer array </button>		
		
		<button onclick="push2DIntegerArray()"> Push 2D integer array </button>			
		
		<button onclick="push3DIntegerArray()"> Push 3D integer array </button>	

		<button onclick="pushSimpleStructure()"> Push simple structure </button>			
		
		<button onclick="pushNestedStructure()"> Push nested structure </button>					
				
		<button onclick="pop()"> Pop a variable </button>
			
		<table>
			<tr>
				<td>Graphical View</td>
				<td>Stack</td>
				<td>Heap</td>				
				<td>Memory</td>
			</tr>		
			<tr>
				<td>
					<div id="graphicalMemoryViewContainer"></div>
				</td>
				<td>
					<!-- style="width:190px" provisoire, pour régler un bug de scrollbars -->
					<div id="stackTableViewContainer" class="flattenMemoryDiv"  style="width:245px"></div>
				</td>
				<td>
					<!-- style="width:190px" provisoire, pour régler un bug de scrollbars -->
					<div id="heapTableViewContainer" class="flattenMemoryDiv" style="width:205px"></div>
				</td>				
				<td>
					<!-- style="width:140px" provisoire, pour régler un bug de scrollbars -->
					<div id="memoryTableViewContainer" class="flattenMemoryDiv"  style="width:145px"></div>
				</td>
			</tr>
		</table>
		
		<script src="../../src/lib/antlr-javascript-runtime-3.1/antlr3-all-patched.js" type="text/javascript" charset="utf-8"></script>

		<!-- TODO: A supprimer après avoir corrigé le bug sur eve  -->
		<script src="../../src/lib/raphael-2.1.1.js" type="text/javascript" charset="utf-8"></script>		
		
		<?php
			include "../../src/memory_views.php";
			include "../../src/program.php";
			
			generateScriptNodes(true);
		?>

		<script src="variableCreationUtils.js" type="text/javascript" charset="utf-8"></script>  	
		<script src="initializer.js" type="text/javascript" charset="utf-8"></script>  	
	</body>
</html>
