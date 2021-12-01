import Index from "@/views/index/Index.svelte";
import NotFound from "@/views/404.svelte";
import { wrap } from "svelte-spa-router/wrap";
import { SvelteComponentDev } from "svelte/internal";

interface RouteMap extends Map<String, Object> {
  toArray?(): Array<Router>;
}

interface Router {
  path: string;
  name: string;
  component?: SvelteComponentDev;
}

const routes = <RouteMap>new Map(
  [
    {
      path: "/",
      component: Index,
      isMenu: true,
      name: "主页",
    },
    {
      path: "*",
      component: NotFound,
      a: 1,
    },
  ].map((item) => {
    const { component, path, ...userData } = item;
    return [item.path, wrap({ component, userData })];
  })
);

/**
 * 将路由转换为数组
 * @returns {Array<Router>}
 */
routes.toArray = function () {
  const result = Array<Router>();
  this.forEach((value, key) => {
    value?.userData?.isMenu &&
      result.push({
        path: key,
        ...value.userData,
      });
  });
  return result;
};

export { routes };
