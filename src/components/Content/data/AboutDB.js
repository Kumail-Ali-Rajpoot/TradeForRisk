//Construction to add data;
//------------------------
// Date set = date:___, Day set = day:___, Topic set = topic:___, Paragraph set = paragraph:___,
// if we want to set as a example img we use to set img = exampleImg:___,
//----------------------------------------------------------------------------------------------
import image from "./AboutImgDB";
let AboutDB = [
    
    {
        paragraph:`and under ther "VGC" candles are represent by child candles as shown in figure no 1.3:`,
        topicBolean:false,
        shownInFigure:"",
        exampleImg:"",
        shownInFigureBolean:false,
    },{
        paragraph:`High of wich and low of wick is very important.After see a high and low of wick of candde on live chart.We see a next candle.If a next candle of body closing under the main candle the main candle is reoresented bt "VGC" such as shown in figure no 1.2`,
        topicBolean:false,
        shownInFigure:1.2,
        exampleImg:image.img2,
        shownInFigureBolean:true,

    },{
        date:"",
        day:"",
        topic:"",
        paragraph:`This stretegy working in all the crypto currencies and forex.In this stretegy we need to see a one big candle with wick and  body such as shown in figure no:1.1.`,
        textAlign:"",
        exampleImg:image.img1,
        shownInFigure:1.1,
        topicBolean:false,
        shownInFigureBolean:true,
    },{
        date:"1,11,2024",
        day:"Thursday",
        topic:"VGC",
        paragraph:`The full faom of "VGC" is "Volume Gain Candle" `,
        textAlign: "center",
        exampleImg:"",
        topicBolean: true,
        shownInFigureBolean:false,
    }
]
export default AboutDB