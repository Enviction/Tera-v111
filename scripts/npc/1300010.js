/*
	名字:	彩色菇菇芽孢
	地圖:	菇菇森林深處
	描述:	106020300
*/

function start() {
	cm.sendYesNo("#bWant to use colored mushroom spores? #k\r\n\r\n#r※ #eNotes#n\r\nPlease do not use it on people! \r\nAfter swallowing by mistake, please go to a nearby hospital for medical treatment as soon as possible!");
}

function action(mode, type, selection) {
	if (mode > 0) {
		cm.gainItem(2430014, -1);
		cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)).setCustomData(2);
		cm.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "The magic barrier has been broken"));
		}
		cm.dispose();
}