/*
=========================================
Brain Core - Creative Dev Company
Ing Juan Pablo Perez
www.braincore.live
=========================================
*/

$(function() {

  const bcx=$('#bc').data("id")
  const bcl=$('#bc-lic').data("id")

  console.log('Ready BC-R Cod #'+bcl)

  localStorage.setItem('bcx',bcx)
  localStorage.setItem('bc-lic',bcl)

  /*DEV-CODE Start*/
  const ac = new bccore();

  ac.bcworkman('Buscopromo - ERP de Control','title-home')
  ac.bcworkman('BraincoreLab','copyright')


  if(ac.page(bcx,bcl,'login')=='login'){
    ac.killlogin()
    ac.bcconstructor(ac.page(bcx,bcl,'login'))

  }

  if(ac.page(bcx,bcl,'panel')=='panel'){
    ac.wacthdog(localStorage.getItem('ids'))
    ac.bcconstructor(ac.page(bcx,bcl,'panel'))
  }

  if(ac.page(bcx,bcl,'confirmacion')=='confirmacion'){
    ac.bcconstructor(ac.page(bcx,bcl,'confirmacion'))
  }


});
