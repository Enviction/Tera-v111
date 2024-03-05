/*
	Lakelis - Victoria Road: Kerning City (103000000)
**/

function start() {
	if (cm.getPlayer().getMap().getId() == 103000000)
		cm.sendSimple("Traveler! Have you heard of the Party Quest <First Time Together>? This is a mission that requires facing many puzzles and difficulties. You can invite your friends to accompany you. \r\n#L0##bEnter #m910340700##l");
	else
		cm.sendSimple("#e<Party Quest: First Time Together>#n\r\n\r\nIs there any brave adventurer who wants to participate in this event? Work with your friends to complete all the tasks and finally defeat #o9300003#, you can get generous rewards! If you want to challenge, please ask the team leader to talk to me. \r\n\r\n Number of players: 3 ~ 6 \r\n Level range: 20 ~ 30 \r\n Time limit: 20 minutes\r\n#L0##bEnter the party quest#l");
}

function action(mode, type, selection) {
	if (mode > 0) {
		if (cm.getPlayer().getMap().getId() == 103000000) {
			cm.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("MULUNG_TC"));
			cm.getPlayer().changeMap(cm.getMap(910340700), cm.getMap(910340700).getPortal(1));
			cm.dispose();
			return;
			}
		if (cm.getPlayer().getParty() == null) {
			cm.sendOk("I'm sorry, the monsters inside are dangerous, and I can't let you take the risk alone.");
			cm.dispose();
			return;
			}
		if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
			cm.sendOk("If you want to perform this mission, please tell your team leader to talk to me.");
			cm.dispose();
			return;
			}
			var chat = "Sorry, because your group size is not within the entry requirements, some group members are not eligible to attempt this mission, or they are not in this map.\r\n\r\nNumber of players: 3 ~ 6 \r\nLevel range: 20 ~ 30 \r\n\r\n";
			var chenhui = 0;
			var party = cm.getPlayer().getParty().getMembers();
			for (var i = 0; i < party.size(); i++)
		if (party.get(i).getLevel() < 20 || party.get(i).getLevel() > 30 || party.get(i).getMapid() != 910340700 || party.size() < 2) {
			chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
			chenhui++;
			}
		if (chenhui != 0) {
			cm.sendOk(chat);
			cm.dispose();
			return;
			}
			var em = cm.getEventManager("KerningPQ");
			var prop = em.getProperty("state");
		if (prop == null || prop == 0) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
			cm.dispose();
			return;
			}
			cm.sendOk("The Party Quest is in progress, please try other channels.");
			}
			cm.dispose();
}