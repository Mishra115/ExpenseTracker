function myfunc()
{
let expense = document.getElementById("eamount").value;
let description = document.getElementById("edescription").value;
let select = document.getElementById("select").value;

console.log("expense description:", expense,description,select);

let parent = document.getElementById("parentList");
let list = document.createElement("li");

let space1 = document.createTextNode("-");
let space2 = document.createTextNode("-");

let span1 = document.createElement("span")
let span2 = document.createElement("span")
let span3 = document.createElement("span")
let span4 = document.createElement("span")

let span5 = document.createElement("span")

let span1text = document.createTextNode(expense);
let span2text = document.createTextNode(description)
let span3text = document.createTextNode(select)
span1.appendChild(span1text)
span2.appendChild(span2text)
span3.appendChild(span3text)
span4.appendChild(space1)

span5.appendChild(space2)



let edit = document.createElement("button");
let edittextnode = document.createTextNode("Edit")
edit.appendChild(edittextnode)
edit.addEventListener('click', function(event){
  let parent =  edit.parentNode;
  let tags = parent.getElementsByTagName("span");
  document.getElementById("eamount").value = tags[0].innerText;
  document.getElementById("edescription").value = tags[2].innerText;
  document.getElementById("select").value = tags[4].innerText;

  parent.remove();
})

let del = document.createElement("button");
let deltextNode = document.createTextNode("Delete")
del.appendChild(deltextNode)
del.addEventListener('click', function(event){
    let parent = del.parentNode;
    parent.remove();
})
list.appendChild(span1);
list.appendChild(span4);
list.appendChild(span2);
list.appendChild(span5);

list.appendChild(span3);

list.appendChild(edit);
list.appendChild(del);

parent.appendChild(list);
console.log(parent)
}
