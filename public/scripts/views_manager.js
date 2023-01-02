$(() => {

const $main = $('#main-content');

  window.views_manager = {};

  window.views_manager.show = function(item) {
    $aboutPage.detach();

    switch (item) {
      case 'about':
        $aboutPage.appendTo($main);
        break;
      case 'error': {
        const $error = $(`<p>${arguments[1]}</p>`);
        $error.appendTo('body');
        setTimeout(() => {
          $error.remove();
          views_manager.show('about');
        }, 2000);

        break;
      }
    }
  }

});
