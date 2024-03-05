
function start() {
	ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("maplemap/enter/2000000", 3));
	ms.dispose();
}