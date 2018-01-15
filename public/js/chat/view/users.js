function usersView(selector, users) {
	var list = $(selector);
	var template = list.find('> li').detach();

	users.forEach(function (user) {
		var userElement = template.clone();
		userElement.find('[data-name]').text(user.name);

		list.append(userElement);
	});
}