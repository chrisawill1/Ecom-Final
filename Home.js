const hoverText = document.getElementById('#bigger');

hoverText.addEventListener('mouseenter', () => 
{
  hoverText.style.hoverText("Shop!");
  hoverBox.textContent = 'Shop!';
});

hoverText.addEventListener('mouseleave', () =>
{
//   hoverText.style.backgroundColor = 'gray';
});


// im stumped to add js, hover is still not working. try image if i have time

