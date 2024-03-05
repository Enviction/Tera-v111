/*
	名字:	隱藏地圖
	地圖:	遺棄之塔&amp;lt;第5階段&gt;
	描述:	922010800
*/

function enter(pi) {
	var eim = pi.getPlayer().getEventInstance();
	if (eim.getProperty("stage8") == null) {
		return false;
		}
		pi.getPlayer().changeMap(pi.getMap(922010900), pi.getMap(922010900).getPortal(0)); //時空的裂縫
		return true;
}