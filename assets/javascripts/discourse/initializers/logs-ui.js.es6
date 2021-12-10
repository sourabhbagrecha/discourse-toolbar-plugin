import { withPluginApi } from 'discourse/lib/plugin-api';

function initializePlugin(api) {
  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.spoiler_ui_enabled) {
    api.onToolbarCreate(toolbar => {
      toolbar.addButton({
        id: "logs_ui_button",
        group: "extras",
        icon: "far-file-alt",
        perform: e => e.applySurround('\n >', '\n', 'Paste your logs here.', { multiline: false })
      });
    });
  }
}

export default
  {
    name: 'logs-ui',
    initialize(container) {
      withPluginApi('0.1', api => initializePlugin(api));
    }
  };