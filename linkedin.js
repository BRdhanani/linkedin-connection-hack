// get all elements from network

var elements = document.getElementsByClassName("artdeco-button--full");
for (var i = 0, len = elements.length; i < len; i++) {
  // send request to all people visible in my network in single click
    elements[i].click()
}
