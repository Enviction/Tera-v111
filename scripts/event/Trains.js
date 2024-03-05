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
	em.warpAllPlayer(200000122, 200090100);
	em.warpAllPlayer(220000111, 200090110);
	em.schedule("arrived", 420000); //The time that require move to destination
}

function arrived() {
	em.warpAllPlayer(200090100, 220000110); // from orbis
	em.warpAllPlayer(200090110, 200000121); // from ludi
	scheduleNew();
}

function cancelSchedule() {}