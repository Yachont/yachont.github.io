var params = {
  appName: "graphing",
  width: 800,
  height: 600,
  showToolBar: true,
  showAlgebraInput: true,
  showMenuBar: true,
};
var applet = new GGBApplet(params, true);
window.addEventListener("load", function () {
  applet.inject("ggb-element");
});

// CHECK GITHUB "ISSUES" FOR IDEAS N STUFF.
// android keyboard input for ggb oh no...
