/*
	名字:	荊棘解除劑
	地圖:	荊棘解除劑
	描述:	任務消耗品
*/

function start() {
	if (im.getPlayer().getMap().getId() != 106020500) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "Thorn removal agent cannot be used before reaching the edge of the city wall."));
		im.dispose();
		return;
		}
		im.dispose();
		im.openNpc(1300011);
}