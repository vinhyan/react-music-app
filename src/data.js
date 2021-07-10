import { v4 as uuidv4 } from 'uuid';


const musicData = () => {
    return [
        {
            name: "Dreamstate",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/8ef1fa972003495d1ecfba6292116174e9c5d940-1024x1024.jpg",
            artist: "Toonorth",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=17947",
            color: ["#A1ABF9", "#2E435F"], 
            id: uuidv4(), 

        },
        {
            name: "Bliss",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
            artist: "Misha, Jussi Halme",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
            color: ["#F3A19A", "#A89FB2"], 
            id: uuidv4(), 
        },
        {
            name: "On The Moon",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
            artist: "SwuM",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=15237",
            color: ["#263330", "#964F2D"], 
            id: uuidv4(), 
        },
        {
            name: "Vintage",
            cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
            artist: "Evil Needle",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=17088",
            color: ["#EBC77E", "#ED544E"], 
            id: uuidv4(), 
        },
        {
            name: "Lost Soul",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
            artist: "C Y G N",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=14989",
            color: ["#E199DA", "#89ACE8"], 
            id: uuidv4(), 
        },
        {
            name: "Ambleside",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist: "Aarigod",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12999",
            color: ["#B8CE7B", "#495C2E"], 
            id: uuidv4(), 
        },
        {
            name: "1999",
            cover: "https://chillhop.com/wp-content/uploads/2020/05/299ed90790252c3b19e0b5ca350d1cf3a9c30436-1024x1024.jpg",
            artist: "sadtoi",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9454",
            color: ["#C26F40", "#869785"], 
            id: uuidv4(), 
        },
        {
            name: "Hibiscus",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",
            artist: "G Mills, Felty",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8971",
            color: ["#C26F40", "#869785"], 
            id: uuidv4(), 
        }
    ]
}

export default musicData;