class Post {
    id: number = 0;
    type: number;
    title: string;
    caption: string;
    images: number;

    constructor
        (
            type: number,
            title: string,
            caption: string,
            images: number
        ) {
        this.type = type;
        this.title = title;
        this.caption = caption;
        this.images = images;
    }
}