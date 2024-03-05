/*
	名字:	黃金羅盤 
	地圖:	黃金羅盤 
	描述:	特殊消耗品
*/

function start() {
	for (var i = 390000000; i < 390000005; i++)
	if (im.getMap(i).getCharacters().size() < 1) {
		im.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("RICHIE"));
		im.getPlayer().changeMap(im.getMap(i), im.getMap(i).getPortal(0));
		im.gainItem(2430030, -1);
		im.dispose();
		return;
		}
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "黃金羅盤暫時無法指定方位，請稍後再試"));
		im.dispose();
}