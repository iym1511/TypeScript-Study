// 사용안하는것들 예시 써볼려다가 안지운것

export interface IHttpResp {
    lastBuildDate: string;
    total: number;
    start: number;
    display: number;
    type: string;
    items: INewsData[] | IBookData[];
}

export interface INewsData {
    title: string;
    originallink: string;
    link: string;
    description: string;
    pubDate: string;
}

export interface IBookData {
    title: string;
    link: string;
    image: string;
    author: string;
    price: string;
    discount: string;
    publisher: string;
    pubdate: string;
    isbn: string;
    description: string;
}

// export {
//     IHttpResp,
//     INewsData,
//     IBookData
// }