/*
	名字:	菇菇歌唱森林
	地圖:	藍菇菇樹林2
	描述:	100020400
*/

var quest = [2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309, 2310, 2344, 2345, 2346];

function enter(pi) {
	for (var i = 0; i < quest.length; i++)
	if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() > 0) {
	if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest[i])).getStatus() < 2) {
		pi.getPlayer().changeMap(pi.getMap(106020001), pi.getMap(106020001).getPortal(0)); //動畫地圖
		return true;
		}
		pi.getPlayer().changeMap(pi.getMap(106020000), pi.getMap(106020000).getPortal(3)); //菇菇森林路口
		return true;
		}
		pi.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "The Mushroom Kingdom prohibits outsiders from visiting"));
		return false;
}