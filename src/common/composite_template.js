import React from 'react'
import {Switch, Button} from 'antd';
import io from 'socket.io-client'
import {inject, observer} from 'mobx-react/index'
import {toJS} from 'mobx'

import backgroundBanner from '../asset/背景.jpg'
import navigation_banner from '../asset/back_new/1.png'

import TweenLite from 'gsap'
import Circ from 'gsap'

import {screen_scale_height, model_width, screen_height, screen_scale_width} from '../view/parameter/parameters'
import {url} from '../common/urls'
import {
    imgWidht,
    imgHeight,
    iconWidth,
    iconHeight,
    trackerMaxValue,
    heatMapMaxValue,
    heatMapInterval,
    heatMapDuration_radius,
    cadHeatmap_radius,
    fishHeatmap_radius,
    cadHeatmapJSDuration_radius,
    fishHeatmapJSDuration_radius
} from "../view/parameter/home_content_2_1_parametere_data"
// import './Home_template.less'
import {LoginTag} from '../view/parameter/parameters'
import {deepCopy, dateFormat, _pointInsideCircle} from "./utils";

const style = {
    backgroundBanner: {
        background: `url(${backgroundBanner}) no-repeat `,
        // backgroundColor:'#422947',
        backgroundColor: '#020C11',
        width: "100%",
        // height:1080*screen_scale_width + 20,
        // height:1080*screen_scale_height,
        height: 'auto',
        // backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    content_1_banner: {
        width: '100%',
        // height:1080*screen_scale_width,
        // height:1080*screen_scale_height,
        height: 'auto',
        display: 'flex',
        position: 'relative',
    },
    navigation_banner: {
        position: 'absolute',
        background: `url(${navigation_banner}) no-repeat `,
        width: (1920 - 30.4 - 29) * screen_scale_width,
        // height:152/2*screen_scale_width,
        height: 152 / 2 * screen_scale_height,
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems:'center',
        color: '#FFFFFF',
        fontSize: 32 * screen_scale_width,
        marginLeft: 31 * screen_scale_width
    },
    navigation_button: {
        position: 'absolute',
        // background:`url(${navigation_button}) no-repeat `,
        width: 110 * screen_scale_width,
        height: 44 * screen_scale_height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 16 * screen_scale_width,
        cursor: 'pointer',
    },
    quitBtn: {
        position: 'absolute',
        // left:271*screen_scale_width,
        // top:20*screen_scale_width,
        right: 30 * screen_scale_width,
        top: 30 * screen_scale_width,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16 * screen_scale_width,
        cursor: 'pointer',
        backgroundColor: '#5856C2',
        color: '#FFFFFF',
        borderRadius: 10,
        // width: 110*screen_scale_width,
        // height:44*screen_scale_height,
        width: 100 * screen_scale_width,
        height: 33 * screen_scale_height,
    },
    quitSwitch: {
        position: 'absolute',
        // left:271*screen_scale_width,
        // top:20*screen_scale_width,
        right: 30 * screen_scale_width,
        top: 30 * screen_scale_width,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16 * screen_scale_width,
        cursor: 'pointer',
        borderRadius: 10,
        // width: 110*screen_scale_width,
        // height:44*screen_scale_height,
        // width: 100*screen_scale_width,
        // height:33*screen_scale_height,
    }
}

const navgation_btn = ['首页', '实时显示', '区域配置', '系统配置']

@inject('appStore') @observer
class Template extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};

        this._quitLogin = this._quitLogin.bind(this)
        this._ws_new_coor = this._ws_new_coor.bind(this)
        this._ws_new_state = this._ws_new_state.bind(this)

        this._update_homte_content_2_1_data = this._update_homte_content_2_1_data.bind(this)
        this._addToPoint = this._addToPoint.bind(this)
        this._addToTracker = this._addToTracker.bind(this)

    }

    _quitLogin(current) {

    }

    _router(index) {
        let link = '/'
        let {history} = this.props
        switch (index) {
            // case 0:
            //     link='/'
            //     break
            // case 1:
            //     link='/real_time_show'
            //     break
            // case 2:
            //     link='/config'
            //     break
            // default:
            //     link='/'
            //     break
            case 0:
                link = '/'
                break
            case 1:
                link = '/real_time_show'
                break
            case 2:
                link = '/draw'
                break
            case 3:
                link = '/config'
                break
            default:
                link = '/'
                break

        }
        document.documentElement.scrollTop = document.body.scrollTop = 0;
        this.props.history.push(link,);
    }

    /**
     * 模拟实时更新数据
     * */
    _update_homte_content_2_1_data(rect, rect_fish) {

        // let home_fishVideo_canvas_width = toJS(this.props.appStore.home_fishVideo_canvas_width)
        let home_fishVideo_canvas_width = 710

        let rect_center = deepCopy(rect)
        let rect_fish_center = deepCopy(rect_fish)

        // let rect_center = rect;
        // let rect_fish_center = rect_fish;

        let rect_tmp = rect.map((val, index) => {
            val.x = Math.ceil(val.x * imgWidht) - iconWidth / 2
            val.y = Math.ceil(val.y * imgHeight) - iconHeight
            val.PersonID = Math.abs(val.PersonID)
            // val.trackID = Math.abs(val.trackID)
            val.trackID = val.trackID
            return val
        })

        rect_center = rect_center.map((val, index) => {
            val.x = Math.ceil(val.x * imgWidht)
            val.y = Math.ceil(val.y * imgHeight)
            val.PersonID = Math.abs(val.PersonID)
            // val.trackID = Math.abs(val.trackID)
            val.trackID = Number(val.trackID)
            return val
        })

        rect_fish_center = rect_fish_center.map((val, index) => {
            val.x = Math.ceil(val.x * home_fishVideo_canvas_width)
            val.y = Math.ceil(val.y * home_fishVideo_canvas_width)
            val.PersonID = Math.abs(val.PersonID)
            // val.trackID = Math.abs(val.trackID)
            val.trackID = Number(val.trackID)
            return val
        })

        // console.log('**********')
        // console.log(rect_center)
        // console.log('**********')

        this._addToImage(rect_tmp, false)
        this._addToTracker(rect_center, trackerMaxValue)
        // this._addToPoint(deepCopy(rect_center), deepCopy(rect_fish_center))
        this._addToPoint(rect_center, rect_fish_center)
    }

    _addToImage(rect, init) {
        // this.props.appStore.updateImgageIcomCoors(rect)
        this.ImageRect = rect
    }

    _addToPoint(trackerObjs, fish_trackerObjs) {
        // 清空 heatMap
        // let heatMapPointsKeyArr = Object.values(this.heatMapPoints);
        // if (heatMapPointsKeyArr.length > imgWidht*imgWidht/3/2){
        //     this.heatMapPoints = {}
        // }

        console.log('**********')
        console.log(this.heatMapDurationPoints)
        console.log('**********')

        let timestamp = parseInt(this.props.appStore.trackerTimestamp / 1000)
        //CAD heatMap
        for (let trackerPerson of trackerObjs) {
        // for (let i = 0; i < trackerObjs.length; i++) {
        //     let trackerPerson = trackerObjs[i]
        //     let trackerFishPerson = fish_trackerObjs[i]
        //
        //     let {x, y, trackID} = trackerPerson
        //
        //     let x_fish = trackerFishPerson.x
        //     let y_fish = trackerFishPerson.y
        //     let trackID_fish = trackerFishPerson.trackID
        //
        //
        //     let cad_point = {
        //         x, y
        //     }
        //
        //     let fish_point = {
        //         x: x_fish,
        //         y: y_fish
        //     }
        //
        //     let pointInCadHeatMapCirle = false
        //     let pointInFishHeatMapCirle = false
        //
        //     for (let j = 0; j < Object.keys(this.heatMapPoints).length; j++) {
        //         let cad_key = Object.keys(this.heatMapPoints)[j]
        //         let fish_key = Object.keys(this.fishHeatMapPoints)[j]
        //
        //         let cad_circle = {
        //             x: parseInt(cad_key.split(',')[0]),
        //             y: parseInt(cad_key.split(',')[1]),
        //         }
        //
        //         let fish_circle = {
        //             x: parseInt(fish_key.split(',')[0]),
        //             y: parseInt(fish_key.split(',')[1]),
        //         }
        //
        //         if (_pointInsideCircle(cad_point, cad_circle, 23) && trackID == parseInt(cad_key.split(',')[2])) {
        //             pointInCadHeatMapCirle = true
        //         }
        //
        //         if (_pointInsideCircle(fish_point, fish_circle, 7) && trackID_fish == parseInt(fish_key.split(',')[2])) {
        //             pointInFishHeatMapCirle = true
        //         }
        //
        //         if ( pointInCadHeatMapCirle && pointInFishHeatMapCirle){
        //             break
        //         }
        //
        //     }
        //
        //     if (!pointInCadHeatMapCirle){
        //         this.heatMapPoints[[x, y, trackID]] = {
        //             x: cad_point.x,
        //             y: cad_point.y,
        //             value: 1
        //         }
        //     }
        //
        //     if (!pointInFishHeatMapCirle){
        //         this.fishHeatMapPoints[[x, y, trackID]] = {
        //             x: fish_point.x,
        //             y: fish_point.y,
        //             value: 1
        //         }
        //     }


            let {x, y, trackID} = trackerPerson
            let point = {
                x, y
            }
            let pointInCadHeatMapCirle = false

            for (let key in this.heatMapPoints) {
                let circle = {
                    x: parseInt(key.split(',')[0]),
                    y: parseInt(key.split(',')[1]),
                }

                if (_pointInsideCircle(point, circle,  23) && trackID == parseInt(key.split(',')[2])) {
                    pointInCadHeatMapCirle = true
                    break
                }

            }

            if (!pointInCadHeatMapCirle){
                this.heatMapPoints[[x, y, trackID]] = {
                    x: x,
                    y: y,
                    value: 1
                }
            }

            let includeKyes = []

            let heatMapDurationPointsTmp = deepCopy(this.heatMapDurationPoints)
            // let heatMapDurationPointsTmp = this.heatMapDurationPoints
            for (let key in heatMapDurationPointsTmp) {
                let circle = {
                    x: parseInt(key.split(',')[0]),
                    y: parseInt(key.split(',')[1]),
                }

                // console.log('!!!!!!!')
                // console.log(`point - ${point.x} -- ${point.y} -- ${circle.x} -- ${circle.y}`)
                // console.log(`trackID - ${trackID} -- ${parseInt(key.split(',')[2])}`)
                // console.log(`timestamp - ${timestamp} -- ${parseInt(key.split(',')[3])}`)
                // console.log('!!!!!!!')
                if (_pointInsideCircle(point, circle, 10) && trackID==parseInt(key.split(',')[2]) && timestamp - parseInt(key.split(',')[3]) <= heatMapInterval) {

                    delete this.heatMapDurationPoints[key];
                    let value = heatMapDurationPointsTmp[key].value + 1;
                    console.log(`更新 驻留 value -- ${value}, ${trackID}`)
                    this.heatMapDurationPoints[[heatMapDurationPointsTmp[key].x,heatMapDurationPointsTmp[key].y,trackID,timestamp]] = {
                        x:heatMapDurationPointsTmp[key].x,
                        y:heatMapDurationPointsTmp[key].y,
                        value: value
                    };

                    // if (key !== `${heatMapDurationPointsTmp[key].x},${heatMapDurationPointsTmp[key].y},${trackID},${timestamp}`){
                    //     console.log('delete fishHeatMap key')
                    //     delete this.heatMapDurationPoints[key];
                    // }

                    includeKyes.push(circle);
                    break
                }
            }
            if (includeKyes.length === 0){
                console.log(includeKyes)
                console.log(includeKyes.length)
                console.log(includeKyes.length === 0)
                console.log(`添加 驻留 value -- 1, ${trackID}`)
                this.heatMapDurationPoints[[x,y,trackID,timestamp]] = {
                    x:x,
                    y:y,
                    value:1
                }
            }

        }

        //fish heatMap

        for (let trackerPerson of fish_trackerObjs) {

            let {x, y, trackID} = trackerPerson
            let point = {
                x, y
            }
            let pointInFishHeatMapCirle = false

            for (let key in this.fishHeatMapPoints) {
                let circle = {
                    x: parseInt(key.split(',')[0]),
                    y: parseInt(key.split(',')[1]),
                }

                if (_pointInsideCircle(point, circle, 7) && trackID == parseInt(key.split(',')[2])) {
                    pointInFishHeatMapCirle = true
                    break
                }

            }

            if (!pointInFishHeatMapCirle) {
                this.fishHeatMapPoints[[x, y, trackID]] = {
                    x: x,
                    y: y,
                    value: 1
                }
            }


            let includeKyes = []

            let heatMapDurationPointsTmp = deepCopy(this.fishHeatMapDurationPoints)
            // // let heatMapDurationPointsTmp = this.fishHeatMapDurationPoints
            for (let key in heatMapDurationPointsTmp) {
                let circle = {
                    x: parseInt(key.split(',')[0]),
                    y: parseInt(key.split(',')[1]),
                }
                // let point = {
                //     x,
                //     y
                // }
            // console.log('!!!!!!!')
            // console.log(`point - ${point.x} -- ${point.y} -- ${circle.x} -- ${circle.y}`)
            // console.log(`trackID - ${trackID} -- ${parseInt(key.split(',')[2])}`)
            // console.log(`timestamp - ${timestamp} -- ${parseInt(key.split(',')[3])}`)
            // console.log('!!!!!!!')

                if (_pointInsideCircle(point, circle, 10) && trackID==parseInt(key.split(',')[2]) && timestamp - parseInt(key.split(',')[3]) <= heatMapInterval) {
                // if (trackID==parseInt(key.split(',')[2]) && timestamp - parseInt(key.split(',')[3]) <= heatMapInterval) {
                    delete this.fishHeatMapDurationPoints[key];
                    let value = heatMapDurationPointsTmp[key].value + 1;
                    console.log(`更新 驻留 value -- ${value}, ${trackID}`)
                    this.fishHeatMapDurationPoints[[heatMapDurationPointsTmp[key].x,heatMapDurationPointsTmp[key].y,trackID,timestamp]] = {
                        x:heatMapDurationPointsTmp[key].x,
                        y:heatMapDurationPointsTmp[key].y,
                        value: value
                    };
                    // if (key !== `${heatMapDurationPointsTmp[key].x},${heatMapDurationPointsTmp[key].y},${trackID},${timestamp}}`){
                    //     console.log('delete fishHeatMap key')
                    //     delete this.fishHeatMapDurationPoints[key];
                    // }

                    includeKyes.push(circle);
                    break
                }
            }
            if (includeKyes.length === 0){
                console.log(includeKyes)
                console.log(includeKyes.length)
                console.log(includeKyes.length === 0)
                console.log(`添加 驻留 value -- 1, ${trackID}`)
                this.fishHeatMapDurationPoints[[x,y,trackID,timestamp]] = {
                    x:x,
                    y:y,
                    value:1
                }
            }

        }

        // this.props.appStore.updateHeatMapPoints(this.heatMapPoints)
        // this.props.appStore.updateHeatMapDurationPoints(this.heatMapDurationPoints)

        // this.props.appStore.updateFishHeatMapPoints(this.fishHeatMapPoints)
        // this.props.appStore.updateFishHeatMapDurationPoints(this.fishHeatMapDurationPoints)

    }

    _addToTracker(trackerObjs, maxSize) {

        let trackerArr = {}

        for (let trackerPerson of trackerObjs) {
            let trackID = trackerPerson['trackID']
            if (trackID != -1) {
                if (this.trackIDsArr.hasOwnProperty(trackID)) {
                    this.trackIDsArr[[trackID]].push({
                        x: trackerPerson.x,
                        y: trackerPerson.y,
                        PersonID: trackerPerson.PersonID
                    })
                    this.trackIDsArr[[trackID]] = this.trackIDsArr[[trackID]].slice(-maxSize)
                } else {
                    this.trackIDsArr[[trackID]] = [{
                        x: trackerPerson.x,
                        y: trackerPerson.y,
                        PersonID: trackerPerson.PersonID
                    }]
                }


                // trackerArr[[trackID]] = deepCopy(this.trackIDsArr[[trackID]])
                trackerArr[[trackID]] = this.trackIDsArr[[trackID]]
            }

        }

        // this.props.appStore.updateTrackerArr(trackerArr)
        this.trackerArr = trackerArr
    }

    _ws_new_coor(data) {
        let results = data.result
        let _new_coor_func = this.props.new_coor || function () {
            results = data.result
        }

        let timestamp = results['timestamp'] // 1000
        let entry_count = results['entry_count'] || 0;
        let leave_count = results['leave_count'] || 0;
        let pass_count = results['pass_count'] || 0;
        // timestamp = dateFormat(timestamp, 'Y-m-d H:i:s')
        this.props.appStore.updateTrackerTimestamp(timestamp)
        this.props.appStore.updateStatistics(entry_count, leave_count, pass_count)


        // mobx autorun 检测 store 的 state 更新 canvas
        console.log('获取坐标')
        console.log(results)
        // this._update_homte_content_2_1_data(deepCopy(results['bbox']), deepCopy(results['bbox_fish']))
        this._update_homte_content_2_1_data(results['bbox'], results['bbox_fish'])

        _new_coor_func(this.ImageRect, this.trackerArr, this.heatMapPoints, this.heatMapDurationPoints,
            this.fishHeatMapPoints, this.fishHeatMapDurationPoints)
    }

    _ws_new_state(data) {
        let results = data.result
        console.log('*******')
        console.log(results)
        let persons = this.props.appStore.entryPersons
        console.log(persons)
        persons.push(results, true)
        // this.setState({
        //     persons:persons
        // })

        let _new_data_func = this.props.new_state || function () {
            results = data.result
        }
        this.props.appStore.updateEntryPersons(persons)
        _new_data_func()
    }

    componentDidMount() {
        (function () {

            var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

            // Main
            initHeader();
            initAnimation();
            addListeners();

            function initHeader() {
                width = window.innerWidth;
                height = window.innerHeight;
                target = {x: width / 2, y: height / 2};

                largeHeader = document.getElementById('large-header');
                // largeHeader.style.height = height+'px';

                canvas = document.getElementById('demo-canvas');
                canvas.width = width;
                canvas.height = height;
                ctx = canvas.getContext('2d');

                // create points
                points = [];
                for (var x = 0; x < width; x = x + width / 20) {
                    for (var y = 0; y < height; y = y + height / 20) {
                        var px = x + Math.random() * width / 20;
                        var py = y + Math.random() * height / 20;
                        var p = {x: px, originX: px, y: py, originY: py};
                        points.push(p);
                    }
                }

                // for each point find the 5 closest points
                for (var i = 0; i < points.length; i++) {
                    var closest = [];
                    var p1 = points[i];
                    for (var j = 0; j < points.length; j++) {
                        var p2 = points[j]
                        if (!(p1 == p2)) {
                            var placed = false;
                            for (var k = 0; k < 5; k++) {
                                if (!placed) {
                                    if (closest[k] == undefined) {
                                        closest[k] = p2;
                                        placed = true;
                                    }
                                }
                            }

                            for (var k = 0; k < 5; k++) {
                                if (!placed) {
                                    if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                        closest[k] = p2;
                                        placed = true;
                                    }
                                }
                            }
                        }
                    }
                    p1.closest = closest;
                }

                // assign a circle to each point
                for (var i in points) {
                    var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
                    points[i].circle = c;
                }
            }

            // Event handling
            function addListeners() {
                if (!('ontouchstart' in window)) {
                    window.addEventListener('mousemove', mouseMove);
                }
                window.addEventListener('scroll', scrollCheck);
                window.addEventListener('resize', resize);
            }

            function mouseMove(e) {
                var posx = 0;
                var posy = 0
                if (e.pageX || e.pageY) {
                    posx = e.pageX;
                    posy = e.pageY;
                } else if (e.clientX || e.clientY) {
                    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                }
                target.x = posx;
                target.y = posy;
            }

            function scrollCheck() {
                if (document.body.scrollTop > height) animateHeader = false;
                else animateHeader = true;
            }

            function resize() {
                width = window.innerWidth;
                height = window.innerHeight;
                largeHeader.style.height = height + 'px';
                canvas.width = width;
                canvas.height = height;
            }

            // animation
            function initAnimation() {
                animate();
                for (var i in points) {
                    shiftPoint(points[i]);
                }
            }

            function animate() {
                if (animateHeader) {
                    ctx.clearRect(0, 0, width, height);
                    for (var i in points) {
                        // detect points in range
                        if (Math.abs(getDistance(target, points[i])) < 4000) {
                            points[i].active = 0.3;
                            points[i].circle.active = 0.6;
                        } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                            points[i].active = 0.1;
                            points[i].circle.active = 0.3;
                        } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                            points[i].active = 0.02;
                            points[i].circle.active = 0.1;
                        } else {
                            points[i].active = 0;
                            points[i].circle.active = 0;
                        }

                        drawLines(points[i]);
                        points[i].circle.draw();
                    }
                }
                requestAnimationFrame(animate);
            }

            function shiftPoint(p) {
                TweenLite.to(p, 1 + 1 * Math.random(), {
                    x: p.originX - 50 + Math.random() * 100,
                    y: p.originY - 50 + Math.random() * 100, ease: Circ.easeInOut,
                    onComplete: function () {
                        shiftPoint(p);
                    }
                });
            }

            // Canvas manipulation
            function drawLines(p) {
                if (!p.active) return;
                for (var i in p.closest) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.closest[i].x, p.closest[i].y);
                    ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
                    ctx.stroke();
                }
            }

            function Circle(pos, rad, color) {
                var _this = this;

                // constructor
                (function () {
                    _this.pos = pos || null;
                    _this.radius = rad || null;
                    _this.color = color || null;
                })();

                this.draw = function () {
                    if (!_this.active) return;
                    ctx.beginPath();
                    ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
                    ctx.fillStyle = 'rgba(156,217,249,' + _this.active + ')';
                    ctx.fill();
                };
            }

            // Util
            function getDistance(p1, p2) {
                return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
            }

        })();

        this.socketNum = 0

        //heatMap
        this.heatMapPoints = toJS(this.props.appStore.heatMapPoints || {});
        //duratioMheatMap
        this.heatMapDurationPoints = toJS(this.props.appStore.heatMapDurationPoints || {})

        //fish heatMap
        this.fishHeatMapPoints = toJS(this.props.appStore.fishHeatMapPoints) || {}
        //heatMapDuration
        this.fishHeatMapDurationPoints = toJS(this.props.appStore.fishHeatMapDurationPoints) || {}

        //tracker
        this.trackIDsArr = toJS(this.props.appStore.trackIDsArr || {})


        console.log(this.heatMapPoints)
        console.log(this.heatMapDurationPoints)
        console.log(this.fishHeatMapPoints)
        console.log(this.fishHeatMapDurationPoints)
        console.log(this.trackIDsArr)


        console.log(`Init composite wrap`)

        // total websocket
        let url_socket = `${url}/Camera_Web_ws`

        // let _new_coor_func = this.props.new_coor || this._ws_new_coor

        //本机测试 用固定 url
        console.log('长连接 服务器')
        // 测试 先关闭 socket
        this.socket = io(url_socket)
        this.socket.on('new_coor', this._ws_new_coor)
        // this.socket.on('new_state',this._ws_new_state)

    }

    componentWillReceiveProps(nextProps, nextContext) {
        let _new_coor_func = this.props.new_coor || this._ws_new_coor
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer)
        this.socket.disconnect()
        this.socket.emit('disconnect')

        this.props.appStore.updateHeatMapPoints(this.heatMapPoints)
        this.props.appStore.updateTrackIDsArr(this.trackIDsArr)
        this.props.appStore.updateHeatMapDurationPoints(this.heatMapDurationPoints)
        this.props.appStore.updateFishHeatMapPoints(this.fishHeatMapPoints)
        this.props.appStore.updateFishHeatMapDurationPoints(this.fishHeatMapDurationPoints)

        console.log('clear composite_template socket')
    }

    render() {
        let props = this.props;
        let {classTag} = props || 'page';
        let {current_page} = props || 0

        let navition_btn_component = navgation_btn.map((value, index) => {
            // let btn_banner = index === current_page ? navigation_current_button : navigation_button;
            let btn_banner_color = index === current_page ? '#5856C2' : '#3A3F81';
            let btn_color = index === current_page ? '#09FAFC' : '#FFFFFF'
            let btn_style = {}
            switch (index) {
                case 0:
                    btn_style = {
                        left: 31 * screen_scale_width,
                        top: 20 * screen_scale_width,
                        //background:`url(${btn_banner}) no-repeat `,
                        backgroundColor: `${btn_banner_color}`,
                        color: btn_color,
                        borderRadius: 5,
                    }
                    break;
                case 1:
                    btn_style = {
                        left: 151 * screen_scale_width,
                        top: 20 * screen_scale_width,
                        //background:`url(${btn_banner}) no-repeat `,
                        backgroundColor: `${btn_banner_color}`,
                        color: btn_color,
                        borderRadius: 5,
                    }
                    break;
                case 2:
                    btn_style = {
                        left: 271 * screen_scale_width,
                        top: 20 * screen_scale_width,
                        //background:`url(${btn_banner}) no-repeat `,
                        backgroundColor: `${btn_banner_color}`,
                        color: btn_color,
                        borderRadius: 5,
                    }
                    break;
                case 3:
                    btn_style = {
                        left: 391 * screen_scale_width,
                        top: 20 * screen_scale_width,
                        //background:`url(${btn_banner}) no-repeat `,
                        backgroundColor: `${btn_banner_color}`,
                        color: btn_color
                    }
                    break;
                case 4:
                    btn_style = {
                        left: 511 * screen_scale_width,
                        top: 20 * screen_scale_width,
                        //background:`url(${btn_banner}) no-repeat `,
                        backgroundColor: `${btn_banner_color}`,
                        color: btn_color
                    }
                    break;
                default:
                    break
            }

            return (
                <div style={{...style.navigation_button, ...btn_style}}
                     onClick={this._router.bind(this, index)}
                     key={`Template_${index}`}>
                    {value}
                </div>
            )
        });

        return (
            <div
                className={classTag}
                style={{...style.backgroundBanner,}}
            >
                <div id="large-header" className="large-header"
                     style={{
                         position: "absolute",
                         width: "100%",
                         // height:1080*screen_scale_width,
                         height: 1080 * screen_scale_height,
                         top: 0,
                         left: 0,
                     }}>
                    <canvas id="demo-canvas"></canvas>
                </div>
                <div style={{
                    ...style.content_1_banner,
                    ...props.style
                }}
                >
                    <div style={style.navigation_banner}>
                        <span style={{marginLeft: (900 - 31) * screen_scale_width}}>
                            全场感知
                        </span>
                    </div>
                    {navition_btn_component}
                    {props.children}
                </div>
            </div>
        )
    }
}

export default Template;
