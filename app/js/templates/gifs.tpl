
<div class="grid-100 grid-parent">

	<% _.each(gifs, function(gif, index) { %> 
	    <div class="mobile-grid-100 grid-25 tablet-grid-50 grid-parent gif" name='gif' data-id='<%= gif.id %>'>
	    	<img width="100%" height="100%" src="<%= gif.images.fixed_width_still.url %>">
	    </div>
	<% }); %>
	
	<div class='grid-100 grid-parent load-more' name='more'>GET EVEN MORE</div>

</div>


