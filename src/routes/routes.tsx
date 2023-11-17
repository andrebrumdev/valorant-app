import type { RouteObject, RouteProps } from "react-router-dom";
import Agent from "../page/agent";
import Home from "../page/home";
import Template from "../page/template";
import { getAgent, getAgents } from "../service/agents";

export const routesDefault: RouteObject[] = [
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "",
        element: <></>,
        handle: { crumb: () => "Home" },
      },
      {
        path: "agents",
        handle: { crumb: () => "Agentes" },
        children: [
          {
            path: "",
            loader: getAgents,
            element: <Home />,
          },
          {
            path: ":uuid",
            element: <Agent />,
            loader: ({ params }) => getAgent(params["uuid"]),
            handle: {
              crumb: (data: { displayName?: string }) => data?.displayName,
            },
          },
        ],
      },
    ],
  },
];

type Params = {
  params: string;
  value: string;
};
export function replaceParams(route: RouteProps, params: Params[]): string {
  const pathName = "/" + route.path;
  let pathNameReplaced = pathName;
  params.forEach(
    (param) =>
      (pathNameReplaced = pathNameReplaced?.replace(
        `:${param.params}`,
        param.value
      ))
  );
  return `${pathNameReplaced}` || "/";
}
