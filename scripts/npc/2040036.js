/*
	名字:	紅氣球
	地圖:	遺棄之塔&amp;lt;第1階段&gt;
	描述:	922010100
*/

function start() {
	var eim = cm.getPlayer().getEventInstance();
	if (eim.getProperty("stage1") == null) {
	if (cm.getPlayer().itemQuantity(4001022) < 20) {
		cm.sendOk("Welcome to the Abandoned Tower <Phase 1>, please search nearby. The entire team needs to collect 20 #b#t4001022##k and give them to me.");
        cm.dispose();
        return;
        }
        cm.sendOk("The first stage has been successfully passed, and the entrance to the next area has been opened.");
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("gate", 2));
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/clear", 3));
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Clear", 4));
        cm.getPlayer().removeAll(4001022);
        eim.setProperty("stage1", 1); //Give conditions
        cm.dispose();
        return;
        }
        cm.sendOk("Successfully passed the level, the entrance to the <Second Stage> has been opened.");
		cm.dispose();
}