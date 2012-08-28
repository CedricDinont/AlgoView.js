<?php

if (! isset($_REQUEST['fileContent'])) {
	exit();
}

$fileContent = urldecode($_REQUEST['fileContent']);

if (isset($_REQUEST['fileName'])) {
	$fileName = $_REQUEST['fileName'];
} else {
	$fileName = "Program.sl";
}

$fileName = preg_replace("/[0-9][0-9][0-9][0-9]_[0-9][0-9]_[0-9][0-9]-[0-9][0-9]_[0-9][0-9]_[0-9][0-9]-/", "", $fileName);

$fileName = date("Y_m_d-H_i_s-") . $fileName;

header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename=' . $fileName);
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: no-cache, must-revalidate');
header('Pragma: no-cache');
header('Content-Length: ' . strlen($fileContent));

ob_clean();
flush();
    
echo($fileContent);
    
exit;

?>
