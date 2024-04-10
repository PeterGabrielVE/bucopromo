<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->setFrom('support@braincorelab.com','SportMan App');
$mail->addAddress('patmosjp@gmail.com', 'Juan P');

$mail->Subject = 'Test';
$mail->Body = 'hola';

// Configuración de PHPMailer

$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
$mail->Host = 'email-smtp.us-east-2.amazonaws.com';  // Reemplaza esto con tu servidor SMTP
$mail->SMTPAuth = true;
$mail->Username = 'AKIAQV54WPATGDRAB66I'; // Reemplaza esto con tu dirección de correo electrónico
$mail->Password = 'BMt8/l6Hjz/CFD4lZN7JOCXqC5mOxrexZun9kogW4P3A';  // Reemplaza esto con tu contraseña de correo electrónico
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port = 465;

// Envía el correo
$mail->isHTML(true);
$mail->CharSet = 'UTF-8';
$mail->send();
