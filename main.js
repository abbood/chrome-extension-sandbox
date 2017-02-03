chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('popup.html',
    { "id": "identitywin",
      "innerBounds": {
        "width": 454,
        "height": 540
      }
    });
});
