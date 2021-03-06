import fzm from '../../asset/person_img/fzm.jpg'
import zt from '../../asset/person_img/zt.jpg'
import gwj from '../../asset/person_img/gwj.jpg'
import wh from '../../asset/person_img/wh.jpg'
import xxs from '../../asset/person_img/xxs.jpg'
import ydh from '../../asset/person_img/ydh.jpg'
import yf from '../../asset/person_img/yf.jpg'
import zb from '../../asset/person_img/zb.jpg'
import zxh from '../../asset/person_img/zxh.jpg'
import jwh from '../../asset/person_img/jwh.jpg'
import jh from '../../asset/person_img/jh.jpg'
import lhz from '../../asset/person_img/lhz.jpg'
import chm from '../../asset/person_img/chm.jpg'
import gy from '../../asset/person_img/gy.jpg'
import lyp from '../../asset/person_img/lyp.jpg'

import lnl from '../../asset/person_img/lnl.jpg'
import ny from '../../asset/person_img/ny.jpg'
import rls from '../../asset/person_img/rls.jpg'
import ryx from '../../asset/person_img/ryx.jpg'
import wyq from '../../asset/person_img/wyq.jpg'

import zls from '../../asset/teacher_img/zls.jpg'
import wls from '../../asset/teacher_img/wls.jpeg'
import lls from '../../asset/teacher_img/lls.jpeg'
import sls from '../../asset/teacher_img/sls.jpg'
import xls from '../../asset/teacher_img/xls.jpg'

export let course_arr = [
     '英语', '语文', '数学', '物理', '化学', '生物', '地理'
];

export let class_arr = ['1班','2班','3班','4班','5班',]
export let grade_arr = ['一年级','二年级','三年级','四年级',]

export let state_arr = ['专注度', '活跃度', '互动度']

// 专注, 活跃, 互动
export let state_default = [54, 54, 54, 5]

// 专注, 活跃, 互动
export let summary_default = [
    [
        `低于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议认真听讲,提高专注度`,
        `处于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议努力提高,提高专注度`,
        `高于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),学习认真,建议保持`,
    ],
    [
        `低于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议积极参与到课堂中去,提高活跃度`,
        `处于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议继续努力,提高活跃度`,
        `高于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),上课非常活跃,建议保持`,
    ],
    [
        `低于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议努力提高课堂上与老师互动`,
        `处于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议继续努力,提高与老师互动`,
        `高于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),参与度高,建议保持`,
    ]
]

export let summary_teacher_default = [
    [
        `低于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议提高同学听讲状态,提高专注度`,
        `处于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议努力提高,提高专注度`,
        `高于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),同学们学习认真,建议保持`,
    ],
    [
        `低于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议让同学积极参与到课堂中去,提高活跃度`,
        `处于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议继续努力,提高活跃度`,
        `高于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),上课非常活跃,建议根据实际情况调整`,
    ],
    [
        `低于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议努力提高课堂上与同学们互动`,
        `处于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议继续努力,提高与同学互动`,
        `高于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),参与度高,建议保持`,
    ]
]

export let summary_class_default = [
    [
        `低于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议提高同学听讲状态,提高专注度`,
        `处于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议努力提高,提高专注度`,
        `高于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),同学们学习认真,建议保持`,
    ],
    [
        `低于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议让同学积极参与到课堂中去,提高活跃度`,
        `处于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议继续努力,提高活跃度`,
        `高于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),上课非常活跃,建议根据实际情况调整`,
    ],
    [
        `低于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议努力提高课堂上同学们互动`,
        `处于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),建议继续努力,提高同学互动`,
        `高于正常范围(${state_default[0]-state_default[3]}-${state_default[0]+state_default[3]}),参与度高,建议保持`,
    ]
]


export let init_select_person = {
    person:null,
    startTime:null,
    endTime:null,
    grade:null,
    classNum:null,
    course:null
}

export let default_select_person = {
    person:0,
    startTime:Date.now(),
    endTime:Date.now(),
    grade:0,
    classNum:0,
    course:0
}

export let default_select_person_1 = {
    person:1,
    startTime:Date.now(),
    endTime:Date.now(),
    grade:0,
    classNum:0,
    course:0
}

export let default_select_person_2 = {
    person:2,
    startTime:Date.now(),
    endTime:Date.now(),
    grade:0,
    classNum:0,
    course:0
}

// len 150
export let mean_data = [
    [53, 54, 55, 56, 57, 58, 58, 58, 59, 59, 59, 59, 60, 61, 62, 62, 61, 60, 59, 58, 58, 57, 55, 54, 52, 50, 49, 47, 47, 46, 47, 46, 46, 47, 46, 45, 44, 43, 42, 41, 41, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 54, 55, 54, 55, 54, 54, 54, 55, 55, 55, 54, 53, 52, 51, 51, 52, 53, 54, 56, 56, 56, 56, 57, 57, 57, 57, 58, 58, 58, 59, 59, 59, 59, 59, 59, 59, 59, 58, 59, 60, 60, 61, 60, 59, 58, 57, 56, 56, 54, 52, 51, 50, 48, 46, 45, 45, 45, 44, 44, 45, 45, 45, 44, 43, 42, 40, 40, 40, 41, 41, 42, 43, 43, 44, 46, 46, 48, 49, 50, 50, 51, 51, 52, 52, 52, 52, 53, 52, 52, 51, 54, 54, 54],
    [51, 51, 50, 50, 51, 51, 51, 50, 50, 50, 50, 49, 51, 53, 53, 53, 53, 52, 52, 51, 51, 51, 51, 50, 49, 49, 48, 48, 47, 47, 47, 45, 45, 45, 45, 44, 43, 43, 42, 41, 41, 41, 42, 43, 43, 44, 44, 45, 46, 46, 46, 47, 47, 48, 48, 50, 51, 51, 51, 51, 50, 49, 50, 50, 52, 52, 51, 50, 49, 48, 47, 47, 47, 49, 50, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 52, 52, 52, 52, 52, 52, 51, 51, 51, 53, 55, 55, 55, 54, 54, 53, 52, 51, 51, 51, 50, 49, 48, 47, 47, 47, 45, 45, 44, 45, 45, 45, 44, 43, 42, 41, 41, 40, 40, 41, 42, 43, 43, 44, 44, 45, 45, 46, 46, 47, 47, 48, 48, 50, 51, 51, 51, 50, 49, 49, 49, 51, 51, 50],
    [48, 48, 47, 47, 47, 47, 47, 47, 47, 47, 46, 46, 48, 51, 51, 50, 49, 49, 48, 47, 47, 47, 46, 46, 44, 43, 43, 41, 40, 40, 40, 39, 39, 39, 39, 40, 39, 39, 38, 38, 37, 39, 38, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 44, 47, 47, 47, 48, 48, 47, 46, 46, 46, 48, 48, 48, 47, 46, 45, 44, 44, 45, 48, 49, 49, 49, 49, 49, 49, 49, 48, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 48, 48, 50, 53, 53, 52, 52, 51, 50, 49, 49, 48, 48, 47, 46, 44, 44, 42, 42, 41, 40, 40, 40, 40, 40, 40, 40, 39, 39, 39, 39, 38, 39, 39, 40, 41, 41, 42, 42, 43, 43, 43, 44, 44, 44, 44, 47, 47, 48, 48, 48, 46, 46, 46, 48, 48, 47]
];


// export let person = [
//     {
//         'id':'190526',
//         'name':'杨帆',
//         'img':yf,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':63,
//         'focus_state':72,
//         'interactive_state':23,
//     },
//     {
//         'id':'190522',
//         'name':'杨东翰',
//         'img':ydh,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':63,
//         'focus_state':72,
//         'interactive_state':23,
//     },
//     {
//         'id':'190521',
//         'name':'贾文贺',
//         'img':jwh,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':63,
//         'focus_state':72,
//         'interactive_state':23,
//     },
//     {
//         'id':'190530',
//         'name':'王豪',
//         'img':wh,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':63,
//         'focus_state':72,
//         'interactive_state':23,
//     },
//     {
//         'id':'190529',
//         'name':'郜文杰',
//         'img':gwj,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':63,
//         'focus_state':72,
//         'interactive_state':23,
//     },
//     {
//         'id':'190531',
//         'name':'朱旭涵',
//         'img':zxh,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':63,
//         'focus_state':72,
//         'interactive_state':23,
//     },
//     {
//         'id':'190533',
//         'name':'李艳捧',
//         'img':lyp,
//         'gender':0,
//         'age':20,
//         'opacity':1,
//         'active_state':63,
//         'focus_state':72,
//         'interactive_state':23,
//     },
//     {
//         'id':'190537',
//         'name':'郭尧',
//         'img':gy,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':63,
//         'focus_state':72,
//         'interactive_state':23,
//     },
//     {
//         'id':'190567',
//         'name':'朱斌',
//         'img':zb,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':63,
//         'focus_state':72,
//         'interactive_state':23,
//     },
// ]


// export let person = [
//     {
//         'id':'190522',
//         'name':'杨东翰',
//         'img':ydh,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':63,
//         'focus_state':72,
//         'interactive_state':23,
//     },
//     {
//         'id':'190537',
//         'name':'林和政',
//         'img':lhz,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':63,
//         'focus_state':66,
//         'interactive_state':23,
//     },
//     {
//         'id':'190533',
//         'name':'陈宏铭',
//         'img':chm,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':58,
//         'focus_state':70,
//         'interactive_state':30,
//     },
//     {
//         'id':'190521',
//         'name':'贾文贺',
//         'img':jwh,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':59,
//         'focus_state':66,
//         'interactive_state':30,
//     },
//     {
//         'id':'190530',
//         'name':'王豪',
//         'img':wh,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':67,
//         'focus_state':65,
//         'interactive_state':25,
//     },
//     {
//         'id':'190567',
//         'name':'朱斌',
//         'img':zb,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':56,
//         'focus_state':72,
//         'interactive_state':15,
//     },
//     {
//         'id':'190531',
//         'name':'姜贺',
//         'img':jh,
//         'gender':0,
//         'age':20,
//         'opacity':1,
//         'active_state':63,
//         'focus_state':58,
//         'interactive_state':21,
//     },
//     {
//         'id':'190529',
//         'name':'郜文杰',
//         'img':gwj,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':70,
//         'focus_state':72,
//         'interactive_state':20,
//     },
//     {
//         'id':'190526',
//         'name':'杨帆',
//         'img':yf,
//         'gender':1,
//         'age':20,
//         'opacity':1,
//         'active_state':58,
//         'focus_state':60,
//         'interactive_state':27,
//     },
// ]


export let person = [
    {
        'id':'190522',
        'name':'杨东翰',
        'img':ydh,
        'gender':1,
        'age':20,
        'opacity':1,
        'active_state':48,
        'focus_state':53,
        'interactive_state':44,
    },
    {
        'id':'190537',
        'name':'林和政',
        'img':lhz,
        'gender':1,
        'age':20,
        'opacity':1,
        'active_state':47,
        'focus_state':50,
        'interactive_state':42,
    },
    {
        'id':'190521',
        'name':'贾文贺',
        'img':jwh,
        'gender':1,
        'age':20,
        'opacity':1,
        'active_state':46,
        'focus_state':48,
        'interactive_state':42,
    },
    {
        'id':'190530',
        'name':'王豪',
        'img':wh,
        'gender':1,
        'age':20,
        'opacity':1,
        'active_state':46,
        'focus_state':48,
        'interactive_state':42,
    },
    {
        'id':'190567',
        'name':'朱斌',
        'img':zb,
        'gender':1,
        'age':20,
        'opacity':1,
        'active_state':47,
        'focus_state':49,
        'interactive_state':44,
    },
    {
        'id':'190531',
        'name':'姜贺',
        'img':jh,
        'gender':0,
        'age':20,
        'opacity':1,
        'active_state':49,
        'focus_state':52,
        'interactive_state':46,
    },
    {
        'id':'190526',
        'name':'杨帆',
        'img':yf,
        'gender':1,
        'age':20,
        'opacity':1,
        'active_state':50,
        'focus_state':55,
        'interactive_state':47,
    },
    {
        'id':'190527',
        'name':'李娜玲',
        'img':lnl,
        'gender':0,
        'age':20,
        'opacity':1,
        'active_state':51,
        'focus_state':56,
        'interactive_state':48,
    },
    {
        'id':'190568',
        'name':'聂阳',
        'img':ny,
        'gender':1,
        'age':20,
        'opacity':1,
        'active_state':51,
        'focus_state':56,
        'interactive_state':48,
    },
    {
        'id':'190569',
        'name':'任澜珊',
        'img':rls,
        'gender':0,
        'age':20,
        'opacity':1,
        'active_state':49,
        'focus_state':53,
        'interactive_state':46,
    },
    {
        'id':'190567',
        'name':'冉亚新',
        'img':ryx,
        'gender':0,
        'age':20,
        'opacity':1,
        'active_state':47,
        'focus_state':49,
        'interactive_state':44,
    },
    {
        'id':'190566',
        'name':'吴宇晴',
        'img':wyq,
        'gender':0,
        'age':20,
        'opacity':1,
        'active_state':46,
        'focus_state':47,
        'interactive_state':42,
    },
]

export let teacher = [
    {
        'id':'190522',
        'name':'张老师',
        'img':zls,
        'gender':1,
        'age':20,
        'opacity':1,
        'active_state':48,
        'focus_state':53,
        'interactive_state':44,
    },
    {
        'id':'190537',
        'name':'刘老师',
        'img':lls,
        'gender':1,
        'age':20,
        'opacity':1,
        'active_state':46,
        'focus_state':47,
        'interactive_state':42,
    },
    {
        'id':'190521',
        'name':'孙老师',
        'img':sls,
        'gender':1,
        'age':20,
        'opacity':1,
        'active_state':48,
        'focus_state':52,
        'interactive_state':46,
    },
    {
        'id':'190530',
        'name':'王老师',
        'img':wls,
        'gender':1,
        'age':20,
        'opacity':1,
        'active_state':51,
        'focus_state':56,
        'interactive_state':48,
    },
    {

        'id':'190567',
        'name':'辛老师',
        'img':xls,
        'gender':1,
        'age':20,
        'opacity':1,
        'active_state':47,
        'focus_state':50,
        'interactive_state':44,
    },

];