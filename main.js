//const User = require("./models/user");

//const userList = [];

//const u1 = new User();
//const u2 = new User();

//u1.setId(1);
//u1.setName("정은진");
//u1.setEmail("jej@gmail.com");
//u1.setMobile("01012341234");
//u1.setCreatedAt(new Date());

//userList.push(u1);

//u2.setId(2);
//u2.setName("정근모");
//u2.setEmail("jgm@gmail.com");
//u2.setMobile("01012121212");
//u2.setCreatedAt(new Date());

//userList.push(u2);

//userList.map(user => {
    //user.sendEmail(
    //"안녕하세요. 저희는 000 개발 프리랜서 입니다. 어쩌구 저쩌구"
    //);
    //console.log(user.getLastName());
//});

//console.log(userList.length); // 2
//console.log(userList);

//u.toString();

//u.email = "나는 바뀐값이야";

//u.toString();





// board라는 models을 만들고,
// 변수 id, title, content, hit, createdAt으로 한다.
// gemarator(getter setter)를 생성한다.
// addHit 라는 method를 만들고,
// hit가 1씩 증가하는 로직을 작성하세요.

// main에 boardList라는 배열을 만들고
// 임의의 board 인스턴스 3개를 넣으세요.
// 각 인스턴스별 addHit 메소드를 실행하여
// 조회수가 증가하는지 체크하세요.

const Board = require("./models/board");

const boardList = [];

const b1 = new Board();
const b2 = new Board();
const b3 = new Board();

b1.setBId(1);
b1.setTitle("테스트1");
b1.setContent("테스트1");
b1.setHit(0);
b1.setCreatedAt(new Date());

boardList.push(b1);

b2.setBId(2);
b2.setTitle("테스트2");
b2.setContent("테스트2");
b2.setHit(0);
b2.setCreatedAt(new Date());

boardList.push(b2);

b3.setBId(3);
b3.setTitle("테스트3");
b3.setContent("테스트3");
b3.setHit(0);
b3.setCreatedAt(new Date());

boardList.push(b3);

b2.addHit();

//boardList.map(board => {
    //board.addHit();
//})

//console.log(boardList);


// genaric!
// 강제성을 띄고있는 유형 정의!

//const handler = (value) => { // 꼭 어떤 데이터유형이 들어올지 정해주는거!
    // value라는 파라미터를 이용해서 substring, split을 사용한다.
    // String Data Type에서만 사용이 가능하죠!

   // value.substring();
//};

//handler("Hello");
//handler(201);
//handler({
    //one: "정근모",
    //two: "정은진"
//});

//와일드 카드

//function plus() {
    //let value = 0;

    //for(let i in arguments) {
        //value += arguments[i]
    //}

    //console.log(value);
//};

//plus(540, 12);
//plus(211, 645);

//plus(50, 20, 10, 20, 30, 45);
//plus(70, 30, 80, 20, 90, 45);

// 아주중요해요.
// 전개구문

console.log(boardList);