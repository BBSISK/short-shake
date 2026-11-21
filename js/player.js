(function(){
  var wrap=document.querySelector('.videos'); if(!wrap) return;
  var vids=wrap.querySelectorAll('video'), btn=document.querySelector('.both');
  function solo(active){
    wrap.classList.add('solo');
    vids.forEach(function(v){
      var fig=v.closest('figure');
      if(v===active){fig.classList.add('active');}
      else{fig.classList.remove('active'); v.pause();}
    });
    if(btn) btn.hidden=false;
  }
  function both(){
    wrap.classList.remove('solo');
    wrap.querySelectorAll('figure').forEach(function(f){f.classList.remove('active');});
    if(btn) btn.hidden=true;
  }
  vids.forEach(function(v){
    v.addEventListener('play',function(){solo(v);});
    v.addEventListener('ended',both);
  });
  if(btn) btn.querySelector('button').addEventListener('click',function(){vids.forEach(function(v){v.pause();});both();});
})();
