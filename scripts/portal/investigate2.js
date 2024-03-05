/*
	名字:	菇菇王國
	地圖:	城壁邊邊
	描述:	106020500
*/

function enter(pi) {
	if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2322)).getCustomData() == 0) {
		pi.openNpc(1300014);
		}
		return false;
}