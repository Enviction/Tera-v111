/**
	Cloto - Hidden Street : 1st Accompaniment
**/

var stage1Questions = Array(
	"Please listen to the question: What is the minimum level required for a warrior to job advance? Please collect the number of passes that answer the question and give it to me.",
    "Please listen to the question: What is the minimum str required for a warrior to turn around? Please collect the number of passes required for the answer and give them to me.",
    "Please listen to the question: What is the minimum int required to become a mage? Please collect the number of passes required for the answer and give it to me.",
    "Please listen to the question: What is the minimum dex required for an archer to turn around? Please collect the number of passes for the answer and give them to me.",
    "Please listen to the question: What is the minimum dex required for a thief to become a thief? Please collect the number of passes required for the answer and give them to me.",
    "Please listen to the question: What is the level required for the second job advancement? Please collect the number of passes that answer the question and give it to me.",
    "Please listen to the question: What is the minimum level required to become a mage? Please collect the number of passes required for the answer and give them to me.");

var stage1Answers = Array(10, 35, 20, 25, 25, 30, 8);

var prizeIdScroll = Array(2040502, 2040505,					// Overall DEX and DEF
    2040802,										// Gloves for DEX
    2040002, 2040402, 2040602);						// Helmet, Topwear and Bottomwear for DEF
var prizeIdUse = Array(2000001, 2000002, 2000003, 2000006,	// Orange, White and Blue Potions and Mana Elixir
    2000004, 2022000, 2022003);						// Elixir, Pure Water and Unagi
var prizeQtyUse = Array(80, 80, 80, 50,
    5, 15, 15);
var prizeIdEquip = Array(1032004, 1032005, 1032009,			// Level 20-25 Earrings
    1032006, 1032007, 1032010,						// Level 30 Earrings
    1032002,										// Level 35 Earring
    1002026, 1002089, 1002090);						// Bamboo Hats
var prizeIdEtc = Array(4010000, 4010001, 4010002, 4010003,	// Mineral Ores
    4010004, 4010005, 4010006,						// Mineral Ores
    4020000, 4020001, 4020002, 4020003,				// Jewel Ores
    4020004, 4020005, 4020006,						// Jewel Ores
    4020007, 4020008, 4003000);						// Diamond and Black Crystal Ores and Screws
var prizeQtyEtc = Array(15, 15, 15, 15,
    8, 8, 8,
    8, 8, 8, 8,
    8, 8, 8,
    3, 3, 30);

function start() {
	var eim = cm.getPlayer().getEventInstance();
	switch(cm.getPlayer().getMap().getId()) {
	case 910340100:
		if (eim.getProperty("stage1") == null) {
		if (cm.getPlayer().getParty().getLeader().getId() == cm.getPlayer().getId()) {
			var numpasses = eim.getPlayerCount() - 1; // minus leader
			var stage2 = cm.getPlayer().getParty().getMembers().size() -1 ; //需要繳納的通行證數量
		if (cm.getPlayer().itemQuantity(4001008) == numpasses) {
			cm.sendNext("You collected " + numpasses + " passes, congratulations on passing this level. The portal to the next area has opened, there is a time limit to get there, so hurry.");
			eim.setProperty("stage1", 1);
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("gate", 2));
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/clear", 3));
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Clear", 4));
			cm.removeAll(4001008);
			cm.dispose();
			return;
			}
			cm.sendNext("Welcome to the first trip <No. 1 Pass>. At this stage, the team leader needs to collect " + numpasses + " passes from the team members and give them to me before they can enter the next area. Please let each team member Only by completing the tasks assigned by me can you obtain the pass.");
			cm.dispose();
			return;
			}
		if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
			var data = eim.getProperty(cm.getPlayer().getName()); //加入隊員名稱判斷

		if (data == 0) {
			cm.sendNext("Thank you for bringing me the pass. Please give this #v4001008# to your team leader.");
			cm.dispose();
			return;
			}
		if (data == null) {
			data = Math.floor(Math.random() * stage1Questions.length) + 1;   //data will be counted from 1
			eim.setProperty(cm.getPlayer().getName(), data); //給與隊員問題判斷
			var question = stage1Questions[data - 1];
			cm.sendNext("Welcome to your first trip <No. 1 Pass>. In this stage, you must hunt nearby monsters, obtain the correct answers to my questions, and give me the corresponding number of passes.\r\n\r\n" + question);
			cm.dispose();
			return;
			}
			var answer = stage1Answers[data - 1];

		if (cm.getPlayer().itemQuantity(4001007) == answer) {
			cm.sendNext("The answer is correct. Therefore, you have just received a pass. Please give this #v4001008# to your team leader.");
			cm.gainItem(4001007, -answer);
			cm.gainItem(4001008, 1);
			eim.setProperty(cm.getPlayer().getName(), 0); //給與隊員答題判斷
			cm.dispose();
			return;
			}
			var question = stage1Questions[eim.getProperty(cm.getPlayer().getName()) - 1]; //問題識別判斷
			cm.sendNext("Sorry, the number of passes you brought is inconsistent with the correct answer to the question. You currently hold: #b#c4001007##k passes\r\n" + question);
			cm.dispose();
			return;
			}
			}
			cm.sendOk("The entrance to the next area has been opened.");
			cm.dispose();
			break;
	case 910340200:
		if (eim.getProperty("stage2") == null) {
        if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
            cm.sendOk("Welcome to our first trip <Pass No. 2>, please follow the instructions of the team leader to challenge this level.");
            cm.dispose();
            return;
        }
        if (eim.getProperty("stage2a") == null) {
            cm.sendOk("Welcome to your first trip <Level 2>. You will find some ropes, two of which are connected to the portal leading to the next level. What you need to do is to let two team members# bClimb up the correct rope #k. When the team members have climbed to the correct position, please ask the captain to talk to me.\r\n\r\nNote that if you climb too low, you will not get the correct answer. If you have the correct combination , the portal will open.");
            eim.setProperty("stage2a", 1);
            cm.dispose();
            return;
        }
		if (eim.getProperty("stage2b") == null) {
			eim.setProperty("stage2b", (Math.random() < 0.3) ? "0101" : (Math.random() < 0.5) ? "0011" : "1001");
			}
			var chenhui = 0;
			for (var i = 0; i < 4; i++)
			if (cm.getPlayer().getMap().getNumPlayersItemsInArea(i) > 0) {
			chenhui++;
			}
		if (chenhui != 2) {
			cm.sendOk("It seems that you haven't found the right method yet. You need to have two team members #b climb on top of the rope #k to form different combinations.");
			cm.dispose();
			return;
			}
			var x = "";
			for (var i = 0; i < 4; i++)
			x += cm.getPlayer().getMap().getNumPlayersItemsInArea(i);
			y = x;
		if (y == eim.getProperty("stage2b")) {
			eim.setProperty("stage2", 1);
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("gate", 2));
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/clear", 3));
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Clear", 4));
			cm.sendOk("With the correct combination, the entrance to the next area has been opened.");
			cm.dispose();
			return;
			}
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/wrong_kor", 3));
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Failed", 4));
			cm.sendNext("The combination is wrong. It seems that you haven't found the correct 2 ropes yet. Please continue to adjust the position.");
			cm.dispose();
			return;
			}
			cm.sendOk("The entrance to the next area has been opened.");
			cm.dispose();
			break;
	case 910340300:
		if (eim.getProperty("stage3") == null) {
		if (cm.getPlayer().getParty().getLeader().getId() != cm.getPlayer().getId()) {
			cm.sendOk("Welcome to your first trip to <Pass No. 3>. Please follow the instructions of the team leader to challenge this level.");
			cm.dispose();
			return;
			}
		if (eim.getProperty("stage3a") == null) {
			cm.sendOk("Welcome to your first trip <Level 3>. You will find some platforms, two of which are connected to the portal leading to the next level. What you need to do is to let the two team members #b stand on the correct #k on the platform. When you have taken your position, ask the captain to talk to me. \r\n\r\nNote that if you stand too close to the edge, you will not get the correct answer. If you have the correct combination, the portal will open.");
			eim.setProperty("stage3a", 1);
			cm.dispose();
			return;
			}
		if (eim.getProperty("stage3b") == null) {
			eim.setProperty("stage3b", (Math.random() < 0.3) ? "00101" : (Math.random() < 0.5) ? "00011" : "10001");
			}
			var chenhui = 0;
			for (var i = 0; i < 5; i++)
			if (cm.getPlayer().getMap().getNumPlayersItemsInArea(i) > 0) {
			chenhui++;
			}
		if (chenhui != 2) {
			cm.sendOk("It seems that you haven't found the right method yet. You need to have two team members #b stand on the platform #k to form different combinations.");
			cm.dispose();
			return;
			}
			var x = "";
			for (var i = 0; i < 5; i++)
			x += cm.getPlayer().getMap().getNumPlayersItemsInArea(i);
			y = x;
		if (y == eim.getProperty("stage3b")) {
			eim.setProperty("stage3", 1);
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("gate", 2));
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/clear", 3));
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Clear", 4));
			cm.sendOk("With the correct combination, the entrance to the next area has been opened.");
			cm.dispose();
			return;
			}
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/wrong_kor", 3));
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Failed", 4));
			cm.sendNext("The combination is wrong. It seems that you have not found the correct 2 platforms. Please continue to adjust the positions.");
			cm.dispose();
			return;
			}
			cm.sendOk("The entrance to the next area has been opened.");
			cm.dispose();
			break;
	case 910340400:
		if (eim.getProperty("stage4") == null) {
		if (cm.getPlayer().itemQuantity(4001008) > 18) {
			cm.sendOk("Everyone behaved very well, and the entrance to the next area has been opened.");
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("gate", 2));
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/clear", 3));
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Clear", 4));
			eim.setProperty("stage4", 1);
			cm.gainItem(4001008, -19);
			cm.dispose();
			return;
			}
			cm.sendOk("Hello, welcome to your first trip <Pass No. 4>. Walk around the map and you will be able to find some monsters. Defeat all the monsters. After collecting all the passes, hand them over to me.");
			cm.dispose();
			return;
			}
			cm.sendOk("The entrance to the next area has been opened.");
			cm.dispose();
			break;
	case 910340500:
		if (eim.getProperty("stage5") == null) {
		if (cm.getMap(910340500).getAllMonstersThreadsafe().size() < 1) {
			cm.sendNext("Congratulations on completing all challenges, please wait to be transferred to the final bonus level. The monsters inside are easier to defeat than ordinary ones. You will have a period of time to hunt as much as possible, and you can also end the conversation with NPC early. ");
            cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CWvsContext.serverNotice(6, "Congratulations on completing all challenges. Please wait to be transferred to the final bonus level. The monsters inside are easier to defeat than ordinary ones. , you will have a period of time to hunt as much as possible, or you can end the conversation early with the NPC"));
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/clear", 3));
			cm.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Clear", 4));
			cm.getEventInstance().startEventTimer(1 * 10000);
			eim.setProperty("stage5", 1);
			cm.dispose();
			return;
			}
			cm.sendOk("Hello, welcome to the first journey <The Last Pass>, which is also the last stage. Please destroy #o9300003# in the map to enter the bonus stage.");
			cm.dispose();
			return;
			}
			cm.sendOk("Please wait patiently, you will enter the final bonus level after the countdown.");
			getPrize(eim,cm);
			cm.dispose();
    }
  }

  function getPrize(eim,cm) {
      var itemSetSel = Math.random();
      var itemSet;
      var itemSetQty;
      var hasQty = false;
      if (itemSetSel < 0.3)
  	itemSet = prizeIdScroll;
      else if (itemSetSel < 0.6)
  	itemSet = prizeIdEquip;
      else if (itemSetSel < 0.9) {
  	itemSet = prizeIdUse;
  	itemSetQty = prizeQtyUse;
  	hasQty = true;
      } else {
  	itemSet = prizeIdEtc;
  	itemSetQty = prizeQtyEtc;
  	hasQty = true;
      }
      var sel = Math.floor(Math.random()*itemSet.length);
      var qty = 1;
      if (hasQty)
  	qty = itemSetQty[sel];
      cm.gainItem(itemSet[sel], qty);
  	if (cm.isGMS()) { //TODO JUMP
  		cm.gainItem(4001531, 1);
  	}
      cm.gainNX(1000);
  	  cm.gainExp_PQ(35, 1.5);
      cm.removeAll(4001007);
      cm.removeAll(4001008);
      cm.getPlayer().endPartyQuest(1201);
      cm.warp(cm.isGMS() ? 910340600 : 910340700, 0);

  }