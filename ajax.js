
// function ajax(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             var response = JSON.parse(this.responseText);
//             // console.log(response);
//             var Jshop = response.shop;
//             // console.log(Jshop);
//             var output = [] ;
//             tbodyHtml = '';
//             for( var i = 0; i<Jshop.length;i++){
//                 output +='<tr>' ;
//                 output += '<th>' + Jshop[i].slno + '</th>';
//                 output += '<th>' + Jshop[i].name + '</th>';
//                 output += '<th>' + Jshop[i].Quantity + '</th>';
//                 output += '<th>' + Jshop[i].Unit + '</th>';
//                 output += '<th>' + Jshop[i].Department + '</th>';
//                 output += '<th>' + Jshop[i].notes + '</th>';
//                 output +='</tr>' ;

//             }
//         document.getElementById("shopping").innerHTML = output;
//     }
// }
//     xhttp.open("GET","grocery.json", true);
//     xhttp.send();
// }

function ajax(){
     
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'grocery.json', true);
    xhr.onload = function() 
    {
      if (this.status == 200) 
      {
          let data = JSON.parse(this.responseText).shop,
                tbodyHtml = '';
        
        data.map(function(d) {
            tbodyHtml += `
              <tr>
                <th colspan="2">${d.slno}</th>
                <th colspan="2">${d.name}</th>
                <td colspan="2">${d.Quantity}</td>
                <td colspan="2">${d.Unit}</td>
                <td colspan="2">${d.Department}</td>
                <td colspan="2">${d.notes}</td>

            </tr>
         `;
        });
        
        document.querySelector('#shopping_table tbody').innerHTML = tbodyHtml;
      }
    }
    xhr.send();
}

