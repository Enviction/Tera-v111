/*
	名字:	藍氣球
	地圖:	遺棄之塔&amp;lt;第5階段&gt;
	描述:	922010800
*/

function start() {
	var eim = cm.getPlayer().getEventInstance();
	if (eim.getProperty("stage8") == null) { //判斷條件
		if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
			cm.sendOk("Welcome to the Abandoned Tower <Phase 5>, please follow the team leader's instructions to challenge this level.");
            cm.dispose();
            return;
            }
            if (eim.getProperty("stage8a") == null) {
            cm.sendOk("Welcome to the Abandoned Tower <Stage 5>. In this stage, two team members need to stand on these numbered blocks to form the correct combination to unlock the next stage." ) ;
            eim.setProperty("stage8a", 0);
            cm.dispose();
            return;
            }
		if (eim.getProperty("stage8b") == null) {
			var countPicked = 0;
			var positions = Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
			while(countPicked < 2) { //2名組員的組合
			var picked = Math.floor(Math.random() * positions.length);
		if (positions[picked] == 1) // Don't let it pick one its already picked.
			continue;
			positions[picked] = 1;
			countPicked++;
			}
			var returnString = "";
			for(var i = 0; i < positions.length; i++) {
			returnString += positions[i];
		if (i != positions.length - 1)
			returnString += "";
			}
			eim.setProperty("stage8b", returnString);
			}
			var chenhui = 0;
			for (var i = 0; i < 9; i++)
			if (cm.getPlayer().getMap().getNumPlayersItemsInArea(i) > 0) {
			chenhui++;
			}
		if (chenhui != 2) {
			cm.sendOk("It seems you haven't found the correct method yet. Two team members need to stand on these numbered squares to form the correct combination.");
            cm.dispose();
            return;
            }
            var x = "";
            for (var i = 0; i < 9; i++)
            x += cm.getPlayer().getMap().getNumPlayersItemsInArea(i);
            y = x;
            if (y == eim.getProperty("stage8b")) {
            eim.setProperty("stage8", 1);
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("gate", 2));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/clear", 3));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Clear", 4));
            cm.sendOk("The combination is correct, the entrance to the next area has been opened.");
            cm.dispose();
            return;
            }
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/wrong_kor", 3));
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Failed", 4));
            cm.dispose();
            return;
            }
            cm.sendOk("The entrance to the next area has been opened.");
			cm.dispose();
}