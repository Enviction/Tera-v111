/*
	名字:	冰雪峽谷
	地圖:	冰雪峽谷1
	描述:	921120100
*/

importPackage(java.lang);

function start() {
	shammos = Packages.server.life.MapleLifeFactory.getMonster(9300275);
	ms.getPlayer().getEventInstance().registerMonster(shammos);
	switch (ms.getPlayer().getMap().getId()) {
	case 921120100:
		ms.getPlayer().getEventInstance().setProperty("HP", "2000");
		break;
	default:
		shammos.setHp(Long.parseLong(ms.getPlayer().getEventInstance().getProperty("HP")));
		break;
		}
	ms.getPlayer().getMap().spawnMonsterWithEffectBelow(shammos, new java.awt.Point(ms.getPlayer().getMap().getPortal(0).getPosition()), 12);
	shammos.switchController(ms.getPlayer(), false);
	ms.getClient().getSession().write(Packages.tools.packet.MobPacket.getNodeProperties(shammos, ms.getPlayer().getMap()));
	ms.dispose();
}