import { withPluginApi } from 'discourse/lib/plugin-api';

function initializePlugin(api) {
  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.spoiler_ui_enabled) {
    api.onToolbarCreate(toolbar => {
      toolbar.addButton({
        id: "strikethrough_ui_button",
        group: "extras",
        icon: "far-clipboard",
        perform: e => e.applySurround('[s]', '[/s]', 'Paste button text here.', { multiline: true })
      });
    });
  }
}

export default
  {
    name: 'strikethrough-ui',
    initialize(container) {
      withPluginApi('0.1', api => initializePlugin(api));
    }
  };