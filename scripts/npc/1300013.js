/*
	名字:	堵塞的入口
	地圖:	最後城塔
	描述:	106021402
*/

var map = 106021600;
var num = 10;

function start() {
	cm.sendYesNo("Use the wedding venue key to enter the wedding venue. Want to enter?");
}

function action(mode,type,selection) {
	if (mode > 0) {
		for (var i = 0; i < num; i++)
		if (cm.getMap(map + i).getCharacters().size() < 1) {
			cm.getMap(map + i).resetFully();
			cm.getPlayer().changeMap(cm.getMap(map + i), cm.getMap(map + i).getPortal(1));
			cm.getPlayer().startMapTimeLimitTask(1800, cm.getMap(106021402));
			cm.dispose();
			return;
			}
			cm.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "The wedding hall is currently crowded, please try again later"));
			}
			cm.dispose();
}