export const toggleMenu = () => async () => {
  document.getElementById("fixedHeaderSection").classList.toggle("menu-open");
  if (document.getElementById("headerSection").style.display === "block") {
    document.getElementById("headerSection").style.display = "none";
  } else {
    document.getElementById("headerSection").style.display = "block";
  }
};
