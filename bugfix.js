
applyFix();

function applyFix()
{

  var fixApplied = document.body.getAttribute('fixApplied') != null;

  // Run once
  if(fixApplied) {
    console.log('already run');
    return;
  }
  
  var pageText = document.body.innerHTML;

  document.body.innerHTML = pageText.replace(
    /\$([\d,]+(?:\.\/\d+)?)/g,
    function (string, c1) {

      return `$${c1} nzd`;

    });

  // Mark as fix applied
  document.body.setAttribute('fixApplied','yes');

}
