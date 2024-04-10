<?php

require 'qx.php';

class bcx extends qx
{

    public function bccore($vo,$at,$a,$b,$c,$d,$e,$f,$g,$h,$i,$j,$k,$l,$m,$n,$o,$p,$q,$r,$s,$t,$u,$v,$w,$x,$y,$z)
    {
        $bcx = new bcx();
        $qx = new qx();
        $datefx=$qx->datefx('fechahora','America/Panama');

        if ($vo == 'kill') {
            return $qx->bcdel("loginstatus", "ids='" . $_SESSION['us'] . "'");
        }

        if ($vo == 'login') {

            $ip = $_SERVER["REMOTE_ADDR"];
            $b = md5($b);

            $qx->bcdel("loginstatus", "us='" . $a . "'");
            $bc = $qx->bcone("webuser", "*", "us='" . $a . "' and ps='" . $b . "' and status=1");

            if (!empty($bc['nm'])) {
                $_SESSION['us'] = md5($bc['nm'] . $bc['us']);
                $qx->bcdel("loginstatus", "us='" . $a . "' and cmp=" . $bc['cmp']);
                $qx->bcinsert("loginstatus", "'" . $a . "','" . $ip . "','" . $datefx . "','" . $_SESSION['us'] . "',1,'" . $bc['uuid'] . "',0,0,'" . $datefx . "'," . $bc['cmp']);
            }

            return $bc;


        }

        if ($vo=='menu'){

            return $qx->bcdata("settings", "*", "box='menu' and lv=".$a);

        }

        if ($vo == 'wacthdog') {

           $wc=$qx->bcone("loginstatus", "*", "ids='" . $a . "'");

           if($wc['ids']!=null){
               return true;
           }
            if($wc['ids']==null){
                return false;
            }

        }

        if ($vo=='bcquery') {

            if($at=='info'){

                if($a=='settings'){return $qx->bcone("settings", "*", "box='" . $b . "' and status=1");}

                if($a=='verificacion-correo'){

                    return $qx->bcone("webuser", "*", "em='" . $b . "' and lv=1");

                }

                if($a=='correo-confirmacion'){

                   return $qx->bcupdate("webuser", "aut=1", "em='" . $b . "' and lv=1");

                }

                if($a=='enviar-confirmacion'){

                   $msn=$qx->subjectcore('Activacion-de-cuenta',$b,$c,$d);
                   $qx->mailer($c,$b,'Confirmacion de Email',$msn);
                   return true;
                }

                if($a=='banners'){return $qx->bcone("banners", "*", "status=1 order by RAND()");}

            }

            if($at=='data') {

                if ($a == 'settings' && $b=='select') {return $qx->bcdata("settings", "*", "box='" . $e . "' and cmp=" . $c);}

                if ($a == 'historial') {return $qx->bcdata("marcaciones a", "a.*,(select nmu from ubicaciones where id=a.ub) as ubx", "a.idu=" . $b." order by a.register desc");}

                if ($a == 'marcaciones' && $b=='timeline') {

                    $fecha=$qx->datefx('fecha','America/Panama');
                    if($e!=0){
                        $date=date_create($e);
                        $fecha= date_format($date,"Y-m-d");

                    }


                    return $qx->bcdata("marcaciones a", "a.*,
                                        (select nmu from ubicaciones where id=a.ub) as ubx,
                                        (select nm from personal where id=a.idp) as np", "a.cmp=" . $c." and cast(a.register as date)='".$fecha."' order by a.register desc limit 0,4");

                }

                if ($a == 'reportes' && $b=='ubicaciones') {return $qx->bcdata("marcaciones a left join ubicaciones b on a.ub=b.id", "b.nmu, count(a.idp) as pc", "a.cmp=".$c." group by b.nmu");}

                if ($a == 'reportes' && $b=='marcaciones-activos-inactivos') {
                    return $qx->bcdata("(select MONTHNAME(a.register) mes,count(idu) as idu,a.cmp,(select count(id) from personal where cmp=".$c." ) psx
                                                from marcaciones a where cmp=".$c."  group by MONTHNAME(a.register),a.idu)b ", "
                                                b.mes,count(b.idu) as psa, (b.psx-count(b.idu)) as psx", "
                                                b.cmp=".$c."  group by b.mes;");
                }

                if ($a == 'reportes' && $b=='meses') {return $qx->bcdata("marcaciones a", " MONTHNAME(a.register) mes,YEAR(a.register) yr", "a.cmp=".$c." group by MONTHNAME(a.register)");}

                if ($a == 'reportes' && $b=='g-ubicaciones') {return $qx->bcdata("ubicaciones", "nmu", "cmp=".$c);}




            }

            if($at == 'tabla') {

                if ($a == 'empresas') {return $qx->bcdata("company a", "a.*, CAST(DATE_ADD(a.register, INTERVAL a.tlc DAY)AS DATE) as vence", "a.id > 0");}

                if ($a == 'ubicaciones') {return $qx->bcdata("ubicaciones a", "a.*,(select count(id) from ubuser where idu=a.id) as usx", "a.cmp=".$b);}

                if ($a == 'personal') {return $qx->bcdata("personal a", "a.*,(select count(id) from ubuser where idp=a.id) as uxu", "a.cmp=".$b);};

                if ($a == 'ubicaciones-personal') {return $qx->bcdata("ubicaciones a", "a.*,(select count(id) from ubuser where idu=a.id and idp=".$c.") as uxp", "a.cmp=".$b);}

                if ($a == 'marcaciones' || $a == 'marcaciones-home') {
                    return $qx->bcdata("marcaciones a", "a.*,
                    (select nm from personal where id=a.idp) as np,
                    (select id from personal where id=a.idp) as idp,
                    (select nmu from ubicaciones where id=a.ub) as ubx,
                    (select item from settings where box='distancia' and cmp=a.cmp) as dsx
                    ", "a.cmp=".$b." order by register desc");
                };

                if ($a == 'marcaciones-ps') {return $qx->bcdata("marcaciones a", "a.*,(select nmu from ubicaciones where id=a.ub) as ubx", "a.cmp=".$b." and a.idp=".$c." order by register desc");};

                if($a == 'reporte-general') {


                    $mes="";$yr="";$ubx="";
                    if($c!=0){
                    $fxc = explode(" ", $c);
                    $mes=" and MONTHNAME(b.register)='".$fxc[0]."'";$yr=" and YEAR(b.register)='".$fxc[1]."'";
                    }
                    if($d!=0){$ubx=" and b.ubx='".$d."'";}

                    return $qx->bcdata("(
                                               select a.*,
                                               (select nm from personal where id=a.idp) as np,
                                               (select ne from personal where id=a.idp) as ne,
                                               (select id from personal where id=a.idp) as idpx,
                                               (select nmu from ubicaciones where id=a.ub) as ubx,
                                               (select item from settings where box='distancia' and cmp=a.cmp) as dsx from marcaciones a)b
                                                ", "b.*", "
                                                b.cmp=".$b."  ".$mes."  ".$yr."  ".$ubx."  order by b.register desc");

                }


            }

            if($at=='delete') {

                if($a=='company'){
                    $bxa=$qx->bcone("company", "*", "id='" . $b . "'");
                    $qx->bcdel("webuser", "cmp='". $bxa['cmp']. "'");
                    $qx->bcdel("company", "cmp='". $bxa['cmp']. "'");
                    return true;
                }

                if($a=='ubicaciones'){
                    $bxa=$qx->bcone("ubicaciones", "*", "id='" . $b . "'");
                    $qx->bcdel("ubuser", "idu='". $bxa['id']. "'");
                    $qx->bcdel("ubicaciones", "id='". $bxa['id']. "'");
                    return true;
                }

                if($a=='personal') {

                    $bxa=$qx->bcone("personal", "*", "id='" . $b . "'");
                    $qx->bcdel("personal", "idu='". $bxa['idu']. "'");
                    $qx->bcdel("ubuser", "idp='". $bxa['id']. "'");
                    $qx->bcdel("webuser", "idu='". $bxa['idu']. "'");
                    return true;


                }

                if($a=='ubicaciones-ps'){
                    $qx->bcdel("ubuser", "idu=". $b. " and idp=".$c);
                    return true;
                }
            }

            if($at=='register') {

                if($a=='ubicaciones-ps'){
                    $qx->bcdel("ubuser", "idu=". $b. " and idp=".$c);
                    $qx->bcinsert("ubuser", $b.",".$c);
                    return true;
                }

                if($a=='todas-ubicaciones'){

                    $bx=$qx->bcdata("ubicaciones a", "a.*", "a.cmp=".$c);
                    while ($bc = $bx->fetch_assoc()) {
                        $qx->bcdel("ubuser", "idu=". $bc['id']. " and idp=".$b);
                        $qx->bcinsert("ubuser", $bc['id'].",".$b);
                    }
                    return true;

                }

            }

            if($at=='reporte-general') {

                $mes="";$yr="";$ubx="";
                if($c!=0){
                    $fxc = explode(" ", $c);
                    $mes=" and MONTHNAME(b.register)='".$fxc[0]."'";$yr=" and YEAR(b.register)='".$fxc[1]."'";
                }
                if($d!=0){$ubx=" and b.ubx='".$d."'";}

                return $qx->bcdata("(
                                               select a.*,
                                               (select nm from personal where id=a.idp) as np,
                                               (select ne from personal where id=a.idp) as ne,
                                               (select id from personal where id=a.idp) as idpx,
                                               (select nmu from ubicaciones where id=a.ub) as ubx,
                                               (select item from settings where box='distancia' and cmp=a.cmp) as dsx from marcaciones a)b
                                                ", "b.*", "
                                                b.cmp=".$b."  ".$mes."  ".$yr."  ".$ubx."  order by b.register desc");

            }



        }

        if ($vo=='insertcore'){

            if($at=='crear-usuario') {

                $track=time();
                $bca=$qx->bcone("persons", "count(id) as q", "nm='".$a."' and em='".$b."'");

                if($bca['q']==0) {

                    $qx->bcinsert("persons", "'" . $a . "','" . $b . "','" . $c . "','" . $track . "','" . $datefx . "',1,0,0");

                    $ps = md5($d);
                    $ids = md5($a . $b);
                    //creacion de usuario
                    $qx->bcinsert("webuser", "'" . $b . "','" . $ps . "','" . $a . "','" . $b . "','" . $c . "',1,1,0,0,'" . $ids . "','" . $ids . "','" . $track . "'");

                    $msn=$qx->subjectcore('Activacion-de-cuenta',$a,$b,$c);
                    $qx->mailer($b,$a,'Confirmacion de Email y Registro de Usuario',$msn);
                    $qx->bcinsert("logcore", "'Confirmacion de Email y Registro de Usuario','Mensajeria','" . $datefx . "','" . $b . "',0");

                    return true;
                }else{ return false;}

            }

            if($at=='preferencias'){

                if($b=='true') {

                    $bcp = $qx->bcone("persons", "*", "em='" . $a . "'");
                    $qx->bcdel("dataperson", "item='" . $c . "' and box='preferencias' and idp=" . $bcp['idp']);
                    $qx->bcinsert("dataperson", "'" . $c . "','preferencias',1," . $bcp['idp']);
                }

                if($b=='false') {

                    $bcp = $qx->bcone("persons", "*", "em='" . $a . "'");
                    $qx->bcdel("dataperson", "item='" . $c . "' and box='preferencias' and idp=" . $bcp['idp']);
                }

                return $b;

            }

            if($at=='nivel'){

                $bcp = $qx->bcone("persons", "*", "em='" . $a . "'");
                $qx->bcdel("dataperson", "box='nivel' and idp=" . $bcp['idp']);
                $qx->bcinsert("dataperson", "'" . $b . "','nivel',1," . $bcp['idp']);
                return true;

            }

        }

        if ($vo=='distance'){

            $cx = explode(",", $a);
            $ga= explode("LatLng(lat:", $cx[0]);
            $gb= explode("lng:", $cx[1]);
            $gbx = str_replace(")", " ", $gb[1]);
            $gps=ltrim($ga[1].','.$gbx);
            $gx = explode(",", $gps);

            return $qx->bcone("(SELECT a.*,(acos(sin(radians(".$gx[0].")) * sin(radians(a.ga)) +
                                        cos(radians(".$gx[0].")) * cos(radians(a.ga)) *cos(radians(".$gx[1].") - radians(a.gb))) * 6371) as ds
                                        from ubicaciones a)b", "b.*", "b.cmp=".$b." order by b.ds asc limit 0,1");
        }



    }





}
