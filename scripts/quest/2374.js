
var status = -1;

function end(mode, type, selection) {
	switch (mode) {
	case -1:
		qm.dispose();
		return;
	case 0:
		if (status > 1) {
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
		if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2374)).getStatus() < 1) {
			Packages.server.quest.MapleQuest.getInstance(2374).forceStart(qm.getPlayer(), qm.getNpc(), null);
			qm.dispose();
			return;
			}
			qm.sendNext("I've been waiting for you to come back. How are things going? Is this #v4032619# Alike’s letter? Let me take a look.");
			break;
	case 1:
		qm.sendNextPrev("We finally got Arico's approval, which was a big moment for us, and it's a time when you go through changes.");
		break;
	case 2:
		qm.sendYesNo("You have been working very hard to contribute to the future of Kagemusha. In recognition of your efforts, are you willing to be promoted to a new position again?\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1132021# #t1132021# 1");
		break;
	case 3:
		if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
			qm.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(1, "Please check for space in your inventory."));
			qm.dispose();
			return;
			}
			Packages.server.quest.MapleQuest.getInstance(2374).forceComplete(qm.getPlayer(), qm.getNpc());
			qm.getPlayer().changeJob(432);
			qm.gainItem(4032619, -1);
			qm.gainItem(1132021, 1);
			qm.sendOk("From now on, you are a Blade Specialist, and you will carry the hope of the Dual Blade and open up a new future for the Secret Garden.");
			qm.dispose();
}
}