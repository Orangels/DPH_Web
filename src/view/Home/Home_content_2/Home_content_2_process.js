import React from 'react'

import {Tag, Progress} from "antd";
import {screen_scale_height, screen_scale_width} from "../../parameter/parameters";
import {heatMapLegend, heatMapMaxValue, heatMapDurationMaxValue, heatMapDurationEachValue} from '../../parameter/home_content_2_1_parametere_data'
import {_pad} from '../../../common/utils'
import {model_width} from '../../parameter/parameters'

import './Home_content_2_process.less'


let process_width = 200*screen_scale_height
let legend_top_left = -30*screen_scale_height

let legend_left_top = -30 * screen_scale_width

let text_top_left = -100*screen_scale_height
let text_top_right = -(100-1)*screen_scale_height

let text_left_top = -55*screen_scale_width
let text_right_top = -(100+8)*screen_scale_width

class Home_content_2_process extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            wrapZindex: -1
        };
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let {zIndex} = nextProps
        this.setState({
            wrapZindex: zIndex
        })
    }

    componentWillUnmount() {

        this.player && this.player.dispose()
    }


    render() {

        let heatMapColorArr = ['#ED6B44', '#CDDE40', '#94E149', '#3ACB49', '#32A933',];
        let HeatMap_legend_text_arr = heatMapColorArr.map((value, index)=>{
            return (
                <Tag className={'heatMap_legend_text'}
                     color={value}
                     style={{position: "absolute", left: text_left_top , top: (process_width-30*screen_scale_height)/(5-1)*index,
                         zIndex:100,
                     }}>
                    {`${_pad(parseInt(heatMapMaxValue*(1-0.2*index)), 2)}人`}
                </Tag>
            )
        })

        let HeatMapDuration_legend_text_arr = heatMapColorArr.map((value, index)=>{
            return (
                <Tag className={'heatMap_legend_text'}
                     color={value}
                     style={{position: "absolute", right: text_left_top-5 , top: (process_width-30*screen_scale_height)/(5-1)*index,
                         zIndex:100,
                     }}>
                    {/*{`${parseInt(heatMapDurationMaxValue * heatMapDurationEachValue*(1-0.2*index))} s`}*/}
                    {`${parseInt(20 *(1-0.2*index))} s`}
                </Tag>
            )
        })

        return (
            <div style={{
                // top:96*screen_scale_width,
                // top: 350 * screen_scale_width,
                // top: 320 * screen_scale_width,
                // top: 260 * screen_scale_width,
                // left: '-15%',
                top:30*screen_scale_height,
                left:85*screen_scale_width,
                display: 'flex',
                flexDirection: 'column',
                position: "absolute",
                zIndex: this.state.wrapZindex,
                overflow:"visible"
            }} className={'Home_content_heatMap_progress'}>
                <div style={{position: 'relative'}}>
                    <div className={'legend_div'}
                        style={{
                        height: process_width,
                        width:8,
                    }} />

                    <Tag className={'heatMap_legend_0'}
                         color="magenta"
                          style={{position: "absolute", right: legend_left_top, top: legend_top_left
                          }}>
                            {heatMapLegend[0]}
                    </Tag>
                    <Tag className={'heatMap_legend_1'}
                         color="magenta"
                         style={{position: "absolute", left: legend_left_top, bottom: legend_top_left,
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