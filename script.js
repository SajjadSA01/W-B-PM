window.onload = function () {
  let gridItemList = document.getElementsByClassName('grid-item');
  for (let item of gridItemList) {
    item.addEventListener('mouseover', function (event) {
      document.getElementById('box').innerText = event.target.innerText;
    });
  }
};
