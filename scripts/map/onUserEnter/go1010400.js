
function start() {
	ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("maplemap/enter/1010400", 3));
	ms.dispose();
}