var status = -1;

function start(mode, type, selection) {
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
		qm.sendNext("Greetings! Isn't this just the perfect weather for a journey? I'm Skipper, the captain of this fine ship. You must be a new Explorer, eh? Nice to meet you.");
		break;
	case 1:
		qm.sendAcceptDecline("We're not quite ready to leave, so feel free to look around the ship while we're waiting.");
		break;
	case 2:
		qm.dispose();
		Packages.server.quest.MapleQuest.getInstance(2573).forceComplete(qm.getPlayer(), qm.getNpc());
		qm.getPlayer().changeMap(qm.getMap(3000000), qm.getMap(3000000).getPortal(0));
}
}
