<?php
	include "../../src/scripts_utils.php";
	$scriptsLocation = "../../src";
?>

<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>Simple Language unit tests</title>
		<link rel="stylesheet" href="../../style/algoview.css" type="text/css" media="screen">
		<link rel="stylesheet" href="../../style/qunit.css" type="text/css" />
	</head>
	<body>
		<div id="outputPanel-body"></div>
		
		<div id="qunit"></div>
		
		<script src="../../src/lib/antlr-javascript-runtime-3.1/antlr3-all-patched.js" type="text/javascript" charset="utf-8"></script>

		<!-- TODO: A supprimer après avoir corrigé le bug sur eve  -->
		<script src="../../src/lib/raphael-2.1.1.js" type="text/javascript" charset="utf-8"></script>		
		
		<?php
			include "../../src/memory_model.php";
			include "../../src/program.php";
			include "../../src/parser.php";
			
			generateScriptNodes();
		?>
		
		<script type="text/javascript" src="../../lib/qunit-1.7.js"></script>
		<script src="initializer.js" type="text/javascript" charset="utf-8"></script>
	</body>
</html>
