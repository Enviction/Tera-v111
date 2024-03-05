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
importPackage(Packages.tools);

function init() {
	scheduleNew();
}

function scheduleNew() {
	em.setProperty("docked", "true");
	em.setProperty("entry", "true");
	em.schedule("stopEntry", 240000); //The time to close the gate
	em.schedule("takeoff", 300000); //The time to begin the ride
}

function stopEntry() {
	em.setProperty("entry", "false");
}

function takeoff() {
	em.setProperty("docked", "false");
	em.warpAllPlayer(200000152, 200090400);
	em.warpAllPlayer(260000110, 200090410);
	em.schedule("arrived", 420000); //The time that require move to destination
}

function arrived() {
	em.warpAllPlayer(200090400, 260000100);
	em.warpAllPlayer(200090410, 200000100);
	scheduleNew();
}

function cancelSchedule() {}