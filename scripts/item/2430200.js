/*
	名字:	閃電石
	地圖:	閃電石
	描述:	任務消耗品
*/

function start() {
	if (im.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(31152)).getStatus() != 2) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "由於不清楚閃電石的用途，無法正確使用它"));
		im.dispose();
		return;
		}
	if (im.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "製作做夢之鑰之前，請在其它欄保留一個空位"));
		im.dispose();
		return;
		}
	if (!(im.getPlayer().itemQuantity(4000660) && im.getPlayer().itemQuantity(4000661) && im.getPlayer().itemQuantity(4000662) && im.getPlayer().itemQuantity(4000663))) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "收集靈魂之石，火花之石，風之力，黑暗之石，可以製作做夢之鑰"));
		im.dispose();
		return;
		}
		for (var i = 4000660; i < 4000664; i++)
		im.gainItem(i, -1);
		im.gainItem(2430200, -1);
		im.gainItem(4032923, 1);
		im.dispose();
}