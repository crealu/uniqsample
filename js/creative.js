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
    //drop.style.height = i + 'px';
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

function minimize() {
  let fw = document.getElementById('fuji-wrapper');
  fw.style.width = '90%';
  fw.style.height = '400px';
  fw.style.top = '0px';

  let fu = document.getElementById('fuji');
  fu.style.height = '400px';

  let nav = document.getElementsByClassName('navigation-bar');
  nav[0].style.top = '0px';
  nav[0].style.opacity = '1';
}
