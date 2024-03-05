/*
	名字:	菇菇王國
	地圖:	最後城塔
	描述:	106021402
*/

function enter(pi) {
	pi.getPlayer().changeMap(pi.getMap(106021401), pi.getMap(106021401).getPortal(2)); //結婚禮堂入口
	return true;
}