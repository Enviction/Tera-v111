/*
	名字:	ZD虎網咖使用券
	地圖:	ZD虎網咖使用券
	描述:	騎乘技能
*/

function start() {
	im.gainItem(2430079, -1);
	im.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(80001010), 1, 1, im.getCurrentTime() + (2 * 60 * 60 * 1000));
	im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "角色獲得了新的騎獸技能"));
	im.dispose();
}