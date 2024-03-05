/*
	名字:	摩托車騎士使用券
	地圖:	摩托車騎士使用券
	描述:	騎乘技能
*/

function start() {
	im.gainItem(2430329, -1);
	im.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(80001018), 1, 1, -1);
	im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "角色獲得了新的騎獸技能"));
	im.dispose();
}