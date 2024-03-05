/*
	名字:	混濁的玻璃珠
	地圖:	混濁的玻璃珠
	描述:	任務消耗品
*/

function start() {
	if (im.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "打開混濁的玻璃珠之前，請在其它欄保留一個空位"));
		im.dispose();
		return;
		}
		im.gainItem(2430071, -1);
	if (Math.random() < 0.1) {
		im.gainItem(4032616, 1);
		im.dispose();
		return;
		}
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "混濁的玻璃珠裡什麼都沒有"));
		im.dispose();
}