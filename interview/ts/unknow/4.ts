type ButtonType = 'primary' | 'secondary' | 'danger';
function getButtonColor(type: ButtonType):string {
  switch(type) {
    case 'primary':
      return 'blue';
    case 'secondary':
      return 'gray';
    case 'danger':
      return 'red';
    default:
        const _exhaustiveCheck: never = type;
        return _exhaustiveCheck;
  }
}