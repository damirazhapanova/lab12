console.log("Hello, World!");

// changed h1 element
let h1_arr = document.getElementsByTagName("h1")
console.log( h1_arr[0] )
let h = h1_arr[0]
h.innerHTML = "Lab12 Assignment"
h.style.color = "blue"

// added hr element
let hr = document.createElement("hr")
console.log(hr)
document.body.appendChild(hr)

// added hr element
let h2 = document.createElement("hr")
h2.innerHTML = "Task"
h2.style.color = "orange"
document.body.appendChild(h2)

let hr3 = document.createElement("hr")

let p = document.createElement("p")
p.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> Javascript. The task will be evaluated on the basis of the following DOM manipulation techniques:"
document.body.appendChild(p)

let ul = document.createElement("ul")

let li1 = document.createElement("li")
li1.innerText = "find elements in the DOM (<b>5 points</b>);"
li1.style.color = "green"
ul1.appendChild(li1)

let li2 = document.createElement("li")
li2.innerText = "create/add/remove elements (<b>5 points</b>);"
li2.style.color = "purple"
ul1.appendChild(li2)

let li3 = document.createElement("li")
li3.innerText = "change content of the elements (<b>5 points</b>);"
li3.style.color = "green"
ul1.appendChild(li3)

let li4 = document.createElement("li")
li4.innerText = " change styles of the elements (<b>5 points</b>);"
li4.style.color = "purple"
ul1.appendChild(li4)

let li5 = document.createElement("li")
li5.innerText = "change attributes of the elements (<b>5 points</b>);"
li5.style.color = "green"
ul1.appendChild(li5)

let li6 = document.createElement("li")
li6.innerText = "change classes of the elements (<b>5 points</b>)."
ul1.appendChild(li6)

let p2 = document.createElement("p")
p2.innerText = " Basic necessary code can be found in the supplementary materials to the Lecture 12 via this"
document.body.appendChild(p2)

let a1 = document.createElement("a")
a1.href = "https://github.com/yessen/nu_web_programming/tree/main/week12"
document.body.appendChild(a1)

let h3 = document.createElement("hr")
h3.innerText = "Submission"
h3.style.color = "red"
document.body.appendChild(h3)

let h4 = document.createElement("hr")
h4.innerText = "To submit your work, follow these instructions:"
document.body.appendChild(h4)

let ul2 = document.createElement("ul")
document.body.appendChild(ul2)

let li7 = document.createElement("li")
li7.innerText = "Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>)."
li7.style.color = "green"
ul1.appendChild(li7)

let li8 = document.createElement("li")
li8.innerText = "Clone this repository to your local machine and work inside it."
li8.style.color = "purple"
ul1.appendChild(li8)

let li9 = document.createElement("li")
li9.innerText = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>)."
li9.style.color = "green"
ul1.appendChild(li9)

let li10 = document.createElement("li")
li10.innerText = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)."
li10.style.color = "purple"
ul1.appendChild(li10)

let li11 = document.createElement("li")
li11.innerText = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
li11.style.color = "green"
ul1.appendChild(li11)

let li12 = document.createElement("li")
li12.innerText = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
li12.style.color = "purple"
ul1.appendChild(li12)

let li13 = document.createElement("li")
li13.innerText = "After you finish your work, submit it to the Github (<b>2 points</b>)."
li13.style.color = "green"
ul1.appendChild(li13)


console.log(hr);








