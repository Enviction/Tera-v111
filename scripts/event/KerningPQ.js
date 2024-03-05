function init() {
    em.setProperty("state", 0);
    }

    function setup(level, leaderid) {//開始事件，時間
    	em.setProperty("state", 1);
    	var eim = em.newInstance("KerningPQ");

    	eim.setInstanceMap(910340100).resetFully();
    	eim.setInstanceMap(910340200).resetFully();
    	eim.setInstanceMap(910340300).resetFully();
    	eim.setInstanceMap(910340400).resetFully();
    	eim.setInstanceMap(910340500).resetFully();

    	eim.setInstanceMap(910340500).spawnMonsterOnGroundBelow(em.getMonster(9300003), new java.awt.Point(-127, -435));

    	eim.startEventTimer(20 * 60000);

    	return eim;
    }

    function playerEntry(eim, player) {//傳送進事件地圖
    	var map = eim.getMapInstance(910340100);
    	player.changeMap(map, map.getPortal(0));
    	player.tryPartyQuest(1201);
    }

    function monsterValue(eim, mobId) {//殺怪後觸發
    	return 1;
    }

    function scheduledTimeout(eim) {//規定時間結束
    	eim.disposeIfPlayerBelow(100, eim.getProperty("stage5") == 1 ? 910340600 : 910340000);
    }

    function changedMap(eim, player, mapid) {//進入地圖觸發
    	if (mapid < 910340100 || mapid > 910340500) {
    		playerExit(eim, player);
    }
    }

    function playerDisconnected(eim, player) {//活動中角色斷開連接觸發
    	playerExit(eim, player);
    }

    function leftParty(eim, player) {//離開小組觸發
    	var map = eim.getMapInstance(910340000);
    	player.changeMap(map, map.getPortal(0));
    }

    function disbandParty(eim) {//小組退出時觸發
    	eim.disposeIfPlayerBelow(100, 910340000);
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