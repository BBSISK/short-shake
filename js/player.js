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
    var w=document.createElement('div'); w.className='vwrap';
    v.parentNode.insertBefore(w,v); w.appendChild(v);
    var b=document.createElement('button'); b.type='button'; b.className='bigplay'; b.setAttribute('aria-label','Play');
    b.innerHTML='<span></span>'; w.appendChild(b);
    function sync(){ b.hidden=!(v.paused&&(v.currentTime===0||v.ended)); }
    b.addEventListener('click',function(){v.play();});
    v.addEventListener('play',function(){solo(v);sync();});
    v.addEventListener('pause',sync);
    v.addEventListener('ended',function(){both();sync();});
    sync();
  });
  if(btn) btn.querySelector('button').addEventListener('click',function(){vids.forEach(function(v){v.pause();});both();});
})();
