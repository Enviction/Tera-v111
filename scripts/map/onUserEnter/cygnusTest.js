
function start() {
	switch (ms.getPlayer().getMap().getId()) {
	case 913040006:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(0));
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction.img/cygnus/Scene9"));
		break;
	default:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction.img/cygnus/Scene" + (ms.getPlayer().getMap().getId() - 913040000)));
		}
		ms.dispose();
}