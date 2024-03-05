/*
	名字:	武陵道場
	地圖:	武陵道場1樓
	描述:	925020100
*/

function start() {
	var stage = Math.floor(ms.getPlayer().getMap().getId() / 100) % 100;
	var realstage = stage - ((stage / 6) | 0);

	time = realstage < 6 ? 5 : realstage < 11 ? 6 : realstage < 16 ? 7 : realstage < 21 ? 8 : realstage < 26 ? 9 : realstage < 31 ? 10 : realstage < 36 ? 15 : 20;

	ms.getClient().getSession().write(Packages.tools.packet.CField.getClock(time * 60));
	ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("Dojang/start", 4));
	ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("dojang/start/stage", 3));
	ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("dojang/start/number/" + realstage, 3));
	ms.getClient().getSession().write(Packages.tools.packet.CField.trembleEffect(0, 1));
	ms.dispose();
}