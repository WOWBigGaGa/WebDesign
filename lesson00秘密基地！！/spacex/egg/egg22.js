window.onload = function() {
  let stage = document.querySelector('.stage');
  let sheep = document.querySelector('.sheep');
  let step = parseInt(Math.random() * 10) + 3;
  let offsetLeft = sheep.offsetLeft;
  let W = 0;
  let H = 122;
  let move = null;
  let down = null;
  setInTimer();
  let sheepLeft = 0;
  let sheepTop = 0;

  function setInTimer(callback) {
      move = setInterval(() => {
          W += 164;
          if (W >= 1302) {
              W = 0;
          }
          sheep.style.backgroundPosition = -W + 'px ' + '0px';
          if (callback) {
              callback();
          } else {
              offsetLeft -= step;
              sheep.style.left = offsetLeft + 'px';
          }
      }, 50);
  }

  sheep.onmousedown = (ev) => {
      e = ev || window.event;
      clearInterval(move);
      W = 0;
      down = setInterval(() => {
          W += 164;
          if (W >= 1302) {
              W = 0;
          }
          sheep.style.backgroundPosition = -W + 'px ' + -H + 'px';
      }, 50);
      let X = e.pageX - sheep.offsetLeft;
      let Y = e.pageY - sheep.offsetTop;
      document.onmousemove = (ev) => {
          e = ev || window.event;
          sheepLeft = e.pageX - X;
          sheepTop = e.pageY - Y;
          sheep.style.top = sheepTop + 'px';
          sheep.style.left = sheepLeft + 'px';

      }
      document.onmouseup = function() {
          document.onmousemove = null;
      }
  }
  sheep.onmouseup = () => {
      clearInterval(down);
      setInTimer(function() {
          sheepLeft -= step;
          sheep.style.left = sheepLeft + 'px';
      });
  }


}