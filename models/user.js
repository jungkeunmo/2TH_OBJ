class User {

    // 변수의 은닉화
    id;
    name;
    email;
    mobile;
    createdAt;

    // constructur (생성자)
    constructor() {
        console.log("Class User가 생성되었습니다.");
    };

    // method getter setter
    getId() {
        return this.id
    }

    setId(value) {
        this.id = value;
    }

    getName() {
        return this.name;
    }
    
    setName(value) {
        this.name = value;
    }

    getEmail() {
        return this.email;
    }
    
    setEmail(value) {
        this.email = value;
    }

    getMobile() {
        return this.mobile;
    }
    
    setMobile(value) {
        this.mobile = value;
    }

    getCreatedAt() {
        return this.createdAt;
    }
    
    setCreatedAt(value) {
        this.createdAt = value;
    }

    //@overiding <- 기존에 이 함수가 있는거 알거든?
    toString() {
        console.log(`id : ${this.id}`);
        console.log(`name : ${this.name}`);
        console.log(`email : ${this.email}`);
        console.log(`mobile : ${this.mobile}`);
        console.log(`createdAt : ${this.createdAt}`);
    }

    sendEmail(content) {
        // 사실은 이메일 전송하는 코드 개발해야됨
        console.log(this.email);
        console.log(content);
        console.log("이메일 전송이 완료되었습니다.");
    }

    getLastName() {
        return String(this.name).substring(0, 1);
    }
};

module.exports = User;

//const u = new User();