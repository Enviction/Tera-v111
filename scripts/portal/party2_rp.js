/*
	名字:	隱藏地圖
	地圖:	遺棄之塔&amp;lt;第3階段&gt;
	描述:	922010600
*/

function enter(pi) {
	x = pi.getPortal().getName();
	eim = pi.getPlayer().getEventInstance();
	for (var i = 0; i < 10; i++) {
	if (eim.getProperty(i + "st") == null) {
		eim.setProperty(i + "st", ("pt"+ i) + Math.floor(Math.random() * 3));
		}
	if (eim.getProperty(i + "st") == x) {
		pi.getClient().getSession().write(Packages.tools.packet.CField.instantMapWarp(pi.getPlayer().getMap().getPortal("np0" + pi.getPortal().getName().substring(2, 3)).getId()));
		pi.getPlayer().getMap().movePlayer(pi.getPlayer(), new java.awt.Point(pi.getPlayer().getMap().getPortal("np0" + pi.getPortal().getName().substring(2, 3)).getPosition()));
		pi.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("an" + pi.getPortal().getName().substring(2, 4), 2));
		return true;
		}
		}
		pi.getClient().getSession().write(Packages.tools.packet.CField.instantMapWarp(pi.getPlayer().getMap().getPortal("npFail").getId()));
		pi.getPlayer().getMap().movePlayer(pi.getPlayer(), new java.awt.Point(pi.getPlayer().getMap().getPortal("npFail").getPosition()));
		return true;
}