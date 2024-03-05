/*
	名字:	精靈之光
	地圖:	精靈之光
	描述:	任務消耗品
*/

function start() {
	if (!(im.getPlayer().getMap().getId() == 270000000 && im.getPlayer().getPosition().x > -2154 && im.getPlayer().getPosition().x < -1754 && im.getPlayer().getPosition().y > 78)) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "未到達秘密通道傳送點附近，無法使用精靈之光"));
		im.dispose();
		return;
		}
		im.gainItem(2430564, -1);
		im.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20755)).setCustomData("Complete");
		im.getPlayer().updateQuest(im.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(20755)), true);
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "精靈之光的魔法破壞了次元裂縫入口的結界"));
		im.dispose();
}