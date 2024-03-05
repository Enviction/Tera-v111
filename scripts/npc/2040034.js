/*
	名字:	標示牌
	地圖:	愛奧斯塔101樓
	描述:	221023300
*/

function start() {
	cm.sendSimple("#e<Party Quest: Dimensional Crack>#n \r\n\r\nA dimensional crack has appeared in Ludibrium, and we need brave adventurers to defeat the invading monsters. Please, please find a few reliable friends to help us save the toy city. You need to go in to challenge monsters, solve mysteries, and ultimately challenge the powerful #o9300012#. \r\n\r\n Number of players: 3 ~ 6 \r\n Level range: 35 ~ 69 \r\n Time limit: 20 minutes\r\n#L0##bEnter the mission map#l");
}

function action(mode, type, selection) {
	if (mode > 0) {
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
			var chat = "Sorry, because your group size is not within the entry requirements, some group members are not eligible to attempt this mission, or they are not in this map.\r\n\r\nNumber of players: 3 ~ 6 \r\nLevel range: 35 ~ 69 \r\n\r\n";
			var chenhui = 0;
			var party = cm.getPlayer().getParty().getMembers();
			for (var i = 0; i < party.size(); i++)
		if (party.get(i).getLevel() < 35 || party.get(i).getLevel() > 69 || party.get(i).getMapid() != 221023300 || party.size() < 3) {
			chat += "#bName: " + party.get(i).getName() + " / (Level: " + party.get(i).getLevel() + ") / Map: #m" + party.get(i).getMapid() + "#\r\n";
			chenhui++;
			}
		if (chenhui != 0) {
			cm.sendOk(chat);
			cm.dispose();
			return;
			}
			var em = cm.getEventManager("LudiPQ");
			var prop = em.getProperty("state");
		if (prop == null || prop == 0) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
			cm.dispose();
			return;
			}
			cm.sendOk("The Dimensional Rift mission is in progress, please try other channels.");
			}
			cm.dispose();
}