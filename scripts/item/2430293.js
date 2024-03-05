/*
	名字:	颶風戰機使用券
	地圖:	颶風戰機使用券
	描述:	騎乘技能
*/

function start() {
	im.gainItem(2430293, -1);
	im.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(80001066), 1, 1, -1);
	im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "角色獲得了新的騎獸技能"));
	im.dispose();
}