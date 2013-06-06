<?php

if (! isset($_FILES["program"])) {
	$message["success"] = "false";
	echo json_encode($message);
	exit();
}

$program = $_FILES['program'];

$message["success"] = "true";
$message["command"] = "algoview-load-program-text";
$message["programName"] = $program["name"];

$fileContents = file_get_contents($program["tmp_name"]);

$fileContents = str_replace('"', '\"', $fileContents);
$fileContents = htmlspecialchars($fileContents, ENT_NOQUOTES);

$message["programText"] = $fileContents;

echo json_encode($message);

?>
