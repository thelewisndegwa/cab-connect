import React from "react";

const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

function LogIn() {
  inputs.forEach((input) => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
  });

  return <div>Login Form</div>;
}

export default LogIn;



