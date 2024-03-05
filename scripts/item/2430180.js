/*
	名字:	結界的圖騰
	地圖:	結界的圖騰
	描述:	任務消耗品
*/

function start() {
	if (im.getPlayer().getMap().getId() != 211041400) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "未到達亡者之林Ⅳ，無法使用結界的圖騰"));
		im.dispose();
		return;
		}
		im.gainItem(2430180, -1);
		im.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3192)).setCustomData(1);
		im.getPlayer().updateQuest(im.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(3192)), true);
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "結界的圖騰發出耀眼的光芒，開始燃起火焰，刻在圖騰上的亞凱斯特的結界魔法發動了"));
		im.dispose();
}