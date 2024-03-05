/*
	名字:	提神飲料-熊的力量
	地圖:	提神飲料-熊的力量
	描述:	特殊消耗品
*/

function start() {
	if (im.getPlayer().getFatigue() < 1) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "角色精力飽滿，不需要飲用提神飲品"));
		im.dispose();
		return;
		}
		im.gainItem(2430227, -1);
		im.getPlayer().setFatigue(im.getPlayer().getFatigue() - 50);
		im.dispose();
}