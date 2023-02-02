<?php
    $name = $_POST["name"];
    $contact = $_POST["contact"];
    $message = $_POST["message"];
    $state = '';
    $toEmail = 'coder.am.sagirov@gmail.com';
    $emailSubject = 'SpaceX Заявка с формы';
    $emailHeaders = "From: coder.am.sagirov@gmail.com \r\n";
    $emailBody = 
    "На сайте оставлена новая заявка.\n.
    Имя: ${name} \n.
    Контактные данные: ${contact} \n.
    Сообщение: ${message}";
    
    $nameRegex = '/^([A-Za-zА-Яа-яЁё]{3,})$/';
    $contactRegex = '/([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$)|(\+[0-9]{9,15}$)/';
    $messageRegex = '/.*\S.*/';
    
    if (!preg_match($nameRegex, $name) or !preg_match($contactRegex, $contact) or !preg_match($messageRegex, $message) ) {
        $state = "<p style='color: red;'>Данные не прошли проверку. Перенаправление через 5 секунд.</p>";
    }  else {
        if (mail($toEmail, $emailSubject, $emailBody, $emailHeaders)) {
            $state = "<p style='color: green;'>Сообщение успешно отправлено. Перенаправление через 5 секунд.</p>";
          } else {
            $state = "<p style='color: red;'>Отправка не удалась. Перенаправление через 5 секунд.</p>";
          } 
      }
     echo $state;
 ?>
  <script>
  window.setTimeout(function(){
    location.href="../";
  },5000);  
  </script>

