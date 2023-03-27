function display_content(id) {
  let id_list = ["programming", "development", "it-field", "technologies"];
  let s = id + "-content";
  let x = document.getElementById(s);
  if (x.style.display === "none") {
    x.style.display = "block";
    for (let i = 0; i < id_list.length; i++) {
      if (id != id_list[i]) {
        document.getElementById(id_list[i] + "-content").style.display = "none";
      }
    }
  } else {
    x.style.display = "none";
  }
}

// window.alert("This website is not responive for smartphones and tablets for now. The creator will update it ASAP.")