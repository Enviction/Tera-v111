/*
	名字:	菇菇王國
	地圖:	菇菇森林深處
	描述:	106020300
*/

function enter(pi) {
	if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)).getCustomData() > 1) {
		pi.getPlayer().changeMap(pi.getMap(106020400), pi.getMap(106020400).getPortal(2)); //岔路
		return true;
		}
	if (pi.getPlayer().itemQuantity(4000507)) {
		pi.gainItem(4000507, -1);
		pi.getPlayer().changeMap(pi.getMap(106020400), pi.getMap(106020400).getPortal(2)); //岔路
		return true;
		}
		pi.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "Due to the obstruction of the magic barrier, it is impossible to cross"));
		return false;
}