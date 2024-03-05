/*
	名字:	亞凱斯特的水晶
	地圖:	亞凱斯特的水晶
	描述:	任務消耗品
*/

function start() {
	if (im.getPlayer().getMap().getId() != 211060400) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "這裡還沒到莫特附近，得小心點。要是一不小心使用掉了就麻煩了"));
		im.dispose();
		return;
		}
		im.gainItem(2430159, -1);
		im.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3182)).setCustomData("211060400");
		im.getPlayer().updateQuest(im.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3182)), true);
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "亞凱斯特的水晶發出神秘的光芒，莫特身上的詛咒被瓦解了"));
		im.dispose();
}