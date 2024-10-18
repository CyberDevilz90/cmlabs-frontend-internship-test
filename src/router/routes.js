import {root} from './root'
import { homePage } from "./root/home";
import { foodPage} from "./root/home/foods"
import { mealsPage } from "./root/home/foods/meals"

export const routes = root.concat(
   homePage,
   foodPage,
   mealsPage
);
