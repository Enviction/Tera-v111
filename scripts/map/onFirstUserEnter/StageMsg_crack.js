/*
	名字:	隱藏地圖
	地圖:	遺棄之塔
	描述:	922010100
*/

function start() {
	switch (ms.getPlayer().getMap().getId()) {
	case 922010100: //第1階段
		ms.getPlayer().getMap().startMapEffect("Defeat all the Ratz!", 5120018);
		break;
	case 922010400: //第2階段
		ms.getPlayer().getMap().startMapEffect("Destroy the monsters in each room!", 5120018);
		break;
	case 922010600: //第3階段
		ms.getPlayer().getMap().startMapEffect("Get to the top!", 5120018);
		break;
	case 922010700: //第4階段
		ms.getPlayer().getMap().startMapEffect("Destroy the Rombots!", 5120018);
		break;
	case 922010800: //第5階段
		ms.getPlayer().getMap().startMapEffect("Get the right combination!", 5120018);
		break;
	case 922010900: //時空的裂縫
		ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(9300012), new java.awt.Point(941, 184));
		ms.getPlayer().getMap().startMapEffect("Defeat Alishar!", 5120018);
		break;
	default:
		}
		ms.dispose();
}