<?php 
// echo var_dump($_POST); для formData ?>

<?php 
// для json 
$_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);?>