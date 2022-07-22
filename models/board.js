class Board {

    id;
    title;
    content;
    hit;
    createdAt;

    getBId() {
        return this.id;
    }

    setBId(value) {
        this.id = value;
    }

    getTitle() {
        return this.title;
    }
    
    setTitle(value) {
        this.title = value;
    }

    getContent() {
        return this.content;
    }
    
    setContent(value) {
        this.content = value;
    }

    getHit() {
        return this.hit;
    }
    
    setHit(value) {
        this.hit = value;
    }

    getCreatedAt() {
        return this.createdAt;
    }
    
    setCreatedAt(value) {
        this.createdAt = value;
    }

    toString() {
        console.log(`id : ${this.id}`);
        console.log(`title : ${this.title}`);
        console.log(`content : ${this.content}`);
        console.log(`hit : ${this.hit}`);
        console.log(`createdAt : ${this.createdAt}`);
    }

    addHit() {
        this.hit = this.hit  + 1;
    }
}

module.exports = Board;