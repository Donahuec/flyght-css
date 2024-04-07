function opentab(evt, tabName, sectionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(
    `[name=${sectionName}].fc-tab-content`
  );
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].className = tabcontent[i].className.replace(
      " fc-tab-active",
      ""
    );
  }
  tablinks = document.querySelectorAll(`[name=${sectionName}].fc-tab-btn`);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" fc-tab-active", "");
  }
  document.getElementById(tabName).className += " fc-tab-active";
  evt.currentTarget.className += " fc-tab-active";
}
