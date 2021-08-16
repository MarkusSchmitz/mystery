function fitElementToParent(el, padding) {
    var timeout = null;
    function resize() {
      if (timeout) clearTimeout(timeout);
      anime.set(el, {scale: 1});
      var pad = padding || 0;
      var parentEl = el.parentNode;
      var elOffsetWidth = el.offsetWidth - pad;
      var parentOffsetWidth = parentEl.offsetWidth;
      var ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
    }
    resize();
    window.addEventListener('resize', resize);
  }
  
  
  
    var sphereEl = document.querySelector('.sphere-animation');
    var spherePathEls = sphereEl.querySelectorAll('.sphere path');
    var pathLength = spherePathEls.length;
    var hasStarted = false;
    var aimations = [];
  
    fitElementToParent(sphereEl);
  
    var breathAnimation = anime({
      begin: function() {
        for (var i = 0; i < pathLength; i++) {
          aimations.push(anime({
            targets: spherePathEls[i],
            stroke: {value: ['rgba(150,150,255,1)', 'rgba(80,80,180,.25)'], duration: 200},
            translateX: [2, -6],
            translateY: [2, -6],
            easing: 'easeOutQuad',
            autoplay: false
          }));
        }
      },
      update: function(ins) {
        aimations.forEach(function(animation, i) {
          var percent = (1 - Math.sin((i * .50) + (.0022 * ins.currentTime))) / 2;
          animation.seek(animation.duration * percent);
        });
      },
      duration: Infinity,
      autoplay: false
    });
  
    var introAnimation = anime.timeline({
      autoplay: false
    })
    .add({
      targets: spherePathEls,
      strokeDashoffset: {
        value: [anime.setDashoffset, 0],
        duration: 1000,
        easing: 'easeInOutCirc',
        delay: anime.stagger(190, {direction: 'reverse'})
      },
      duration: 2000,
      delay: anime.stagger(60, {direction: 'reverse'}),
      easing: 'linear'
    }, 0);
  
    var shadowAnimation = anime({
        targets: '#sphereGradient',
        x1: '25%',
        x2: '25%',
        y1: '0%',
        y2: '75%',
        duration: 30000,
        easing: 'easeOutQuint',
        autoplay: false
      }, 0);
  
    function init() {
      introAnimation.play();
      breathAnimation.play();
      shadowAnimation.play();
    }
    
    function stop() {
      introAnimation.restart();
      breathAnimation.restart();
      shadowAnimation.restart();
      introAnimation.pause();
      breathAnimation.pause();
      shadowAnimation.pause();
    }
    

  var cont = false;
  var progvar;
  var check1, check2, check3, check4, check5 = false;

  async function checkProgress(crystal) {
    // return await for better async stack trace support in case of errors.
    return await new Promise(resolve => setTimeout(resolve, 6000));
  }

  function updateProgress(module){
    console.log("progressbar" + module);
    var w = parseInt(document.getElementById("progressbar" + module).style.width);
    if (w < 100){
      document.getElementById("progressbar" + module).style.width = String(w + 5) + "%";
      document.getElementById("progressbar" + module).innerHTML = "Charging Crystal " + module + " " +String(w + 5) + "% complete";
    }
    else {
      clearInterval(progvar);
    }
   
   
}

  function initModuleA(){
    init();
    document.getElementById("progressbarA").style.width = "0%";
    document.getElementById("progressbarB").style.width = "0%";
    document.getElementById("progressbarC").style.width = "0%";
    document.getElementById("progressbarD").style.width = "0%";
    document.getElementById("progressbarE").style.width = "0%";
    if (res == 6){
      progvar = setInterval(function() {updateProgress("A")}, 200);
      check1 = true;
      document.getElementById("a").innerHTML = "Module A initiated successfully :" + res;
      return "Module A initiated successfully"
  }
  else {
    stop();
    document.getElementById("a").innerHTML = "Error in result of Module A :" + res;
    return "Error in result of Module A"
    
  }
   
  }

  function initModuleB(res){
    if (res == 8427985){
      progvar = setInterval(function() {updateProgress("B")}, 200);
      check2 = true;
      document.getElementById("b").innerHTML = "Module B initiated successfully :" + res;
      return "Module B initiated successfully"
  }
  else {
    stop();
    document.getElementById("b").innerHTML = "Error in result of Module B :" + res;
    return "Error in result of Module B"
  }
    
    
}

function initModuleC(res){
  comp =  ["Search", "the key", "inside the",  "Storage room"]
  if (res[0] == comp[0] && res[1] == comp[1] && res[2] == comp[2] && res[3] == comp[3]){
    progvar = setInterval(function() {updateProgress("C")}, 200);
    check3 = true;
    document.getElementById("c").innerHTML = "Module C initiated successfully :" + res;
    return "Module C initiated successfully"
}
else {
  stop();
  document.getElementById("c").innerHTML = "Error in result of Module C :" + res;
  return "Error in result of Module C"
}
}

function initModuleD(res){
  comp =  [2, 3, 5, 7, 11, 13, 17]
  if (res[0] == comp[0] && res[1] == comp[1] && res[2] == comp[2] && res[3] == comp[3]){
    progvar = setInterval(function() {updateProgress("D")}, 200);
    check4 = true;
    document.getElementById("d").innerHTML = "Module D initiated successfully :" + res;
    return "Module D initiated successfully"
}
else {
  stop();
  document.getElementById("d").innerHTML = "Error in result of Module D :" + res;
  return "Error in result of Module D"
}
}

function initModuleE(res){

  if (res == 267914296){
    progvar = setInterval(function() {updateProgress("E")}, 200);
    check5 = true;
    document.getElementById("e").innerHTML = "Module E initiated successfully :" + res;

    return "Module E initiated successfully"
  }
  else {
    stop();
    document.getElementById("e").innerHTML = "Error in result of Module E :" + res;
    return "Error in result of Module E"
  }
  
  
}

function loadCrystalModule() {
  
}
function initiateTimeDecoder(){
  if (check1 == true && check2 == true && check3 == true && check4 == true && check5 == true){
    console.log("all checks run successfully");
    document.getElementById("resulttext").innerHTML = "Continue!";
    document.getElementById("resultlink").href = "https://fau.zoom.us/j/67046710614";
  }
}