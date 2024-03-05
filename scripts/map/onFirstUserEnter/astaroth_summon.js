/*
	名字:	迷你地城
	地圖:	阿司塔洛隱身處
	描述:	677000012
*/

function start() {
	ms.getPlayer().getMap().resetFully();
	ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9400633), new java.awt.Point(600, -26));
	ms.dispose();
}