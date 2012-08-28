<?php

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

	$dir = opendir("./files/");	

	echo '{
		"status":"ok",
		"files": [
	';

	$first=true;
    while (false !== ($entry = readdir($dir))) {
        if ($entry != "." && $entry != "..") {
		if ($first) {
			$first=false;
		} else {
			echo ",";
		}
                echo '"' . $entry . '"';
    	}
    }


	echo "]}";
	closedir($dir);
?>
