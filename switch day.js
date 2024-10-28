function grtDayofWeek(daynumber){
  let day;
  switch(daynumber){
    case 1:
      day="sunday";
      break;
      case 2:
      day="monday";
      break;
      case 3:
      day="tuesday";
      break;
      case 4:
      day="wednesday";
      break;
      case 5:
      day="thurday";
      break;
      case 6:
      day="friday";
      break;
      case 7:
      day="saturday";
      break;
    default:
      day="invalid day number";
  }
  cosole.log(day);
}
