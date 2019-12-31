export const makeDisplay = (className, disType) =>
{
  var list = document.getElementsByClassName(className);

   for (var i = 0; i < list.length; i++) {
     list[i].style.display = disType;
   }

}

export const openTab = (evt, val, tabContentClass) => {

  makeDisplay (tabContentClass, 'none')
  var tablinks = document.getElementsByClassName(evt.currentTarget.className)
  
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "")
  }
  
  var getId = document.getElementById(val)
  
  if (getId)
    getId.style.display = "block"
  
  evt.currentTarget.className += " active"
}