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
    +'</div>'
    +'<div class="md-updates"><h4 class="md-uh">업데이트 내역</h4><div id="md-rel" class="md-rel"><p class="rel-empty">불러오는 중…</p></div></div>';
  var m=document.getElementById("detail-modal"); m.hidden=false; document.body.style.overflow="hidden";
  var relBox=document.getElementById("md-rel"); if(relBox) loadReleases(p.repo, relBox);
};
window.closeDetail=function(){
  document.getElementById("detail-modal").hidden=true; document.body.style.overflow="";
};
document.addEventListener("keydown",function(e){if(e.key==="Escape")window.closeDetail();});

/* ---------- GitHub-backed data (releases = 업데이트 내역, issues = 의뢰) ---------- */
var GH_OWNER="VULCAN-HUB", SITE_REPO="VULCAN-HUB/VULCAN-HUB.github.io";

function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){
  return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function fmtDate(iso){var d=new Date(iso);return isNaN(d)?"":d.getFullYear()+"."
  +("0"+(d.getMonth()+1)).slice(-2)+"."+("0"+d.getDate()).slice(-2);}

// GET api.github.com/<path> with localStorage cache (ttl minutes). Returns data, or null on failure.
function ghGet(path, ttlMin){
  var key="gh:"+path, now=Date.now();
  try{var c=JSON.parse(localStorage.getItem(key)||"null"); if(c && now-c.t < ttlMin*60000) return Promise.resolve(c.d);}catch(e){}
  return fetch("https://api.github.com/"+path,{headers:{"Accept":"application/vnd.github+json"}})
    .then(function(r){ if(!r.ok) throw r.status; return r.json(); })
    .then(function(d){ try{localStorage.setItem(key,JSON.stringify({t:now,d:d}));}catch(e){} return d; })
    .catch(function(){ try{var c=JSON.parse(localStorage.getItem(key)||"null"); if(c) return c.d;}catch(e){} return null; });
}

function loadReleases(repo, box){
  ghGet("repos/"+GH_OWNER+"/"+repo+"/releases?per_page=10", 15).then(function(rels){
    if(rels===null){ box.innerHTML='<a href="'+window.LINKS.releaseUrl(repo)+'" target="_blank" rel="noopener">GitHub Releases에서 보기 ↗</a>'; return; }
    rels=rels||[];
    if(!rels.length){ box.innerHTML='<p class="rel-empty">아직 릴리스가 없어요.</p>'; return; }
    box.innerHTML=rels.map(function(r){
      var raw=(r.body||"").trim().replace(/\*\*/g,"").replace(/^#{1,6}\s+/gm,"").replace(/\r/g,"");
      var body=esc(raw);
      if(body.length>700) body=body.slice(0,700)+"…";
      return '<div class="rel"><div class="rel-h"><span class="rel-tag">'+esc(r.tag_name||r.name||"")+'</span>'
        +(r.prerelease?'<span class="rel-pre">pre-release</span>':'')
        +'<span class="rel-date">'+fmtDate(r.published_at)+'</span></div>'
        +(body?'<pre class="rel-body">'+body+'</pre>':'')+'</div>';
    }).join("");
  });
}

function renderRequests(){
  var list=document.getElementById("req-list"); if(!list) return;
  setHref("req-new","https://github.com/"+SITE_REPO+"/issues/new?template=request.yml");
  ghGet("repos/"+SITE_REPO+"/issues?labels=request&state=all&per_page=30", 5).then(function(items){
    if(items===null){ list.innerHTML='<p class="req-empty">지금 목록을 불러오지 못했어요. '
      +'<a href="https://github.com/'+SITE_REPO+'/issues?q=label%3Arequest" target="_blank" rel="noopener">GitHub에서 보기 ↗</a></p>'; return; }
    items=(items||[]).filter(function(i){return !i.pull_request;});
    if(!items.length){ list.innerHTML='<p class="req-empty">아직 의뢰가 없어요. 첫 의뢰를 남겨보세요! 🙌</p>'; return; }
    items.sort(function(a,b){return ((b.reactions&&b.reactions["+1"])||0)-((a.reactions&&a.reactions["+1"])||0);});
    list.innerHTML=items.map(function(i){
      var up=(i.reactions&&i.reactions["+1"])||0, done=i.state==="closed";
      var body=esc((i.body||"").replace(/\r?\n/g," ").trim());
      if(body.length>150) body=body.slice(0,150)+"…";
      return '<a class="req-card'+(done?" done":"")+'" href="'+esc(i.html_url)+'" target="_blank" rel="noopener" title="GitHub에서 열기 · 👍로 추천">'
        +'<div class="req-up"><span class="req-up-i">▲</span><b>'+up+'</b></div>'
        +'<div class="req-main"><div class="req-title">'+esc(i.title)
        +(done?' <span class="req-badge">완료</span>':'')+'</div>'
        +(body?'<div class="req-body">'+body+'</div>':'')+'</div></a>';
    }).join("");
  });
}

function renderMarquee(){
  var track=document.getElementById("marquee-track");
  if(!track||!window.PROGRAMS||!window.PROGRAMS.length) return;
  var chip=function(p){
    return '<div class="mq-chip"><img src="'+p.icon+'" alt="" onerror="this.style.visibility=\'hidden\'"><span>'+p.name+'</span></div>';
  };
  var setHTML='<div class="mq-set">'+window.PROGRAMS.map(chip).join("")+'</div>';
  function layout(){
    track.innerHTML=setHTML;                                 // one set to measure
    var setW=track.firstElementChild.getBoundingClientRect().width;
    if(!setW){ requestAnimationFrame(layout); return; }      // not laid out yet -> retry next frame
    var need=Math.max(2, Math.ceil((window.innerWidth*2)/setW)+1); // fill >=2x viewport for seamless loop
    var html=""; for(var i=0;i<need;i++) html+=setHTML;
    track.innerHTML=html;
    track.style.setProperty("--mq-shift", setW+"px");        // shift by one set => seamless
    track.style.setProperty("--mq-dur", Math.max(16,(setW/50)).toFixed(1)+"s"); // ~50px/s
  }
  if(document.fonts&&document.fonts.ready){document.fonts.ready.then(layout);} else {layout();}
  var t; window.addEventListener("resize",function(){clearTimeout(t);t=setTimeout(layout,250);},{passive:true});
}

document.addEventListener("DOMContentLoaded", function(){
  setHref("lnk-yt", window.LINKS.youtube);
  setHref("lnk-gh", window.LINKS.github);
  setHref("hero-yt", window.LINKS.youtube);
  setHref("about-yt", window.LINKS.youtube);
  setHref("f-yt", window.LINKS.youtube);
  setHref("f-gh", window.LINKS.github);
  renderCatalog();
  renderMarquee();
  renderRequests();
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
