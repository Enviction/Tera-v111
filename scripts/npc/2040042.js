/*
	名字:	天藍氣球
	地圖:	遺棄之塔&amp;lt;第4階段&gt;
	描述:	922010700
*/

function start() {
	var eim = cm.getPlayer().getEventInstance();
	if (eim.getProperty("stage4") == null) {
	if (cm.getPlayer().itemQuantity(4001022) < 4) {
		cm.sendOk("Welcome to the Abandoned Tower <Phase 4>, please search nearby. The entire group needs to collect 4 #b#t4001022##k and give it to me. ");
                   cm.dispose();
                   return;
                   }
                   cm.sendOk("The fourth stage has been successfully passed, and the entrance to the next area has been opened.");
                   cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("gate", 2));
                   cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/clear", 3));
                   cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Clear", 4));
                   cm.getPlayer().removeAll(4001022);
                   eim.setProperty("stage4", 1); //Give conditions
                   cm.dispose();
                   return;
                   }
                   cm.sendOk("Successfully passed the level, the entrance to the <Fifth Stage> has been opened.");
		cm.dispose();
}