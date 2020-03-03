window.onload = init2;
  function init2() { 

 var items = document.querySelectorAll(".item");
  for (var i = 0; 0 < items.length; i++) {	
	items[i].style.backgroundColor = "red";     
    items[i].style.height = items[i].offsetHeight + "px";  
  };
	
};	
	