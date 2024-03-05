
function enter(pi) {
	pi.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroEnableUI(0));
	return true;
} 