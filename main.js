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
