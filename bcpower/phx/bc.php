<?php

require 'bcx.php';


session_start();

$vo=$_POST['vo'];
$at=$_POST['at'];

$vox=$_GET['vo'];
$atx=$_GET['at'];

$a=$_POST['a'];
$ax=$_GET['a'];
$b=$_POST['b'];
$bb=$_GET['b'];
$c=$_POST['c'];
$cc=$_GET['c'];
$d=$_POST['d'];
$dd=$_GET['d'];
$e=$_POST['e'];
$ee=$_GET['e'];
$f=$_POST['f'];
$g=$_POST['g'];
$h=$_POST['h'];
$i=$_POST['i'];
$j=$_POST['j'];
$k=$_POST['k'];
$l=$_POST['l'];
$m=$_POST['m'];
$n=$_POST['n'];
$o=$_POST['o'];
$p=$_POST['p'];
$q=$_POST['q'];
$r=$_POST['r'];
$s=$_POST['s'];
$t=$_POST['t'];
$u=$_POST['u'];
$v=$_POST['v'];
$w=$_POST['w'];
$x=$_POST['x'];
$y=$_POST['y'];
$z=$_POST['z'];

$jsondata = array();

$bcx = new bcx();

$bcx->cacheclear();
$datefx=$bcx->datefx('fechahora','America/Panama');

$tdata='json';

if ($vo == 'kill') {

    $kill=$bcx->bccore($vo,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

    if($kill==true) {

        session_destroy();
        $jsondata['kill'] = true;
        $jsondata['date'] = $datefx;

    }

    $json = $jsondata;
}

if ($vo == 'login') {

   $login=$bcx->bccore($vo,$at,$a,$b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

   if(!empty($login['ids'])) {

        $jsondata['sc'] = true;
        $jsondata['ids'] = $login['ids'];
        $jsondata['nm'] = $login['nm'];
        $jsondata['em'] = $login['em'];
        $jsondata['ph'] = $login['ph'];
        $jsondata['id'] = $login['id'];
        $jsondata['lv'] = $login['lv'];
        $jsondata['cmp'] = $login['cmp'];
        $jsondata['idu'] = $login['idu'];

    } else {$jsondata['sc'] = false;}

    $json = $jsondata;
}

if ($vo == 'wacthdog') {

    $wacthdog=$bcx->bccore($vo,0,$a,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

    if($wacthdog==true) {

        $jsondata['wacthdog'] = true;
        $jsondata['date'] = $datefx;

    }

    if($wacthdog==false) {

        $jsondata['wacthdog'] = false;


    }

    $json = $jsondata;
}

if ($vo=='bcquery') {

    $bx= $bcx->bccore($vo, $at, $a, $b, $c, $d, $e, $f, $g, $h, $i, $j, $k, $l, $m, $n, $o, $p, $q, $r, $s, $t, $u, $v, $w, $x, $y, $z);

    if($at=='info'){

        if($a=='settings') {
            $jsondata['sc'] = true;
            $jsondata['item'] = $bx['item'];
            $jsondata['box'] = $bx['box'];
        }

        if($a=='verificacion-correo'){

            if($bx['aut']==0){$vc=true;}
            if($bx['aut']==1){$vc=false;}

            $jsondata['sc'] = true;
            $jsondata['vcorreo'] = $bx['aut'];
            $jsondata['vc'] = $vc;
        }

        if($a=='enviar-confirmacion'){
            $jsondata['sc'] = true;
            $jsondata['correo'] = $c;

        }

        if($a=='correo-confirmacion'){
            $jsondata['sc'] = $bx;
            $jsondata['correo'] = $b;
        }

        if($a=='banners') {
            $jsondata['sc'] = true;
            $jsondata['path'] = 'https://bucopromo.com/manager/bcpower/box/promo/'.$bx['path'];
            $jsondata['ds'] = $bx['ds'];
        }

        $json=$jsondata;

    }

    if($at=='data') {
        $xc = 0;
        while ($bc = $bx->fetch_assoc()) {
            $xc = $xc + 1;

            if ($a == 'settings' && $b=='select') {

                $jsonitem = array(

                    "id" => $bc['id'],
                    "item" => $bc['item'],
                    "box" => $bc['box'],
                    "status" => $bc['status']
                );


            }

            if ($a == 'historial') {

                $jsonitem = array(

                    "id" => $bc['id'],
                    "dt" => $bc['register'],
                    "ub" => $bc['ubx'],
                    "ds" => $bc['ds'],
                    "tipo" => $bc['tipo']
                );

            }

            if ($a == 'marcaciones' && $b=='timeline') {

                $dia=date("d", strtotime($bc['register']));
                $hora=date("H:i:s", strtotime($bc['register']));


                $jsonitem = array(

                    "id" => $bc['id'],
                    "idp" => $bc['idp'],
                    "fch" => $bc['register'],
                    "np" => $bc['np'],
                    "ub" => $bc['ubx'],
                    "ds" => $bc['ds'],
                    "dia" => $dia,
                    "hora" => $hora,
                    "tipo" => $bc['tipo']
                );

            }

            if ($a == 'reportes' && $b=='ubicaciones') {

                $jsonitem = array(

                    "nmu" => $bc['nmu'],
                    "pc" => $bc['pc']
                );


            }

            if ($a == 'reportes' && $b=='marcaciones-activos-inactivos') {

                $jsonitem = array(

                    "mes" => $bc['mes'],
                    "psa" => $bc['psa'],
                    "psx" => $bc['psx']
                );

            }

            if ($a == 'reportes' && $b=='meses') {
                $jsonitem = array("item" => $bc['mes'].' '.$bc['yr']);
            }

            if ($a == 'reportes' && $b=='g-ubicaciones') {
                $jsonitem = array("item" => ucwords(strtolower($bc['nmu'])));
            }


            array_push($jsondata, $jsonitem);
            $json = array("lx" => $jsondata);

        }
    }

    if($at=='delete') {

        if ($a == 'company') {
            $jsondata['sc'] = true;
            $jsondata['tipo'] = $a;
        }

        if ($a == 'ubicaciones-ps') {
            $jsondata['sc'] = true;
            $jsondata['tipo'] = $a;
        }

        $json=$jsondata;
    }

    if($at=='register') {

        if ($a == 'ubicaciones-ps') {
            $jsondata['sc'] = true;
            $jsondata['tipo'] = $a;
        }

        if ($a == 'todas-ubicaciones') {
            $jsondata['sc'] = true;
            $jsondata['tipo'] = $a;
        }

        $json=$jsondata;
    }

}

if ($vox=='bcquery') {

    $bx= $bcx->bccore($vox, $atx, $ax, $bb, $cc, $dd, $ee, $f, $g, $h, $i, $j, $k, $l, $m, $n, $o, $p, $q, $r, $s, $t, $u, $v, $w, $x, $y, $z);

    if($atx=='tabla') {

        $xc = 0;
        while ($bc = $bx->fetch_assoc()) {
            $xc = $xc + 1;

            if ($ax == 'empresas') {

                $jsonitem = array(

                    "id" => $bc['id'],
                    "nme" => $bc['nme'],
                    "cnt" => $bc['contacto'],
                    "ruc" => $bc['ruc'],
                    "ph" => $bc['ph'],
                    "em" => $bc['em'],
                    "cxu" => $bc['cxu'],
                    "tlc" => $bc['tlc'],
                    "cu" => $bc['cu'],
                    "vence" => $bc['vence'],
                    "status" => $bc['status']
                );
            }

            if ($ax == 'ubicaciones') {

                $jsonitem = array(

                    "id" => $bc['id'],
                    "nmu" => $bc['nmu'],
                    "adr" => $bc['addr'],
                    "ph" => $bc['ph'],
                    "ga" => $bc['ga'],
                    "gb" => $bc['gb'],
                    "status" => $bc['status'],
                    "usx" => $bc['usx']
                );
            }

            if ($ax == 'personal') {

                $jsonitem = array(

                    "id" => $bc['id'],
                    "ne" => $bc['ne'],
                    "nm" => $bc['nm'],
                    "em" => $bc['em'],
                    "ph" => $bc['ph'],
                    "cargo" => $bc['cargo'],
                    "status" => $bc['status'],
                    "uxu" => $bc['uxu']
                );


            }

            if ($ax == 'ubicaciones-personal') {

                $jsonitem = array(

                    "id" => $bc['id'].'-'.$bc['uxp'],
                    "uxp" => $bc['uxp'],
                    "nmu" => $bc['nmu'],
                    "adr" => $bc['addr'],
                    "status" => $bc['status']
                );

            }

            if ($ax == 'marcaciones' || $ax == 'marcaciones-home') {

                $jsonitem = array(

                    "id" => $bc['id'],
                    "idp" => $bc['idp'],
                    "fch" => $bc['register'],
                    "np" => $bc['np'],
                    "ub" => $bc['ubx'],
                    "ds" => $bc['ds'].'-'.$bc['dsx'],
                    "tipo" => $bc['tipo']
                );

            }

            if ($ax == 'marcaciones-ps') {

                $jsonitem = array(

                    "id" => $bc['id'],
                    "idp" => $bc['idp'],
                    "fch" => $bc['register'],
                    "ub" => $bc['ubx'],
                    "ds" => $bc['ds'],
                    "tipo" => $bc['tipo']
                );

            }

            if ($ax == 'reporte-general') {

                $jsonitem = array(

                    "id" => $bc['id'],
                    "idp" => $bc['idp'],
                    "fch" => $bc['register'],
                    "np" => $bc['np'],
                    "ne" => $bc['ne'],
                    "ub" => $bc['ubx'],
                    "ds" => $bc['ds'].'-'.$bc['dsx'],
                    "tipo" => $bc['tipo']
                );



            }




            array_push($jsondata, $jsonitem);
            $json = array("lx" => $jsondata);

        }
    }

    if ($atx == 'reporte-general' && $ee=='excel') {

        function filterData(&$str){
            $str = preg_replace("/\t/", "\\t", $str);
            $str = preg_replace("/\r?\n/", "\\n", $str);
            if(strstr($str, '"')) $str = '"' . str_replace('"', '""', $str) . '"';
        }

        $tdata = 'excel';

        // Excel file name for download
        $fileName = "Reporte-General-Marcaciones-".time().".xls";

        // Column names
        $fields = array('Fecha-Hora', 'N Colaborador', 'Nombre', 'Ubicacion', 'Distancia (mts)');

        // Display column names as first row
        $excelData = implode("\t", array_values($fields)) . "\n";


        if ($bx->num_rows > 0) {

            // Output each row of the data
            while ($bc = $bx->fetch_assoc()) {
                $lineData = array($bc['register'], $bc['ne'], $bc['np'], $bc['ubx'], $bc['ds']);
                array_walk($lineData, 'filterData');
                $excelData .= implode("\t", array_values($lineData)) . "\n";

            }
        }


    }

    if ($atx == 'reporte-general' && $ee=='csv') {

        $tdata = 'csv';

        // Excel file name for download
        $fileName = "Reporte-General-Marcaciones-".time().".csv";

        $delimiter = ",";
        //create a file pointer
        $f = fopen('php://memory', 'w');
        // Column names
        $fields = array('Fecha-Hora', 'N Colaborador', 'Nombre', 'Ubicacion', 'Distancia (mts)');
        fputcsv($f, $fields, $delimiter);

        if ($bx->num_rows > 0) {

            // Output each row of the data
            while ($bc = $bx->fetch_assoc()) {
                $lineData = array($bc['register'], $bc['ne'], $bc['np'], $bc['ubx'], $bc['ds']);
                fputcsv($f, $lineData, $delimiter);

            }
        }

        //move back to beginning of file
        fseek($f, 0);


    }

    if ($atx=='info'){}

}

if ($vo=='menu') {
    $bx= $bcx->bccore($vo, $at, $a, $b, $c, $d, $e, $f, $g, $h, $i, $j, $k, $l, $m, $n, $o, $p, $q, $r, $s, $t, $u, $v, $w, $x, $y, $z);
    $xc = 0;
    while ($bc = $bx->fetch_assoc()) {
        $xc = $xc + 1;

        $jsonitem = array(
            "id" => $bc['id'],
            "xc" => $xc,
            "item" => $bc['item'],
            "box" => $bc['box']
        );


        array_push($jsondata, $jsonitem);
        $json = array("lx" => $jsondata);

    }

}

if ($vo=='insertcore'){

    $bx= $bcx->bccore($vo, $at, $a, $b, $c, $d, $e, $f, $g, $h, $i, $j, $k, $l, $m, $n, $o, $p, $q, $r, $s, $t, $u, $v, $w, $x, $y, $z);
    $jsondata['sc'] = $bx;
    $jsondata['insertlog'] =$at.'-'.$bx;
    $json=$jsondata;
}

if ($vo == 'horaserver') {

    $ds= $bcx->bccore('distance', 'distance', $a, $b, $c, $d, $e, $f, $g, $h, $i, $j, $k, $l, $m, $n, $o, $p, $q, $r, $s, $t, $u, $v, $w, $x, $y, $z);

    $jsondata['sc'] = true;
    $jsondata['date'] = $datefx;
    $jsondata['ds'] =round($ds['ds'], 2);
    $jsondata['nmu'] =$ds['nmu'];

    $json = $jsondata;
}


if($tdata=='json'){
header('Content-type: application/json; charset=utf-8');
echo json_encode($json);
exit();
}

if($tdata=='excel'){

// Headers for download
header("Content-Type: application/vnd.ms-excel");
header("Content-Disposition: attachment; filename=\"$fileName\"");

// Render excel data
echo $excelData;
exit;

}

if($tdata=='csv'){

    //set headers to download file rather than displayed
    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="' . $fileName . '";');

    //output all remaining data on a file pointer
    fpassthru($f);

}
