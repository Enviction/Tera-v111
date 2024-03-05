
function start() {
	switch ((ms.getPlayer().getMap().getId() / 100) % 10) {
	case 0:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("temaD/enter/teraForest", 3));
		break;
	default:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("temaD/enter/neoCity" + ((ms.getPlayer().getMap().getId() / 100) % 10), 3));
		}
		ms.dispose();
}