/*
	名字:	高級融合票碎片
	地圖:	高級融合票碎片
	描述:	特殊消耗品
*/

function start() {
	if (im.getPlayer().itemQuantity(2430748) < 20) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "收集20張高級融合票碎片，可以製作高級融合票"));
		im.dispose();
		return;
		}
	if (im.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "製作高級融合票之前，請在其它欄保留一個空位"));
		im.dispose();
		return;
		}
		im.gainItem(2430748, -20);
		im.gainItem(4420000, 1);
		im.dispose();
}