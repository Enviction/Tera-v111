function enter(pi) {
	if (pi.getPlayer().getInfoQuest(22013).indexOf("hand=o") != -1) {
		return false;
		}
		pi.getPlayer().updateInfoQuest(22013, pi.getPlayer().getInfoQuest(22013) + ";hand=o");
		pi.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.getEvanTutorial("UI/tutorial/evan/0/0"));
		pi.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/guideEffect/evanTutorial/evanBalloon70"));
		return true;
}