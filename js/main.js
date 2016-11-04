$(document).ready(function() {
  $("#owl-example").owlCarousel();
  let urlParams = getQueryParams(document.location.search);

  if(urlParams.user_name) {
      document.getElementById('user_name').innerText = urlParams.user_name;
  } else {
      location.href = "http://www.google.com.br";
  }

  if(urlParams.promo_code) {
      let imageFile = "images/qrcodes/qrcode" + urlParams.promo_code + ".png";
      document.getElementById('qrcode').src = imageFile;
  }

  function getQueryParams(qs) {
    qs = qs.split('+').join(' ');
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
  }
});
