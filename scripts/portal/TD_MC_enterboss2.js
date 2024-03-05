/*
	名字:	菇菇王國
	地圖:	最後城塔
	描述:	106021402
*/

function enter(pi) {
	if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2333)).getStatus() > 1) {
		pi.getPlayer().changeMap(pi.getMap(106021700), pi.getMap(106021700).getPortal(1));
		return false;
		}
	if (pi.getPlayer().itemQuantity(4032388)) {
		pi.openNpc(1300013);
		return true;
		}
		pi.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "The door seems to be locked and a key is needed to open it"));
		return false;
}