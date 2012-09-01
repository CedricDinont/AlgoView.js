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
$message["programText"] = htmlspecialchars(file_get_contents($program["tmp_name"]));

echo json_encode($message);

?>
