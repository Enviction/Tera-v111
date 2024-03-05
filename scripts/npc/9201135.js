/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var maps = [550000000, 551000000];
var cost = [20000, 30000];

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
		if (cm.getPlayer().getMap().getId() == 540000000)
			cm.sendSimple("Travelers, are you interested in traveling to Malaysia? There are bustling cities, natural scenery in the countryside, and dreamy theme parks waiting for your visit. \r\n#L0##bUrban Trend District#k(20,000 Meso)#l\r\n#L1##bRural Town#k(30,000 Meso)#l");
		else
			cm.sendSimple ("#m" + cm.getPlayer().getMap().getId() + "#How about it? Very interesting. \r\n#L2##bTourism: " + (cm.getPlayer().getMap().getId() == 550000000 ? "Rural Town" : "Urban Trendy Area") + "#l\r\n #L3#Return: #m" + cm.getPlayer().getSavedLocation(Packages.server.maps.SavedLocationType.fromString("WORLDTOUR")) + "##l\r\n#L4#Continue sightseeing#l");
			break;
	case 1:
		if (selection < 2) {
			select = selection;
			cm.sendYesNo("Do you really want to #m" + maps[select] + "#? The toll is #b" + cost[select] + "#k meso.");
			}
		if (selection == 2) {
			cm.sendYesNo("Do you still want to go to " + (cm.getPlayer().getMap().getId() == 550000000 ? "Country Town" : "Urban Trendy Area") + " Do you want to see it? Oh, that's great, I can give you a discount, it only costs #b" + 5000 + "#k meso.");
			}
		if (selection == 3) {
			cm.sendNext("Okay, I hope you are satisfied with this trip. If you need to travel to other places, please remember to tell me.");
			}
		if (selection == 4) {
			cm.sendOk("If you don't want to go back, just look around again. Let me know when you want to go back.");
			cm.dispose();
			}
			select = selection;
			break;
	case 2:
		if (select < 3) {
			if (cm.getPlayer().getMeso() < (select < 2 ? cost[select] : 5000)) {
			cm.sendOk("Sorry, it seems you don't have enough meso to pay for the trip.");
			cm.dispose();
			return;
			}
			if (select < 2)
			cm.getPlayer().saveLocation(Packages.server.maps.SavedLocationType.fromString("WORLDTOUR"));
			cm.gainMeso(-(select < 2 ? cost[select] : 5000));
			map = select < 2 ? maps[select] : cm.getPlayer().getMap().getId() == 550000000 ? 551000000 : 550000000;
			cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
			cm.dispose();
			return;
			}
		if (select < 4) {
			var map = cm.getPlayer().getSavedLocation(Packages.server.maps.SavedLocationType.fromString("WORLDTOUR"))
			if (map < 0) map = 540000000;
			cm.getPlayer().changeMap(cm.getMap(map), cm.getMap(map).getPortal(0));
			cm.getPlayer().clearSavedLocation(Packages.server.maps.SavedLocationType.fromString("WORLDTOUR"));
			}
			cm.dispose();
}
}
