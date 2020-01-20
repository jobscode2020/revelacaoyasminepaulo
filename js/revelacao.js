$(document).ready(function () {

  $("#girl").click(function () {
    $('#new').modal('show');

    setTimeout(function () {
      $('#new').modal('hide');
    }, 2200);

    setTimeout(yesItsGirl, 2300);

  });

  $("#boy").click(function () {
    $('#new').modal('show');

    setTimeout(function () {
      $('#new').modal('hide');
    }, 2200);

    setTimeout(noItsGirl, 2300);
  });

});

function yesItsGirl() {
  $('.card-body').empty().html(`
  <div>
  <h5 class="text-center">
    <img src="https://media.giphy.com/media/h78g2ls6AZ9zaMP1np/giphy.gif" style="width:3rem;">
    <img src="./img/certo.jpg" style="width:2rem;"> Acertou!
    <img src="https://media.giphy.com/media/h78g2ls6AZ9zaMP1np/giphy.gif" style="width:3rem;">
  </h5>
  <p class="text-center"><img src="./img/menina.jpg" style="width:15rem;"></p>
  </div>
  `);
}

function noItsGirl() {
  $('.card-body').empty().html(`
  <div>
  <h5 class="text-center">
    <img src="https://media.giphy.com/media/h78g2ls6AZ9zaMP1np/giphy.gif" style="width:3rem;">
    <img src="./img/errado.jpg" style="width:2rem;"> Errou!
    <img src="https://media.giphy.com/media/h78g2ls6AZ9zaMP1np/giphy.gif" style="width:3rem;">
  </h5>
  <p class="text-center"><img src="./img/menina.jpg" style="width:15rem;"></p>
  </div>
  `);
}
