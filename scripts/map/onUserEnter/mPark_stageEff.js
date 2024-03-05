
function start() {
	switch ((ms.getPlayer().getMap().getId() / 100) % 100) {
	case 5:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("monsterPark/stageEff/final", 3));
		break;
	default:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("monsterPark/stageEff/stage", 3));
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("monsterPark/stageEff/number/" + (((ms.getPlayer().getMap().getId() / 100) % 100) + 1), 3));
		}
		ms.getPlayer().dropMessage(-1, "Clear all surrounding monsters to enter the next stage.");
		ms.getPlayer().dropMessage(-1, "Each member can additionally gain 20% experience points");
		ms.dispose();
}