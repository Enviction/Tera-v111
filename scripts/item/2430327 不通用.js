/*
	名字:	柏青哥機器使用券
	地圖:	柏青哥機器使用券
	描述:	騎乘技能
*/

function start() {
	y = im.getPlayer().getJob();
	if (y == 3100 || y == 3110 || y == 3111 || y == 3112 || y == 2300 || y == 2310 || y == 2311 || y == 2312) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "此職業群不適用本交換券"));
		im.dispose();
		return;
		}
		im.gainItem(2430327, -1);
		im.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(y < 1000 ? 1130 : y < 2000 ? 10001130 : y < 2200 ? 20001130 : y < 2300 ? 20011130 : 30001130), 1, 1, -1);
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "角色獲得了新的騎獸技能"));
		im.dispose();
}