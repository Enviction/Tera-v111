function enter(pi) {
	pi.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(3, 0));
	pi.openNpc(1096012);
	return true;
}