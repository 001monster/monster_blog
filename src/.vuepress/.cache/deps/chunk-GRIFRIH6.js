import {
  useAutoLink,
  useThemeLocaleData
} from "./chunk-IOWDGP5U.js";
import {
  dt
} from "./chunk-GZOZNNJU.js";
import {
  AutoLink_default
} from "./chunk-6BKGGOZS.js";
import {
  Icon_default
} from "./chunk-O47N3JLK.js";
import {
  ensureEndingSlash,
  isLinkExternal,
  isPlainObject
} from "./chunk-LS4IQIE6.js";
import {
  client_exports
} from "./chunk-ANKY43RT.js";
import {
  useRoute
} from "./chunk-RLCMQTEQ.js";
import {
  computed,
  h,
  inject,
  provide
} from "./chunk-ACN7CFPX.js";
import {
  isArray,
  isString
} from "./chunk-WFBTEJUR.js";

// node_modules/vuepress-theme-hope/lib/client/modules/sidebar/utils/isActive.js
var isActiveSidebarItem = (route, item, exact = false) => {
  if ("activeMatch" in item)
    return new RegExp(item.activeMatch).test(route.path);
  if (dt(route, item.link))
    return true;
  if (item.children && !exact)
    return item.children.some((child) => isActiveSidebarItem(route, child));
  return false;
};
var isMatchedSidebarItem = (route, item) => {
  if (item.type === "group")
    return item.children.some((child) => {
      if (child.type === "group")
        return isMatchedSidebarItem(route, child);
      return child.type === "page" && isActiveSidebarItem(route, child, true);
    }) || "prefix" in item && dt(route, item.prefix);
  return false;
};

// node_modules/vuepress-theme-hope/lib/client/modules/sidebar/composables/render.js
var renderItem = (config, props) => config.link ? h(AutoLink_default, {
  ...props,
  config
}) : h("p", props, [h(Icon_default, { icon: config.icon }), config.text]);
var renderChildren = (children) => {
  const route = useRoute();
  if (!children)
    return null;
  return h("ul", { class: "sidebar-sub-headers" }, children.map((child) => {
    const active = isActiveSidebarItem(route, child, true);
    return h("li", { class: "sidebar-sub-header" }, [
      renderItem(child, {
        class: ["sidebar-link", "heading", { active }]
      }),
      renderChildren(child.children)
    ]);
  }));
};

// node_modules/vuepress-theme-hope/lib/client/modules/sidebar/composables/utils.js
var resolvePrefix = (prefix = "", path = "") => path.startsWith("/") ? path : `${ensureEndingSlash(prefix)}${path}`;

// src/.vuepress/.temp/theme-hope/sidebar.js
var sidebarData = { "/en/note/front-end/": ["README.md", "intersectionObserver.md"], "/en/note/back-end/": ["README.md"], "/en/diary/Poetry/": ["README.md", "Spring1.md"], "/zh/note/vue/": ["README.md", "vue-1.md", "vue-2.md", "vue-3.md", "vue-4.md", "vue-5.md", "vue-6.md", "vue-7.md", "vue-8.md", "vue-9.md", "vue-10.md", "vue-11.md", "vue-12.md", "vue-13.md", "vue-14.md", "vue-15.md", "vue-16.md", "vue-17.md", "vue-18.md", "vue-19.md", "vue-20.md", "vue-21.md", "vue-22.md", "vue-23.md", "vue-24.md", "vue-25.md", "vue-26.md", "vue-27.md", "vue-28.md", "vue-29.md", "vue-30.md"], "/zh/note/VueCompositonApi/": ["README.md", "compositionApi-1.md", "compositionApi-2.md", "compositionApi-3.md", "compositionApi-4.md", "compositionApi-5.md", "compositionApi-6.md", "compositionApi-7.md", "compositionApi-8.md", "compositionApi-9.md", "compositionApi-10.md", "compositionApi-11.md", "compositionApi-12.md", "compositionApi-13.md", "compositionApi-14.md", "compositionApi-15.md", "compositionApi-16.md", "compositionApi-17.md"], "/zh/note/VueBottom/": ["README.md", "VueBottom-1.md", "VueBottom-2.md"], "/zh/note/vueTransition/": ["README.md", "vueTransition-1.md", "vueTransition-2.md", "vueTransition-3.md", "vueTransition-4.md", "vueTransition-5.md", "vueTransition-6.md", "vueTransition-7.md", "vueTransition-8.md", "vueTransition-9.md", "vueTransition-10.md"], "/zh/diary/Poetry/": ["README.md", "Spring1.md"], "/zh/zsw/css/": ["div-overflow.md"], "/zh/zsw/js/": ["arr-API.md", "splice-and-join.md"] };

// node_modules/vuepress-theme-hope/lib/client/modules/sidebar/composables/resolveConfig.js
var headerToSidebarItem = (header, headerDepth) => {
  const page = (0, client_exports.usePageData)();
  return {
    type: "heading",
    text: header.title,
    link: `${page.value.path}#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, headerDepth)
  };
};
var headersToSidebarItemChildren = (headers, headerDepth) => headerDepth > 0 ? headers.map((header) => headerToSidebarItem(header, headerDepth - 1)) : [];
var resolveHeadingSidebarItems = (headerDepth) => {
  const page = (0, client_exports.usePageData)();
  return headersToSidebarItemChildren(page.value.headers, headerDepth);
};
var resolveArraySidebarItems = (sidebarConfig, headerDepth, prefix = "") => {
  const page = (0, client_exports.usePageData)();
  const route = useRoute();
  const handleChildItem = (item, pathPrefix = prefix) => {
    var _a;
    const childItem = isString(item) ? useAutoLink(resolvePrefix(pathPrefix, item)) : item.link ? {
      ...item,
      ...!isLinkExternal(item.link) ? { link: useAutoLink(resolvePrefix(pathPrefix, item.link)).link } : {}
    } : item;
    if ("children" in childItem) {
      const prefix2 = resolvePrefix(pathPrefix, childItem.prefix);
      const children = childItem.children === "structure" ? sidebarData[prefix2] : childItem.children;
      return {
        type: "group",
        ...childItem,
        prefix: prefix2,
        children: children.map((item2) => handleChildItem(item2, prefix2))
      };
    }
    return {
      type: "page",
      ...childItem,
      children: childItem.link === route.path ? headersToSidebarItemChildren(
        ((_a = page.value.headers[0]) == null ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers,
        headerDepth
      ) : []
    };
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
var resolveMultiSidebarItems = (sidebarConfig, headerDepth) => {
  const route = useRoute();
  const keys = Object.keys(sidebarConfig).sort((x, y) => y.length - x.length);
  for (const base of keys) {
    if (decodeURI(route.path).startsWith(base)) {
      const matchedConfig = sidebarConfig[base];
      return matchedConfig ? resolveArraySidebarItems(matchedConfig === "structure" ? sidebarData[base] : matchedConfig, headerDepth, base) : [];
    }
  }
  console.warn(`${route.path} do not have valid sidebar config`);
  return [];
};
var resolveSidebarItems = () => {
  var _a, _b, _c, _d;
  const routeLocale = (0, client_exports.useRouteLocale)();
  const frontmatter = (0, client_exports.usePageFrontmatter)();
  const themeLocale = useThemeLocaleData();
  const sidebarConfig = frontmatter.value.home ? false : (_b = (_a = frontmatter.value.sidebar) != null ? _a : themeLocale.value.sidebar) != null ? _b : "structure";
  const headerDepth = (_d = (_c = frontmatter.value.headerDepth) != null ? _c : themeLocale.value.headerDepth) != null ? _d : 2;
  return sidebarConfig === false ? [] : sidebarConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : sidebarConfig === "structure" ? resolveArraySidebarItems(sidebarData[routeLocale.value], headerDepth, routeLocale.value) : isArray(sidebarConfig) ? resolveArraySidebarItems(sidebarConfig, headerDepth) : isPlainObject(sidebarConfig) ? resolveMultiSidebarItems(sidebarConfig, headerDepth) : [];
};

// node_modules/vuepress-theme-hope/lib/client/modules/sidebar/composables/setup.js
var sidebarItemsSymbol = Symbol.for("sidebarItems");
var setupSidebarItems = () => {
  const sidebarItems = computed(() => resolveSidebarItems());
  provide(sidebarItemsSymbol, sidebarItems);
};
var useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};

export {
  isActiveSidebarItem,
  isMatchedSidebarItem,
  renderItem,
  renderChildren,
  resolvePrefix,
  sidebarItemsSymbol,
  setupSidebarItems,
  useSidebarItems
};
//# sourceMappingURL=chunk-GRIFRIH6.js.map