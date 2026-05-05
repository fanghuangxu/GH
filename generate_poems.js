function generateHangzhouPoems() {
    const poemPatterns = [
        { first: "西湖{月份}天{景色}，", second: "{地点}{景象}画图中", title: "西湖{月份}即景" },
        { first: "钱塘江潮{气势}，", second: "浙江水{情景}", title: "钱塘江观潮" },
        { first: "灵隐寺中{景象}，", second: "飞来峰下{情景}", title: "游灵隐寺" },
        { first: "苏堤春晓{景象}，", second: "白堤{情景}", title: "西湖春日" },
        { first: "断桥残雪{美景}，", second: "雷锋夕照{景色}", title: "西湖八景" },
        { first: "龙井问茶{韵味}，", second: "虎跑泉{清冽}", title: "杭州茶事" },
        { first: "西溪湿地{生态}，", second: "河渚街{人文}", title: "西溪游" },
        { first: "六和塔上{眺望}，", second: "钱塘江畔{情景}", title: "登六和塔" },
        { first: "孤山梅放{芬芳}，", second: "西泠印社{书香}", title: "孤山访梅" },
        { first: "三潭印月{月光}，", second: "湖心如镜{如画}", title: "三潭夜月" },
        { first: "南屏晚钟{钟声}，", second: "净慈寺{梵音}", title: "南屏夜听" },
        { first: "柳浪闻莺{鸟鸣}，", second: "西湖{春色}", title: "柳浪闻莺" },
        { first: "花港观鱼{鱼游}，", second: "红鱼绿藻{和谐}", title: "花港观鱼" },
        { first: "双峰插云{高耸}，", second: "南北高峰{遥望}", title: "双峰云起" },
        { first: "吴山天风{微风}，", second: "城隍阁{登高}", title: "吴山登高" },
        { first: "满陇桂雨{花香}，", second: "桂子月中{飘落}", title: "满陇赏桂" },
        { first: "九溪烟树{烟霞}，", second: "溪涧{流水}", title: "九溪十八涧" },
        { first: "云栖竹径{幽深}，", second: "竹影{婆娑}", title: "云栖竹径" },
        { first: "黄龙吐翠{翠绿}，", second: "黄龙洞{奇观}", title: "黄龙洞" },
        { first: "玉皇飞云{云层}，", second: "玉皇山{风光}", title: "玉皇山" }
    ];

    const months = ["春", "夏", "秋", "冬", "三", "四", "五", "六", "七", "八", "九", "十", "冬腊"];
    const scenes = ["美如画", "气象新", "景色奇", "风光好", "多胜景", "如画图", "无限好", "皆成趣"];
    const places = ["断桥边", "雷峰下", "苏堤畔", "白堤旁", "西湖中", "孤山顶", "飞来峰", "灵隐寺", "钱塘江", "六和塔"];
    const views = ["景色新", "气象万千", "风光旖旎", "景色宜人", "美不胜收", "如诗如画"];
    const momentum = ["气势磅薄", "涌如雷", "势如千军", "浪卷千堆"];
    const situations = ["景色如画", "风光无限", "美不胜收", "皆成美景"];
    const sceneries = ["香满园", "开遍山", "竞芳菲", "满园春", "花争艳"];
    const beauties = ["雪纷飞", "景如画", "白如玉", "美绝伦"];
    const flavors = ["韵味长", "清而甘", "香满院", "回味长"];
    const cleans = ["甘且冽", "清如玉", "冷而香"];
    const ecologies = ["生态美", "水草丰", "风光好", "景色新"];
    const cultures = ["古韵浓", "风情足", "民俗醇"];
    const lookouts = ["望远方", "眺千里", "观沧海", "看山河"];
    const fragrances = ["香满衣", "扑鼻来", "香袭人", "香满园"];
    const readings = ["墨香浓", "金石音", "印社情"];
    const moonlight = ["映水间", "照湖光", "月如银", "月光寒"];
    const paintings = ["水如天", "似银河", "美如画"];
    const bells = ["送晚钟", "响彻云", "声悠悠", "余音绕"];
    const chants = ["梵音传", "钟声响", "香烛绕", "经声传"];
    const birdsongs = ["声声脆", "鸣枝头", "唤春来", "啼不住"];
    const springscenes = ["花似锦", "春满园", "景色新"];
    const fishs = ["戏清波", "乐悠游", "相追逐", "自在游"];
    const harmonies = ["乐无边", "自悠然", "喜相随", "乐融融"];
    const peaks = ["入云霄", "接青天", "势接天", "高耸立"];
    const distances = ["相对望", "遥相望", "互辉映"];
    const winds = ["拂面来", "清且凉", "送清风", "随风至"];
    const highs = ["望四方", "临绝顶", "高入云"];
    const osmanthus = ["落如雨", "香满堂", "飘满径", "香满衣"];
    const falls = ["落人间", "香满袖", "落纷纷"];
    const mists = ["笼轻烟", "锁烟霞", "绕云雾"];
    const streams = ["水潺潺", "流不尽", "清且澈"];
    const depths = ["景幽深", "通幽处", "路蜿蜒"];
    const shadows = ["影婆娑", "随风舞", "摇清辉"];
    const greens = ["翠欲滴", "满园春", "绿成阴"];
    const wonders = ["奇观现", "景色奇", "如梦境"];
    const clouds = ["云翻飞", "漫天际", "云如海"];
    const landscapes = ["风光好", "景色奇", "美如画"];

    const authors = ["苏轼", "白居易", "杨万里", "林逋", "李白", "宋之问", "张孝祥", "欧阳修", "杜甫", "王安石", "辛弃疾", "李清照", "孟浩然", "王之涣", "柳宗元", "张继", "王勃", "元稹", "李煜", "白朴", "王维", "刘禹锡", "李商隐", "杜牧", "贺知章", "韦应物", "刘长卿", "韩愈", "贾岛", "李贺", "温庭筠", "韦庄", "晏殊", "晏几道", "柳永", "秦观", "黄庭坚", "晁补之", "张耒", "陈师道"];
    const dynasties = ["唐", "宋", "五代", "元", "明", "清"];

    let poems = [];
    let fillOptions = [];
    let titles = [];

    // 生成1000首关于杭州的诗句
    for (let i = 0; i < 1000; i++) {
        const pattern = poemPatterns[Math.floor(Math.random() * poemPatterns.length)];
        const author = authors[Math.floor(Math.random() * authors.length)];
        const dynasty = dynasties[Math.floor(Math.random() * dynasties.length)];
        
        let firstHalf = pattern.first
            .replace("{月份}", months[Math.floor(Math.random() * months.length)])
            .replace("{景色}", scenes[Math.floor(Math.random() * scenes.length)])
            .replace("{气势}", momentum[Math.floor(Math.random() * momentum.length)])
            .replace("{景象}", sceneries[Math.floor(Math.random() * sceneries.length)])
            .replace("{美景}", beauties[Math.floor(Math.random() * beauties.length)])
            .replace("{韵味}", flavors[Math.floor(Math.random() * flavors.length)])
            .replace("{生态}", ecologies[Math.floor(Math.random() * ecologies.length)])
            .replace("{眺望}", lookouts[Math.floor(Math.random() * lookouts.length)])
            .replace("{芬芳}", fragrances[Math.floor(Math.random() * fragrances.length)])
            .replace("{月光}", moonlight[Math.floor(Math.random() * moonlight.length)])
            .replace("{钟声}", bells[Math.floor(Math.random() * bells.length)])
            .replace("{鸟鸣}", birdsongs[Math.floor(Math.random() * birdsongs.length)])
            .replace("{鱼游}", fishs[Math.floor(Math.random() * fishs.length)])
            .replace("{高耸}", peaks[Math.floor(Math.random() * peaks.length)])
            .replace("{微风}", winds[Math.floor(Math.random() * winds.length)])
            .replace("{花香}", osmanthus[Math.floor(Math.random() * osmanthus.length)])
            .replace("{烟霞}", mists[Math.floor(Math.random() * mists.length)])
            .replace("{幽深}", depths[Math.floor(Math.random() * depths.length)])
            .replace("{翠绿}", greens[Math.floor(Math.random() * greens.length)])
            .replace("{云层}", clouds[Math.floor(Math.random() * clouds.length)]);

        let secondHalf = pattern.second
            .replace("{地点}", places[Math.floor(Math.random() * places.length)])
            .replace("{景象}", views[Math.floor(Math.random() * views.length)])
            .replace("{情景}", situations[Math.floor(Math.random() * situations.length)])
            .replace("{清冽}", cleans[Math.floor(Math.random() * cleans.length)])
            .replace("{人文}", cultures[Math.floor(Math.random() * cultures.length)])
            .replace("{书香}", readings[Math.floor(Math.random() * readings.length)])
            .replace("{如画}", paintings[Math.floor(Math.random() * paintings.length)])
            .replace("{梵音}", chants[Math.floor(Math.random() * chants.length)])
            .replace("{春色}", springscenes[Math.floor(Math.random() * springscenes.length)])
            .replace("{和谐}", harmonies[Math.floor(Math.random() * harmonies.length)])
            .replace("{遥望}", distances[Math.floor(Math.random() * distances.length)])
            .replace("{登高}", highs[Math.floor(Math.random() * highs.length)])
            .replace("{飘落}", falls[Math.floor(Math.random() * falls.length)])
            .replace("{流水}", streams[Math.floor(Math.random() * streams.length)])
            .replace("{婆娑}", shadows[Math.floor(Math.random() * shadows.length)])
            .replace("{奇观}", wonders[Math.floor(Math.random() * wonders.length)])
            .replace("{风光}", landscapes[Math.floor(Math.random() * landscapes.length)]);

        let title = pattern.title
            .replace("{月份}", months[Math.floor(Math.random() * months.length)])
            .replace("{地点}", places[Math.floor(Math.random() * places.length)]);

        let content = firstHalf + secondHalf;

        poems.push({
            content: content,
            firstHalf: firstHalf,
            secondHalf: secondHalf,
            author: author,
            title: title,
            dynasty: dynasty
        });

        fillOptions.push(secondHalf);
        if (!titles.includes(title)) {
            titles.push(title);
        }
    }

    // 添加一些经典真实诗句作为补充
    const classicPoems = [
        { content: "水光潋滟晴方好，山色空蒙雨亦奇", firstHalf: "水光潋滟晴方好，", secondHalf: "山色空蒙雨亦奇", author: "苏轼", title: "饮湖上初晴后雨", dynasty: "宋" },
        { content: "欲把西湖比西子，淡妆浓抹总相宜", firstHalf: "欲把西湖比西子，", secondHalf: "淡妆浓抹总相宜", author: "苏轼", title: "饮湖上初晴后雨", dynasty: "宋" },
        { content: "黑云翻墨未遮山，白雨跳珠乱入船", firstHalf: "黑云翻墨未遮山，", secondHalf: "白雨跳珠乱入船", author: "苏轼", title: "望湖楼醉书", dynasty: "宋" },
        { content: "卷地风来忽吹散，望湖楼下水如天", firstHalf: "卷地风来忽吹散，", secondHalf: "望湖楼下水如天", author: "苏轼", title: "望湖楼醉书", dynasty: "宋" },
        { content: "毕竟西湖六月中，风光不与四时同", firstHalf: "毕竟西湖六月中，", secondHalf: "风光不与四时同", author: "杨万里", title: "晓出净慈寺送林子方", dynasty: "宋" },
        { content: "接天莲叶无穷碧，映日荷花别样红", firstHalf: "接天莲叶无穷碧，", secondHalf: "映日荷花别样红", author: "杨万里", title: "晓出净慈寺送林子方", dynasty: "宋" },
        { content: "孤山寺北贾亭西，水面初平云脚低", firstHalf: "孤山寺北贾亭西，", secondHalf: "水面初平云脚低", author: "白居易", title: "钱塘湖春行", dynasty: "唐" },
        { content: "几处早莺争暖树，谁家新燕啄春泥", firstHalf: "几处早莺争暖树，", secondHalf: "谁家新燕啄春泥", author: "白居易", title: "钱塘湖春行", dynasty: "唐" },
        { content: "乱峰围绕水平铺，松排山面千重翠", firstHalf: "乱峰围绕水平铺，", secondHalf: "松排山面千重翠", author: "白居易", title: "春题湖上", dynasty: "唐" },
        { content: "湖上春来似画图，乱峰围绕水平铺", firstHalf: "湖上春来似画图，", secondHalf: "乱峰围绕水平铺", author: "白居易", title: "春题湖上", dynasty: "宋" }
    ];

    classicPoems.forEach(p => {
        poems.unshift(p);
        if (!fillOptions.includes(p.secondHalf)) {
            fillOptions.unshift(p.secondHalf);
        }
        if (!titles.includes(p.title)) {
            titles.unshift(p.title);
        }
    });

    return { poems, fillOptions, titles, authors };
}

// 生成数据并输出
const data = generateHangzhouPoems();
console.log(`// 生成了 ${data.poems.length} 首关于杭州的诗句`);
console.log(`const poems = `, data.poems);
console.log(`const authors = `, data.authors);
console.log(`const fillOptions = `, data.fillOptions);
console.log(`const titles = `, data.titles);