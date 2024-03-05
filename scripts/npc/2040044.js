/*
	名字:	紫氣球
	地圖:	時空的裂縫
	描述:	922010900
*/

function start() {
	var eim = cm.getPlayer().getEventInstance();
	if (eim.getProperty("stage9") == null) {
	if (!cm.getPlayer().itemQuantity(4001023)) {
		cm.sendOk("Welcome to the rift in time and space, please destroy the giant fighter and collect #v4001023# and give it to me");
                   cm.dispose();
                   return;
                   }
                   cm.sendOk("Congratulations on completing all challenges, please wait to be teleported to the Abandoned Tower <Bonus>.");
                   cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CWvsContext.serverNotice(6, "Congratulations on completing all challenges, please wait to be transferred to the Abandoned Tower <Bonus>"));
                   cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/clear", 3));
                   cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Clear", 4));
                   cm.getEventInstance().startEventTimer(1 * 10000);
                   cm.getPlayer().removeAll(4001023);
                   eim.setProperty("stage9", 1); //Give conditions
                   cm.dispose();
                   return;
                   }
                   cm.sendOk("Please wait patiently, you will enter the Abandoned Tower <Bonus> after the countdown.");
		cm.dispose();
}