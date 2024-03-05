
function start() {
	ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("resistance/tutorialGuide", 3));
	ms.dispose();
}