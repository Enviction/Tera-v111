/*
	名字:	安全！
	地圖:	菇菇森林深處
	描述:	106020300
*/

function start() {
	if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2322)).getStatus() == 1 && cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2322)).getCustomData() < 1) {
		cm.sendOkS("Terrifying thorn vines grow on the towering city walls. How to enter the castle... Alas! Go back and tell #b#p1300003##k.", 3);
		cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2322)).setCustomData(1);
		cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2322)), true);
		cm.dispose();
		return;
		}
	if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)).getStatus() == 1) {
		cm.sendNextS("This... seems to be a powerful magical barrier generated by some kind of mushroom spores. It should be impossible to break with physical force and attacks. Please go back and tell #b#p1300003##k.", 3);
		cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)).setCustomData(1);
		cm.getPlayer().updateQuest(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2314)), true);
}
}

function action(mode, type, selection) {
	if (mode > 0)
		cm.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/normalEffect/mushroomcastle/chatBalloon1"));
		cm.dispose();
}