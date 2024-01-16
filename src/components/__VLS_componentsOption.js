import * as echarts from 'echarts';

export default (await import('vue')).defineComponent({
mounted() {
this.initChart();
}
});
option = {
color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
title: {
text: 'Gradient Stacked Area Chart'
},
tooltip: {
trigger: 'axis',
axisPointer: {
type: 'cross',
label: {
backgroundColor: '#6a7985'
}
}
},
legend: {
data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
},
toolbox: {
feature: {
saveAsImage: {}
}
},
grid: {
left: '3%',
right: '4%',
bottom: '3%',
containLabel: true
},
xAxis: [
{
type: 'category',
boundaryGap: false,
data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
}
],
yAxis: [
{
type: 'value'
}
],
series: [
{
name: 'Line 1',
type: 'line',
stack: 'Total',
smooth: true,
lineStyle: {
width: 0
},
showSymbol: false,
areaStyle: {
opacity: 0.8,
color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
{
offset: 0,
color: 'rgb(128, 255, 165)'
},
{
offset: 1,
color: 'rgb(1, 191, 236)'
}
])
},
emphasis: {
focus: 'series'
},
data: [140, 232, 101, 264, 90, 340, 250]
},
{
name: 'Line 2',
type: 'line',
stack: 'Total',
smooth: true,
lineStyle: {
width: 0
},
showSymbol: false,
areaStyle: {
opacity: 0.8,
color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
{
offset: 0,
color: 'rgb(0, 221, 255)'
},
{
offset: 1,
color: 'rgb(77, 119, 255)'
}
])
},
emphasis: {
focus: 'series'
},
data: [120, 282, 111, 234, 220, 340, 310]
},
{
name: 'Line 3',
type: 'line',
stack: 'Total',
smooth: true,
lineStyle: {
width: 0
},
showSymbol: false,
areaStyle: {
opacity: 0.8,
color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
{
offset: 0,
color: 'rgb(55, 162, 255)'
},
{
offset: 1,
color: 'rgb(116, 21, 219)'
}
])
},
emphasis: {
focus: 'series'
},
data: [320, 132, 201, 334, 190, 130, 220]
},
{
name: 'Line 4',
type: 'line',
stack: 'Total',
smooth: true,
lineStyle: {
width: 0
},
showSymbol: false,
areaStyle: {
opacity: 0.8,
color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
{
offset: 0,
color: 'rgb(255, 0, 135)'
},
{
offset: 1,
color: 'rgb(135, 0, 157)'
}
])
},
emphasis: {
focus: 'series'
},
data: [220, 402, 231, 134, 190, 230, 120]
},
{
name: 'Line 5',
type: 'line',
stack: 'Total',
smooth: true,
lineStyle: {
width: 0
},
showSymbol: false,
label: {
show: true,
position: 'top'
},
areaStyle: {
opacity: 0.8,
color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
{
offset: 0,
color: 'rgb(255, 191, 0)'
},
{
offset: 1,
color: 'rgb(224, 62, 76)'
}
])
},
emphasis: {
focus: 'series'
},
data: [220, 302, 181, 234, 210, 290, 150]
}
]
};
const __VLS_componentsOption = {};
const __VLS_name = undefined;
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $scopedSlots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("chart"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("chart"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
let __VLS_internalComponent!: typeof import('./GlobalXuanran.vue')['default'];
