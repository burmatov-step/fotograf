<?php

/* https://api.telegram.org/bot1252863542:AAFQuP9ptpPLdAGVJCtZYIxdfUmhpgL_oSM/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];
$token = "1252863542:AAFQuP9ptpPLdAGVJCtZYIxdfUmhpgL_oSM";
$chat_id = "-327389446";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>