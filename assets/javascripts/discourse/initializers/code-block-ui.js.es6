import { withPluginApi } from 'discourse/lib/plugin-api';

function initializePlugin(api) {
  const siteSettings = api.container.lookup('site-settings:main');

  if (siteSettings.spoiler_ui_enabled) {
    api.onToolbarCreate(toolbar => {
      toolbar.addButton({
        id: "code_block_ui_button",
        group: "extras",
        icon: "far-file-code",
        perform: e => e.applySurround('```\n', '\n```', 'Paste your code here.', { multiline: false })
      });
    });
  }
}

export default
  {
    name: 'code-block-ui',
    initialize(container) {
      withPluginApi('0.1', api => initializePlugin(api));
    }
  };