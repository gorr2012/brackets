module.exports = function check(str, bracketsConfig) {
  let brackets;
	let idx;
	let counter = 0;
	while(str.length > 1){
		for(let i = 0; i < bracketsConfig.length; i++){
      brackets = bracketsConfig[i].join('');
      idx = str.indexOf(brackets);
      if(idx != -1 ){
        let idLetter = idx;
        idx = str.indexOf(brackets, idx + 1);
        str = str.substr(0, idLetter) + str.substr(idLetter + 2);
        idx = str.indexOf(brackets);
        counter = 0
      }else{
        counter++;
      }		
      if(counter > bracketsConfig.length) return false;
		}
	}
  return str.length === 0 ? true : false;
}