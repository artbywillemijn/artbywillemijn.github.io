// Get the modal
var modal       = document.getElementById('modal-container');
var modalImg    = document.getElementById("modal_img");
var captionText = document.getElementById("caption");

function showModal( src,alt ) {
    modal.style.display = "block";
    modalImg.src = src;
	if ( alt != undefined ) {
    	captionText.innerHTML = alt;
	}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 
