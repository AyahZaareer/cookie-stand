'use strict';
 let hour=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
 
 function getRandomNumber(min, max)
 {
   return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
 }
 const seattle= {
   name: 'seattle',
   minCust:23,
   maxCust:65,
   avgCookieSale:1 ,
   cookiesPerHour:[],
   
   total:0,
   getMinCust: function(min,max){
     this.minCust = getRandomNumber(min,max);     
     },
   getMaxCust: function(min,max){
      this.maxCust = getRandomNumber(min,max);
      },
     getCookiesPerHour: function (){ 
         this.cookiesPerHour.push(Math.floor(getRandomNumber(23,65)*6.3));
     },
     render: function()
     { const container = document.getElementById('coc');
     const divEl = document.createElement('div');
     container.appendChild(divEl);
     const h1El = document.createElement('h1');
     divEl.appendChild(h1El);
     h1El.textContent = "Pat's Salmon Cookies: Sales Data";
     const h2El = document.createElement('h2');
     divEl.appendChild(h2El);
     h2El.textContent = this.name;
     const ulEl = document.createElement('ul');
     divEl.appendChild(ulEl);
     for(let i=0; i< hour.length; i++)
     {
       const liEl = document.createElement('li');
       ulEl.appendChild(liEl);
       liEl.textContent = `${hour[i]}: ${this.cookiesPerHour[i]} cookies`;
       this.total+= this.cookiesPerHour[i];
     }
     const liEl = document.createElement('li');
       ulEl.appendChild(liEl);
       liEl.textContent = ` Total: ${this.total}:cookies`;
   }
 };
 for(let i=0; i<hour.length; i++){
 seattle.getMinCust(23,44);
 seattle.getMaxCust(45,65);
 seattle.getCookiesPerHour();
 }
 console.log(seattle);
 console.log(seattle.render());




 const Tokyo = {
  name: 'Tokyo',
  minCust:3,
  maxCust:24,
  avgCookieSale:1 ,
  cookiesPerHour:[],
  
  total:0,
  getMinCust: function(min,max){
    this.minCust = getRandomNumber(min,max);     
    },
  getMaxCust: function(min,max){
     this.maxCust = getRandomNumber(min,max);
     },
    getCookiesPerHour: function (){ 
        this.cookiesPerHour.push(Math.floor(getRandomNumber(3,24)*1.2));
    },
    render: function(){ const container = document.getElementById('coc');
    const divEl = document.createElement('div');
    container.appendChild(divEl);
    
    
    
    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< hour.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hour[i]}: ${this.cookiesPerHour[i]} cookies`;
      this.total+= this.cookiesPerHour[i];
    }
    const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = ` Total: ${this.total}:cookies`;
  }
};
for(let i=0; i<hour.length; i++){
  Tokyo.getMinCust(3,15);
  Tokyo.getMaxCust(15,23);
  Tokyo.getCookiesPerHour();
}
console.log(Tokyo);
console.log(Tokyo.render());




const Dubai = {
  name: 'Dubai',
  minCust:11,
  maxCust:38,
  avgCookieSale:1 ,
  cookiesPerHour:[],
  
  total:0,
  getMinCust: function(min,max){
    this.minCust = getRandomNumber(min,max);     
    },
  getMaxCust: function(min,max){
     this.maxCust = getRandomNumber(min,max);
     },
    getCookiesPerHour: function (){ 
        this.cookiesPerHour.push(Math.floor(getRandomNumber(11,38)*3.7));
    },
    render: function(){ const container = document.getElementById('coc');
    const divEl = document.createElement('div');
    container.appendChild(divEl);
    
    
    
    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< hour.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hour[i]}: ${this.cookiesPerHour[i]} cookies`;
      this.total+= this.cookiesPerHour[i];
    }
    const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = ` Total: ${this.total}:cookies`;
  }
};
for(let i=0; i<hour.length; i++){
  Dubai.getMinCust(11,25);
  Dubai.getMaxCust(25,38);
  Dubai.getCookiesPerHour();
}
console.log(Dubai);
console.log(Dubai.render());  





const Paris= {
  name: 'Paris',
  minCust:20,
  maxCust:38,
  avgCookieSale:1 ,
  cookiesPerHour:[],
  
  total:0,
  getMinCust: function(min,max){
    this.minCust = getRandomNumber(min,max);     
    },
  getMaxCust: function(min,max){
     this.maxCust = getRandomNumber(min,max);
     },
    getCookiesPerHour: function (){ 
        this.cookiesPerHour.push(Math.floor(getRandomNumber(20,38)*2.3));
    },
    render: function()
    { const container = document.getElementById('coc');
    const divEl = document.createElement('div');
    container.appendChild(divEl);
    
    
    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< hour.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hour[i]}: ${this.cookiesPerHour[i]} cookies`;
      this.total+= this.cookiesPerHour[i];
    }
    const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = ` Total: ${this.total}:cookies`;
  }
};
for(let i=0; i<hour.length; i++){
   Paris.getMinCust(20,29);
Paris.getMaxCust(29,38);
Paris.getCookiesPerHour();
}
console.log(Paris);
console.log(Paris.render());
  



const Lima= {
  name: 'Lima',
  minCust:2,
  maxCust:16,
  avgCookieSale:1 ,
  cookiesPerHour:[],
  
  total:0,
  getMinCust: function(min,max){
    this.minCust = getRandomNumber(min,max);     
    },
  getMaxCust: function(min,max){
     this.maxCust = getRandomNumber(min,max);
     },
    getCookiesPerHour: function (){ 
        this.cookiesPerHour.push(Math.floor(getRandomNumber(2,16)*4.6));
    },
    render: function()
    { const container = document.getElementById('coc');
    const divEl = document.createElement('div');
    container.appendChild(divEl);
    
    
    const h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for(let i=0; i< hour.length; i++)
    {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hour[i]}: ${this.cookiesPerHour[i]} cookies`;
      this.total+= this.cookiesPerHour[i];
    }
    const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = ` Total: ${this.total}:cookies`;
  }
};
for(let i=0; i<hour.length; i++){
  Lima.getMinCust(2,9);
   Lima.getMaxCust(9,16);
Lima.getCookiesPerHour();
}
console.log(Lima);
console.log(Lima.render());