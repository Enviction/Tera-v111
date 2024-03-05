
function start() {
	ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(0));
	ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("temaD/enter/mushCatle", 3));
	ms.dispose();
}