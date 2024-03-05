var status;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	switch (mode) {
	case -1:
		cm.dispose();
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
		cm.sendNextS("Alright, let's go!", 1);
		break;
	case 1:
		cm.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("cannonshooter/fire", 4));
		cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction4.img/effect/cannonshooter/flying1/0", 2000, 0, -14, 0));
		cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 300));
		break;
	case 2:
		cm.dispose();
		cm.forceCompleteQuest(2572);
		cm.forceCompleteQuest(2568);
		cm.getPlayer().changeMap(cm.getMap(912060500), cm.getMap(912060500).getPortal(0));
}
}