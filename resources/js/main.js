function onWindowClose() {
    Neutralino.app.exit();
}

Neutralino.init();
Neutralino.events.on("windowClose", onWindowClose);

addEventListener(
  'mousemove',
  (event) => {
      console.log(event)
      document.getElementById('movementX').textContent = event.movementX;
      document.getElementById('movementY').textContent = event.movementY;
      document.getElementById('clientX').textContent = event.clientX;
      document.getElementById('clientY').textContent = event.clientY;
      document.getElementById('pageX').textContent = event.pageX;
      document.getElementById('pageY').textContent = event.pageY;
  }
);
