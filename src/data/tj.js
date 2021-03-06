export default {
  lineList: [
    { name: '1号线', color: '#E0122B', stations: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26 ] },
    { name: '2号线', color: '#EAD900', stations: [ 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 18, 40, 41, 42, 43, 44, 45 ] },
    { name: '3号线', color: '#0CA0E2', stations: [ 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 14, 58, 59, 36, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69 ] },
    { name: '5号线', color: '#FF9900', stations: [ 70, 71, 72, 73, 74, 75, 76, 64, 77, 78, 79, 80, 81, 82, 33, 83, 84, 85, 12, 86, 87, 88, 89, 90, 91, 92, 93 ] },
    { name: '6号线', color: '#E24BAF', stations: [ 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 87, 88, 89, 104, 105, 106, 53, 107, 108, 109, 110, 41, 111, 112, 20, 113, 114, 115, 116, 62, 117, 118, 80, 119, 120, 121, 122, 123 ] },
    { name: '9号线', color: '#024FA3', stations: [ 36, 124, 125, 85, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142 ] },
    { name: '导轨电车1号线', color: '#33CCCC', stations: [ 138, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155 ] }
  ],
  stationList: [
    { id: 0, name: '东沽路', pinyin: 'donggulu', py: 'dgl', lat: '39.012317', lng: '117.40875' },
    { id: 1, name: '国展路', pinyin: 'guozhanlu', py: 'gzl', lat: '39.021853', lng: '117.390855' },
    { id: 2, name: '北洋村', pinyin: 'beiyangcun', py: 'byc', lat: '39.028154', lng: '117.385018' },
    { id: 3, name: '高庄子', pinyin: 'gaozhuangzi', py: 'gzz', lat: '39.042988', lng: '117.361243' },
    { id: 4, name: '李楼', pinyin: 'lilou', py: 'll', lat: '39.054468', lng: '117.317126' },
    { id: 5, name: '双林', pinyin: 'shuanglin', py: 'sl', lat: '39.057184', lng: '117.292128' },
    { id: 6, name: '财经大学', pinyin: 'caijindaxue', py: 'cjdx', lat: '39.063932', lng: '117.277075' },
    { id: 7, name: '华山里', pinyin: 'huashanli', py: 'hsl', lat: '39.066031', lng: '117.261969' },
    { id: 8, name: '复兴门', pinyin: 'fuxingmen', py: 'fxm', lat: '39.077142', lng: '117.260274' },
    { id: 9, name: '陈塘庄', pinyin: 'chentangzhuang', py: 'ctz', lat: '39.083472', lng: '117.248619' },
    { id: 10, name: '土城', pinyin: 'tucheng', py: 'tc', lat: '39.089151', lng: '117.232422' },
    { id: 11, name: '南楼', pinyin: 'nanlou', py: 'nl', lat: '39.09598', lng: '117.22386' },
    { id: 12, name: '下瓦房', pinyin: 'xiawafang', py: 'xwf', lat: '39.105204', lng: '117.222887' },
    { id: 13, name: '小白楼', pinyin: 'xiaobailou', py: 'xbl', lat: '39.114907', lng: '117.215433' },
    { id: 14, name: '营口道', pinyin: 'yingkoudao', py: 'ykd', lat: '39.118626', lng: '117.197642' },
    { id: 15, name: '鞍山道', pinyin: 'anshandao', py: 'asd', lat: '39.120339', lng: '117.187373' },
    { id: 16, name: '海光寺', pinyin: 'haiguangsi', py: 'hgs', lat: '39.122253', lng: '117.177749' },
    { id: 17, name: '二纬路', pinyin: 'erweilu', py: 'ewl', lat: '39.130585', lng: '117.174799' },
    { id: 18, name: '西南角', pinyin: 'xinanjiao', py: 'xnj', lat: '39.137434', lng: '117.17202' },
    { id: 19, name: '西北角', pinyin: 'xibeijiao', py: 'xbj', lat: '39.146587', lng: '117.171634' },
    { id: 20, name: '西站', pinyin: 'xizhan', py: 'xz', lat: '39.15697', lng: '117.166785' },
    { id: 21, name: '洪湖里', pinyin: 'honghuli', py: 'hhl', lat: '39.17092', lng: '117.161903' },
    { id: 22, name: '勤俭道', pinyin: 'qinjiandao', py: 'qjd', lat: '39.178314', lng: '117.153599' },
    { id: 23, name: '本溪路', pinyin: 'benxilu', py: 'bxl', lat: '39.185566', lng: '117.139254' },
    { id: 24, name: '佳园里', pinyin: 'jiayuanli', py: 'jyl', lat: '39.191853', lng: '117.128247' },
    { id: 25, name: '瑞景新苑', pinyin: 'ruijingxinyuan', py: 'rjxy', lat: '39.200442', lng: '117.121691' },
    { id: 26, name: '刘园', pinyin: 'liuyuan', py: 'ly', lat: '39.207997', lng: '117.115836' },
    { id: 27, name: '滨海国际机场', pinyin: 'binhaiguojijichang', py: 'bhgjjc', lat: '39.132119', lng: '117.36262' },
    { id: 28, name: '空港经济区', pinyin: 'konggangjingjiqu', py: 'kgjjq', lat: '39.15768', lng: '117.334843' },
    { id: 29, name: '国山路', pinyin: 'guoshanlu', py: 'gsl', lat: '39.154126', lng: '117.309806' },
    { id: 30, name: '登州路', pinyin: 'dengzhoulu', py: 'dzl', lat: '39.150552', lng: '117.295909' },
    { id: 31, name: '屿东城', pinyin: 'yudongcheng', py: 'ydc', lat: '39.147219', lng: '117.27992' },
    { id: 32, name: '翠阜新村', pinyin: 'cuifuxincun', py: 'cfxc', lat: '39.143883', lng: '117.256392' },
    { id: 33, name: '靖江路', pinyin: 'jingjianglu', py: 'jjl', lat: '39.142493', lng: '117.244161' },
    { id: 34, name: '顺驰桥', pinyin: 'shunchiqiao', py: 'scq', lat: '39.141432', lng: '117.233614' },
    { id: 35, name: '远洋国际中心', pinyin: 'yuanyangguojizhongxin', py: 'yygjzx', lat: '39.136543', lng: '117.221287' },
    { id: 36, name: '天津站', pinyin: 'tianjinzhan', py: 'tjz', lat: '39.137775', lng: '117.21161' },
    { id: 37, name: '建国道', pinyin: 'jianguodao', py: 'jgd', lat: '39.139015', lng: '117.200837' },
    { id: 38, name: '东南角', pinyin: 'dongnanjiao', py: 'dnj', lat: '39.136876', lng: '117.19042' },
    { id: 39, name: '鼓楼', pinyin: 'gulou', py: 'gl', lat: '39.137126', lng: '117.181118' },
    { id: 40, name: '广开四马路', pinyin: 'guangkaisimalu', py: 'gksml', lat: '39.137658', lng: '117.161849' },
    { id: 41, name: '长虹公园', pinyin: 'changhonggongyuan', py: 'chgy', lat: '39.1378', lng: '117.149404' },
    { id: 42, name: '咸阳路', pinyin: 'xianyanglu', py: 'xyl', lat: '39.137816', lng: '117.135843' },
    { id: 43, name: '芥园西道', pinyin: 'jieyuanxidao', py: 'jyxd', lat: '39.141894', lng: '117.120735' },
    { id: 44, name: '卞兴', pinyin: 'bianxing', py: 'bx', lat: '39.14625', lng: '117.109224' },
    { id: 45, name: '曹庄', pinyin: 'caozhuang', py: 'cz', lat: '39.145678', lng: '117.090899' },
    { id: 46, name: '南站', pinyin: 'nanzhan', py: 'nz', lat: '39.057071', lng: '117.062045' },
    { id: 47, name: '杨伍庄', pinyin: 'yangwuzhuang', py: 'ywz', lat: '39.068367', lng: '117.069555' },
    { id: 48, name: '学府工业区', pinyin: 'xuefugongyequ', py: 'xfgyq', lat: '39.071882', lng: '117.078567' },
    { id: 49, name: '高新区', pinyin: 'gaoxinqu', py: 'gxq', lat: '39.071903', lng: '117.098598' },
    { id: 50, name: '大学城', pinyin: 'daxuecheng', py: 'dxc', lat: '39.072412', lng: '117.111916' },
    { id: 51, name: '华苑', pinyin: 'huayuan', py: 'hy', lat: '39.087053', lng: '117.128567' },
    { id: 52, name: '王顶堤', pinyin: 'wangdingdi', py: 'wdd', lat: '39.092049', lng: '117.138888' },
    { id: 53, name: '红旗南路', pinyin: 'hongqinanlu', py: 'hqnl', lat: '39.092769', lng: '117.149471' },
    { id: 54, name: '周邓纪念馆', pinyin: 'zhoudengjinianguan', py: 'zdjng', lat: '39.092682', lng: '117.163478' },
    { id: 55, name: '天塔', pinyin: 'tianta', py: 'tt', lat: '39.095896', lng: '117.178263' },
    { id: 56, name: '吴家窑', pinyin: 'wujiayao', py: 'wjy', lat: '39.099926', lng: '117.186138' },
    { id: 57, name: '西康路', pinyin: 'xikanglu', py: 'xkl', lat: '39.112281', lng: '117.188069' },
    { id: 58, name: '和平路', pinyin: 'hepinglu', py: 'hpl', lat: '39.127264', lng: '117.205171' },
    { id: 59, name: '津湾广场', pinyin: 'jinwanguangchang', py: 'jwgc', lat: '39.132224', lng: '117.207789' },
    { id: 60, name: '金狮桥', pinyin: 'jinshiqiao', py: 'jsq', lat: '39.151077', lng: '117.207735' },
    { id: 61, name: '中山路', pinyin: 'zhongshanlu', py: 'zsl', lat: '39.161645', lng: '117.205623' },
    { id: 62, name: '北站', pinyin: 'beizhan', py: 'bz', lat: '39.166662', lng: '117.207815' },
    { id: 63, name: '铁东路', pinyin: 'tiedonglu', py: 'tdl', lat: '39.179891', lng: '117.207268' },
    { id: 64, name: '张兴庄', pinyin: 'zhangxingzhuang', py: 'zxz', lat: '39.191456', lng: '117.215336' },
    { id: 65, name: '宜兴埠', pinyin: 'yixingfu', py: 'yxf', lat: '39.197307', lng: '117.21856' },
    { id: 66, name: '天士力', pinyin: 'tianshili', py: 'tsl', lat: '39.207783', lng: '117.21444' },
    { id: 67, name: '华北集团', pinyin: 'huabeijituan', py: 'hbjt', lat: '39.22735', lng: '117.227499' },
    { id: 68, name: '丰产河', pinyin: 'fengchanhe', py: 'fch', lat: '39.23802', lng: '117.234675' },
    { id: 69, name: '小淀', pinyin: 'xiaodian', py: 'xd', lat: '39.239188', lng: '117.257621' },
    { id: 70, name: '北辰科技园北', pinyin: 'beichenkejiyuanbei', py: 'bckjyb', lat: '39.267692', lng: '117.15012' },
    { id: 71, name: '丹河北道', pinyin: 'danhebeidao', py: 'dhbd', lat: '39.252448', lng: '117.163606' },
    { id: 72, name: '北辰道', pinyin: 'beichendao', py: 'bcd', lat: '39.240654', lng: '117.173643' },
    { id: 73, name: '职业大学', pinyin: 'zhiyedaxue', py: 'zydx', lat: '39.231044', lng: '117.181963' },
    { id: 74, name: '淮河道', pinyin: 'huaihedao', py: 'hhd', lat: '39.218606', lng: '117.192456' },
    { id: 75, name: '辽河北道', pinyin: 'liaohebeidao', py: 'lhbd', lat: '39.209624', lng: '117.200074' },
    { id: 76, name: '宜兴埠北', pinyin: 'yixingfubei', py: 'yxfb', lat: '39.203031', lng: '117.205422' },
    { id: 77, name: '志成路', pinyin: 'zhichenglu', py: 'zcl', lat: '39.187119', lng: '117.21913' },
    { id: 78, name: '思源路', pinyin: 'siyuanlu', py: 'syl', lat: '39.183392', lng: '117.22746' },
    { id: 79, name: '建昌道', pinyin: 'jianchangdao', py: 'jcd', lat: '39.179628', lng: '117.23464' },
    { id: 80, name: '金钟河大街', pinyin: 'jinzhonghedajie', py: 'jzhdj', lat: '39.171686', lng: '117.242326' },
    { id: 81, name: '月牙河', pinyin: 'yueyahe', py: 'yyh', lat: '39.165442', lng: '117.245923' },
    { id: 82, name: '幸福公园', pinyin: 'xinfugongyuan', py: 'xfgy', lat: '39.154811', lng: '117.244121' },
    { id: 83, name: '成林道', pinyin: 'chenglindao', py: 'cld', lat: '39.130296', lng: '117.245614' },
    { id: 84, name: '津塘路', pinyin: 'jintanglu', py: 'jtl', lat: '39.116534', lng: '117.241402' },
    { id: 85, name: '直沽', pinyin: 'zhigu', py: 'zg', lat: '39.111007', lng: '117.233926' },
    { id: 86, name: '西南楼', pinyin: 'xinanlou', py: 'xnl', lat: '39.095421', lng: '117.216054' },
    { id: 87, name: '文化中心', pinyin: 'wenhuazhongxin', py: 'whzx', lat: '39.089863', lng: '117.206898' },
    { id: 88, name: '天津宾馆', pinyin: 'tianjinbinguan', py: 'tjbg', lat: '39.085466', lng: '117.198658' },
    { id: 89, name: '肿瘤医院', pinyin: 'zhongliuyiyuan', py: 'zlyy', lat: '39.079004', lng: '117.184442' },
    { id: 90, name: '体育中心', pinyin: 'tiyuzhongxin', py: 'tyzx', lat: '39.075031', lng: '117.172517' },
    { id: 91, name: '凌宾路', pinyin: 'lingbinlu', py: 'lbl', lat: '39.067667', lng: '117.171916' },
    { id: 92, name: '昌凌路', pinyin: 'changlinglu', py: 'cll', lat: '39.057554', lng: '117.184404' },
    { id: 93, name: '中医一附院', pinyin: 'zhongyiyifuyuan', py: 'zyyfy', lat: '39.046868', lng: '117.184749' },
    { id: 94, name: '梅林路', pinyin: 'meilinlu', py: 'mll', lat: '39.044823', lng: '117.254544' },
    { id: 95, name: '洞庭路', pinyin: 'dongtinglu', py: 'dtl', lat: '39.043598', lng: '117.245854' },
    { id: 96, name: '解放南路', pinyin: 'jiefangnanlu', py: 'jfnl', lat: '39.040765', lng: '117.233945' },
    { id: 97, name: '梅江会展中心', pinyin: 'meijianghuizhanzhongxin', py: 'mjhzzx', lat: '39.044382', lng: '117.217734' },
    { id: 98, name: '梅江公园', pinyin: 'meijianggongyuan', py: 'mjgy', lat: '39.052314', lng: '117.217551' },
    { id: 99, name: '左江道', pinyin: 'zuojiangdao', py: 'zjd', lat: '39.060029', lng: '117.217702' },
    { id: 100, name: '梅江道', pinyin: 'meijiangdao', py: 'mjd', lat: '39.06895', lng: '117.225619' },
    { id: 101, name: '黑牛城道', pinyin: 'heiniuchengdao', py: 'hncd', lat: '39.08002', lng: '117.224042' },
    { id: 102, name: '尖山路', pinyin: 'jianshanlu', py: 'jsl', lat: '39.087249', lng: '117.223999' },
    { id: 103, name: '乐园道', pinyin: 'leyuandao', py: 'lyd', lat: '39.091312', lng: '117.217498' },
    { id: 104, name: '水上公园东路', pinyin: 'shuishanggongyuandonglu', py: 'ssgydl', lat: '39.079495', lng: '117.172909' },
    { id: 105, name: '南翠屏', pinyin: 'nancuiping', py: 'ncp', lat: '39.079949', lng: '117.158642' },
    { id: 106, name: '迎风道', pinyin: 'yingfengdao', py: 'yfd', lat: '39.08632', lng: '117.14949' },
    { id: 107, name: '一中心医院', pinyin: 'yizhongxinyiyuan', py: 'yzxyy', lat: '39.103473', lng: '117.14949' },
    { id: 108, name: '天拖', pinyin: 'tiantuo', py: 'tt', lat: '39.109801', lng: '117.14949' },
    { id: 109, name: '鞍山西道', pinyin: 'anshanxidao', py: 'asxd', lat: '39.11666', lng: '117.149404' },
    { id: 110, name: '宜宾道', pinyin: 'yibindao', py: 'ybd', lat: '39.126781', lng: '117.149318' },
    { id: 111, name: '人民医院', pinyin: 'renminyiyuan', py: 'rmyy', lat: '39.146521', lng: '117.149576' },
    { id: 112, name: '复兴路', pinyin: 'fuxinglu', py: 'fxl', lat: '39.155773', lng: '117.158433' },
    { id: 113, name: '北竹林', pinyin: 'beizhulin', py: 'bzl', lat: '39.160165', lng: '117.172664' },
    { id: 114, name: '天泰路', pinyin: 'tiantailu', py: 'ttl', lat: '39.168217', lng: '117.183253' },
    { id: 115, name: '外院附中', pinyin: 'waiyuanfuzhong', py: 'wyfz', lat: '39.171295', lng: '117.191815' },
    { id: 116, name: '新开河', pinyin: 'xinkaihe', py: 'xkh', lat: '39.168883', lng: '117.202834' },
    { id: 117, name: '北宁公园', pinyin: 'beininggongyuan', py: 'bngy', lat: '39.166354', lng: '117.224484' },
    { id: 118, name: '民权门', pinyin: 'minquanmen', py: 'mqm', lat: '39.168675', lng: '117.233475' },
    { id: 119, name: '徐庄子', pinyin: 'xuzhuangzi', py: 'xzz', lat: '39.190922', lng: '117.25415' },
    { id: 120, name: '金钟街', pinyin: 'jinzhongjie', py: 'jzj', lat: '39.200026', lng: '117.266756' },
    { id: 121, name: '大毕庄', pinyin: 'dabizhuang', py: 'dbz', lat: '39.203011', lng: '117.27903' },
    { id: 122, name: '南何庄', pinyin: 'nanhezhuang', py: 'nhz', lat: '39.20637', lng: '117.290992' },
    { id: 123, name: '南孙庄', pinyin: 'nansunzhuang', py: 'nsz', lat: '39.206561', lng: '117.318265' },
    { id: 124, name: '大王庄', pinyin: 'dawangzhuang', py: 'dwz', lat: '39.128729', lng: '117.216994' },
    { id: 125, name: '十一经路', pinyin: 'shiyijinglu', py: 'syjl', lat: '39.12118', lng: '117.224109' },
    { id: 126, name: '东兴路', pinyin: 'dongxinglu', py: 'dxl', lat: '39.103856', lng: '117.242335' },
    { id: 127, name: '中山门', pinyin: 'zhongshanmen', py: 'zsm', lat: '39.100959', lng: '117.264222' },
    { id: 128, name: '一号桥', pinyin: 'yihaoqiao', py: 'yhq', lat: '39.096096', lng: '117.282731' },
    { id: 129, name: '二号桥', pinyin: 'erhaoqiao', py: 'ehq', lat: '39.09513', lng: '117.293448' },
    { id: 130, name: '张贵庄', pinyin: 'zhangguizhuang', py: 'zgz', lat: '39.092049', lng: '117.30791' },
    { id: 131, name: '新立', pinyin: 'xinli', py: 'xl', lat: '39.085937', lng: '117.335935' },
    { id: 132, name: '东丽开发区', pinyin: 'donglikaifaqu', py: 'dlkfq', lat: '39.079441', lng: '117.357198' },
    { id: 133, name: '小东庄', pinyin: 'xiaodongzhuang', py: 'xdz', lat: '39.064415', lng: '117.403204' },
    { id: 134, name: '军粮城', pinyin: 'junliangcheng', py: 'jlc', lat: '39.048102', lng: '117.455711' },
    { id: 135, name: '钢管公司', pinyin: 'gangguangongsi', py: 'gggs', lat: '39.03978', lng: '117.503805' },
    { id: 136, name: '胡家园', pinyin: 'hujiayuan', py: 'hjy', lat: '39.040686', lng: '117.60703' },
    { id: 137, name: '塘沽', pinyin: 'tanggu', py: 'tg', lat: '39.029527', lng: '117.661212' },
    { id: 138, name: '泰达', pinyin: 'teda', py: 'td', lat: '39.025493', lng: '117.679537' },
    { id: 139, name: '市民广场', pinyin: 'shiminguangchang', py: 'smgc', lat: '39.018242', lng: '117.703076' },
    { id: 140, name: '太湖路', pinyin: 'taihulu', py: 'thl', lat: '39.019834', lng: '117.723417' },
    { id: 141, name: '会展中心', pinyin: 'huizhanzhongxin', py: 'hzzx', lat: '39.029752', lng: '117.731604' },
    { id: 142, name: '东海路', pinyin: 'donghailu', py: 'dhl', lat: '39.040695', lng: '117.737323' },
    { id: 143, name: '第一大街', pinyin: 'diyidajie', py: 'dydj', lat: '39.029712', lng: '117.679828' },
    { id: 144, name: '第二大街', pinyin: 'dierdajie', py: 'dedj', lat: '39.033275', lng: '117.681082' },
    { id: 145, name: '第三大街', pinyin: 'disandajie', py: 'dsdj', lat: '39.038403', lng: '117.682749' },
    { id: 146, name: '第四大街', pinyin: 'disidajie', py: 'dsdj', lat: '39.046134', lng: '117.685496' },
    { id: 147, name: '第五大街', pinyin: 'diwudajie', py: 'dwdj', lat: '39.050642', lng: '117.687038' },
    { id: 148, name: '第六大街', pinyin: 'diliudajie', py: 'dldj', lat: '39.054605', lng: '117.688408' },
    { id: 149, name: '第七大街', pinyin: 'diqidajie', py: 'dqdj', lat: '39.058261', lng: '117.689685' },
    { id: 150, name: '第九大街', pinyin: 'dijiudajie', py: 'djdj', lat: '39.065614', lng: '117.692834' },
    { id: 151, name: '第十大街', pinyin: 'dishidajie', py: 'dsdj', lat: '39.070138', lng: '117.694771' },
    { id: 152, name: '第十一大街', pinyin: 'dishiyidajie', py: 'dsydj', lat: '39.074804', lng: '117.696739' },
    { id: 153, name: '联合研究院', pinyin: 'lianheyanjiuyuan', py: 'lhyjy', lat: '39.081956', lng: '117.702804' },
    { id: 154, name: '学院区', pinyin: 'xueyuanqu', py: 'xyq', lat: '39.084092', lng: '117.701972' },
    { id: 155, name: '学院区北', pinyin: 'xueyuanqubei', py: 'xyqb', lat: '39.088652', lng: '117.704815' }
  ]
};