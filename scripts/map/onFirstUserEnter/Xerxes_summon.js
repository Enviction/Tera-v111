/*
	名字:	天上的克里賽
	地圖:	激戰薛西斯
	描述:	200101509
*/

function start() {
	ms.getPlayer().getMap().resetFully();
	ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(6160003), new java.awt.Point(155, 216));
	ms.dispose();
}