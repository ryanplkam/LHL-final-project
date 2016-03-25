const statusChangeCallback = (response) => {
  if (response.status === 'connected') {
    authUser(response.authResponse.accessToken);
  } else if (response.status === 'not_authorized') {
    // authorize app
  } else {
    // log into fb
  }
}

const fbLogin = () => {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '457388787793775',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.5' // use graph api version 2.5
  });
};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

const authUser = (token) => {
  FB.api('/me', {fields: 'id, name, email, picture'}, function(response) {
    $.post('http://localhost:3000/auth/fb', {
      fbId: response.id,
      name: response.name,
      email: response.email,
      profilePicUrl: response.picture.data.url,
      token: token
    }, 'json')
    .then(function(res) {
      window.localStorage.setItem('cinemapp-token', res.token);
    });
  });
}

export default fbLogin