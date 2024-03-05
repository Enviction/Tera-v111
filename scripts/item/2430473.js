/*
	名字:	瘋狂成長秘藥
	地圖:	瘋狂成長秘藥
	描述:	特殊消耗品
*/

function start() {
	if (im.getPlayer().getLevel() > 199) {
		im.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "200等以上的角色無法使用該道具"));
		im.dispose();
		return;
		}
		im.gainItem(2430473, -1);
		im.getPlayer().levelUp();//給予一個等級
		im.dispose();
}