
var status = -1;

function end(mode, type, selection) {
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
		if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2363)).getStatus() < 1) {
			Packages.server.quest.MapleQuest.getInstance(2363).forceStart(qm.getPlayer(), qm.getNpc(), null);
			qm.dispose();
			return;
			}
			qm.sendYesNo("oh! You have done a great job. I have fully confirmed your abilities. I will help you guide the path of Blade Acolyte...Are you ready?？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1342000# #t1342000# 1");
			break;
	case 1:
		if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
			qm.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(1, "Please check for space in your inventory."));
			qm.dispose();
			return;
			}
			Packages.server.quest.MapleQuest.getInstance(2363).forceComplete(qm.getPlayer(), qm.getNpc());
			qm.getPlayer().changeJob(430);
			qm.gainItem(4032616, -1);
			qm.gainItem(1342000, 1);
			qm.sendNext("From now on, you are a Dual Blade. A Dual Blade is a person who suppresses the enemy with quick actions and skills. I have given you a new weapon suitable for you. I hope you can practice harder.");
			break;
	case 2:
		qm.sendOk("You will gain more power in the future than you do now, but you must not use that power on the weak. Using your own power on the right things is far more difficult than becoming stronger.");
		break;
	case 3:
		qm.dispose();
}
}
