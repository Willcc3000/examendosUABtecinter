  document.addEventListener("DOMContentLoaded", function () {
    function ContadorDeClicks() {
      let contador = 0;
      const cartButton = document.getElementById("view-cart");
      const countDisplay = document.getElementById("click-count");

      cartButton.addEventListener("click", function (event) {
        event.preventDefault();
        contador++;
        countDisplay.textContent = contador; // Actualiza el contador en el DOM
      });
    }

    ContadorDeClicks();
  });

  /*mi reloj*/

  function RelojEnTiempoReal() {
    const secondHand = document.querySelector(".second-hand");
    const minsHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");

    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = (seconds / 60) * 360 + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const mins = now.getMinutes();
      const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    setInterval(setDate, 1000);
    setDate();
  }

  document.addEventListener("DOMContentLoaded", RelojEnTiempoReal);

  /*cambia color mi right-side*/
  document.addEventListener("DOMContentLoaded", function () {
    const changeColorButton = document.getElementById("change-color-button");
    const rightSide = document.querySelector(".right-side");

    changeColorButton.addEventListener("click", function () {
      // Genera un color aleatorio
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      // Cambia el color de fondo de right-side
      rightSide.style.backgroundColor = randomColor;
    });
  });