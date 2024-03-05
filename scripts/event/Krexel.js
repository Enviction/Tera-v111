function init() {//���ն��xȡ
	em.setProperty("state", 0);
}

function setup(level, lobbyid) {//�_ʼ�¼����r�g
	em.setProperty("state", 1);
	var eim = em.newInstance("Krexel");

	eim.getMapInstance(541020800).resetFully();

	eim.startEventTimer(30 * 60000);

	return eim;
}

function playerEntry(eim, player) {//�����M�¼��؈D
	var map = eim.getMapInstance(541020800);
	player.changeMap(map, map.getPortal(0));
}

function scheduledTimeout(eim) {//Ҏ���r�g�Y��
	eim.disposeIfPlayerBelow(100, 541020700);
}

function monsterValue(eim, mobId) {//�������|�l
	if (mobId == 9420522) {
		eim.getMapInstance(541020800).broadcastMessage(Packages.tools.packet.CWvsContext.serverNotice(6, "��������������"));
		eim.getMapInstance(541020800).broadcastMessage(Packages.tools.packet.CField.environmentChange("quest/party/clear", 3));
		eim.getMapInstance(541020800).broadcastMessage(Packages.tools.packet.CField.environmentChange("Party1/Clear", 4));
		eim.startEventTimer(3 * 60000);
		}
		return 1;
}

function playerDisconnected(eim, player) {//����н�ɫ���_�B���|�l
	playerExit(eim, player);
}

function changedMap(eim, player, mapid) {//���ڴ˵؈D���¼��Y��
	if (mapid != 541020800) {
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