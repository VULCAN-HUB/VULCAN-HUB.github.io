(function themeInit(){
  var KEY="vh-theme";
  var saved=localStorage.getItem(KEY);
  if(saved){document.documentElement.setAttribute("data-theme",saved);}
  window.toggleTheme=function(){
    var cur=document.documentElement.getAttribute("data-theme")
      || (matchMedia("(prefers-color-scheme:light)").matches?"light":"dark");
    var next=cur==="dark"?"light":"dark";
    document.documentElement.setAttribute("data-theme",next);
    localStorage.setItem(KEY,next);
  };
})();

function setHref(id, url){var e=document.getElementById(id); if(e) e.href=url;}

function statusClass(s){return s==="정식"?"good":s==="베타"?"warn":"hold";}

function renderCatalog(){
  var grid=document.getElementById("program-grid");
  if(!grid) return;
  grid.innerHTML = window.PROGRAMS.map(function(p){
    return ''
    +'<article class="card" data-id="'+p.id+'">'
    +'  <div class="card-top">'
    +'    <img class="card-icon" src="'+p.icon+'" alt="" onerror="this.style.visibility=\'hidden\'">'
    +'    <span class="badge '+statusClass(p.status)+'">'+p.status+'</span>'
    +'  </div>'
    +'  <h3 class="card-name">'+p.name+'</h3>'
    +'  <p class="card-tag">'+p.tagline+'</p>'
    +'  <p class="card-desc">'+p.description+'</p>'
    +'  <div class="card-meta"><span class="mono">'+p.version+'</span>'
    +'    <span class="mono">'+p.platforms.map(function(x){return x.os;}).join(" · ")+'</span></div>'
    +'  <div class="card-actions">'
    +'    <a class="btn btn-accent btn-sm" href="'+window.LINKS.releaseUrl(p.repo)+'" target="_blank" rel="noopener">다운로드 ↓</a>'
    +'    <button class="btn btn-ghost btn-sm" onclick="openDetail(\''+p.id+'\')">자세히</button>'
    +'  </div>'
    +'</article>';
  }).join("");
}

window.openDetail=function(id){
  var p=window.PROGRAMS.find(function(x){return x.id===id;}); if(!p) return;
  document.getElementById("md-body").innerHTML=''
    +'<h3 id="md-name" class="md-name">'+p.name+' <span class="badge '+statusClass(p.status)+'">'+p.status+'</span></h3>'
    +'<p class="md-tag">'+p.tagline+'</p>'
    +((p.shots&&p.shots.length)?'<img class="md-shot" src="'+p.shots[0]+'" alt="'+p.name+' 실행 화면" onerror="this.remove()">':'')
    +'<p class="md-desc">'+p.description+'</p>'
    +'<dl class="md-spec">'
    +'<dt>버전</dt><dd class="mono">'+p.version+'</dd>'
    +'<dt>플랫폼</dt><dd>'+p.platforms.map(function(x){return x.os+(x.note?" ("+x.note+")":"");}).join(", ")+'</dd>'
    +'<dt>요구사항</dt><dd>'+p.requirements+'</dd>'
    +'<dt>기술</dt><dd>'+p.tech+'</dd>'
    +'</dl>'
    +'<div class="md-actions">'
    +'<a class="btn btn-accent" href="'+window.LINKS.releaseUrl(p.repo)+'" target="_blank" rel="noopener">다운로드 ↓</a>'
    +'<a class="btn btn-ghost" href="'+window.LINKS.issuesUrl(p.repo)+'" target="_blank" rel="noopener">오류 신고</a>'
    +'</div>';
  var m=document.getElementById("detail-modal"); m.hidden=false; document.body.style.overflow="hidden";
};
window.closeDetail=function(){
  document.getElementById("detail-modal").hidden=true; document.body.style.overflow="";
};
document.addEventListener("keydown",function(e){if(e.key==="Escape")window.closeDetail();});

document.addEventListener("DOMContentLoaded", function(){
  setHref("lnk-yt", window.LINKS.youtube);
  setHref("lnk-gh", window.LINKS.github);
  setHref("hero-yt", window.LINKS.youtube);
  setHref("about-yt", window.LINKS.youtube);
  setHref("f-yt", window.LINKS.youtube);
  setHref("f-gh", window.LINKS.github);
  renderCatalog();
  initReveal();
});

function initReveal(){
  if(matchMedia("(prefers-reduced-motion:reduce)").matches) return; // leave visible, no animation
  var els=[].slice.call(document.querySelectorAll(".card,.about-in,.hero-in"));
  els.forEach(function(el){el.classList.add("reveal");});
  function show(el){el.classList.add("in");}
  function showInView(){
    els.forEach(function(el){
      if(el.classList.contains("in")) return;
      if(el.getBoundingClientRect().top < window.innerHeight*0.95) show(el);
    });
  }
  showInView(); // reveal above-the-fold immediately (doesn't rely on IO timing)
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(en){ if(en.isIntersecting){show(en.target);io.unobserve(en.target);} });
    },{threshold:.12});
    els.forEach(function(el){ if(!el.classList.contains("in")) io.observe(el); });
  }
  window.addEventListener("scroll", showInView, {passive:true});
  // safety: if transitions are throttled/frozen (e.g. background tab), force visible without relying on the transition clock
  setTimeout(function(){els.forEach(function(el){el.classList.remove("reveal");});}, 1500);
}
