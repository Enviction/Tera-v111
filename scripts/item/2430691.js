/*
	名字:	星岩電鑽機碎片
	地圖:	星岩電鑽機碎片
	描述:	特殊消耗品
*/

function start() {
	if (im.getPlayer().itemQuantity(2430691) < 10) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "收集10個星岩電鑽機碎片，可以製作一個星岩電鑽機"));
		im.dispose();
		return;
		}
	if (im.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.CASH).getNumFreeSlot() < 1) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "製作星岩電鑽機之前，請在特殊欄保留一個空位"));
		im.dispose();
		return;
		}
		im.gainItem(2430691, -10);
		im.gainItem(5750001, 1);
		im.dispose();
}