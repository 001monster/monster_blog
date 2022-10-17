import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "D:/桌面/项目集合/old_master_blog/monster/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "D:/桌面/项目集合/old_master_blog/monster/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});