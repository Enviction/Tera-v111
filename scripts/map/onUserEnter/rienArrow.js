
function start() {
	if (ms.getPlayer().getInfoQuest(21019).indexOf("arr=o") != -1) {
		ms.dispose();
		return;
		}
		ms.getPlayer().updateInfoQuest(21019, ms.getPlayer().getInfoQuest(21019) + ";arr=o");
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3"));
		ms.dispose();
}