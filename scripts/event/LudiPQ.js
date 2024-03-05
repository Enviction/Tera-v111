/*
	名字:	玩具城
	地圖:	愛奧斯塔101樓
	描述:	221023300
*/

function init() {//服務端讀取
	em.setProperty("state", 0);
}

function setup(level, leaderid) {//開始事件，時間
	em.setProperty("state", 1);
	var eim = em.newInstance("LudiPQ");

	eim.setInstanceMap(922010100).resetFully();
	eim.setInstanceMap(922010400).resetFully();
	eim.setInstanceMap(922010401).resetFully();
	eim.setInstanceMap(922010402).resetFully();
	eim.setInstanceMap(922010403).resetFully();
	eim.setInstanceMap(922010404).resetFully();
	eim.setInstanceMap(922010405).resetFully();
	eim.setInstanceMap(922010600).resetFully();
	eim.setInstanceMap(922010700).resetFully();
	eim.setInstanceMap(922010800).resetFully();
	eim.setInstanceMap(922010900).resetFully();
	eim.setInstanceMap(922011000).resetFully();

	eim.setInstanceMap(922010700).getPortal("next00").setScriptName("ludi_s4Clear");
	eim.setInstanceMap(922010800).getPortal("next00").setScriptName("ludi_s5Clear");

	eim.startEventTimer(20 * 60000); //20 mins
	return eim;
}

function playerEntry(eim, player) {//傳送進事件地圖
	var map = eim.getMapInstance(922010100);
	player.changeMap(map, map.getPortal(0));
	player.tryPartyQuest(1202);
}

function monsterValue(eim, mobId) {//殺怪後觸發
	if (mobId == 9300012) {
		eim.getMapInstance(922010900).broadcastMessage(Packages.tools.packet.CWvsContext.serverNotice(6, "The giant fighter was defeated"));
		}
		return 1;
}

function scheduledTimeout(eim) {//規定時間結束
	if (eim.getProperty("stage9") != null && eim.getProperty("stage9c") == null) {
		for (var i = 0; i < eim.getPlayers().size(); i++)
		eim.getPlayers().get(i).changeMap(eim.getMapInstance(922011000), eim.getMapInstance(922011000).getPortal(0));
		eim.startEventTimer(1 * 60000);
		eim.setProperty("stage9c", 1); //給予條件
		return;
		}
		eim.disposeIfPlayerBelow(100, eim.getProperty("stage9c") != null ? 922011100 : 922010000);
}

function changedMap(eim, player, mapid) {//進入地圖觸發
	if (mapid < 922010100 || mapid > 922011000 || mapid == 922010000) {
		playerExit(eim, player);
}
}

function playerDisconnected(eim, player) {//活動中角色斷開連接觸發
	playerExit(eim, player);
}

function leftParty(eim, player) {//離開小組觸發
	var map = eim.getMapInstance(922010000);
	player.changeMap(map, map.getPortal(0));
}

function disbandParty(eim) {//小組退出時觸發
	eim.disposeIfPlayerBelow(100, 922010000);
}

function playerExit(eim, player) {//角色退出時觸發
	eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", 0);
}
}

function allMonstersDead(eim) {}//怪物死亡觸發和刪除這個怪在活動中的資訊

function playerDead(eim, player) {}//玩家死亡時觸發

function playerRevive(eim, player) {}//玩家角色复時觸發

function cancelSchedule() {}//清除事件