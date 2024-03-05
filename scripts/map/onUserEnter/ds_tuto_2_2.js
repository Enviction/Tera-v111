
var status;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	switch (mode) {
	case - 1:
		ms.dispose();
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
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroEnableUI(1));
		ms.spawnNPCRequestController(2159309, 500, 50, 0);
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(3, 2));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 30));
		break;
	case 1:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(3, 0));
		ms.sendNextS("Your strength always surprises me... Actually, isn't this a good opportunity? I've always wanted to compete with the Legion Commander. Come, let's see who is stronger, your aura or my magic!", 5, 2159309);
		break;
	case 2:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/9", 2000, 0, -100, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Skill/3112.img/skill/31121000/effect", 2000, 321, 83, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/31121000", 4));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(0, 374));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 3:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/31121000h", 4));
		ms.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.setNPCSpecialAction(2159309, "teleportation"));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 570));
		break;
	case 4:
		ms.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.removeNPCController(2159309));
		ms.spawnNPCRequestController(2159309, 620, 50, 0);
		ms.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.setNPCSpecialAction(2159309, "summon"));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 5:
		ms.sendNextS("Quite capable...interesting, hahahaha!", 5, 2159309);
		break;
	case 6:
		ms.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.setNPCSpecialAction(2159309, "resolve"));
		ms.getNPCDirectionEffect(2159309, "Effect/Direction6.img/effect/tuto/balloonMsg1/10", 2000, 0, -160);
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1500));
		break;
	case 7:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/11", 2000, 0, -100, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1500));
		break;
	case 8:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Skill/3112.img/skill/31121005/effect", 2000, 0, -100, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Skill/3112.img/skill/31121005/effect0", 2000, 0, -100, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/31121005", 4));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(0, 364));//角色效果
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 2000));
		break;
	case 9:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/gateOpen/0", 2100, 918, -195, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/gateLight/0", 2100, 926, -390, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/gateStair/0", 2100, 879, 30, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/openGate", 4));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 2000));
		break;
	case 10:
		Packages.server.quest.MapleQuest.getInstance(23203).forceStart(ms.getPlayer(), 0, null);//打開門的效果
		ms.getNPCDirectionEffect(2159309, "Effect/Direction6.img/effect/tuto/balloonMsg0/0", 2000, 0, -150);
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1200));
		break;
	case 11:
		ms.sendNextS("...Oh, the black magician is going to meet you personally. It's a pity, but that's it for today. I'm going to show my face to those guys called heroes.", 5, 2159309);
        break;
        case 12:
        ms.sendNextS("I shouldn't have to see you again. It's your honor to be killed by adults! Hahahaha!", 5, 2159309);
		break;
	case 13:
		ms.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.setNPCSpecialAction(2159309, "teleportation"));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 570));
		break;
	case 14:
		ms.getClient().getSession().write(Packages.tools.packet.CField.NPCPacket.removeNPCController(2159309));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg2/2", 2000, 0, -100, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(3, 2));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 2000));
		break;
	case 15:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/whiteOut", 3));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 16:
		ms.dispose();
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroEnableUI(0));
		ms.getPlayer().changeMap(ms.getMap(931050300), ms.getMap(931050300).getPortal(0));
}
}