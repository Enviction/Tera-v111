/*
	名字:	黑色袋子
	地圖:	黑色袋子
	描述:	任務消耗品
*/

function start() {
	if (im.getPlayer().getMap().getId() != 922030011) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "未到達保管庫第一個入口，無法使用黑色袋子"));
		im.dispose();
		return;
		}
		im.gainItem(2430032, -1);
		im.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300388), new java.awt.Point(im.getPlayer().getPosition()));
		im.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300388), new java.awt.Point(im.getPlayer().getPosition()));
		im.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300388), new java.awt.Point(im.getPlayer().getPosition()));
		im.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300388), new java.awt.Point(im.getPlayer().getPosition()));
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "黑色袋子打開的瞬間，自由的靈魂被釋放出來了"));
		im.dispose();
}