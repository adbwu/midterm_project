$(() => {
  window.header = {};

  const $pageHeader = $('#page-header');

  function updateHeader() {

    $pageHeader.find("#login-links").remove();
    let userLinks = `
    <div id="top-header">
    <h1>Wiki Map</h1>
    <nav id="login-links" class="login-links">
      <ul>
        <li class="logged_in">Logged in as User</li>
        <li class="profile_button">Profile</li>
        <li class="logout_button">Logout</li>
      </ul>
    </nav>
    </div>
    <nav id="nav-bar" class="nav-bar">
      <ul>
        <li class="nav_button about_button">About</li>
        <li class="nav_button my_maps_button active">My Maps</li>
        <li class="nav_button explore_button">Explore</li>
        <li class="nav_button add_poi_button">Add POI</li>
        <li class="nav_button favorites_button">Favorites</li>
      </ul>
    </nav>
    `

    $pageHeader.append(userLinks);
  }

  window.header.update = updateHeader;

  updateHeader();

  $('header').on('click', '.about_button', function() {
    views_manager.show('about');
  });
});
