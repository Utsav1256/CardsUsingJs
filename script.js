const users = [
  {
    name: "Utsav Kumar",
    image:
      "https://images.unsplash.com/photo-1512236393941-3d6da97e56bc?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Stranger",
  },
  {
    name: "Priti Kumari",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Stranger",
  },
  {
    name: "Rohan Kumar",
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Stranger",
  },
];

function print() {
  let clutter = "";
  users.forEach((user, index) => {
    clutter += `<div id="card">
  <div id="img"><img src="${user.image}"></img></div>
  <div id="name">
  <h3>${user.name}</h3>
  </div>
  <div id="description">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, odit!
  </div>
  <div id="${user.status}" class="H${index}">${user.status}</div>
  <button id="${index}">Add Friend</button>
  </div>`;
  });

  document.querySelector("#main").innerHTML = clutter;
}

print();

document.querySelector("#main").addEventListener("click", (details) => {
  users[details.target.id].status = "Friends";
  // document.querySelector("#status").style.color = "green";
  // will nt work because these are not initial elements of DOM

  print();
});
