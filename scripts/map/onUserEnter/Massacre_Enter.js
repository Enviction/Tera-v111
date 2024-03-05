load('nashorn:mozilla_compat.js');

function start() {
	if (ms.getPlayer().getPyramidSubway() == null) {
		ms.getPlayer().setPyramidSubway(new Packages.server.maps.Event_PyramidSubway(ms.getPlayer()));
		}
		ms.dispose();
}