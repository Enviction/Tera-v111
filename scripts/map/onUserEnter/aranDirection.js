/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function start() {
	switch (ms.getPlayer().getMap().getId()) {
	case 914090000:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranDirection/Scene0"));
		break;
	case 914090001:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranDirection/Scene1" + (ms.getPlayer().getGender() == 0 ? "0" : "1")));
		break;
	case 914090002:
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranDirection/Scene2" + (ms.getPlayer().getGender() == 0 ? "0" : "1")));
		break;
	case 914090004:
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranDirection/Scene4"));
		break;
	case 914090005:
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranDirection/Scene5"));
		break;
	case 914090006:
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranDirection/Scene6"));
		break;
	case 914090007:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(0));
		ms.getPlayer().changeMap(ms.getMap(914000000), ms.getMap(914000000).getPortal(0));
		break;
	case 914090010:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranTutorial/Scene0"));
		break;
	case 914090011:
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranTutorial/Scene1" + (ms.getPlayer().getGender() == 0 ? "0" : "1")));
		break;
	case 914090012:
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranTutorial/Scene2" + (ms.getPlayer().getGender() == 0 ? "0" : "1")));
		break;
	case 914090013:
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranTutorial/Scene3"));
		break;
	case 914090100:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranTutorial/HandedPoleArm" + (ms.getPlayer().getGender() == 0 ? "0" : "1")));
		break;
	case 914090200:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranTutorial/Maha"));
		break;
	case 914090201:
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(1));
		ms.getClient().getSession().write(Packages.tools.packet.CField.EffectPacket.ShowWZEffect("Effect/Direction1.img/aranTutorial/PoleArm"));
		}
		ms.dispose();
}