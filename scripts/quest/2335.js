
var status = -1;

function start(mode, type, selection){
	switch (mode) {
	case -1:
		qm.dispose();
		return;
	case 0:
		if (status < 1) {
		qm.dispose();
		return;
		}
		status--;
		break;
	case 1:
		status++;
		break;
		}
	switch (status) {
	case 0:
		qm.sendYesNo("The matter is not over yet. There are many associates of the Prime Minister in Mushroom Castle. As far as I know, there are a large number of remnants in the safe room at #bMartian Road 3 nearby. Are you willing to clear out the remnants for me? ?");
		break;
	case 1:
		qm.sendPrev("Take it, this is the key #v4032405# that I picked up a few days ago and was lost by the Prime Minister. Use this key to enter the safe room of #bMartian Road 3#k.");
		break;
	case 2:
		if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
			qm.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(1, "Please check for space in your inventory."));
			qm.dispose();
			return;
			}
			Packages.server.quest.MapleQuest.getInstance(2335).forceStart(qm.getPlayer(), qm.getNpc(), null);
			qm.gainItem(4032405, qm.getPlayer().itemQuantity(4032405) ? 0 : 1);
			qm.dispose();
}
}
	