export default class InputHandler {
  constructor() {
    document.addEventListener("keydown", event => {
      alert(event.keyCode);
      switch (event.keyCode) {
        case 16:
          alert("hold piece");
          break;

        case 32:
          alert("instant place");
          break;

        case 37:
          alert("move left");
          break;

        case 38:
          alert("rotate");
          break;

        case 39:
          alert("move right");
          break;

        case 40:
          alert("move down");
          break;
      }
    });
  }
}
