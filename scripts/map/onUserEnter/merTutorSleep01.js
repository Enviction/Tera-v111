
function start() {
	while (ms.getPlayer().getLevel() < 10) {
		ms.getPlayer().levelUp();
	}
	ms.getPlayer().changeJob(2300);
	Packages.server.quest.MapleQuest.getInstance(24008).forceStart(ms.getPlayer(), 0, 1);
	ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction5.img/mersedesTutorial/Scene1"));
	ms.dispose();
}