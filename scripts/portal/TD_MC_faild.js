/*
	名字:	菇菇王國
	地圖:	哨兵的哨所
	描述:	106020601
*/

function enter(pi) {
	pi.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction2.img/mushCatle/nugu"));
	var tick = 0;
	schedule = Packages.server.Timer.EtcTimer.getInstance().register(function () {
		if (tick == 1) {
			pi.getPlayer().changeMap(pi.getMap(106020400), pi.getMap(106020400).getPortal(0));
			schedule.cancel(true);
			return false;
			}
			tick++;
		}, 1000);
}