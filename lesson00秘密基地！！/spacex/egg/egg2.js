function Drag(node) {
  node.onmousedown = function(ev) {
      e = ev || window.event;
      let offsetX = e.pageX - this.offsetLeft;
      let offsetY = e.pageY - this.offsetTop;
      document.onmousemove = (ev) => {
          e = ev || window.evnet;
          this.style.left = e.pageX - offsetX + 'px';
          this.style.top = e.pageY - offsetY + 'px';
      }
      document.onmouseup = () => {
          document.onmousemove = null;
      }
  }

}