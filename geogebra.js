var params = {
  appName: "graphing",
  width: 1200,
  height: 700,
  showToolBar: true,
  showAlgebraInput: true,
  showMenuBar: true,
};
var applet = new GGBApplet(params, true);
window.addEventListener("load", function () {
  applet.inject("ggb-element");
});

// CHECK GITHUB "ISSUES" FOR IDEAS N STUFF.
