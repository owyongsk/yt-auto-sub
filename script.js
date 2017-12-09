function click_element(elems, text) {
    for (var i = 0; i < elems.length; i++) {
        if (elems[i].innerText == text) {
			elems[i].click();
			return;
        }
    }
}
document.getElementsByClassName("ytp-settings-button")[0].click()
document.getElementById('ytp-id-18').getElementsByClassName("ytp-menuitem")[3].click()
click_element(document.getElementById('ytp-id-18').getElementsByClassName("ytp-menuitem-label"), "Traducción automática")
click_element(document.getElementById('ytp-id-18').getElementsByClassName("ytp-menuitem-label"), "Español")
