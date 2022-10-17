import { defineClientConfig } from "@vuepress/client";
import { defineAsyncComponent } from "vue";
import ChartJS from "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import FlowChart from "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-title.scss";
import Mermaid from "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    const VuePlayground = defineAsyncComponent(() => import("D:/桌面/blog/monster_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js"));
    app.component("VuePlayground", VuePlayground);
    
  }
});