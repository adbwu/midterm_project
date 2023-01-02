
 $(() => {

  const $main = $('#main-content');

  window.views_manager = {};

  window.views_manager.show = function(item) {
    $aboutPage.detach();
    $myMaps.detach();
    $explorePage.detach();

    switch (item) {
      case 'about':
        $aboutPage.appendTo($main);
        break;
      case 'my-maps':
        $myMaps.appendTo($main);
        break;
      case 'explore':
        $explorePage.appendTo($main);
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
