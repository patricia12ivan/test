class Client{
    constructor(name,sename,age,number){
        this.name = name;
        this.sename = sename;
        this.age = age;
        this.number = number;
   };
   showed(){
       return String(this.name) + " " + String(this.sename)+ " "+ String(this.age)+ " " + String(this.number);
   };
};


function GetInfo(cs){
     let nam= document.getElementById('fname').value;
     let snam= document.getElementById('sname').value;
     let clage= document.getElementById('cage').value;
     let cnum= document.getElementById('cnumber').value;
    
     let cliente= new Client(nam,snam,clage,cnum);
     cs.push(cliente);
    
};

function Show(sc){
    text=" ";
  for (x of cs) {
      text +=x.showed()+ "</br>"
      console.log(x);
      document.getElementById('text').innerHTML = text;
  };
};

var cs = [];