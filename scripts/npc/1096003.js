function start() {
	cm.sendNextS("Ook！Ook!", 1);
}

function action(mode, type, selection) {
	cm.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroEnableUI(0));
	cm.dispose();
}