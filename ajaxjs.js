document.getElementById("btn1").addEventListener('click', loadCustomer);
document.getElementById("btn2").addEventListener('click', loadCustomers);


// Example of loading single customer data from json
function loadCustomer() {
  var xhr = new XMLHttpRequest();
  //open
  xhr.open('GET','customer.json',true);
  
  //Read body
  xhr.onload = function() {
    if(this.status === 200) {
      const customer = JSON.parse(this.responseText);
      console.log(customer);
      const output = `
        <ul>
          <li>Customer ID: ${customer.id}</li>
          <li>Customer Name: ${customer.name}</li>
          <li>Customer Age: ${customer.age}</li>
        </ul>
      `;
      document.getElementById('output').innerHTML= output;
    }
  }
  
  // send
  xhr.send();

}

// Example of loading multiple customers from json

function loadCustomers() {
  var xhr = new XMLHttpRequest();
  console.log('dsds');
  // open 
  xhr.open('GET','customers.json', true);

  //
  xhr.onload = function() {
    if(this.status === 200) {
      console.log('onload');
      // Converting json data into object
      const customers = JSON.parse(this.responseText);
      //
      let output = '';
      // Looping through customers object
      customers.forEach(function(customer){
        output += `
        <ul>
          <li>Customer ID: ${customer.id}</li>
          <li>Customer Name: ${customer.name}</li>
          <li>Customer Age: ${customer.age}</li>
        </ul>
      `;
      }); 
      document.getElementById('customers-output').innerHTML = output;
    }
  }

  xhr.send();

}

