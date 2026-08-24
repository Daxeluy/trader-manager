function toggleVideo(){
  var v=document.getElementById('sectionVideo');
  var pi=document.getElementById('pauseIcon');
  var pl=document.getElementById('playIcon');
  if(v.paused){v.play();pi.style.display='block';pl.style.display='none';}
  else{v.pause();pi.style.display='none';pl.style.display='block';}
}

var cur=document.getElementById('cursor'),ring=document.getElementById('cursorRing');
var mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;cur.style.left=(mx-5)+'px';cur.style.top=(my-5)+'px'});
function animRing(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=(rx-18)+'px';ring.style.top=(ry-18)+'px';requestAnimationFrame(animRing)}
animRing();
document.querySelectorAll('a,button,.servicio-item,.test-card').forEach(function(el){
  el.addEventListener('mouseenter',function(){cur.style.transform='scale(2.5)';ring.style.transform='scale(1.5)'});
  el.addEventListener('mouseleave',function(){cur.style.transform='scale(1)';ring.style.transform='scale(1)'});
});

// Barra flotante
window.addEventListener('scroll',function(){
  var fb=document.getElementById('floatBar');
  if(window.scrollY>400){fb.classList.add('visible');}
  else{fb.classList.remove('visible');}
});

// Nav scroll
window.addEventListener('scroll',function(){
  document.getElementById('mainNav').classList.toggle('scrolled',window.scrollY>60);
});

// Mobile menu
function toggleMob(){document.getElementById('mobMenu').classList.toggle('open')}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    var t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}
  });
});

// Reveal on scroll
var revEls=document.querySelectorAll('.reveal,.reveal-left');
var obs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible')}});
},{threshold:0.1,rootMargin:'0px 0px -60px 0px'});
revEls.forEach(function(el){obs.observe(el)});

// Chat
var bResp={
  servicios:['Ofrezco: brackets y ortodoncia, blanqueamiento dental, implantes dentales, limpiezas preventivas y urgencias. ¿Querés info sobre alguno en particular? 🦷'],
  horarios:['🗓 Lunes a Viernes: 9:00 – 18:00\n🗓 Sábados: 9:00 – 13:00\n❌ Domingos cerrado\n\n¿Querés pedir un turno? 😊'],
  precio:['Los precios varían según el tratamiento. Te recomiendo pedir una consulta inicial para que pueda evaluar tu caso y darte un presupuesto personalizado. 💰'],
  blanqueamiento:['El blanqueamiento profesional muestra resultados desde la primera sesión y es completamente seguro para el esmalte. ✨ Pedí tu turno para una evaluación.'],
  cita:['¡Perfecto! Podés pedir turno:\n📱 WhatsApp: 099 296 491\n📞 Llamada: 099 296 491\n📋 Formulario al final de esta página\n\n¿Qué día te vendría mejor? 📅'],
  ubicacion:['Estamos en:\n📍 Dr. Mario Cassinoni 1696\n11800 Montevideo, Uruguay\n\nLunes a Viernes 9 a 18hs. ¿Necesitás cómo llegar? 🗺️'],
  urgencia:['¡Atiendo urgencias! Llamame al 099 296 491 o escribime por WhatsApp para coordinar lo antes posible. 🚨'],
  default:['Gracias por tu consulta. Para más info podés llamarme al 099 296 491 o escribirme por WhatsApp. ¿Hay algo más que pueda ayudarte? 😊']
};
function getInt(m){
  m=m.toLowerCase();
  if(/servicio|tratamiento|ofrecés|ofrecen/.test(m))return'servicios';
  if(/horario|hora|cuando|abierto/.test(m))return'horarios';
  if(/precio|costo|cuánto|cuanto|cobra/.test(m))return'precio';
  if(/blanquea/.test(m))return'blanqueamiento';
  if(/turno|cita|agendar|pedir/.test(m))return'cita';
  if(/ubicad|direcci|donde|dónde|mapa/.test(m))return'ubicacion';
  if(/urgencia|emergencia|dolor/.test(m))return'urgencia';
  return'default';
}
function addCMsg(text,who){
  var c=document.getElementById('chatMsgs');
  var t=new Date().toLocaleTimeString('es',{hour:'2-digit',minute:'2-digit'});
  var d=document.createElement('div');d.className='cmsg '+who;
  d.innerHTML='<div class="cbubble">'+text.replace(/\n/g,'<br>')+'</div><div class="ctime">'+t+'</div>';
  c.appendChild(d);c.scrollTop=c.scrollHeight;
}
function showType(){
  var c=document.getElementById('chatMsgs');
  var t=document.createElement('div');t.id='typing';t.className='typing-ind';
  t.innerHTML='<div class="tdot"></div><div class="tdot"></div><div class="tdot"></div>';
  c.appendChild(t);c.scrollTop=c.scrollHeight;
}
function rmType(){var t=document.getElementById('typing');if(t)t.remove();}
function sendQ(text){
  addCMsg(text,'usr');
  var intent=getInt(text);
  showType();
  setTimeout(function(){
    rmType();
    addCMsg(bResp[intent][0],'bot');
  },900+Math.random()*400);
}
function sendMsg(){
  var inp=document.getElementById('chatInp');
  var t=inp.value.trim();if(!t)return;
  sendQ(t);inp.value='';
}

// Form → WhatsApp
function submitForm(){
  var fn=document.getElementById('fn').value.trim();
  var ln=document.getElementById('ln').value.trim();
  var ph=document.getElementById('ph').value.trim();
  var sv=document.getElementById('sv').value;
  var ms=document.getElementById('ms').value.trim();
  if(!fn||!ln||!ph||!sv){alert('Por favor completá los campos obligatorios.');return;}
  var msg='Hola+Dra.+Carla%2C+me+contacto+desde+la+p%C3%A1gina+web+%F0%9F%A6%B7%0A%0A';
  msg+='*Nombre%3A*+'+encodeURIComponent(fn+' '+ln)+'%0A';
  msg+='*Tel%C3%A9fono%3A*+'+encodeURIComponent(ph)+'%0A';
  msg+='*Servicio%3A*+'+encodeURIComponent(sv)+'%0A';
  if(ms)msg+='*Mensaje%3A*+'+encodeURIComponent(ms)+'%0A';
  msg+='%0AQuer%C3%ADa+pedir+un+turno.+%C2%A1Gracias!';
  document.getElementById('modal').classList.add('open');
  setTimeout(function(){window.open('https://wa.me/598099296491?text='+msg,'_blank');},1200);
}
function closeModal(){document.getElementById('modal').classList.remove('open');}
