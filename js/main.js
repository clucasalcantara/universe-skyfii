$(document).ready(function() {
  $("#owl-example").owlCarousel({
      items:1
  });
  let urlParams = getQueryParams(document.location.search);

  function generateQRCode(id) {
     let identifier = id + Math.floor((Math.random() * 1000) + 1);
    let promotions = [
      identifier + ";342432432;Creme para as mãos gramado;15%%;2017-01-31T18:46:19-0300;1318630",
      identifier + ";342432432;Esmalte Revlon;25%;2017-01-31T18:46:19-0300;1318630",
      identifier + ";342432432;BB Cream L'oreal Paris;20%;2017-01-31T18:46:19-0300;1318630",
    ];

    let qrCodeUrl = promotions[id - 1];

    return `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${qrCodeUrl}&choe=UTF-8`;
  }

  if(urlParams.user_name) {
      document.getElementById('user_name').innerText = urlParams.user_name;
  }

  if(urlParams.promo_code) {
    let url = generateQRCode(urlParams.promo_code);
    document.getElementById('qrcode').src = url;
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
