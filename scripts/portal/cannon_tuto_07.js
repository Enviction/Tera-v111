function enter(pi) {
	pi.spawnNPCRequestController(1096012, -51, -97, 0);
	pi.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroEnableUI(1));
	pi.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(3, 2));
	return false;
}