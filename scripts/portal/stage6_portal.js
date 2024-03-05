/*
	名字:	隱藏地圖
	地圖:	遺棄之塔&amp;lt;第3階段&gt;
	描述:	922010600
*/

function enter(pi) {
	var map = pi.getPlayer().getMap().getId() + 100;
	pi.getPlayer().changeMap(pi.getMap(map), pi.getMap(map).getPortal(0));
	return false;
}