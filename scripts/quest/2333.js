
var status = -1;

function start(mode, type, selection) {
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
		qm.sendAcceptDecline("Please help me, please save the Mushroom Kingdom.");
		break;
	case 1:
		qm.sendPrev("The Prime Minister is the mastermind behind this! Oh no! It's coming.");
		break;
	case 2:
		Packages.server.quest.MapleQuest.getInstance(2333).forceStart(qm.getPlayer(), qm.getNpc(), null);
		qm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(3300008), new java.awt.Point(292, 133));
		qm.dispose();
}
}

function end(mode, type, selection) {
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
		qm.sendNext("Oh my gosh! You actually defeated the Prime Minister.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 15000 exp");
		break;
	case 1:
		Packages.server.quest.MapleQuest.getInstance(2333).forceComplete(qm.getPlayer(), qm.getNpc());
		qm.gainExp(15000);
		qm.dispose();
}
}