/*
	名字:	彩色菇菇芽孢
	地圖:	彩色菇菇芽孢
	描述:	任務消耗品
*/

function start() {
	if (im.getPlayer().getMap().getId() != 106020300 || im.getPlayer().getPosition().x < 1100 || im.getPlayer().getPosition().y > 40) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "Colorful mushroom spores cannot be used before reaching the magic barrier."));
		im.dispose();
		return;
		}
		im.dispose();
		im.openNpc(1300010);
}