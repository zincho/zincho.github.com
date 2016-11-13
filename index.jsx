class Header extends React.Component{
    render(){
        return(
            <div style={{width: "100%", padding: "30px 15px", color: "#cdbfe3", textShadow: "0 1px 0 rgba(0,0,0,.1)", backgroundColor: "royalBlue", backgroundImage: "linear-gradient(to bottom, CornflowerBlue 0, royalBlue 100%)", backgroundRepeat: "repeat-x"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs12">
                            <p style={{color: "#fff", fontSize: "3.7rem"}}>가자 브산으로!<span className="glyphicon glyphicon-plane" aria-hidden="true" style={{color: "hotPink"}}></span></p>
                            <p style={{fontSize: "2rem"}}>초아라와 함께 떠나는 킹갓제네럴 부산여행</p>
                        </div>
                        <audio id="audio" controls="" loop="loop">
                            <source src="sound/Always_with_me.mp3" type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
            </div>
        );
    }
}

class Contents extends React.Component{
    render(){
        return(
            <div>
                <Emoji/>
                <PlanButton/>
                <PlanA/>
                <PlanB/>
                <PlanC/>
                <PlanZ/>
            </div>
        );
    }
}

class Emoji extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-6" style={{textAlign: "center"}}>
                        <img src="image/imo_1.gif" className="img-responsive" alt="" />
                    </div>
                    <div className="col-xs-6" style={{textAlign: "center"}}>
                        <img src="image/imo_2.gif" className="img-responsive" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

class PlanButton extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            styleA: this.getStyle(1),
            styleB: this.getStyle(),
            styleC: this.getStyle(),
            styleZ: this.getStyle()
        };

        this.handleClickA = this.handleClickA.bind(this);
        this.handleClickB = this.handleClickB.bind(this);
        this.handleClickC = this.handleClickC.bind(this);
        this.handleClickZ = this.handleClickZ.bind(this);
    }

    getStyle(type){
        var style = {
            fontSize: "20px",
            margin: "0px 5px 0px 0px",
            cursor: "pointer"
        }
        switch (type) {
            case 1:
                style.color = "Black";
                //Object.assign(style, {color: "Black"});
                break;
            default:
                break;
        }

        return style;
    }

    handleClickA() {
        this.setState(prevState => ({
            styleA: this.getStyle(1),
            styleB: this.getStyle(),
            styleC: this.getStyle(),
            styleZ: this.getStyle()
        }));

        $("#planB").hide();
        $("#planC").hide();
        $("#planZ").hide();
        $("#planA").show();
    }

    handleClickB() {
        this.setState(prevState => ({
            styleA: this.getStyle(),
            styleB: this.getStyle(1),
            styleC: this.getStyle(),
            styleZ: this.getStyle()
        }));

        $("#planA").hide();
        $("#planC").hide();
        $("#planZ").hide();
        $("#planB").show();
    }

    handleClickC() {
        this.setState(prevState => ({
            styleA: this.getStyle(),
            styleB: this.getStyle(),
            styleC: this.getStyle(1),
            styleZ: this.getStyle()
        }));

        $("#planA").hide();
        $("#planB").hide();
        $("#planZ").hide();
        $("#planC").show();
    }

    handleClickZ() {
        this.setState(prevState => ({
            styleA: this.getStyle(),
            styleB: this.getStyle(),
            styleC: this.getStyle(),
            styleZ: this.getStyle(1)
        }));

        $("#planA").hide();
        $("#planB").hide();
        $("#planC").hide();
        $("#planZ").show();
    }

    render(){
        return(
            <div className="container">
                <div className="row" style={{margin: "30px 0px 10px 0px"}}>
                    <div className="col-xs-12" style={{padding: "0px"}}>
                        <span key="btn_1" className="label label-warning" style={this.state.styleA} onClick={this.handleClickA}>PlanA</span>
                        <span key="btn_2" className="label label-warning" style={this.state.styleB} onClick={this.handleClickB}>PlanB</span>
                        <span key="btn_3" className="label label-warning" style={this.state.styleC} onClick={this.handleClickC}>PlanC</span>
                        <span key="btn_4" className="label label-warning" style={this.state.styleZ} onClick={this.handleClickZ}>PlanZ</span>
                    </div>
                </div>
            </div>
        );
    }
}

class Table extends React.Component{
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(target){
        var offset = $("#" + target).offset();

        if(offset){
            $('html, body').animate({scrollTop : offset.top}, 500);
        }
    }

    createTbody(){
        return(
            <tbody>
                {
                    this.props.data.map((list, idx) => 
                        <tr key={idx} onClick={this.handleClick.bind(null, list.target)} style={{cursor: "pointer"}}>
                            <td style={{textAlign: "center", verticalAlign: "middle"}}>
                                {list.time}
                            </td>
                            <td style={{verticalAlign: "middle"}}>
                                {list.contents}
                            </td>
                        </tr>
                    )
                }
            </tbody>
        );
    }

    render(){
        return(
            <table className="table table-bordered table-hover" id={this.props.id}>
                <colgroup>
                    <col style={{width: "10%"}}/>
                    <col style={{width: "90%"}}/>
                </colgroup>
                <thead>
                    <tr className="success">
                        <th style={{textAlign: "center"}}>
                            시간
                        </th>
                        <th style={{textAlign: "center"}}>
                            내용
                        </th>
                    </tr>
                </thead>
                {this.createTbody()}
            </table>
        );
    }
}

class Thumbnail extends React.Component{
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(target){
        var offset = $("#" + target).offset();
        $('html, body').animate({scrollTop : offset.top}, 500);
    }

    render(){
        return(
            <div className="thumbnail" style={{borderTopColor: "HotPink"}} id={this.props.id}>
                <img src={this.props.src} alt=""/>
                <div className="caption">
                    <h3 style={{color: "Maroon"}}>{this.props.title}</h3>
                    <p>{this.props.contents}</p>
                    {
                        this.props.link ?
                        <a href={this.props.link} target="_blank"><p style={{whiteSpace: "normal", wordBreak: "break-all"}}>{this.props.link}</p></a>
                        : ""
                    }
                    {
                        this.props.tableId ?
                        <p><a href="#" className="btn btn-primary" role="button" onClick={this.handleClick.bind(null, this.props.tableId)}>일정표로 이동</a></p>
                        : ""
                    }
                </div>
            </div>
        );
    }
}

class ThumbnailList extends React.Component{
    cho(){
        var sId = this.props.id.split("_");
        
        var thum;

        switch (sId[0]) {
            case "choryang":
                thum = <Thumbnail id={this.props.id} src="image/blog_1.jpg" title="초량밀면" contents="부산 3대밀면 개금밀면,가야밀면,초량밀면 중 초량밀면" link="http://thisweek92.tistory.com/161" tableId={this.props.tableId}/>;
                break;
            case "haeundae":
                thum = <Thumbnail id={this.props.id}src="image/blog_2.jpg" title="해운대" contents="대천해수욕장, 광안리해수욕장, 경포대해수욕장과 함께 대한민국 4대 해수욕장중 하나." link="http://blog.naver.com/myfriend116/220858989913" tableId={this.props.tableId}/>;
                break;
            case "glorycondo":
                thum = <Thumbnail id={this.props.id} src="image/blog_3.jpg" title="글로리 콘도" contents="1984년 7월 23일 개관하여 현재까지 운영되고 있다." link="http://train4world.tistory.com/4116" tableId={this.props.tableId}/>
                break;
            case "nampohodduck":
                thum = <Thumbnail id={this.props.id} src="image/blog_4.jpg" title="씨앗호떡" contents="원조 남포동 씨앗호떡!" link="http://jepisode.com/682" tableId={this.props.tableId}/>
                break;
            case "bookstreet":
                thum = <Thumbnail id={this.props.id} src="image/blog_5.jpg" title="책방골목" contents="책 냄새나는 보수동 책방골목" link="http://twinkong.tistory.com/236" tableId={this.props.tableId}/>
                break;
            case "wandang18":
                thum = <Thumbnail id={this.props.id} src="image/blog_6.jpg" title="18번 완당" contents="부산에서만 먹을수 있어" link="http://jejuin.tistory.com/1019" tableId={this.props.tableId}/>
                break;
            case "jagalchiggom":
                thum = <Thumbnail id={this.props.id} src="image/blog_7.jpg" title="꼼장어 골목" contents="주먹만한 자갈로된 자갈해안이 있어서 자갈치가 되었다." link="http://blog.daum.net/annssing/3435034" tableId={this.props.tableId}/>
                break;
            case "gwangan":
                thum = <Thumbnail id={this.props.id} src="image/blog_8.jpg" title="광안리 해수욕장" contents="부산을 대표하는 해수욕장이자 여행코스" link="http://blog.naver.com/natural8787/220763422779" tableId={this.props.tableId}/>
                break;
            case "jungrangak":
                thum = <Thumbnail id={this.props.id} src="image/blog_9.jpg" title="정란각" contents="잊어야 할 것과 잊지 말아야 할 것의 기억" link="http://0572.tistory.com/978" tableId={this.props.tableId}/>
                break;
            case "anago":
                thum = <Thumbnail id={this.props.id} src="image/blog_10.jpg" title="덩굴 아나고" contents="바다장어, 우리말로 붕장어 라고도 한다." link="http://blog.naver.com/dodoti/140197749744" tableId={this.props.tableId}/>
                break;
            case "soonyangho":
                thum = <Thumbnail id={this.props.id} src="image/blog_11.jpg" title="순양호" contents="회센터에 위치한 횟집" link="http://blog.naver.com/mpasdf/220790873757" tableId={this.props.tableId}/>
                break;
            case "eonyangbulgogi":
                thum = <Thumbnail id={this.props.id} src="image/blog_12.jpg" title="부산집" contents="유명한 언양불고기 집" link="http://blog.naver.com/dodoti/140203823894" tableId={this.props.tableId}/>
                break;
            case "conan":
                thum = <Thumbnail id={this.props.id} src="image/blog_13.jpg" title="추리문학관" contents="1992년에 개장한 추리문학관은 국내는 물론 국외에서도 찾아볼 수 없는 유일무이한 추리문학 전문도서관이다." link="http://blog.naver.com/g77775/220821051637" tableId={this.props.tableId}/>
                break;
            case "mipotrain":
                thum = <Thumbnail id={this.props.id} src="image/blog_14.png" title="미포 철길" contents="바다와 만난 기찻길" link="http://blog.naver.com/PostView.nhn?blogId=bbobbo790&logNo=220683151225&parentCategoryNo=&categoryNo=22&viewDate=&isShowPopularPosts=true&from=search" tableId={this.props.tableId}/>
                break;
            case "cowcow":
                thum = <Thumbnail id={this.props.id} src="image/blog_15.jpg" title="소문난 암소갈비" contents="가볍게 베이는 참숯의 향에 색깔만 가벼웁게 변하면 먹으면 되는거 아니겠습니까" link="http://blog.naver.com/dodoti/220411224750" tableId={this.props.tableId}/>
                break;
            case "samjin":
                thum = <Thumbnail id={this.props.id} src="image/blog_16.jpg" title="삼진어묵 베이커리" contents="부산에서 가장 오래된 어묵 제조 가공소" link="http://simjuliana.tistory.com/430" tableId={this.props.tableId}/>
                break;
            case "chowonbokgook":
                thum = <Thumbnail id={this.props.id} src="image/blog_17.jpg" title="초원 복국" contents="초원 복집 사건 '우리가 남이가'" link="http://m.blog.naver.com/mardukas/220449844015" tableId={this.props.tableId}/>
                break;
            case "sunuuuma":
                thum = <Thumbnail id={this.props.id} src="image/blog_18.jpg" title="선어마을" contents="미슐랭 3스타급의 선어회" link="http://blog.naver.com/PostView.nhn?blogId=umjee86&logNo=220577718840" tableId={this.props.tableId}/>
                break;
            case "bifc63":
                thum = <Thumbnail id={this.props.id} src="image/blog_19.jpg" title="BIFC 63빌딩" contents="부산 전경을 한눈에" link="http://blog.naver.com/PostView.nhn?blogId=busanchongkak&logNo=220579614880" tableId={this.props.tableId}/>
                break;
            case "yongdoosan":
                thum = <Thumbnail id={this.props.id} src="image/blog_20.jpg" title="용두산 공원" contents="용두산으로 불리는 언덕이 공원이고, 정상에는 부산타워가 있다." link="http://jsksoft3.tistory.com/266" tableId={this.props.tableId}/>
                break;
            case "haedongyong":
                thum = <Thumbnail id={this.props.id} src="image/blog_21.jpg" title="해동용궁사" contents="해동용궁사는 부산 기장군 시랑리에 있는 절이다. 바다와 가장 가까운 사찰로 대한민국의 관음성지의 하나로 1376년 나옹화상 혜근이 창건한 사찰이다." link="http://fillin.tistory.com/101" tableId={this.props.tableId}/>
                break;
            case "baaapro":
                thum = <Thumbnail id={this.props.id} src="image/blog_22.jpg" title="카페 백프로" contents="1,2층은 원피스 전시! 3층은 플레이모빌, 실바니안 인형 전시! 덕후들아 가자" link="http://blog.busan.go.kr/4310" tableId={this.props.tableId}/>
                break;
            case "moonhwa":
                thum = <Thumbnail id={this.props.id} src="image/blog_23.jpg" title="경성대 문화골목" contents="골목 안에 공연도 보고 그림도 있고 술 마시고 노래도 하네 바람 한 자락에 커피, 와인, 생맥주" link="http://blog.busan.go.kr/3704" tableId={this.props.tableId}/>
                break;
            case "uncemetery":
                thum = <Thumbnail id={this.props.id} src="image/blog_24.jpg" title="유엔기념공원" contents="유엔 기념 공원은 대한민국 부산광역시 남구에 있는 1951년에 만들어진 세계에서 유일한 유엔군 묘지로, 한국전쟁에서 전사한 유엔군 장병 유해가 안장되어 있다." link="http://simjuliana.tistory.com/327" tableId={this.props.tableId}/>
                break;
            case "skylounge":
                thum = <Thumbnail id={this.props.id} src="image/blog_25.jpg" title="롯데백화점 스카이라운지" contents="영도다리가 보이는 절정의 야경" link="http://blog.naver.com/miracle_mc/220398281072" tableId={this.props.tableId}/>
                break;
            case "amibisuk":
                thum = <Thumbnail id={this.props.id} src="image/blog_26.jpg" title="아미비석마을" contents="왜 비석마을인가? 바로 공동묘지가 있었던 장소인데 한국전쟁 때 피난민들이 내려와서 살다보니 땅이 부족하게 되어 산쪽에 판잣집을 만들어서 살게 되었는데 점점 늘어나는 피난민에 의해서 묘지위에도 판자로 만든 집을 짓게 되면서 형성된 곳" link="http://blog.naver.com/tmddlf/220846083264" tableId={this.props.tableId}/>
                break;
            case "gammoon":
                thum = <Thumbnail id={this.props.id} src="image/blog_27.jpg" title="감천문화마을" contents="무지개색의 아름다운 마을" link="http://simjuliana.tistory.com/308" tableId={this.props.tableId}/>
                break;
            case "youngdo":
                thum = <Thumbnail id={this.props.id} src="image/blog_28.jpg" title="영도대교" contents="영도대교는 부산광역시 중구와 영도구를 연결하는 다리이다. 1934년 11월 23일에 길이 약 214.63m, 너비 약 18m로 준공되었다. 개통 당시는 다리 이름이 부산대교였다. 1966년 9월 영도구의 인구증가에 따른 교통량의 증가로 도개를 중단하고 전차궤도도 철거되었다. 1980년 1월 30일 부산대교가 개통되어 영도대교로 이름이 바뀌었다." link="http://simjuliana.tistory.com/1135" tableId={this.props.tableId}/>
                break;
            case "huinyeoul":
                thum = <Thumbnail id={this.props.id} src="image/blog_29.jpg" title="흰여울문화마을" contents="바다와 맞닿은 부산의 산토리니" link="http://toctoccaster.tistory.com/414" tableId={this.props.tableId}/>
                break;
            case "maechugji":
                thum = <Thumbnail id={this.props.id} src="image/blog_30.jpg" title="매축지마을" contents="시간이 잠시 멈춘 마을" link="http://0572.tistory.com/598" tableId={this.props.tableId}/>
                break;
            case "solbat":
                thum = <Thumbnail id={this.props.id} src="image/blog_31.png" title="솔밭예술마을" contents="일제강점기당시 해운대역에서 일하던 노동자들이 천막을 치고 생활하던 곳" link="http://blog.naver.com/buong00/220579807979" tableId={this.props.tableId}/>
                break;
            default:
                break;
        }

        return thum;
    }

    render(){
        return(
            <div>
                {this.cho()}
            </div>
        );
    }

}

class PlanA extends React.Component{
    render(){
        const tableData = [
            {
                time: "13:30 ~ 14:10",
                contents: "초량밀면 냠냠",
                target: "choryang_A"
            },
            {
                time: "14:10 ~ 15:10",
                contents: "해운대로 이동",
                target: "haeundae_A"
            },
            {
                time: "15:10 ~ 15:40",
                contents: "글로리 콘도 짐풀기",
                target: "glorycondo_A"
            },
            {
                time: "15:40 ~ 16:40",
                contents: "남포동으로 이동 씨앗호떡 먹기",
                target: "nampohodduck_A"
            },
            {
                time: "16:40 ~ 17:20",
                contents: "부산맹물 보수동 책방거리",
                target: "bookstreet_A"
            },
            {
                time: "17:20 ~ 18:20",
                contents: "남포동 18번 완당",
                target: "wandang18_A"
            },
            {
                time: "18:20 ~ 19:40",
                contents: "자갈치 꼼장어 골목",
                target: "jagalchiggom_A"
            },
            {
                time: "19:40 ~ 21:00",
                contents: "광안리 야경 즐기기",
                target: "gwangan_A"
            }
        ];
        return(
            <div className="container" id="planA">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h1 className="panel-title">짐 풀고 남포동</h1>
                            </div>
                            <div className="panel-body">
                                <Table data={tableData} id="tb_planA"/>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="choryang_A" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="haeundae_A" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="glorycondo_A" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="nampohodduck_A" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="bookstreet_A" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="wandang18_A" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="jagalchiggom_A" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="gwangan_A" tableId="tb_planA"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class PlanB extends React.Component{
    render(){
        const tableData = [
            {
                time: "13:30 ~ 14:30",
                contents: "초량밀면 냠냠",
                target: "choryang_B"
            },
            {
                time: "14:30 ~ 15:10",
                contents: "정란각에서 따듯한 차 한잔",
                target: "jungrangak_B"
            },
            {
                time: "15:10 ~ 15:40",
                contents: "남포동으로 이동 씨앗호떡 먹기 ",
                target: "nampohodduck_B"
            },
            {
                time: "15:40 ~ 16:20",
                contents: "부산맹물 보수동 책방거리",
                target: "bookstreet_B"
            },
            {
                time: "16:20 ~ 17:20",
                contents: "해운대로 이동",
                target: "haeundae_B"
            },
            {
                time: "17:20 ~ 17:50",
                contents: "글로리 콘도 짐풀기",
                target: "glorycondo_B"
            },
            {
                time: "17:50 ~ 19:10",
                contents: "(Option 1)덩굴 아나고 아냐고",
                target: "anago_B"
            },
            {
                time: "17:50 ~ 19:10",
                contents: "(Option 2)순양호에서 회 한접시 하실래예?",
                target: "soonyangho_B"
            },
            {
                time: "17:50 ~ 19:10",
                contents: "(Option 3)언양 불고기 안먹고 가면 섭섭하쥬?",
                target: "eonyangbulgogi_B"
            },
            {
                time: "19:10 ~ 21:00",
                contents: "광안리 야경 즐기기",
                target: "gwangan_B"
            }
        ];
        return(
            <div className="container" id="planB">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h1 className="panel-title">남포동 갔다 숙소로</h1>
                            </div>
                            <div className="panel-body">
                                <Table data={tableData} id="tb_planB"/>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="choryang_B" tableId="tb_planB"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="jungrangak_B" tableId="tb_planB"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="nampohodduck_B" tableId="tb_planB"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="bookstreet_B" tableId="tb_planB"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="haeundae_B" tableId="tb_planB"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="glorycondo_B" tableId="tb_planB"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="anago_B" tableId="tb_planB"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="soonyangho_B" tableId="tb_planB"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="eonyangbulgogi_B" tableId="tb_planB"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="gwangan_B" tableId="tb_planB"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class PlanC extends React.Component{
    render(){
        const tableData = [
            {
                time: "13:30 ~ 14:30",
                contents: "초량밀면 냠냠",
                target: "choryang_C"
            },
            {
                time: "14:30 ~ 15:10",
                contents: "정란각에서 따듯한 차 한잔",
                target: "jungrangak_C"
            },
            {
                time: "15:10 ~ 16:10",
                contents: "해운대로 이동",
                target: "haeundae_C"
            },
            {
                time: "16:10 ~ 16:40",
                contents: "글로리 콘도 짐풀기",
                target: "glorycondo_C"
            },,
            {
                time: "16:40 ~ 17:40",
                contents: "추리문학관에서 코난 빙의",
                target: "conan_C"
            },,
            {
                time: "17:40 ~ 18:10",
                contents: "미포 기찻길에서 낭만을",
                target: "mipotrain_C"
            },
            {
                time: "18:10 ~ 19:30",
                contents: "(Option 1)순양호에서 회 한접시 하실래예?",
                target: "soonyangho_C"
            },
            {
                time: "18:10 ~ 19:30",
                contents: "(Option 2)소문난 암소갈비 음메~~",
                target: "cowcow_C"
            },
            {
                time: "19:30 ~ 21:00",
                contents: "광안리 야경 즐기기",
                target: "gwangan_C"
            }
        ];
        return(
            <div className="container" id="planC">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h1 className="panel-title">해운대를 즐겨볼까요?</h1>
                            </div>
                            <div className="panel-body">
                                <Table data={tableData} id="tb_planC"/>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="choryang_C" tableId="tb_planC"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="jungrangak_C" tableId="tb_planC"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="haeundae_C" tableId="tb_planC"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="glorycondo_C" tableId="tb_planC"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="conan_C" tableId="tb_planC"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="mipotrain_C" tableId="tb_planC"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="soonyangho_C" tableId="tb_planC"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="cowcow_C" tableId="tb_planC"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="gwangan_C" tableId="tb_planC"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class PlanZ extends React.Component{
    render(){
        return(
            <div className="container" id="planZ">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h1 className="panel-title">부산의 명소를 소개합니다.</h1>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="solbat"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="maechugji"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="huinyeoul"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="youngdo"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="gammoon"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="amibisuk"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="skylounge"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="uncemetery"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="moonhwa"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="baaapro"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="haedongyong"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="yongdoosan"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="bifc63"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="sunuuuma"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="chowonbokgook"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="samjin"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="mipotrain"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="conan"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="jungrangak"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <ThumbnailList id="bookstreet"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends React.Component{
    render(){
        return(
            <div style={{backgroundColor: "Cornsilk"}}>
                <Header/>
                <Contents/>
            </div>
            
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
    () => {
        $("#planB").hide();
        $("#planC").hide();
        $("#planZ").hide();

        var audio = document.getElementById('audio');

        audio.addEventListener('canplay', function() {
            audio.play();
        });

        audio.play();
    }
);

function debug(){
    console.log(this._reactInternalInstance._instance.constructor.name);
    
    tree(this._reactInternalInstance._renderedComponent._renderedChildren, 1)

    function tree(children, depth){
        for(var key in children){
            if(children[key]._instance){
                var name = "";
                
                for(var i = 0; i < depth * 2; i++){
                    name += "-";
                }

                name += children[key]._instance.constructor.name;

                console.log(name);
            }

            if(children[key]._renderedComponent){
                if(children[key]._renderedComponent._renderedChildren){
                    tree(children[key]._renderedComponent._renderedChildren, depth + 1);
                }
            }else if(children[key]._renderedChildren){
                tree(children[key]._renderedChildren, depth + 1);
            }
        }
    }
}