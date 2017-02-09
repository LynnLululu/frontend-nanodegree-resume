var formattedName = HTMLheaderName.replace("%data%","Lynn Lu");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
