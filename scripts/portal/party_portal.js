var map =[910340100, 910340200, 910340300, 910340400];
var stage =[1, 2, 3, 4];

function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
	for (var i = 0; i < map.length; i++)
	if (pi.getPlayer().getMap().getId() == map[i]) {
		x = i;
		}
	if (pi.getPlayer().getMap().getId() == map[x] && eim.getProperty("stage" + stage[x]) != null) {
		pi.getPlayer().changeMap(pi.getMap(pi.getPlayer().getMap().getId() + 100), pi.getMap(pi.getPlayer().getMap().getId() + 100).getPortal(0));
		}
		return false;
}