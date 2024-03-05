
var status = -1;

function end(mode, type, selection) {
	switch (mode) {
	case -1:
		qm.dispose();
		return;
	case 0:
		if (status > 0) {
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
		if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2369)).getStatus() < 1) {
			Packages.server.quest.MapleQuest.getInstance(2369).forceStart(qm.getPlayer(), qm.getNpc(), null);
			qm.dispose();
			return;
			}
			qm.sendNext("This is my father's diary. I didn't expect you to actually take it back. It reminds me of the past, the day I met my father... I was surrounded by monsters, and it was he who saved me and saved me. Take me as your daughter.");
			break;
	case 1:
		qm.sendYesNo("I like you more and more. With your current ability, you should be qualified to be promoted. Are you willing to accept it?\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1052244# #t1052244# 1");
		break;
	case 2:
		if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
			qm.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(1, "Please check for space in your inventory."));
			qm.dispose();
			return;
			}
			Packages.server.quest.MapleQuest.getInstance(2369).forceComplete(qm.getPlayer(), qm.getNpc());
			qm.getPlayer().changeJob(431);
			qm.gainItem(4032617, -1);
			qm.gainItem(1052244, 1);
			qm.sendOk("From now on you are a Blade Acolyte. I hope you can continue to practice hard in your new position and carry forward the career of Dual Blade.");
			qm.dispose();
}
}
