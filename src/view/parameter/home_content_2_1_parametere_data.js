import {screen_scale_height, screen_scale_width} from "./parameters";

export let imgWidht = 809 * screen_scale_width
export let imgHeight = 578 * screen_scale_height
export let iconWidth = 200 / 5
export let iconHeight = 304 / 5
export let SCALE = 3

export let heatMapMaxValue = 10

// heatmap.js 关于驻留热图的光圈半径
export let cadHeatmap_radius = 50
export let fishHeatmap_radius = 20

export let cadHeatmapJSDuration_radius = 70
export let fishHeatmapJSDuration_radius = 20


export let heatMapDurationMaxValue = 5  // heatMapDurationMaxValue * heatMapDurationEachValue = 60s

/**
 *
 *
 * '.2': '#32A933',

 '.4': '#3ACB49',

 '.6': '#94E149',

 '.8': '#CDDE40',

 '1': '#ED6B44'
 */

export let heatMapDurationEachValue = 12
let uploadCoorsInterval = 2
//计数, 由客户端通信, 热图持续时长变换颜色, 间隔时间是 value * uploadCoorsInterval / heatMapDuration 单位 s , 间隔 value + 1
export let heatMapDuration = heatMapDurationEachValue / uploadCoorsInterval


//热图 丢失时间间隔 间隔内算同一个热图点 单位 s (由时间戳计算)
export let heatMapInterval = 10

//驻留圆判定范围 (圆半径)
export let heatMapDuration_radius = 10

export let trackerMaxValue = 50

// export let plainOptions = ['轨迹', '频次热图', '驻留热图' ,'图例'];
export let plainOptions = ['无', '频次热图', '驻留热图' ,'图例'];
export let heatMapLegend = ['轨迹热图图例', '驻留热图图例'];
