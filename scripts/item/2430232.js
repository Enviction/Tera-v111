/*
	名字:	福滿10日使用券
	地圖:	福滿10日使用券
	描述:	騎乘技能
*/

function start() {
	im.gainItem(2430232, -1);
	im.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(80001023), 1, 1, im.getCurrentTime() + (10 * 24 * 60 * 60 * 1000));
	im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "角色獲得了新的騎獸技能"));
	im.dispose();
}