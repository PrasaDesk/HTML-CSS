//Parks and Streets

class Park{
    constructor(name, buildYear, area, Notree, city){
        this.Name = name;
        this.buildYear = buildYear;
        this.Area = area + ' sq feet';
        this.TotalTrees = Notree;
        this.City = city
    }

    calculateAge(){
        var now = new Date();
        return (now.getFullYear() - this.buildYear);
    }

    treeDensity(){
        var area = this.Area;
        var area = area.slice(' ');

        return (this.TotalTrees / area[0]);
    }
}

class Street{
    constructor(name, buildYear, lengths, city){
        this.Name = name;
        this.buildYear = buildYear;
        this.Lengths = lengths + ' KM';
        this.City = city
    }
}

var National = new Park('National park', 1950, 10000, 1000, 'berlin');
var Prostate = new Park('Prostate park', 1990, 7000, 650, 'berlin');
var ColSum = new Park('ColSum park', 2001, 3500, 950, 'LA');
var NS = new Park('NatStat park', 2015, 1900, 450, 'LA');
var RS = new Park('RanState park', 1929, 24000, 35060, 'LA');
var CON = new Park('Constate park', 1899, 17000, 1900, 'berlin');
var Tick = new Park('TickTak park', 1850, 9200, 2500, 'berlin');
const Parks = [National, Prostate, ColSum, NS, RS, CON, Tick];

var Streets = [];

Streets.push(new Street('NH3', 1902, 27, 'Nashik'));
Streets.push(new Street('Route69', 1744, 36, 'LA'));
Streets.push(new Street('Route61', 1822, 12, 'LA'));
Streets.push(new Street('NH13', 1994, 9, 'Nashik'));
Streets.push(new Street('SKH34', 1990, 17, 'Nashik'));

var Report = (function(){
   
    var treeDensity1 = (city) => {
        Parks.forEach(cur => {
            if(cur.City === city){
                console.log(`${cur.Name} \t: ${cur.treeDensity()}`);
            }            
        })
    }

    var averageAge1 = (city) => {
        let sum = 0,cnt = 0;
        
        Parks.forEach(cur => {
            if(cur.City === city){
                //console.log(cur.calculateAge());
                sum = sum + parseInt(cur.calculateAge());
                cnt++;                
            }
        });
        console.log(`Average age of town park : ${sum/cnt}`);
    }

    var MoreTree1 = () => {
        Parks.forEach(cur => {
            if(cur.TotalTrees >= 1000){
                console.log(`${cur.Name} (${cur.City}) has ${cur.TotalTrees} Trees.`);
            }
        });
    }

    var StreetReport1 = function (city) { 
        let total = 0, cnt = 0;

        Streets.forEach(cur => {
            if(cur.City === city){
                var len = cur.Lengths;
                var len = len.slice(' ')
                cnt++;
                total =total + parseInt(len[0]);
            }
        })
        console.log(`Total length of Streets in the town is ${total}`);
        console.log(`Avarage length of Streets in the Twon is ${total/cnt}`);
     }

        return {
            treeDensity : treeDensity1,
            averageAge : averageAge1,
            MoreTree : MoreTree1,
            StreetReport : StreetReport1
        }
    })();

    Report.treeDensity('berlin');
    Report.averageAge('berlin');
    Report.MoreTree();
    Report.StreetReport('Nashik');