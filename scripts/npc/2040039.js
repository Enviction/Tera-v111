/*
	名字:	黃綠氣球
	地圖:	遺棄之塔&amp;lt;第2階段&gt;
	描述:	922010400
*/

function start() {
	var eim = cm.getPlayer().getEventInstance();
	if (eim.getProperty("stage2") == null) {
	if (cm.getPlayer().itemQuantity(4001022) < 14) {
		cm.sendOk("Welcome to the Abandoned Tower <Phase 2>, please search nearby. The entire team needs to collect 14 #b#t4001022##k and give it to me.");
        cm.dispose();
        return;
        }
        cm.sendOk("The second stage has been successfully passed, and the entrance to the next area has been opened.");
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("gate", 2));
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/clear", 3));
        cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Clear", 4));
        cm.getPlayer().removeAll(4001022);
        eim.setProperty("stage2", 1); //Give conditions
        cm.dispose();
        return;
        }
        cm.sendOk("Successfully passed the level, the entrance to the <third stage> has been opened。");
		cm.dispose();
}