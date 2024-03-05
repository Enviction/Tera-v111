
function start() {
	switch (ms.getPlayer().getMap().getId()) {
	case 900090000:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction4.img/promotion/Scene0" + (ms.getPlayer().getGender() == 0 ? "0" : "1")));
		break;
	case 900090001:
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction4.img/promotion/Scene1"));
		break;
	case 900090002:
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction4.img/promotion/Scene2" + (ms.getPlayer().getGender() == 0 ? "0" : "1")));
		break;
	case 900090003:
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction4.img/promotion/Scene3"));
		break;
	case 900090004:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(0));
		ms.getPlayer().changeMap(ms.getMap(900010000), ms.getMap(900010000).getPortal(0));
		}
		ms.dispose();
}