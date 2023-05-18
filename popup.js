document.addEventListener("DOMContentLoaded", function() {
    var myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function() {
      chrome.tabs.create({ url: "https://example.com" });
    });
});
  