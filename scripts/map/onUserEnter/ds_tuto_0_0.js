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
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(3, 0));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 500));
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/back", 3));
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/text0", 3));
		ms.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(30011109), 1, 1, -1);
		ms.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(30010110), 1, 1, -1);
		ms.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(30010111), 1, 1, -1);
		ms.getPlayer().changeSingleSkillLevel(Packages.client.SkillFactory.getSkill(30010185), 1, 1, -1);
		ms.spawnNPCRequestController(2159307, 1305, 50, 0);
		break;
	case 1:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/text1", 3));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 1000));
		break;
	case 2:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(3, 2));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 3000));
		break;
	case 3:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/text2", 3));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 500));
		break;
	case 4:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/text3", 3));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 4000));
		break;
	case 5:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/text4", 3));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 500));
		break;
	case 6:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/text5", 3));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 4000));
		break;
	case 7:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/text6", 3));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 500));
		break;
	case 8:
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("demonSlayer/text7", 3));
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.getDirectionInfo(1, 3000));
		break;
	case 9:
		ms.dispose();
		ms.openNpc(2159307);
}
}