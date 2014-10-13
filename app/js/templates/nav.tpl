<ul>
	<% _.each(routes, function(route) { %> 
	    <li class="" name='<%= route.link %>'><%= route.displayName %></li>
	<% }); %>
	<li class="author">
		By<a href="mailto:<%= author.email %>?subject=Cats%20Vs%20Dogs"><%= author.name %></a>
	</li>
</ul>
