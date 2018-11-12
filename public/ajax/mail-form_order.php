<?php
$to = "Miha26russ@yandex.ru";
$order = "Заявки site.com от " . date('Y-m-d\ H:i:s'); 
$sitename  = "site.com";
$subject   = " \"$sitename\" $order";
$headers = 'From: info@site.com' . "\r\n" .
    'Content-Type: text/html;charset=UTF-8' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

function clean($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    
    return $value;
}

$onlineName = clean($_POST["onlineName"]);
$onlineEmail = clean($_POST["onlineEmail"]);
$onlinePhone = clean($_POST["onlinePhone"]);



    $message = "
    Имя: $onlineName <br>
    Email: $onlineEmail <br>
    Телефон: $onlinePhone <br>
";

//return mail($to, $subject, $message, $headers);
if( mail($to, $subject, $message, $headers) ) {
    echo true;
} else{
    echo false;
}