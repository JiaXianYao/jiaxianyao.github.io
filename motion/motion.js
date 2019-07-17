$(document).ready(() => {
  window.addEventListener('deviceorientation', (event) => {
    $('#1').text(Math.trunc(event.beta));
    $('#2').text(Math.trunc(event.gamma));
  });
});
