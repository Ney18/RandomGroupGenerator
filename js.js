function go() {
    var names = document.getElementById("noms").value;
    var number = document.getElementById("nombres").value;
    
    var name_list = names.split("\n");
    var group = [];
    
    for (var i = 0; i < number; i++) {
      group.push([]);
    }
    
    console.log(name_list);
    
    var size = name_list.length;
    var groupID = 0;
    for(var i= 0; i < size; i++) {
      var rand = Math.floor(Math.random() * name_list.length);
     
      group[groupID].push(name_list[rand]);
      name_list.splice(rand,1);
      
      groupID++;
      if(groupID >= number) {
        groupID = 0;
      }
    }
    
    console.log(group);
    
    var htmlresult = "";
    
    for(var i = 0; i < group.length; i++) {
      htmlresult += "<P> <STRONG> GROUP " + (i+1) + "</strong></p><ol>";
      for(var j = 0; j < group[i].length; j++) {
        htmlresult += "<li>"+ group[i][j]+ "</li>";
      }
      htmlresult += "</ol>";
    }
    
    document.getElementById("result").innerHTML = htmlresult;
    
  }