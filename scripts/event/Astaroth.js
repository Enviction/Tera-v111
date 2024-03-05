function init() {//���ն��xȡ
	em.setProperty("state", 0);
}

function setup(level, lobbyid) {//�_ʼ�¼����r�g
	em.setProperty("state", 1);
	var eim = em.newInstance("Astaroth");

	eim.getMapInstance(677000011).resetFully();
	eim.getMapInstance(677000012).resetFully();

	eim.startEventTimer(30 * 60000);

	return eim;
}

function playerEntry(eim, player) {//�����M�¼��؈D
	var map = eim.getMapInstance(677000011);
	player.changeMap(map, map.getPortal(9));
}

function scheduledTimeout(eim) {//Ҏ���r�g�Y��
	eim.disposeIfPlayerBelow(100, 101040310);
}

function monsterValue(eim, mobId) {//�������|�l
	if (mobId == 9400633) {
		eim.getMapInstance(677000012).broadcastMessage(Packages.tools.packet.CWvsContext.serverNotice(6, "��˾���屻����"));
		eim.getMapInstance(677000012).broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/clear", 3));
		eim.getMapInstance(677000012).broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Clear", 4));
		eim.startEventTimer(3 * 60000);
		}
		return 1;
}

function playerDisconnected(eim, player) {//����н�ɫ���_�B���|�l
	playerExit(eim, player);
}

function changedMap(eim, player, mapid) {//���ڴ˵؈D���¼��Y��
	if (mapid != 677000011 && mapid != 677000012) {
		playerExit(eim, player);
}
}

function playerExit(eim, player) {//��ɫ�˳��r�|�l
	eim.unregisterPlayer(player);
	if (eim.disposeIfPlayerBelow(0, 0)) {
		em.setProperty("state", 0);
}
}

function allMonstersDead(eim) {}//���������|�l�̈́h���@�����ڻ���е��YӍ

function leftParty(eim, player) {}//�x�_С�M�|�l

function disbandParty(eim) {}//С�M�˳��r�|�l

function playerDead(eim, player) {}//��������r�|�l

function playerRevive(eim, player) {}//��ҽ�ɫ���r�|�l

function cancelSchedule() {}//����¼�