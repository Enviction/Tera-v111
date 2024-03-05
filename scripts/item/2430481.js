/*
	名字:	傳說的奇幻方塊碎片
	地圖:	傳說的奇幻方塊碎片
	描述:	特殊消耗品
*/

function start() {
	if (im.getPlayer().itemQuantity(2430481) < 10) {
	im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "Collect 10 Super Miracle Cube fragments to make a Super Miracle Cube"));
    im.dispose();
    return;
    }
    if (im.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.CASH).getNumFreeSlot() < 1) {
    im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "Before making the Super Miracle Cube, please leave an empty space in the cash inventory"));
    im.dispose();
		return;
		}
		im.gainItem(2430481, -10);
		im.gainItem(5062002, 1);
		im.dispose();
}