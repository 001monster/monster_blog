import {
  useArticles,
  useBlogOptions,
  useCategoryMap,
  useTagMap,
  useTimelines
} from "./chunk-Y2DVEC3Q.js";
import {
  useNavigate,
  usePure,
  useThemeLocaleData
} from "./chunk-IOWDGP5U.js";
import {
  Lt
} from "./chunk-GZOZNNJU.js";
import {
  client_exports
} from "./chunk-ANKY43RT.js";
import {
  computed,
  defineComponent,
  h
} from "./chunk-ACN7CFPX.js";

// src/.vuepress/.temp/theme-hope/socialMedia.js
var icons = { "Dingding": '<svg xmlns="http://www.w3.org/2000/svg" ariaLabelledby="dingding" class="icon dingding-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1C9DF7"/>,<path fill="#fff" d="M760.551 442.095c0 5.178-5.178 12.945-7.767 20.713-23.302 49.192-82.85 144.988-82.85 144.988l-18.124 31.069h85.44L576.727 853.758l36.247-144.988h-67.316l23.302-95.796c-18.124 5.178-41.426 10.356-67.316 18.124 0 0-36.247 20.712-100.974-38.837 0 0-44.015-38.836-18.124-49.192 10.356-5.178 54.37-10.356 88.029-12.945 44.014-5.179 72.494-10.357 72.494-10.357s-139.81 2.59-173.468-2.589c-33.658-5.178-75.083-59.549-82.85-108.741 0 0-12.946-25.89 28.48-12.945 44.013 12.945 222.66 49.192 222.66 49.192s-235.606-72.494-251.14-90.618c-15.535-18.123-46.604-95.796-41.426-144.988 0 0 2.59-12.945 12.945-7.767 0 0 173.469 80.261 292.566 121.686 119.098 41.426 222.66 64.727 209.715 119.098z"/></svg>', "GitHub": '<svg xmlns="http://www.w3.org/2000/svg" ariaLabelledby="github" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/>,<path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>', "QQ": '<svg xmlns="http://www.w3.org/2000/svg" ariaLabelledby="qq" class="icon qq-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5EAADE"/>,<path fill="#fff" d="M729.46 627.3c-3.157-39.628-24.045-83.747-32.624-105.91l-22.084-57.047c-.702-23.73 6.312-78.322-30.511-146.61s-110.82-74.446-124.497-75.147c-13.677-.701-99.248-1.403-141.331 72.945-42.084 74.347-30.745 148.812-30.745 148.812l-23.523 57.478c-.001.002-10.962 26.223-20.43 58.135-9.469 31.914-18.938 82.064-9.469 92.234 9.47 10.17 43.837-46.643 46.993-51.903 0 0 2.456 27.18 8.943 41.383l.81 1.776.33.723.38.826.3.652.444.96.203.436a281.465 281.465 0 0 0 1.917 4.025l.189.386c.231.473.468.953.711 1.442l.146.292c6.886 13.807 18.61 33.823 37.443 50.42l.018.016-1.184.387c-10.667 3.516-31.694 11.21-40.625 19.82-1.717 1.655-2.987 3.344-3.65 5.045-5.376 13.794 4.208 15.43 20.575 16.366 16.366.934 94.923 3.04 132.564-2.221.407-.056.787-.114 1.17-.171 2.711.094 5.324.142 7.83.16l.151.002c.836.005 1.663.008 2.475.008.496 0 1.015-.002 1.542-.006l.21-.001a222.593 222.593 0 0 0 5.462-.107c.26.038.508.076.778.114 37.642 5.26 116.198 3.156 132.564 2.22 16.366-.934 25.951-2.571 20.574-16.365-4.302-11.037-34.175-21.62-45.956-25.413a141.388 141.388 0 0 0 7.958-7.645l.237-.245a142.494 142.494 0 0 0 2.53-2.702c42.435-46.643 38.928-76.101 40.682-92.935 0 0 35.775 51.553 43.488 53.306 7.713 1.754 10.169-6.31 7.012-45.94z"/></svg>', "Qzone": '<svg xmlns="http://www.w3.org/2000/svg" ariaLabelledby="qzone" class="icon qzone-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#0985DD"/>,<path fill="#fff" d="M722.38 595.24c22.486-4.056 11.345-12.424 2.156-11.346-16.685 1.72-40.43 1.925-66.562 1.284l3.029 17.79a656.641 656.641 0 0 0 61.402-7.702l-.025-.026zm68.95-174.915a5.287 5.287 0 0 0-4.493-3.645L598.42 389.29l-84.326-170.628c-1.925-3.594-7.958-3.594-9.857 0L419.885 389.29l-188.417 27.39a5.338 5.338 0 0 0-4.466 3.645 5.493 5.493 0 0 0 1.488 5.57l136.36 132.92-32.088 187.519a5.263 5.263 0 0 0 2.13 5.39c1.695 1.284 3.851 1.463 5.776.385l168.651-88.407 168.524 88.638 2.567.642 3.209-1.079c1.72-1.283 2.566-3.208 2.13-5.34l-24.591-143.648c-27.21 2.156-54.37 3.183-76.42 3.183-77.267 0-135.075-3.645-135.948-3.645a16.48 16.48 0 0 1-14.785-11.757 16.247 16.247 0 0 1 5.981-17.764l155.431-113.05c-99.959-7.906-183.873-6.418-184.721-6.418-13.502.642-25.67-3.645.642-14.375 4.518-1.694 109.2-23.72 230.362-7.445 6.673.847 12.013 5.75 13.733 12.194a16.61 16.61 0 0 1-6.263 17.302L497.204 571.598c27.826 5.802 100.37 12.014 160.745 13.502l-4.519-26.312 136.308-132.97a5.338 5.338 0 0 0 1.54-5.544l.051.051z"/></svg>', "Twitter": '<svg xmlns="http://www.w3.org/2000/svg" ariaLabelledby="twitter" class="icon twitter-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5EAADE"/>,<path fill="#fff" d="M749.737 364.631c-17.594 7.805-36.513 13.088-56.371 15.459 20.269-12.148 35.836-31.387 43.156-54.312A196.233 196.233 0 0 1 674.2 349.6c-17.894-19.083-43.406-30.997-71.636-30.997-54.2 0-98.137 43.944-98.137 98.157 0 7.695.861 15.19 2.544 22.373-81.57-4.092-153.876-43.174-202.284-102.558-8.443 14.498-13.285 31.356-13.285 49.348 0 34.05 17.326 64.096 43.656 81.697a97.69 97.69 0 0 1-44.447-12.277c-.01.41-.01.82-.01 1.24 0 47.558 33.822 87.23 78.72 96.249a98.285 98.285 0 0 1-25.852 3.448 97.491 97.491 0 0 1-18.465-1.768c12.483 39.002 48.725 67.38 91.672 68.17-33.582 26.334-75.897 42.024-121.884 42.024-7.924 0-15.736-.46-23.408-1.37 43.434 27.844 95.014 44.104 150.443 44.104 180.505 0 279.221-149.576 279.221-279.294 0-4.263-.09-8.494-.278-12.708 19.178-13.835 35.813-31.115 48.967-50.807z"/></svg>' };

// node_modules/vuepress-theme-hope/lib/client/modules/blog/components/SocialMedia.js
import "D:/\u684C\u9762/monster_blog/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/social-media.scss";
var SocialMedia_default = defineComponent({
  name: "SocialMedia",
  setup() {
    const blogOptions = useBlogOptions();
    const isPure = usePure();
    const mediaLinks = computed(() => {
      const config = blogOptions.value.medias;
      if (config)
        return Object.entries(config).map(([media, url]) => ({
          name: media,
          icon: icons[media],
          url
        }));
      return [];
    });
    return () => mediaLinks.value.length ? h("div", { class: "social-media-wrapper" }, mediaLinks.value.map(({ name, icon, url }) => h("a", {
      class: "social-media",
      href: url,
      rel: "noopener noreferrer",
      target: "_blank",
      "aria-label": name,
      ...isPure.value ? {} : { "data-balloon-pos": "up" },
      innerHTML: icon
    }))) : null;
  }
});

// node_modules/vuepress-theme-hope/lib/client/modules/blog/components/BloggerInfo.js
import "D:/\u684C\u9762/monster_blog/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/blogger-info.scss";
var BloggerInfo_default = defineComponent({
  name: "BloggerInfo",
  setup() {
    const blogOptions = useBlogOptions();
    const siteLocale = (0, client_exports.useSiteLocaleData)();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap = useCategoryMap();
    const tagMap = useTagMap();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const bloggerName = computed(() => {
      var _a;
      return blogOptions.value.name || ((_a = Lt(themeLocale.value.author)[0]) == null ? void 0 : _a.name) || siteLocale.value.title;
    });
    const bloggerAvatar = computed(() => blogOptions.value.avatar || themeLocale.value.logo);
    const locale = computed(() => themeLocale.value.blogLocales);
    const intro = computed(() => blogOptions.value.intro);
    return () => h("div", {
      class: "blogger-info",
      vocab: "https://schema.org/",
      typeof: "Person"
    }, [
      h("div", {
        class: "blogger",
        ...intro.value ? {
          style: { cursor: "pointer" },
          "aria-label": locale.value.intro,
          "data-balloon-pos": "down",
          role: "navigation",
          onClick: () => navigate(intro.value)
        } : {}
      }, [
        bloggerAvatar.value ? h("img", {
          class: [
            "blogger-avatar",
            {
              round: blogOptions.value.roundAvatar
            }
          ],
          src: (0, client_exports.withBase)(bloggerAvatar.value),
          property: "image",
          alt: "Blogger Avatar"
        }) : null,
        bloggerName.value ? h("div", { class: "blogger-name", property: "name" }, bloggerName.value) : null,
        blogOptions.value.description ? h("div", {
          class: "blogger-description",
          innerHTML: blogOptions.value.description
        }) : null,
        intro.value ? h("meta", { property: "url", content: (0, client_exports.withBase)(intro.value) }) : null
      ]),
      h("div", { class: "num-wrapper" }, [
        h("div", { onClick: () => navigate(articles.value.path) }, [
          h("div", { class: "num" }, articles.value.items.length),
          h("div", locale.value.article)
        ]),
        h("div", { onClick: () => navigate(categoryMap.value.path) }, [
          h("div", { class: "num" }, Object.keys(categoryMap.value.map).length),
          h("div", locale.value.category)
        ]),
        h("div", { onClick: () => navigate(tagMap.value.path) }, [
          h("div", { class: "num" }, Object.keys(tagMap.value.map).length),
          h("div", locale.value.tag)
        ]),
        h("div", { onClick: () => navigate(timelines.value.path) }, [
          h("div", { class: "num" }, timelines.value.items.length),
          h("div", locale.value.timeline)
        ])
      ]),
      h(SocialMedia_default)
    ]);
  }
});

export {
  BloggerInfo_default
};
//# sourceMappingURL=chunk-NOPYCS7S.js.map
