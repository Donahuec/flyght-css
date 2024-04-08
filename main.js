function opentab(evt, tabName, sectionName, updateQuery = false) {
  changeTabStateWithElements(
    evt.currentTarget,
    document.getElementById(tabName),
    sectionName,
    updateQuery
  );
}

function openTabWithNames(
  buttonName,
  tabName,
  sectionName,
  updateQuery = false
) {
  changeTabStateWithElements(
    document.getElementById(buttonName),
    document.getElementById(tabName),
    sectionName,
    updateQuery
  );
}

function changeTabStateWithElements(button, tab, sectionName, updateQuery) {
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
  tab.className += " fc-tab-active";
  button.className += " fc-tab-active";

  if (updateQuery) {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("tab", tab.id);
    var newRelativePathQuery =
      window.location.pathname + "?" + searchParams.toString();
    console.log(updateQuery);
    history.pushState(null, "", newRelativePathQuery);
  }
}
