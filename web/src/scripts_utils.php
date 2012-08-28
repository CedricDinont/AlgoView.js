<?php

	$libraries = array();

	function addJsLibrary($libraryName) {
		global $libraries;

		if (! array_search($libraryName, $libraries)) {
			array_push($libraries, $libraryName);
		}
	}

	function generateScriptNodes() {
		global $libraries;
		global $scriptsLocation;

		foreach ($libraries as $library) {
			echo "<script src='$scriptsLocation/$library' type='text/javascript' charset='utf-8'></script>";
			echo "\n";
		}
	}

?>
