
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
		Packages.server.quest.MapleQuest.getInstance(23206).forceStart(ms.getPlayer(), 0, 2);
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroEnableUI(1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 3000));
		break;
	case 1:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/text12", 3));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 5000));
		break;
	case 2:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(3, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 10));
		break;
	case 3:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(3, 0));
		ms.sendNextS("#b........#k", 3, 2159311);
		break;
	case 4:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/14", 2000, 130, 50, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 2000));
		break;
	case 5:
		ms.sendNextS("#b(...It seems...I heard something...)#k", 3, 2159311);
        break;
        case 6:
        ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/15", 2000, 130, 50, 1));
        ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 2000));
        break;
        case 7:
        ms.sendNextS("#b(Where is this...am I still alive?)#k", 3, 2159311);
        break;
        case 8:
        ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/16", 2000, 130, 50, 1));
        ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 2000));
        break;
        case 9:
        ms.sendNextS("#b(Uh...the power is disappearing...it seems like something is sucking away my power...)#k", 3, 2159311);
        break;
        case 10:
        ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/17", 2000, 130, 50, 1));
        ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 2000));
        break;
        case 11:
        ms.sendNextS("#b(They are sucking my power...? Get out of here!)#k", 3, 2159311);
		break;
	case 12:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/punch", 4));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 13:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/7", 2000, 130, 100, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 14:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/punch", 4));
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/crackEgg", 4));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/breakEgg/0", 3600, 0, 0, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 15:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/1", 2000, -130, 50, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 16:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/punch", 4));
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/crackEgg", 4));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/breakEgg/1", 3600, 0, 0, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 17:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/2", 2000, 130, 50, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 18:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/punch", 4));
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/crackEgg", 4));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo("Effect/Direction6.img/effect/tuto/breakEgg/2", 9000, 0, 0, 1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 19:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/breakEgg", 4));
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/whiteOut", 3));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 20:
		ms.dispose();
		ms.getPlayer().changeMap(ms.getMap(931050020), ms.getMap(931050020).getPortal(0));
}
}