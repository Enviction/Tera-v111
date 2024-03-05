
var status = -1;

function start(mode, type, selection) {
	switch (mode) {
	case -1:
		qm.dispose();
		return;
	case 0:
		status--;
		break;
	case 1:
		status++;
		break;
		}
	switch (status) {
	case 0:
		qm.sendNext("It seems you forgot to get #b#z4001318##k from the Prime Minister, which is very important to our Mushroom Kingdom.");
		break;
	case 1:
		qm.sendPrev("Please take this #v4001318# and give it to my father as soon as possible.");
		break;
	case 2:
		if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
			qm.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(1, "Please check for space in your inventory."));
			qm.dispose();
			return;
			}
			Packages.server.quest.MapleQuest.getInstance(2342).forceStart(qm.getPlayer(), qm.getNpc(), null);
			qm.gainItem(4001318, qm.getPlayer().itemQuantity(4001318) ? 0 : 1);
			qm.dispose();
}
}
	