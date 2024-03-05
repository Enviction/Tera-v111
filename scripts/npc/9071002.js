//Mary Monster Park ticket exchanger

function start() {
	var chat = "Hello! If you want to enjoy the Monster Park then you came to the right person! So what can i do for you?#b";
	chat += "\r\n#L0#Exchange #z4001514#";
	chat += "\r\n#L1#Exchange #z4001516#";
	chat += "\r\n#L2#Exchange #z4001522#";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	if (mode > 0) {
		if (cm.getPlayer().itemQuantity(selection < 1 ? 4001513 : selection < 2 ? 4001515 : 4001521) < 10) {
			cm.sendOk("To redeem the admission ticket, you need 10 #b#z" + (selection < 1 ? 4001513 : selection < 2 ? 4001515 : 4001521) + "##k pieces.");
			cm.dispose();
			return;
			}
		if (cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.ETC).getNumFreeSlot() < 1) {
			cm.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(1, "You do not have enough space."));
			cm.dispose();
			return;
			}
			cm.gainItem((selection < 1 ? 4001514 : selection < 2 ? 4001516 : 4001522), 1);
			cm.gainItem((selection < 1 ? 4001513 : selection < 2 ? 4001515 : 4001521), -10);
			cm.sendOk("Please grab your tickets and look forward to your next visit.");
			}
			cm.dispose();
}