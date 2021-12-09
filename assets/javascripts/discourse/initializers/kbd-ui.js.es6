import { withPluginApi } from 'discourse/lib/plugin-api';

function initializePlugin(api) {
  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.spoiler_ui_enabled) {
    api.onToolbarCreate(toolbar => {
      toolbar.addButton({
        id: "kbd_ui_button",
        group: "extras",
        icon: "far-keyboard",
        perform: e => e.applySurround('<kbd>', '</kbd>', 'Paste button text here.')
      });
      document.querySelector("svg.d-icon-far-keyboard").parentElement.innerText = "Button"
    });
  }
}

export default
  {
    name: 'kbd-ui',
    initialize(container) {
      withPluginApi('0.1', api => initializePlugin(api));
    }
  };