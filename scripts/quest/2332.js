
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
		qm.sendNextS("The key to the wedding venue has been obtained, I must find the Princess.", 3);
		break;
	case 1:
		Packages.server.quest.MapleQuest.getInstance(2332).forceStart(qm.getPlayer(), qm.getNpc(), null);
		qm.dispose();
}
}
	