import TradesImagesDB from "./TradesImagesDB"
import XAUUSD from "./imageData/xauusd.png"
import USDJPY from "./imageData/usdjpy.png"
// Every string of array have    |name,  |date,  |day,   |PF_LS,|timeFrame,|profit,|strtegy,|reason,|src,    |currency,|forex,|forexName,|forexImg|
// Type of value store is string |String |String |String |number|String    |Bolean |String, |String |Imported|String   |Bolean|String    |Imported|   

let TradingDB = [
  // {
  //   name: "",                // This place we use if we win or lose trade in crypto.Only in this condition we enter the crypto symbol such as BTC;
  //   forexName:"",            // This place we use if we win or lose trade in forex. Only in this condition we enter the crypto symbol such as BTC;
  //   forexImg:{},             // If we enter a forex pair trade info we put the forex pair name in symbols such as XAUUSD. Because forex image does not recieved from internet.
  //   date: "",                // On this place we put date of the trade day.
  //   day: "",                 // On this place we put name of the trade day.
  //   riskRewardRatio: "",     // On this place we put the risk reward ratio of the trade.
  //   PF_LS: {},               // On this place we only enter a value in numbers of the profit or lose trade.
  //   timeFrame: "",           // On this place we put the time frame which is used analysis the trade.
  //   profit: {},              // On this place we write a your trade result using bolean propositoin such as true or false.
  //   reason:"",               // On this place we put the trade reason that why you put the trade;
  //   stretegy:"",             // On this place we put the stretegy name which is used in your trade excution process such as smc,ict or VGC
  //   src:{},                  // In src we put your image which is imported from TradesImagesDB.js file.
  //   currency:{},             // In this place we put your currency name which is used to trading.
  //   forex:{},                // The main purposes to make this thing is that in which you trade is forex or no; we reply in the bolean proposition such as trye or false; if you trade in gold write true else false.
  //   serialNumber:{},         //Serial number are used for search to a perticolar trade
  //   tradeAccuracy:"",        // The main putposes to make this container is to show the trade accuracy.        
  //   totalAccountIncrease:"", // Enter the value according to your trade increase your account in percentage.
  // },
  {
    name: "",           // This place we use if we win or lose trade in crypto.Only in this condition we enter the crypto symbol such as BTC;
    forexName: "Gold",       // This place we use if we win or lose trade in forex. Only in this condition we enter the crypto symbol such as BTC;
    forexImg: XAUUSD,        // If we enter a forex pair trade info we put the forex pair name in symbols such as XAUUSD. Because forex image does not recieved from internet.
    date: "20,2,2025",           // On this place we put date of the trade day.
    day: "Thursday",            // On this place we put name of the trade day.
    riskRewardRatio: "5.62",// On this place we put the risk reward ratio of the trade.
    PF_LS: 14.38,          // On this place we only enter a value in numbers of the profit or lose trade.
    timeFrame: "5m",      // On this place we put the time frame which is used analysis the trade.
    profit: false,         // On this place we write a your trade result using bolean propositoin such as true or false.
    reason:"I trade excute before creating a full structure and retest of candle",          // On this place we put the trade reason that why you put the trade;
    stretegy:"GVGC",        // On this place we put the stretegy name which is used in your trade excution process such as smc,ict or VGC
    src:TradesImagesDB.tr4,             // In src we put your image which is imported from TradesImagesDB.js file.
    currency: "USC",        // In this place we put your currency name which is used to trading.
    forex: true,           // The main purposes to make this thing is that in which you trade is forex or no; we reply in the bolean proposition such as trye or false; if you trade in gold write true else false.
    serialNumber: 20254,    //Serial number are used for search to a perticolar trade
    tradeAccuracy:"85%",  // The main putposes to make this container is to show the trade accuracy.
    totalAccountIncrease:"17%", // Enter the value according to your trade increase your account in percentage.
  },
  {
    name: "",           // This place we use if we win or lose trade in crypto.Only in this condition we enter the crypto symbol such as BTC;
    forexName:"Gold",       // This place we use if we win or lose trade in forex. Only in this condition we enter the crypto symbol such as BTC;
    forexImg: XAUUSD,        // If we enter a forex pair trade info we put the forex pair name in symbols such as XAUUSD. Because forex image does not recieved from internet.
    date: "19,2,2025",           // On this place we put date of the trade day.
    day: "Wednesday",            // On this place we put name of the trade day.
    riskRewardRatio: "3.12",// On this place we put the risk reward ratio of the trade.
    PF_LS: 42.45,          // On this place we only enter a value in numbers of the profit or lose trade.
    timeFrame: "5m",      // On this place we put the time frame which is used analysis the trade.
    profit: true,         // On this place we write a your trade result using bolean propositoin such as true or false.
    reason:"New GVGC stretegy structure formed on gold chart",          // On this place we put the trade reason that why you put the trade;
    stretegy:"GVGC",        // On this place we put the stretegy name which is used in your trade excution process such as smc,ict or VGC
    src:TradesImagesDB.tr3,             // In src we put your image which is imported from TradesImagesDB.js file.
    currency:"USC",        // In this place we put your currency name which is used to trading.
    forex:true,           // The main purposes to make this thing is that in which you trade is forex or no; we reply in the bolean proposition such as trye or false; if you trade in gold write true else false.
    serialNumber:20253,    //Serial number are used for search to a perticolar trade
    tradeAccuracy:"80%",  // The main putposes to make this container is to show the trade accuracy.
    totalAccountIncrease:"47%", // Enter the value according to your trade increase your account in percentage.
    },{
    name: "",           // This place we use if we win or lose trade in crypto.Only in this condition we enter the crypto symbol such as BTC;
    forexName:"Gold",       // This place we use if we win or lose trade in forex. Only in this condition we enter the crypto symbol such as BTC;
    forexImg:XAUUSD,        // If we enter a forex pair trade info we put the forex pair name in symbols such as XAUUSD. Because forex image does not recieved from internet.
    date: "7,2,2025",           // On this place we put date of the trade day.
    day: "Friday",            // On this place we put name of the trade day.
    riskRewardRatio: "7.81",// On this place we put the risk reward ratio of the trade.
    PF_LS: 82.45,          // On this place we only enter a value in numbers of the profit or lose trade.
    timeFrame: "5m",      // On this place we put the time frame which is used analysis the trade.
    profit: true,         // On this place we write a your trade result using bolean propositoin such as true or false.
    reason:"In this trade i use new gold stretegy which is called VGC but it have small change in VGC stretegy thus this stretegy is called new Gold stretegy which is represent  by GVGC",          // On this place we put the trade reason that why you put the trade;
    stretegy:"GVGC",        // On this place we put the stretegy name which is used in your trade excution process such as smc,ict or VGC
    src:TradesImagesDB.tr2,             // In src we put your image which is imported from TradesImagesDB.js file.
    currency:"USC",        // In this place we put your currency name which is used to trading.
    forex:true,           // The main purposes to make this thing is that in which you trade is forex or no; we reply in the bolean proposition such as trye or false; if you trade in gold write true else false.
    serialNumber:20252,   //Serial number are used for search to a perticolar trade
    tradeAccuracy:"100%",  // The main putposes to make this container is to show the trade accuracy.
    totalAccountIncrease:"76%", // Enter the value according to your trade increase your account in percentage.
  },
  {
    name: "btc",           // This place we use if we win or lose trade in crypto.Only in this condition we enter the crypto symbol such as BTC;
    forexName:"",       // This place we use if we win or lose trade in forex. Only in this condition we enter the crypto symbol such as BTC;
    forexImg:{},        // If we enter a forex pair trade info we put the forex pair name in symbols such as XAUUSD. Because forex image does not recieved from internet.
    date: "8,2,2025",           // On this place we put date of the trade day.
    day: "Saturday",            // On this place we put name of the trade day.
    riskRewardRatio: "4.02",// On this place we put the risk reward ratio of the trade.
    PF_LS: 51.78,          // On this place we only enter a value in numbers of the profit or lose trade.
    timeFrame: "5m",      // On this place we put the time frame which is used analysis the trade.
    profit: true,         // On this place we write a your trade result using bolean propositoin such as true or false.
    reason:"First i analysis on 15m time frame stretegy work second time VGC stretegy i analysis the 5m time stretegy work.Only it was reason to place a trade.",          // On this place we put the trade reason that why you put the trade;
    stretegy:"VGC",        // On this place we put the stretegy name which is used in your trade excution process such as smc,ict or VGC
    src:TradesImagesDB.tr1,             // In src we put your image which is imported from TradesImagesDB.js file.
    currency:"USC",        // In this place we put your currency name which is used to trading.
    forex:false,           // The main purposes to make this thing is that in which you trade is forex or no; we reply in the bolean proposition such as trye or false; if you trade in gold write true else false.
    serialNumber:20251,   //Serial number are used for search to a perticolar trade
    tradeAccuracy:"97%",  // The main putposes to make this container is to show the trade accuracy.
    totalAccountIncrease:"53%", // Enter the value according to your trade increase your account in percentage.
  } 
]

export default TradingDB