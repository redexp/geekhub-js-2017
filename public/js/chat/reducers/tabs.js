function tabsReducer(tabs, action) {
	var newTabs = Object.assign({}, tabs, {
		page1: page1Reducer(tabs.page1, action),
		page2: page2Reducer(tabs.page2, action)
	});

	switch (action.type) {
	case 'CHANGE_ACTIVE_TAB':
		newTabs.activePage = action.payload.page;
		return newTabs;

	default:
		return newTabs;
	}
}