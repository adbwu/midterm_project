$(() => {
  window.header = {};

  const $pageHeader = $('#page-header');

  function updateHeader() {

    $pageHeader.find("#login-links").remove();
    let userLinks = `
    <div id="header">
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
        <li class="about">About</li>
        <li class="my_maps_button">My Maps</li>
        <li class="explore_button">Explore</li>
        <li class="add_poi_button">Add Poi</li>
        <li class="favorites_button">Favorites</li>
      </ul>
    </nav>
    `

    $pageHeader.append(userLinks);
  }

  window.header.update = updateHeader;

  updateHeader();

});
