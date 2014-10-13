<div class="bg" name="back">
	
</div>

<div class="fg" style="margin-top:-<%= model.images.original.height/2 %>px; margin-left:-<%= model.images.original.width/2 %>px; width:<%= model.images.original.width %>px;  height:<%= model.images.original.height %>px;">
	<img src="<%= model.images.original.url %>">
	<p>Rating <strong><%= model.rating %></strong></p>
	<p name="back">close</p>
</div>



