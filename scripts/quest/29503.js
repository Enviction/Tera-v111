/* 
 *  Dallier - King Medal
 *  Lith Habor = 104000000
 *  Sleepywood = 105040300
 */

var status = -1;

function start(mode, type, selection) {
	switch (mode) {
	case -1:
		qm.dispose();
		return;
	case 0:
		if (status < 1) {
		qm.sendOk("Come back when I'm ready.");
		qm.dispose();
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
		qm.sendAcceptDecline("#v1142229# #e#b#t1142229##k\r\n\r\n-Limited time: 1 hour\r\n-The player who donated the most meso to this town#n\r\n\r\nDo you want to try and see if you are qualified to be the owner of this medal?");
		break;
	case 1:
		qm.sendNextPrev("Donation ranking\r\n\r\n1：)#b?????????#k : ???,???,???mesos\r\n2：)#bKelviinXD#k : 68,000,000mesos\r\n3:)#bxBabyRence#k: 49,999,999mesos\r\n4:)#bXxTrIStaArxx#k: 29,999,999mesosn\r\n5:)#bxBabyRence#k: 14,000,000mesos\n\r\n\r \nPlease understand that according to regulations, the exact number of donations from the current donation king cannot be disclosed. \n\rAlso remember that all records will be initialized on the first of every month….");
		break;
	case 2:
		qm.sendPrev("If you feel you qualify, please feel free to come to me. Please remember that you will only be certified if you come to me for confirmation within the limited time. Also, if you have not completed or given up this challenge, you cannot challenge other titles.");
		break;
	case 3:
		Packages.server.quest.MapleQuest.getInstance(29503).forceStart(qm.getPlayer(), qm.getNpc(), 0);
		qm.dispose();
}
}

function end(mode, type, selection) {
	switch (mode) {
	case -1:
		qm.dispose();
		return;
	case 0:
		status--;
		break;
	case 1:
		status++;
		break;
		}
	switch (status) {
	case 0:
		if (qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29503)).getCustomData() < 68000000) {
			qm.sendNext("Let me see, your total donation amount is currently " + qm.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29503)).getCustomData() + " Meso, it seems you want to be The King of Donors needs greater kindness.");
			qm.dispose();
			return;
			}
			qm.sendNext("Thank you for your contribution to the world of MapleStory, your spirit is precious! You are qualified to have the title of #e#bDonation King#k#n, congratulations!");
			break;
	case 1:
		qm.sendPrev("I, Dali, declare to the world on behalf of the God of Honor that you are the owner of this honorary title. If you want to challenge a new title, please come back to me at any time.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142229# #t1142229# 1");
		break;
	case 2:
		if (qm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getNumFreeSlot() < 1) {
			qm.getClient().getSession().write(Packages.tools.packet.CWvsContext.serverNotice(1, "There is not enough space in the equipment window"));
			qm.dispose();
			return;
			}
			Packages.server.quest.MapleQuest.getInstance(29503).forceComplete(qm.getPlayer(), qm.getNpc());
			qm.gainItem(1142229, 1, 30);
			qm.dispose();
}
}