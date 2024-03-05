/*
	名字:	林車長
	地圖:	廢棄的地鐵月台
	描述:	910320000
*/

function start() {
	ms.getPlayer().getMap().resetFully();
	ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("killing/bonus/bonus", 3));
	ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("killing/bonus/stage", 3));

	x = ms.getPlayer().getMap().getId();
	mobId = x < 910320030 ? 9700020 : x < 926010070 ? 9700019 : 9700029;
	spawnPer = x < 926010030 ? 10 : x < 926010050 ? 15 : 20;
	map = x < 910320030 ? 910320000 : 926010000;//金字塔山丘
	pos1= x < 910320030 ? new java.awt.Point(121, 218) : new java.awt.Point(0, 88);
	pos2= x < 910320030 ? new java.awt.Point(396, 43) : new java.awt.Point(-326, -115);
	pos3= x < 910320030 ? new java.awt.Point(-63, 43) : new java.awt.Point(361, -115);

	for (var i = 0; i < spawnPer; i++) {
		ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(mobId), pos1);
		ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(mobId), pos2);
		ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(mobId), pos3);
	}
	ms.getPlayer().startMapTimeLimitTask(120, ms.getMap(map));
	ms.dispose();
}