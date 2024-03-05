/*
	名字:	和你一起使用券(1年)
	地圖:	和你一起使用券(1年)
	描述:	騎乘技能
*/

function start() {
	im.gainItem(2430536, -1);
	im.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(80001114), 1, 1, im.getCurrentTime() + (365 * 24 * 60 * 60 * 1000));
	im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "角色獲得了新的騎獸技能"));
	im.dispose();
}