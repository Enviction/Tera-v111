
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
		qm.sendNext("Have you finished listening to Stache’s first herb picking lesson so quickly? To express my encouragement, I have prepared a small gift for you.");
		break;
	case 1:
		qm.sendNextPrev("Through the teleportation port on the far right side of the Professional Technology Village, you can go to the secret farm that only Stacher knows about. There are many medicinal herbs suitable for medicinal purposes.");
		break;
	case 2:
		qm.sendPrev("Then work harder and strive to become an excellent pharmaceutical expert as soon as possible!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v4001482# #t4001482# 1");
		break;
	case 3:
		if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
			qm.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(1, "Please check for space in your inventory."));
			qm.dispose();
			return;
			}
			Packages.server.quest.MapleQuest.getInstance(2552).forceComplete(qm.getPlayer(), qm.getNpc());
			qm.gainItem(4001482, 1);
			qm.dispose();
}
}