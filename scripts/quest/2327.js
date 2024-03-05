
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
		qm.sendNext("Thank you for coming to the castle to save me. Without you, I really don't know what I would do.");
		break;
	case 1:
		qm.sendNextPrev("I plan to run away from here wearing the helmet of King Penguin, hoping to see you again in the future.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1900 exp");
		break;
	case 2:
		Packages.server.quest.MapleQuest.getInstance(2327).forceComplete(qm.getPlayer(), qm.getNpc());
		qm.spawnNPCRequestController(1300008, 218, 139, 0);
		qm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroEnableUI(1));
		qm.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.setNPCSpecialAction(1300008, "out"));
		qm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 2800));
		qm.gainExp(1900);
		break;
	case 3:
		qm.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.removeNPCController(1300008));
		qm.spawnNPCRequestController(1300008, 218, 139, 0);
		qm.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.setNPCSpecialAction(1300008, "hat"));
		qm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 3000));
		break;
	case 4:
		qm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroEnableUI(0));
		qm.dispose();
}
}