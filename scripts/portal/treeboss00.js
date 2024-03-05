
function enter(pi) {
	if (!pi.getPlayer().itemQuantity(4000385)) {
		pi.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "The passage is closed, you need to find Captain Latonica's soul lantern to open it"));
		return false;
		}
	var em = pi.getEventManager("Krexel");
	var prop = em.getProperty("state");
	if (prop == null || prop == 0) {
		pi.gainItem(4000385, -1);
	if (pi.getPlayer().getParty() == null) {
		em.startInstance(pi.getPlayer());
		return true;
		}
		em.startInstance(pi.getPlayer().getParty(), pi.getPlayer().getMap(), 200);
		return true;
		} else {
		pi.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(6, "The Ruins of Krexel II is currently crowded, please try again later."));
		return false;
		}
}