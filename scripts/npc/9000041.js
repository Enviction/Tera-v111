/* 
 * NPC  : Donations
 * Maps : Every town
 */

var reward = [1302020, 1382009, 1462014, 1472030, 1482020, 1492020, 1302030, 1332025, 1382012, 1412011, 1422014, 1432012, 1442024, 1452022, 1462019, 1472032, 1482021, 1492021, 1302064, 1312032, 1322054, 1332055, 1332056, 1372034, 1382039, 1402039, 1412027, 1422029, 1432040, 1442051, 1452045, 1462040, 1472055, 1482022, 1492022, 1092045, 1092046, 1092047, 4005000, 4005001, 4005002, 4005003, 1002419, 4005004, 4021000, 4021001, 4021002, 4021003, 4021004, 4021005, 4021006, 4021007, 4021008, 2002023, 2022121, 2022195, 2022439, 2022440, 2022441, 2022308, 2022307, 2002028, 2002029, 2022306, 2022305];

var status;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	switch (mode) {
	case -1:
		cm.dispose();
		return;
	case 0:
		if (status < 2) {
		cm.dispose();
		return;
		}
		status--;
		break;
	case 1:
		status++;
		break;
		}
	switch (status) {
	case 0:
		if (cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29503)).getStatus() == 1)
			cm.sendSimple("It says in small letters, please pay the donation for village construction! You will be rewarded for your good deeds. \r\n#L1##bDonate Meso to MapleStory World#l");
		else
			cm.sendSimple("Hello, did you collect #b#v4001126##z4001126##k during hunting? I'm collecting them. \r\n#L0##bDonate 10 maple leaves#l");
			break;
	case 1:
		select = selection;
		if (selection == 0) {
			if (cm.getPlayer().itemQuantity(4001126) < 10) {
			cm.sendOk("#v4001126#If the quantity is insufficient, any monster in MapleStory may drop it.");
			cm.dispose();
			return;
			}
			var random = Math.floor(Math.random() * reward.length * 5);
			if (random < reward.length) {
			if (cm.canHold(reward[random])) {
			var item = cm.gainItem(reward[random], 1);
			cm.gainItem(4001126, -10);
			cm.sendOk("Congratulations, this time the reward is #v" + reward[random] + "# as a reward for you.");
			cm.dispose();
			return;
			}
			cm.sendOk("Please check your backpack for space before receiving your items.");
			cm.dispose();
			return;
			}
			cm.gainItem(4001126, -10);
			var meso = Math.floor(Math.random() * 200000);
			cm.gainMeso(meso);
			cm.sendOk("Thank you very much for your support, please accept " + meso + " maple coins as encouragement.");
			cm.dispose();
			}
		if (selection == 1) {
			cm.sendGetNumber("Please enter the amount you would like to donate.", 1, 1, 999999999);
			}
			break;
	case 2:
		cm.gainMeso(-selection);
		cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29503)).setCustomData(parseInt(cm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29503)).getCustomData()) + selection);
		cm.sendOk("Thank you for your support of MapleStory World.");
		cm.dispose();
}
}