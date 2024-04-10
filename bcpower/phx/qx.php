<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';


class qx
{

    //Estructura Prinicipal

    public function cacheclear(){
        setlocale(LC_MONETARY, 'en_US');
        header("Expires: Tue, 03 Jul 2001 06:00:00 GMT");
        header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
        header("Cache-Control: no-store, no-cache, must-revalidate");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
        date_default_timezone_set('America/Panama');
    }

    public $link;
    public $linkold;
    public function __construct(){

        $this->link = new mysqli('ls-bf8575dd1213595d572a70299057255bae1e7b4a.cszyatp438wm.us-east-1.rds.amazonaws.com',
            'dbmasteruser',
            'Sw>cdc}:~SXp*Yul?M0~ck^uS4NGnBBu',
            'bucopromo');
        $this->link->set_charset("utf8");


    }

    //Consultas
    public function bcinsert($tabla, $datos){
        $rs=$this->link->query("INSERT INTO $tabla VALUES (null,$datos)") or die($this->link->error);
        if($rs)
            return true;
        return false;
    }

    public function bcinsertold($tabla, $datos){
        $rs=$this->linkold->query("INSERT INTO $tabla VALUES (null,$datos)") or die($this->link->error);
        if($rs)
            return true;
        return false;
    }

    public function bcdel($tabla, $condicion){
        $rs=$this->link->query("DELETE FROM $tabla WHERE $condicion") or die($this->link->error);
        if($rs)
            return true;
        return false;
    }

    public function bcupdate($tabla, $campos, $condicion){
        $rs=$this->link->query("UPDATE $tabla SET $campos WHERE $condicion") or die($this->link->error);
        if($rs)
            return true;
        return false;
    }

    public function bcone($tabla,$subquery, $condicion){
        $rs= $this->link->query("SELECT $subquery FROM $tabla WHERE $condicion") or die($this->link->error);
        $rs->data_seek(0);
        return $rs->fetch_assoc();


    }

    public function bcdata($tabla,$subquery ,$condicion){
        $rs=$this->link->query("SELECT $subquery FROM $tabla WHERE $condicion");
        $rs->data_seek(0);
        return $rs;
    }


    public function bcquerytablet($tabla,$subquery ,$condicion){
        $rs=$this->link->query("SELECT $subquery FROM $tabla WHERE $condicion");
        $bc=array();
        while ($c=$rs->fetch_assoc()){
            $bc[] = $c;
        }
        return $bc;
    }

    //Funcion Fecha
    public function datefx($datex,$zone){

        $date = new DateTime();
        $date->setTimezone(new DateTimeZone($zone));

        if($datex=='fechahora') {return $date->format('Y-m-d H:i:s');}
        if($datex=='hora') {return $date->format('H:i:s');}
        if($datex=='fecha') {return $date->format('Y-m-d');}


    }

    //Funcion Tablas
    public function data_table($arrData,$draw,$start,$lenght,$searchValue,$orderCol,$orderDir,$tt){
        $fxc = new fxc();

        $newArray = array(); $arrFiltered = array();  $arrProcessed = array(); $arrSended = array();
        $sense = null; $rows = null; $limit = null;
        $response= array();

        if(!empty($arrData)){

            if(!empty($searchValue) || $searchValue != ""){
                $arrFiltered = array_filter($arrData,function($e)use($searchValue){

                    if (

                        stripos($e['nm'], $searchValue) !== false ||
                        stripos($e['em'], $searchValue) !== false ||
                        stripos($e['ph'], $searchValue) !== false ||
                        stripos($e['age'], $searchValue) !== false ||
                        stripos($e['ds'], $searchValue) !== false ||
                        stripos($e['ced'], $searchValue) !== false ||
                        stripos($e['idc'], $searchValue) !== false ||
                        stripos($e['tipo'], $searchValue) !== false ||
                        stripos($e['dia'], $searchValue) !== false ||
                        stripos($e['turno'], $searchValue) !== false ||
                        stripos($e['ubic'], $searchValue) !== false ||
                        stripos($e['dep'], $searchValue) !== false ||
                        stripos($e['emp'], $searchValue) !== false ||
                        stripos($e['placa'], $searchValue) !== false ||
                        stripos($e['gn'], $searchValue) !== false

                    ) {
                        return true;
                    }
                    return false;

                });
                if(!empty($arrFiltered)){
                    foreach($arrFiltered as $keyD => $valueD){
                        array_push($arrProcessed,$valueD);
                    }
                }
            } else{$arrProcessed = $arrData;}

            if(!empty($orderDir)){if($orderDir == 'desc'){$sense = SORT_DESC;}else{$sense = SORT_ASC;}}
            $newArray = $fxc->array_sort($arrProcessed,$orderCol,$sense);
            $rows = count($arrProcessed);
            $limit = ($start + ($lenght -1));

            if(!empty($newArray)){
                foreach($newArray as $keyB => $valueB){
                    if($keyB >= $start && $keyB <= $limit){
                        array_push($arrSended,$valueB);
                    }
                }
            }
            $response = array("draw" => $draw, "recordsTotal" => $rows, "recordsFiltered" => $rows, "data" => $arrSended);
        }else{

            $response = array("draw" => $draw, "recordsTotal" => 0, "recordsFiltered" => 0, "data" => array());
        }
        return $response;
    }

    public function array_sort($array, $on, $order){
        $new_array = array();
        $sortable_array = array();
        if (count($array) > 0) {
            foreach ($array as $k => $v) {
                if (is_array($v)) {
                    foreach ($v as $k2 => $v2) {
                        if ($k2 == $on) {
                            $sortable_array[$k] = $v2;
                        }
                    }
                } else {
                    $sortable_array[$k] = $v;
                }
            }
            switch ($order) {
                case SORT_ASC:
                    asort($sortable_array);
                    break;
                case SORT_DESC:
                    arsort($sortable_array);
                    break;
            }
            foreach ($sortable_array as $k => $v) {
                $new_array[$k] = $array[$k];
            }
        }
        return $new_array;
    }

    //Funcion Google

    public function distance($lat1, $lon1, $lat2, $lon2, $unit) {

        $theta = $lon1 - $lon2;
        $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
        $dist = acos($dist);
        $dist = rad2deg($dist);
        $miles = $dist * 60 * 1.1515;
        $unit = strtoupper($unit);

        if ($unit == "K") {
            return ($miles * 1.609344);
        } else if ($unit == "N") {
            return ($miles * 0.8684);
        } else {
            return $miles;
        }
    }

    //Funcion Subir Imagen
    public function bcimgin($a,$b,$c,$d,$e,$f,$g){

        $fbio=$c.$a.'-'.$d.'.jpg';
        $b = explode( ',', $b);
        $imageData = base64_decode($b[1]);
        $size = 500;  // new image width
        $src = imagecreatefromstring($imageData);
        $width = imagesx($src);
        $height = imagesy($src);
        $aspect_ratio = $height/$width;

        if ($width <= $size) {
            $new_w = $width;
            $new_h = $height;
        } else {
            $new_w = $size;
            $new_h = abs($new_w * $aspect_ratio);
        }

        $img = imagecreatetruecolor($new_w,$new_h);
        imagecopyresized($img,$src,0,0,0,0,$new_w,$new_h,$width,$height);
        $rotate = imagerotate($img, 0, 0);
        $path="/opt/bitnami/apache/htdocs/bcpower/box/".$e."/";
        if($f==2 || $f==3){unlink($path.$fbio);}
        $imageSave = imagejpeg($rotate,$path.$fbio,90);
        imagedestroy($src);



    }

    public function mailer($email,$nombre,$subject,$msn){

        $mail = new PHPMailer(true);
        $mail->isSMTP();
        $mail->setFrom('support@braincorelab.com','SportMan App');
        $mail->addAddress($email, $nombre);

        $mail->Subject = $subject;
        $mail->Body = $msn;

        // Configuración de PHPMailer

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


    }

    public function subjectcore($a,$b,$c,$d){

        if($a=='Activacion-de-cuenta') {

            $msn = '
                    <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <title>SportMan - ERP</title>
                        </head>
                        <body>
                        <div style="width: 1024px;margin-top:5%; margin-left: 10%;">
                            <img src="https://app.sportman.bio/bcpower/box/logo-light.png" style="width: 300px;left: 25%">
                            <h2 style="left: 25%;font-size:20px;font-family:Arial,Helvetica,sans-serif,sans-serif;color:#1d4559">¡Bienvenido ' . $b . '!</h2>
                            <p  style="left: 25%;font-size:16px;font-family:Arial,Helvetica,sans-serif,sans-serif;color:#1d4559">Hola ' . $b . ', te damos la bienvenida como usuario de SportMan</p>
                            <p  style="left: 25%;font-size:16px;font-family:Arial,Helvetica,sans-serif,sans-serif;color:#1d4559">Hemos creado un usuario con los siguientes datos:</p>
                            <ul style="line-height: 40px;">
                                <li style="font-size:16px;font-family:Arial,Helvetica,sans-serif,sans-serif;color:#1d4559">Nombre: ' . $b . '</li>
                                <li style="font-size:16px;font-family:Arial,Helvetica,sans-serif,sans-serif;color:#1d4559">Email: ' . $c . ' </li>                     
                            </ul>
                            <p style="font-size:16px;font-family:Arial,Helvetica,sans-serif,sans-serif;color:#1d4559">Puede confirmar su correo ingrese en el siguiente link (<a href="https://app.sportman.bio/confirmacion.html#email=' . $c . '">Confirmar mi correo</a>)</p>
                            <p style="font-size:16px;font-family:Arial,Helvetica,sans-serif,sans-serif;color:#1d4559">Si tienes alguna duda  consulte con nuestro equipo tecnico a <a href="mailto:support@braincorelab.com" style="text-decoration: none;">support@braincorelab.com</a></p>
                            <p style="font-size:16px;font-family:Arial,Helvetica,sans-serif,sans-serif;color:#1d4559">Cordialmente</p>
                            <p style="font-size:16px;font-family:Arial,Helvetica,sans-serif,sans-serif;color:#1d4559">SportMan</p>
                        </div>
                        </body>
                     </html>
                     ';

        }

        return $msn;

    }



}
