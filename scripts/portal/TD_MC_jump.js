/*
	名字:	菇菇王國
	地圖:	絕壁的影子
	描述:	106020403
*/

function enter(pi) {
	var num = Math.floor(Math.random() * 3);
	pi.getPlayer().changeMap(pi.getMap(num < 1 ? 106020600 : 106020601), pi.getMap(num < 1 ? 106020600 : 106020601).getPortal(0));//哨兵的哨所
	return true;
}