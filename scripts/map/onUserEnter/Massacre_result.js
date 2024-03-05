
function start() {
	ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("killing/fail", 3));
	ms.dispose();
}