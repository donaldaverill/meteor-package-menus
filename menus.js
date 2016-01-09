Menus = {};
Menus.create = function() {
	return new Mongo.Collection(null);
};
if (Package.templating) {
	Package.templating.Template.registerHelper('Menus', (menu) => {
    console.log(Menus[menu]);
    return Menus[menu].find({}, {
			sort: {
				weight: -1
			}
		});
	});
}
