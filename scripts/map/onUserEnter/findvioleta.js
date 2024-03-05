/*
	名字:	菇菇王國
	地圖:	結婚禮堂
	描述:	106021600
*/

function start() {
	if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2332)).getStatus() == 1) {
		ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2332)).setCustomData(1);
		ms.getPlayer().updateQuest(ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2332)), true);
		}
	if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2333)).getStatus() == 1) {
		ms.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.MapleLifeFactory.getMonster(3300008), new java.awt.Point(292, 133));
		}
		ms.dispose();
}