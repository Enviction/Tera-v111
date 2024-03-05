
function start() {
	ms.getClient().getSession().write(Packages.tools.packet.CWvsContext.getMidMsg("Click the Up key on the keyboard at the teleport port to go to the place connected to the teleport port.", false, 0));
	ms.dispose();
}