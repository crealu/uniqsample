function menu() {
  let bars = document.getElementsByClassName('bar');
  let dd = document.getElementById('dropdown-menu');
  let mnl = document.getElementById('mobile-list');

  if (bars[2].style.opacity == '0') {
    bars[0].style.transform = 'rotate(0deg)';
    bars[0].style.top = '0px';
    bars[1].style.transform = 'rotate(0deg)';
    bars[1].style.top = '0px';
    bars[2].style.opacity = '1';

    dd.style.height = '0px';
    dd.style.opacity = '0';

  } else {
    bars[0].style.transform = 'rotate(45deg)';
    bars[0].style.top = '5px';
    bars[1].style.transform = 'rotate(-45deg)';
    bars[1].style.top = '-3px';
    bars[2].style.opacity = '0';

    dd.children[0].style.display = 'none';
    dd.style.display = 'block';
    timedHeight(dd);
    timedShow(dd);
  }
}

function timedHeight(drop) {
  let i = 0;
  let id = setInterval(frame, 100);
  function frame() {
    i++;
    if (i == '1') {
      clearInterval(id);
      drop.style.opacity = '1';
      drop.style.height = '250px';
    }
  }
}


function timedShow(drop) {
  let i = 0;
  let id = setInterval(frame, 250);
  drop.children[0].style.display = 'block';
  function frame() {
    i++;
    if (i == '1') {
      clearInterval(id);
      drop.children[0].style.opacity = '1';
    }
  }
}

function pan() {
  let i = 0;
  let f = document.getElementById('fuji');
  let id = setInterval(frame, 500);
  function frame() {
    i++;
    f.style.left = i + 'px';
    if (i == 20) {
      clearInterval(id);
    }
  }
}

// 3/15/19
function changeToWhite() {
  let utShapes = document.getElementsByClassName('ut-shape');
  let animTitle = document.getElementById('ut-animation-title');

  for (var z = 0; z < utShapes.length; z++) {
    utShapes[z].style.transition = '1s';
  }
  animTitle.style.transition = '1s';

  let x = 0;
  let id = setInterval(frame, 1000);
  function frame() {
    x++;
    if (x == 1) {
      clearInterval(id);
      for (var j = 0; j < utShapes.length; j++) {
        utShapes[j].style.animation = null;
        utShapes[j].style.background = '#d0d0d0';
      }
      animTitle.style.animation = null;
      animTitle.style.color = '#d0d0d0';
      animTitle.style.textShadow = '0px 0px 20px #231F20';
    }
  }
}

function giveIntroTransition() {
  let iw = document.getElementById('intro-wrapper');

  let i = 0;
  let id = setInterval(frame, 1000);
  function frame() {
    i++;
    if (i == 3) {
      clearInterval(id);
      changeToWhite();
      iw.style.transition = '0.5s';
    }
  }
}

function minimize() {
  let fw = document.getElementById('fuji-wrapper');
  fw.style.width = '95%';
  //fw.style.height = '400px';
  fw.style.top = '0px';

  //let fu = document.getElementById('fuji');
  //fu.style.height = '450px';

  let nav = document.getElementsByClassName('navigation-bar');
  nav[0].style.top = '0px';
  nav[0].style.opacity = '1';

  let iw = document.getElementById('intro-wrapper');
  iw.style.opacity = '0';

  let ad = document.getElementById('arrowdown');
  ad.style.opacity = '0';
  ad.style.display = 'none';
}

window.onload = giveIntroTransition();
$(window).bind('scroll', function(e){
  parallaxScroll();
});

function parallaxScroll() {
  var scrolled = $(window).scrollTop();
  $('#parallax-3').css('top', (0 - (scrolled * .15)) + ' px');
  $('#parallax-3').parallax({imageSrc: 'https://uniqtable.com/wp-content/uploads/2019/03/japanese-japanese-garden-tea-time-1576403.jpg'})

  $('#parallax-4').css('top', (0 - (scrolled * .15)) + ' px');
  $('#parallax-4').parallax({imageSrc: 'https://i.ytimg.com/vi_webp/dekUlY29sno/maxresdefault.webp'})

}
