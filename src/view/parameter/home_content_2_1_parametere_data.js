import {screen_scale_height, screen_scale_width} from "./parameters";

export let imgWidht = 809*screen_scale_width
export let imgHeight = 578 * screen_scale_height
export let iconWidth = 200/5
export let iconHeight = 304/5
export let SCALE = 3

// export let heatMapMaxValue = 30
export let heatMapMaxValue = 30
let uploadCoorsInterval = 2
//计数, 由客户端通信, 热图持续时长变换颜色, 间隔时间是 value * uploadCoorsInterval / heatMapDuration 单位 s
export let heatMapDuration = 10 / uploadCoorsInterval
//热图 丢失时间间隔 间隔内算同一个热图点 单位 s (由时间戳计算)
export let heatMapInterval = 10

//驻留圆判定范围 (圆半径)
export let heatMapDuration_radius = 10

export let trackerMaxValue = 50

export let plainOptions = ['显示轨迹', '显示人次热力图', '显示驻留时长热力图'];
