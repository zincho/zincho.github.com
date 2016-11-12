class Header extends React.Component{
    render(){
        return(
            <div style={{width: "100%", padding: "30px 15px", color: "#cdbfe3", textShadow: "0 1px 0 rgba(0,0,0,.1)", backgroundColor: "royalBlue", backgroundImage: "linear-gradient(to bottom, CornflowerBlue 0, royalBlue 100%)", backgroundRepeat: "repeat-x"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs12">
                            <p style={{color: "#fff", fontSize: "3.7rem"}}>가자 브산으로!</p>
                            <p style={{fontSize: "2rem"}}>초아라와 함께 떠나는 킹갓제네럴 부산여행 <span className="glyphicon glyphicon-plane" aria-hidden="true" style={{color: "hotPink"}}></span></p>
                        </div>
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
            styleC: this.getStyle()
        };

        this.handleClickA = this.handleClickA.bind(this);
        this.handleClickB = this.handleClickB.bind(this);
        //this.handleClickC = this.handleClickC.bind(this);
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
            //styleC: this.getStyle()
        }));

        $("#planB").hide();
        $("#planA").show();
    }

    handleClickB() {
        this.setState(prevState => ({
            styleA: this.getStyle(),
            styleB: this.getStyle(1),
            //styleC: this.getStyle()
        }));

        $("#planA").hide();
        $("#planB").show();
    }

    handleClickC() {
        this.setState(prevState => ({
            styleA: this.getStyle(),
            styleB: this.getStyle(),
            //styleC: this.getStyle(1)
        }));
    }

    render(){
        return(
            <div className="container">
                <div className="row" style={{margin: "30px 0px 10px 0px"}}>
                    <div className="col-xs-12" style={{padding: "0px"}}>
                        <span key="btn_1" className="label label-warning" style={this.state.styleA} onClick={this.handleClickA}>PlanA</span>
                        <span key="btn_2" className="label label-warning" style={this.state.styleB} onClick={this.handleClickB}>PlanB</span>
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
            $('html, body').animate({scrollTop : offset.top}, 100);
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
        $('html, body').animate({scrollTop : offset.top}, 100);
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
                    <p><a href="#" className="btn btn-primary" role="button" onClick={this.handleClick.bind(null, this.props.tableId)}>일정표로 이동</a></p>
                </div>
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
                target: "choryang"
            },
            {
                time: "14:10 ~ 15:10",
                contents: "해운대로 이동",
                target: "haeundae"
            },
            {
                time: "15:10 ~ 15:40",
                contents: "글로리 콘도 짐풀기",
                target: "glorycondo"
            },
            {
                time: "15:40 ~ 16:40",
                contents: "남포동으로 이동 씨앗호떡 먹기",
                target: "nampohodduck"
            },
            {
                time: "16:40 ~ 17:20",
                contents: "부산맹물 보수동 책방거리",
                target: "bookstreet"
            },
            {
                time: "17:20 ~ 18:20",
                contents: "남포동 18번 완당",
                target: "wandang18"
            },
            {
                time: "18:20 ~ 19:40",
                contents: "자갈치 꼼장어 골목",
                target: "jagalchiggom"
            },
            {
                time: "19:40 ~ 21:00",
                contents: "광안리 야경 즐기기",
                target: "gwangan"
            }
        ];
        //<div style={{border: "1px solid #ddd", borderRadius: "4px 4px 4px 4px", padding: "10px", borderTopColor: "HotPink"}}></div>
        return(
            <div className="container" id="planA">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h1 className="panel-title">짐 먼저 푸는 여행</h1>
                            </div>
                            <div className="panel-body">
                                <Table data={tableData} id="tb_planA"/>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <Thumbnail id="choryang" src="image/blog_1.jpg" title="초량밀면" contents="부산 3대밀면 개금밀면,가야밀면,초량밀면 중 초량밀면" link="http://thisweek92.tistory.com/161" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <Thumbnail id="haeundae" src="image/blog_2.jpg" title="해운대" contents="대천해수욕장, 광안리해수욕장, 경포대해수욕장과 함께 대한민국 4대 해수욕장중 하나." link="http://m.blog.naver.com/myfriend116/220858989913" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <Thumbnail id="glorycondo" src="image/blog_3.jpg" title="글로리 콘도" contents="1984년 7월 23일 개관하여 현재까지 운영되고 있다." link="http://train4world.tistory.com/4116" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <Thumbnail id="nampohodduck" src="image/blog_4.jpg" title="씨앗호떡" contents="원조 남포동 씨앗호떡!" link="http://jepisode.com/682" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <Thumbnail id="bookstreet" src="image/blog_5.jpg" title="책방골목" contents="책 냄새나는 보수동 책방골목" link="http://twinkong.tistory.com/236" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <Thumbnail id="wandang18" src="image/blog_6.jpg" title="18번 완당" contents="부산에서만 먹을수 있어" link="http://jejuin.tistory.com/1019" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <Thumbnail id="jagalchiggom" src="image/blog_7.jpg" title="꼼장어 골목" contents="주먹만한 자갈로된 자갈해안이 있어서 자갈치가 되었다." link="http://m.blog.daum.net/annssing/3435034" tableId="tb_planA"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <Thumbnail id="gwangan" src="image/blog_8.jpg" title="광안리 해수욕장" contents="부산을 대표하는 해수욕장이자 여행코스" link="http://m.blog.naver.com/natural8787/220763422779" tableId="tb_planA"/>
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
                time: "13:30 ~ 14:10",
                contents: "초량밀면 냠냠",
                target: "choryang1"
            }
        ];
        return(
            <div className="container" id="planB">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h1 className="panel-title">짐 들고 가는 여행</h1>
                            </div>
                            <div className="panel-body">
                                <Table data={tableData} id="tb_planB"/>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <Thumbnail id="choryang1" src="image/blog_1.jpg" title="초량밀면" contents="부산 3대밀면 개금밀면,가야밀면,초량밀면 중 초량밀면" link="http://thisweek92.tistory.com/161" tableId="tb_planB"/>
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