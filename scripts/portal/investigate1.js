/*
	名字:	菇菇王國
	地圖:	菇菇森林深處
	描述:	106020300
*/

function enter(pi) {
	if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)).getStatus() == 1 && pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)).getCustomData() != 1) {
		pi.openNpc(1300014);
		}
		return false;
}