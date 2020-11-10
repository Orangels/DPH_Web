import React from 'react'

import {Tag, Progress} from "antd";
import {screen_scale_height, screen_scale_width} from "../../parameter/parameters";
import {heatMapLegend, heatMapMaxValue, heatMapDurationMaxValue, heatMapDurationEachValue} from '../../parameter/home_content_2_1_parametere_data'
import {model_width} from '../../parameter/parameters'

//旋转了-90 度, 所以计算比例 width height 交换
let process_rotate = -90
let process_width = 300
let legend_top_left = -80*screen_scale_height
let legend_top_right = -(80)*screen_scale_height

let legend_left_top = -45*screen_scale_width
let legend_right_top = -(45+8)*screen_scale_width


let text_top_left = -100*screen_scale_height
let text_top_right = -(100-1)*screen_scale_height

let text_left_top = -30*screen_scale_width
let text_right_top = -(100+8)*screen_scale_width

class Home_content_2_process extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {

        let heatMapColorArr = ['#ED6B44', '#CDDE40', '#94E149', '#3ACB49', '#32A933',];
        let HeatMap_legend_text_arr = heatMapColorArr.map((value, index)=>{
            return (
                <Tag className={'heatMap_legend_text'}
                     color={value}
                     style={{position: "absolute", top: text_left_top , right: process_width/5*index,  transform:`rotate(${process_rotate*-1}deg)`,
                         zIndex:100, fontSize:1
                     }}>
                    {`${parseInt(heatMapMaxValue*(1-0.2*index))}人`}
                </Tag>
            )
        })

        let HeatMapDuration_legend_text_arr = heatMapColorArr.map((value, index)=>{
            return (
                <Tag className={'heatMap_legend_text'}
                     color={value}
                     style={{position: "absolute", bottom: text_left_top , right: process_width/5*index,  transform:`rotate(${process_rotate*-1}deg)`,
                         zIndex:100,
                     }}>
                    {`${parseInt(heatMapDurationMaxValue * heatMapDurationEachValue*(1-0.2*index))} s`}
                </Tag>
            )
        })

        return (
            <div style={{
                // top:96*screen_scale_width,
                // top: 350 * screen_scale_width,
                // top: 320 * screen_scale_width,
                top: 260 * screen_scale_width,
                left: '-15%',
                display: 'flex',
                flexDirection: 'column',
                // overflowY: 'hidden',
                position: "absolute",
                zIndex: 99,
                transform: `rotate(${process_rotate}deg)`,
                overflow:"visible"
            }} className={'Home_content_heatMap_progress'}>
                <div style={{position: 'relative'}}>
                    <Progress
                        strokeColor={{
                            '0%': '#32A933',
                            '20%': '#3ACB49',
                            '40%': '#94E149',
                            '80%': '#CDDE40',
                            '100%': '#ED6B44',
                        }}
                        showInfo={false}
                        percent={100}
                        style={{
                            // transform:'rotate(-90deg)',
                            width: process_width,
                        }}
                    />
                    <Tag className={'heatMap_legend_0'}
                         color="magenta"
                          style={{position: "absolute", top: legend_left_top, right: legend_top_left,  transform:`rotate(${-process_rotate}deg)`,
                          }}>
                            {heatMapLegend[0]}
                    </Tag>
                    <Tag className={'heatMap_legend_1'}
                         color="magenta"
                         style={{position: "absolute", bottom: legend_right_top, left: legend_top_right,  transform:`rotate(${-process_rotate}deg)`,
                         }}>
                        {heatMapLegend[1]}
                    </Tag>
                    {HeatMap_legend_text_arr}
                    {HeatMapDuration_legend_text_arr}
                </div>
            </div>
        )
    }
}

export default Home_content_2_process;