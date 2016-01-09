if (Meteor.isClient) {
  Menus.Main = Menus.create();
	Menus.Main.insert({
		content: 'Users',
		route: '/users',
		weight: 1,
		icon: 'th-large',
		roles: 'owner, manager',
	});
  Menus.Main.insert({
    content: 'Home',
    route: '/',
    weight: -999,
    icon: 'th-home',
    roles: 'public',
  });
}
