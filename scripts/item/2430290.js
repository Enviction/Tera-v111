/*
	名字:	老舊紙袋
	地圖:	老舊紙袋
	描述:	任務消耗品
*/

function start() {
	if (im.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "拆開紙袋之前，請在其它欄保留一個空位"));
		im.dispose();
		return;
		}
		im.gainItem(2430290, -1);
	if (Math.random() < 0.5) {
		item = Math.random() < 0.3 ? 4350000 : Math.random() < 0.4 ? 4350001 : 4350002;
		im.gainItem(item, 1);
		im.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.getEvanTutorial(item == 4350000 ? "UI/UIWindow2.img/Picture/0/0" : item == 4350001 ? "UI/UIWindow2.img/Picture/1/0" : "UI/UIWindow2.img/Picture/2/0"));
		im.dispose();
		return;
		}
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "紙袋裡居然什麼都沒有"));
		im.dispose();
}