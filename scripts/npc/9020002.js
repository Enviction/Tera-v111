/*
	Nella - Hidden Street : 1st Accompaniment
*/

var status;

function start() {
    status = -1;
    action(1,0,0);
}

var item = [4001007, 4001008];


function start() {
	if (cm.getPlayer().getMap().getId() == 910340000)
		cm.sendYesNo("This event has ended, you want to leave #b#m" + cm.getPlayer().getMap().getId() + "##k?");
        else
        cm.sendYesNo("Are you sure you want to leave #b#m" + cm.getPlayer().getMap().getId() + "##k?");
}

function action(mode, type, selection) {
	if (mode > 0) {
		for (var i = 0; i < item.length; i++)
		cm.removeAll(item[i]);
		map = cm.getPlayer().getMap().getId() == 910340000 ? 910340700 : 910340000;
		cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
		}
		cm.dispose();
}

