/*===default start===*/
export default require('views/app-base').default;
/*===default start===*/

/*===services start===*/
export const $api = require('services/api').default;
export const $config = require('services/config').default;
export const $http = require('services/http').default;
export const $route = require('services/route').default;
export const $form = require('services/form').default;
export const $store = require('next-store');
export const $date = require('next-date');

/*===services end===*/

/*===components start===*/

export const DashBoard = require('views/dashboard').default;
export const TestComp = require('views/test-comp').default;
export const BarComp = require('views/bar').default;
export const GanntComp = require('views/gantt-demo').default;
export const PieComp = require('views/pieChart').default;
export const TableComp = require('views/table').default;
export const TreeComp = require('views/tree').default;

export const GanntComp1 = require('views/gantt-demo1').default;

/*===components end===*/
