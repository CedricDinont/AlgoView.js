<?php

	$libraries = array();

	function addJsLibrary($libraryName) {
		global $libraries;

		if (! array_search($libraryName, $libraries)) {
			array_push($libraries, $libraryName);
		}
	}

	function generateScriptNodes($preventCache) {
		global $libraries;
		global $scriptsLocation;

		$randomParam = "";

		if ($preventCache) {
			$randomParam = "?disableCacheParam=" . time();
		}

		foreach ($libraries as $library) {
			echo "<script src='$scriptsLocation/$library$randomParam' type='text/javascript' charset='utf-8'></script>";
			echo "\n";
		}
	}

?>
