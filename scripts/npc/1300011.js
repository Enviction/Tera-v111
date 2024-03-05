/*
	名字:	荊棘解除劑
	地圖:	菇菇森林深處
	描述:	106020300
*/

function start() {
	cm.sendYesNo("#bWant to use thorn remover?#k");
}

function action(mode, type, selection) {
	if (mode > 0) {
		if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2324)).getStatus() < 1) {
		cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2324)).setStatus(1);
		}
		cm.gainItem(2430015, -1);
		cm.getPlayer().changeMap(cm.getMap(106020502), cm.getMap(106020502).getPortal(0)); //城壁邊邊
		var tick = 0;
		schedule = Packages.server.Timer.EtcTimer.getInstance().register(function () {
		if (tick == 1) {
			cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2324)).setCustomData(1);
			cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2324)), true);
			schedule.cancel(true);
			cm.dispose();
			return;
			}
			tick++;
		}, 10000);
		}
		cm.dispose();
}