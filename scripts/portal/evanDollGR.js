
function enter(pi) {
	if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22559)).getStatus() == 1) {
	if (pi.getMap(910600010).getCharacters().size() < 1) {
		pi.getMap(910600010).resetFully();
		pi.getPlayer().changeMap(pi.getMap(910600010), pi.getMap(910600010).getPortal(1)); //遺棄的基地
		pi.getPlayer().startMapTimeLimitTask(600, pi.getMap(100040000));
		return true;
		}
		pi.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "Abandoned Hideout is currently crowded, please try again later"));
		return false;
		}
	if (pi.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(22556)).getStatus() == 1) {
		Packages.server.quest.MapleQuest.getInstance(22598).forceStart(pi.getPlayer(), 0, 1);
		pi.getPlayer().getMap().spawnNpc(1013201, new java.awt.Point(129,-137));
		}
		pi.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "There is an unknown force in the abandoned hideout"));
		return false;
}