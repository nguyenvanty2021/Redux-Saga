import TaskContainer from "../Containers/TaskContainer";
import Test1 from "../Containers/Test1";
import { IRoute } from "../models";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Task",
    component: TaskContainer,
    exact: true,
  },
  {
    path: "/test",
    name: "Test1",
    component: Test1,
    exact: false,
  },
];
export default routes;
