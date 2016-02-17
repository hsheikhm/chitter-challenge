(function(){

  function deletePeep(e) {

    var target, elPeep, elPeepList;
    target = e.target;

    if(target.nodeName.toLowerCase() === 'span'){
      elPeep = target.parentNode.parentNode.parentNode;
      elPeepList = elPeep.parentNode;
      elPeepList.removeChild(elPeep);
    }
  }

  var el = document.getElementById('peeps');
  el.addEventListener('click', function(e){
    deletePeep(e);
  }, false);

}());
