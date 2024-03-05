
function enter(pi) {
	if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2330)).getStatus() == 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2330)).getMobKills(3300005) > 0 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2330)).getMobKills(3300006) > 0 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2330)).getMobKills(3300007) > 0 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2332)).getStatus() < 1) {
		if (pi.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
		pi.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "Before leaving here, please leave an empty space in the ETC inventory."));
		return false;
		}
		pi.gainItem(4032388, pi.getPlayer().itemQuantity(4032388) ? 0 : 1);
		}
		pi.getPlayer().changeMap(pi.getMap(106021400), pi.getMap(106021400).getPortal(1)); //東邊城塔
		return true;
}