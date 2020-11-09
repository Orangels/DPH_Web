import {screen_scale_height, screen_scale_width} from "./parameters";

export let imgWidht = 809*screen_scale_width
export let imgHeight = 578 * screen_scale_height
export let iconWidth = 200/5
export let iconHeight = 304/5
export let SCALE = 3

// export let heatMapMaxValue = 30
export let heatMapMaxValue = 30
//50 个计数, 由客户端通信, 5 个计数是 1 秒, 热图持续时长变换颜色
export let heatMapDuration = 50
//热图 丢失时间间隔 间隔内算同一个热图点 单位 s
export let heatMapInterval = 10

export let trackerMaxValue = 50
