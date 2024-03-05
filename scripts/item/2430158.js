/*
	名字:	獅子王的獎牌
	地圖:	獅子王的獎牌
	描述:	特殊消耗品
*/

function start() {
	if (im.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "淨化獎牌之前，請在其它欄保留一個空位"));
		im.dispose();
		return;
		}
	if (im.getPlayer().itemQuantity(4000630) < 50) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "淨化獅子王的貴族獎牌需要50個淨化的圖騰，獅子王的皇家獎牌則需要100個淨化的圖騰"));
		im.dispose();
		return;
		}
		im.gainItem(2430158, -1);
		im.gainItem(im.getPlayer().itemQuantity(4000630) < 100 ? 4310009 : 4310010, 1);
		im.gainItem(4000630, im.getPlayer().itemQuantity(4000630) < 100 ? -50 : -100);
		im.dispose();
}