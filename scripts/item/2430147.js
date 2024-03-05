/*
	名字:	OS3A Robot 30-Day Coupon
	地圖:	OS3A Robot 30-Day Coupon
	描述:	騎乘技能
*/

function start() {
	im.gainItem(2430147, -1);
	im.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(80001053), 1, 1, im.getCurrentTime() + (30 * 24 * 60 * 60 * 1000));
	im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "角色獲得了新的騎獸技能"));
	im.dispose();
}