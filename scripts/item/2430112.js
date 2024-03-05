/*
	名字:	奇幻方塊碎片
	地圖:	奇幻方塊碎片
	描述:	特殊消耗品
*/

function start() {
	if (im.getPlayer().itemQuantity(2430112) < 10) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "Collect 10 cube fragments to make a miracle cube."));
		im.dispose();
		return;
		}
	if (im.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.CASH).getNumFreeSlot() < 1) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "Before making a miracle cube, leave an empty space in the cash inventory."));
		im.dispose();
		return;
		}
		im.gainItem(2430112, -10);
		im.gainItem(5062000, 1);
		im.dispose();
}