var requestHelper;
var pathSiteBase;

function init(rh, projectId) {
	requestHelper = rh;
	pathSiteBase = '/hybris/site/b1/' + projectId + '/sites';
}

function get(siteCode) {
	return requestHelper.get(pathSiteBase + '/' + siteCode, {});
}

module.exports = {
	get: get,
	init: init
};