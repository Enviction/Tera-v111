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

/*
 * Author: kevintjuh93
 *
*/

var map = [100000000, 100020400, 100040000, 101000000, 101020300, 101040300, 102000000, 102020500, 102030400, 102040200, 103000000, 103020200, 103030400, 103040000, 104000000, 104020000, 106020100, 120000000, 120000100, 120000101, 120020400, 120030000,
	200000000, 200010100, 200010300, 200080000, 200080100, 211000000, 211030000, 211040300, 211041200, 211041800,
	220000000, 220020300, 220040200, 221000000, 221020701, 221030600, 221040400, 222000000, 222010400, 222020000,
	230000000, 230010200, 230010201, 230010400, 230020000, 230020201, 230030100, 230040000, 230040200, 230040400,
	250000000, 250010300, 250010304, 250010500, 250010504, 250020300, 251000000, 251010200, 251010402, 251010500,
	260000000, 260010300, 260010600, 260020300, 260020700, 261000000, 261010100, 261020000, 261020401, 261030000,
	240000000, 240010200, 240010800, 240020101, 240020102, 240020401, 240020402, 240030000, 240040400, 240040511, 240040521, 240050000, 924000200, 924000201,
	105000000, 105010100, 105020100, 105020300, 105020400, 105030000, 105030100, 105030101, 105030102, 105030200, 105030300, 105030500, 105100100, 105100300];

function start() {
	if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(24046)).getStatus() == 1) {
		Packages.server.quest.MapleQuest.getInstance(24094).forceStart(ms.getPlayer(), 0, 1);
		ms.getPlayer().dropMessage(-1, "After sleeping for hundreds of years, it actually developed into a new village.");
		}
	if (ms.getPlayer().getMap().getId() == 104000000) {
	if (ms.getSavedLocation("WORLDTOUR") == 2010000) {
		ms.getClient().getSession().write(Packages.tools.packet.CField.UIPacket.IntroLock(0));
		ms.getPlayer().clearSavedLocation(Packages.server.maps.SavedLocationType.fromString("WORLDTOUR"));
		}
		ms.getClient().getSession().write(Packages.tools.packet.CField.environmentChange("maplemap/enter/104000000", 3));
		}
	for (var i = 0; i < map.length; i++)
	if (ms.getPlayer().getMap().getId() == map[i]) {
		slot = i;
		}
		quest = slot < 22 ? 29005 : slot < 32 ? 29006 : slot < 42 ? 29007 : slot < 52 ? 29008 : slot < 62 ? 29009 : slot < 72 ? 29010 : slot < 86 ? 29011 : 29014;
		level =  slot < 22 ? 15 : slot < 32 ? 30 : slot < 52 ? 20 : slot < 62 ? 30 : slot < 72 ? 25 : slot < 86 ? 60 : 40;
		top = quest == 29005 ? "Novice Explorer" : quest == 29006 ? "Icefield Snowy Mountain Explorer" : quest == 29007 ? "Ludus Lake Explorer" : quest == 29008 ? "Undersea Explorer" : quest == 29009 ? "MuLung Explorer" : quest == 29010 ? "Ariant Desert Explorer" : quest == 29011 ? "Minar Forest Explorer" : "Fantasy Village Explorer";
	if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest)).getStatus() < 1 && ms.getPlayer().getLevel() > level) {
		Packages.server.quest.MapleQuest.getInstance(quest).forceStart(ms.getPlayer(), 0, null);
		Packages.server.quest.MapleQuest.getInstance(quest - 1995).forceStart(ms.getPlayer(), 0, 0);
		}
	if (ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29013)).getStatus() < 1) {
		Packages.server.quest.MapleQuest.getInstance(29012).forceStart(ms.getPlayer(), 0, null);
		Packages.server.quest.MapleQuest.getInstance(29015).forceStart(ms.getPlayer(), 0, null);
		Packages.server.quest.MapleQuest.getInstance(29013).forceStart(ms.getPlayer(), 0, "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
		}
		x = ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29013)).getCustomData();
		y = ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest - 1995)).getCustomData();
	if (y != null) {
		ch = x[slot];
	if (ch == '0') {
		var next = x.substr(0, slot) + '1' + x.substr(slot + 1);
		ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(29013)).setCustomData(next);
		ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest - 1995)).setCustomData(parseInt(y) + 1);
		ms.getPlayer().updateQuest(ms.getPlayer().getQuestNAdd(Packages.server.quest.MapleQuest.getInstance(quest - 1995)), true);
		ms.getPlayer().dropMessage(-1, "" + top +"" + (parseInt(y) + 1) + " / " + (quest == 29005 ? 20 : 10) + "Finish");
		}
		}
		ms.dispose();
}