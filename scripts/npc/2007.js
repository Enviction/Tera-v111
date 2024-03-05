var status = -1;

	function start() {
        if (cm.getPlayer().getSubcategory() == 1) {
        		cm.sendOk("Begin your journey!");
        		cm.dispose();
        		return;
        		}
        	if (cm.getPlayer().getMap().getId() != 10000 || cm.getPlayer().getLevel() > 1) {
        		cm.sendOk("Begin your journey!");
        		cm.dispose();
        		return;
        		}
        		var chat = "Choose your path as an Explorer, Normal or Dual Blade?";
        		chat += "\r\n#L0#Normal Explorer";
        		chat += "\r\n#L1#Dual Blade";
        		cm.sendSimple(chat);
}

function action(mode, type, selection) {
    switch (selection) {
    	case 0:
    		cm.sendOk("Begin your journey!");
    		break;
    	case 1:
    		cm.getPlayer().setSubcategory(1);
    		cm.getPlayer().fakeRelog();
    		}
    		cm.dispose();
    }