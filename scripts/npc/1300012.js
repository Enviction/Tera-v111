/*
	名字:	東邊城塔門
	地圖:	東邊城塔
	描述:	106021400
*/

function start() {
	cm.sendSimple("Moving to the entrance of the wedding venue, where do you want to go? \r\n\r\n#L0##bDestroy the three brothers, Snow Yeti and King Pepe#l\r\n#L1#Rescue Princess#l");
}

function action(mode,type,selection) {
	switch(selection) {
	case 0:
		var em = cm.getEventManager("KingPepeAndYetis");
		var prop = em.getProperty("state");
		if (prop == null || prop == 0) {
			if (cm.getPlayer().getParty() == null) {
			em.startInstance(cm.getPlayer());
			cm.dispose();
			return;
			}
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
			cm.dispose();
			return;
			}
			cm.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "The wedding hall entrance is currently crowded, please try again later"));
			cm.dispose();
			break;
	case 1:
		cm.getPlayer().changeMap(cm.getMap(106021401), cm.getMap(106021401).getPortal(1));
		}
		cm.dispose();
}