
function start() {
	ms.getClient().getSession().write(Packages.tools.packet.CWvsContext.getMidMsg("Press the [Ctrl] key on the keyboard to perform a normal attack", false, 0));
	ms.dispose();
}