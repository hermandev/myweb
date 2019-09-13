$(document).ready(function(){
	$('.sidenav').sidenav()
	$('.dropdown-trigger').dropdown({
		hover: true,
		coverTrigger: false,
		constrainWidth: false,
		alignment:'left',
		belowOrigin: true,
	})

	 let quill = new Quill('#editor', {
	    theme: 'snow'
	  });
})