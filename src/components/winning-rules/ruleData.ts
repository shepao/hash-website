export type leftData = {
    title: string
    lis: string[]
}
export type rightData = {
    title: string
    lis: string[]
}

export type RuleData = {
    tag:string
    title: string
    leftDataList: leftData[]
    rightDataList: rightData[]
}

export const dataList: RuleData[] = [
    {
        tag:"dsRule",
        title: "单双玩法",
        leftDataList: [
            {
                title: '金额限制',
                lis: [
                    "参与数量只支持20TRX ~ 2万TRX 和 10USDT ~ 2000USDT",
                    "低于最低金额时，不可参与抽奖且参与金额不进行退回",
                    "高于最高金额时，不可参与抽奖且扣除双倍手续费后退还剩余金额"
                ]
            }, {
                title: "中奖规则",
                lis: [
                    "转账金额的个位数和区块&哈希(Block hash)&最后一位数字（只看数字，不看字母）同为单数或同为双数时，则成功中奖",
                    "中奖后系统10秒内自动返还转账金额&1.98&倍的同类数字币。(由于区块链技术为了保证资金安全，每笔交易都需记录，防篡改，且全球使用数字币人口庞大，故10秒转账后可能会出现些许延迟到账情况，敬请耐心等待)",
                ]
            }
        ],
        rightDataList: [
            {
                title: "您的转账金额为：4&2&.3 USDT",
                lis: ["该笔转账的区块哈希为：000*****y5i&4& 转账金额个位数为双数（小数部分会自动忽略），区块哈希忽略字母后的最后一个数字也为双数。 结果&中奖&系统回款金额为： 42.3*1.98=83.754 USDT"
                ]
            }, {
                title: "您的转账金额为：20&1& TRX",
                lis: ["该笔转账的区块哈希为：000*****5i&3&a、转账金额个位数为单数，区块哈希忽略字母后的最后一个数字也为单数。结果&中奖&系统回款金额为：201*1.98=397.98 TRX"
                ]
            }, {
                title: "您的转账金额为：10&5& TRX",
                lis: ["该笔转账的区块哈希为：000*****9e&8&a 转账金额个位数为单数，区块哈希忽略字母后的最后一个数字也为双数。 结果未中奖系统不返还数字币"
                ]
            }, {
                title: "您的转账金额为：2&6&.06 USDT",
                lis: ["该笔转账的区块哈希为:000*****9ec&3& 转账金额个位数为双数，（看个位数，小数会自动忽略）区块哈希忽略字母后的最后一个数字为单数。 结果&未中奖&系统不返还数字币。"
                ]
            }
        ]
    },{
        tag:"dxRule",
        title: "大小玩法",
        leftDataList: [
            {
                title: '金额限制',
                lis: [
                    "参与数量只支持20TRX ~ 2万TRX 和 10USDT ~ 2000USDT",
                    "低于最低金额时，不可参与抽奖且参与金额不进行退回",
                    "高于最高金额时，不可参与抽奖且扣除双倍手续费后退还剩余金额"
                ]
            }, {
                title: "中奖规则",
                lis: [
                    "转账金额的个位数和区块&哈希(Block hash)&最后一位数字（只看数字，不看字母）同为大数(5-9)或同为小数(0-4)时，则成功中奖",
                    "中奖后系统10秒内自动返还转账金额&1.96&倍的同类数字币。(由于区块链技术为了保证资金安全，每笔交易都需记录，防篡改，且全球使用数字币人口庞大，故10秒转账后可能会出现些许延迟到账情况，敬请耐心等待)",
                ]
            }
        ],
        rightDataList: [
            {
                title: "您的转账金额为：4&2&.3 USDT",
                lis: ["该笔转账的区块哈希为：000*****y5i&4& 转账金额个位数为小数（小数点后面部分会自动忽略），区块哈希忽略字母后的最后一个数字也为小数。 结果&中奖&系统回款金额为： 42.3*1.96=82.908 USDT"
                ]
            }, {
                title: "您的转账金额为：20&6& TRX",
                lis: ["该笔转账的区块哈希为：000*****5i&7&a、转账金额个位数为大数，区块哈希忽略字母后的最后一个数字也为大数。结果&中奖&系统回款金额为：206*1.96=403.76 TRX"
                ]
            }, {
                title: "您的转账金额为：10&5& TRX",
                lis: ["该笔转账的区块哈希为：000*****9e&4&a 转账金额个位数为大数，区块哈希忽略字母后的最后一个数字为小数。 结果未中奖系统不返还数字币"
                ]
            }, {
                title: "您的转账金额为：2&3&.06 USDT",
                lis: ["该笔转账的区块哈希为:000*****9ec&8& 转账金额个位数为小数，（看个位数，小数点后面会自动忽略）区块哈希忽略字母后的最后一个数字为大数。 结果&未中奖&系统不返还数字币。"
                ]
            }
        ]
    },  {
        tag:"nnRule",
        title: "牛牛玩法",
        leftDataList: [{
            title: "金额限制",
            lis: [
                "参与数量只支持20TRX ~ 2万TRX 和 10USDT ~ 2000USDT",
                "低于最低金额时，不可参与抽奖且参与金额不进行退回",
                "高于最高金额时，不可参与抽奖且扣除双倍手续费后退还剩余金额"
            ]
        }, {
            title: "中奖规则",
            lis: [
                "采用&区块哈希(Block hash)&后五位。平台点数：后五位中的前3位之和；玩家点数：后五位中的后3位之和；字母=10点。",
                "根据牛几的几倍倍数结算&（牛一*1倍 牛二*2倍……牛牛*10倍）&",
                "转账金额=投注金额*10倍 &如投注金额是100则需转账1000&",
                "赔率：转账金额+投注金额*牛几倍数*0.98",
                "同点情况： 1 3 5 7 9 同点玩家(闲)赢；2 4 6 8 0 同点平台(庄)赢"
            ]
        }],
        rightDataList: [
            {
                title: "您的转账金额为：100 USDT",
                lis: ["&系统自动识别投注金额为10USDT& 该笔转账的区块哈希为:000****&149ec&,平台点数:&(1 4 9)牛四&;玩家点数:&(9 e c)牛九&,结果&玩家赢&",
                    "回款玩家金额:100+10*9*0.98=&188.2&USDT"
                ]
            }, {
                title: "您的转账金额为：1000 TRX",
                lis: ["&系统自动识别投注金额为100TRX& 该笔转账的区块哈希为:000****&39a1e&,平台点数:&(3 9 a)牛二&;玩家点数:&(a 1 e)牛一&,结果&平台赢&,系统自动扣除金额：100*2=200TRX",
                    "回款玩家金额:1000-100*2=&800&TRX"
                ]
            }, {
                title: "您的转账金额为：367 USDT",
                lis: ["&系统自动识别投注金额为36.7USDT& 该笔转账的区块哈希为:000****&14e23&,平台点数:&(1 4 e)牛五&;玩家点数:&(e 2 3)牛五&,结果&同点5玩家赢&",
                    "回款玩家金额:367+36.7*5*0.98=&546.83&USDT",
                    "&注：同点1 3 5 7 9 玩家赢&"
                ]
            }, {
                title: "您的转账金额为：588 TRX",
                lis: ["&系统自动识别投注金额为58.8TRX& 该笔转账的区块哈希为:000****&2c293&,平台点数:&(2 c 2)牛四&;玩家点数:&(2 9 3)牛四&,结果&同点4平台赢&系统自动扣除金额：58.8*4=235.2TRX",
                    "回款玩家金额:588-235.2=&352.8&TRX",
                    "&注：同点2 4 6 8 0 平台赢&"
                ]
            }
        ]
    }, {
        tag:"pkRule",
        title: "PK10玩法",
        leftDataList: [{
            title: "金额限制",
            lis: [
                "参与数量只支持20TRX ~ 2万TRX 和 10USDT ~ 2000USDT",
                "低于最低金额时，不可参与抽奖且参与金额不进行退回",
                "高于最高金额时，不可参与抽奖且扣除双倍手续费后退还剩余金额"
            ]
        }, {
            title: "中奖规则",
            lis: [
                "开奖结果采用&区块哈希(Block hash)&最后一位数字开奖,超高赔率1:9.8",
                "中奖：玩家转账金额小数点后面的数字与区块哈希尾数一致",
                "转账金额是平均分配到小数点后面的数字(例:转账120.123456 转账金额会平均分配给123456 每个数字金额:转账金额÷6)",
                "小数点末尾的“0”不作为下注数字(例如转账金额:100.023110 末尾的“0”不作为下注数字)"
            ]
        }],
        rightDataList: [
            {
                title: "您的转账金额为：120.&012345& USDT",
                lis: ["投注数字:0 1 2 3 4 5 &(六个数)&",
                    "区块哈希:00****327&3&a",
                    "开奖结果:3 中奖&1&个",
                    "系统自动返奖:120.012345÷6*9.8=196.020163USDT"
                ]
            }, {
                title: "您的转账金额为：1000.559 TRX",
                lis: [
                    "投注数字:5 5 9 &(三个数)&",
                    "区块哈希:00****a2c&5&a",
                    "开奖结果:5 中奖&2&个",
                    "系统自动返奖:1000.559÷3*2*9.8=6536.985466TRX"
                ]
            }
        ]
    }, {
        tag:"swRule",
        title: "双尾玩法",
        leftDataList: [{
            title: "金额限制",
            lis: [
                "参与数量只支持20TRX ~ 2万TRX 和 10USDT ~ 2000USDT",
                "低于最低金额时，不可参与抽奖且参与金额不进行退回",
                "高于最高金额时，不可参与抽奖且扣除双倍手续费后退还剩余金额"
            ]
        }, {
            title: "中奖规则",
            lis: [
                "采用&区块哈希(Block hash)&最后两位开奖,超高赔率1:2",
                "中奖：区块哈希最后两位是&字母+数字&或者&数字+字母&",
                "未中奖：区块哈希最后两位是&字母+字母&或者&数字+数字&"
            ]
        }],
        rightDataList: [
            {
                title: "您的转账金额为：100 USDT",
                lis: [
                    "该笔转账的区块哈希为:000****1b5e3，区块哈希的后两位是：&e3& （字母+数字）结果&中奖&",
                    "系统回款金额：100*2=200 USDT"
                ]
            }, {
                title: "您的转账金额为：1000 TRX",
                lis: [
                    "该笔转账的区块哈希为:000****ab63a，区块哈希的后两位是：&3a& （数字+字母）结果&中奖&",
                    "系统回款金额：1000*2=2000 TRX"
                ]
            }, {
                title: "您的转账金额为：100 USDT",
                lis: [
                    "该笔转账的区块哈希为:000****e3b65，区块哈希的后两位是：&65& （数字+数字）结果&未中奖&",
                    "系统不返奖"
                ]
            }, {
                title: "您的转账金额为：1000 TRX",
                lis: [
                    "该笔转账的区块哈希为:000****78eab，区块哈希的后两位是：&ab& （字母+字母）结果&未中奖&",
                    "系统不返奖"
                ]
            }
        ]
    }
]