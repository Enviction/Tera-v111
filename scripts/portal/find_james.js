/*
	名字:	菇菇王國
	地圖:	中央城塔
	描述:	106021201
*/

function enter(pi) {
	if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(2325)).getStatus() == 1) {
		pi.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.AranTutInstructionalBalloon("Effect/OnUserEff.img/normalEffect/mushroomcastle/chatBalloon2"));
		}
		return false;
}